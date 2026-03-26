async function captureVideoFrame(src) {
    return new Promise((resolve) => {
        const video = document.createElement('video');
        video.src = src;
        video.muted = true;
        video.playsInline = true;
        video.currentTime = 0.1;
        video.addEventListener('seeked', () => {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0);
            resolve(canvas.toDataURL('image/png'));
        }, { once: true });
        video.addEventListener('error', () => resolve(null), { once: true });
        video.load();
    });
}

export function showEndingButton(rootEls, logGroups, imageEntries) {
    const btn = document.createElement("div");
    btn.id = "ending-btn";
    btn.textContent = `See your ending page ↝`;

    btn.addEventListener('click', () => {
        btn.remove();
        triggerEnding(logGroups, imageEntries);
    });

    document.body.appendChild(btn);
}

async function triggerEnding(logGroups, imageEntries) {

    // ── 0. convert video entries to still frames ──────────────────────────────
    for (const group of logGroups) {
        for (const entry of group.entries) {
            if (typeof entry === 'object' && entry.src && !entry.image) {
                entry.image = await captureVideoFrame(entry.src);
            }
        }
    }

    // ── 1. prep folders-container for capture: undim all, hide labels ─────────
    const allNodes = document.querySelectorAll('.folder-node');
    allNodes.forEach(el => {
        el._prevOpacity = el.style.opacity;
        el.style.opacity = '1';
        const glow = el.querySelector('.folder-glow');
        if (glow) glow.style.opacity = '0';
        // swap image nodes to folder icon
        const imgWrap = el.querySelector('.node-image-wrap');
        if (imgWrap) {
            imgWrap.style.display = 'none';
            const icon = document.createElement('div');
            icon.className = 'folder-icon _temp-icon';
            const iconImg = document.createElement('img');
            iconImg.src = 'assets/folder-low-res.png';
            icon.appendChild(iconImg);
            el.querySelector('.folder-inner').prepend(icon);
        }
    });
    const allLabels = document.querySelectorAll('.folder-label');
    allLabels.forEach(lbl => lbl.style.visibility = 'hidden');

    // ── 2. capture folders-container ─────────────────────────────────────────
    const foldersEl = document.getElementById('folders-container');
    let bgDataUrl = null;
    if (window.html2canvas && foldersEl) {
        try {
            const bgCanvas = await html2canvas(foldersEl, {
                backgroundColor: null,
                useCORS: true,
                scale: 2,
            });
            bgDataUrl = bgCanvas.toDataURL('image/png');
        } catch(e) { console.warn('html2canvas folders:', e); }
    }

    // ── 3. restore folder nodes + labels ─────────────────────────────────────
    allNodes.forEach(el => {
        el.style.opacity = el._prevOpacity || '';
        const imgWrap = el.querySelector('.node-image-wrap');
        if (imgWrap) imgWrap.style.display = '';
        el.querySelectorAll('._temp-icon').forEach(i => i.remove());
    });
    allLabels.forEach(lbl => lbl.style.visibility = '');

    // ── 4. capture figure ─────────────────────────────────────────────────────
    const figureEl = document.getElementById('figure-container');
    let figureDataUrl = null;
    if (window.html2canvas && figureEl) {
        try {
            const c = await html2canvas(figureEl, { backgroundColor: null, useCORS: true, scale: 2 });
            figureDataUrl = c.toDataURL('image/png');
        } catch(e) { console.warn('html2canvas figure:', e); }
    }

    // ── 5. hide stage+logs ────────────────────────────────────────────────────
    document.getElementById('stage').style.display = 'none';
    document.getElementById('logs-panel').style.display = 'none';

    // ── 6. replace logs btn with download ────────────────────────────────────
    const dlBtn = document.getElementById('logs-btn');
    dlBtn.textContent = 'download in pdf';
    dlBtn.classList.remove('active');

    // ── 7. viewport wrapper ───────────────────────────────────────────────────
    const wrap = document.createElement('div');
    wrap.style.cssText = `
        position: fixed;
        top: 32px; left: 0; right: 0; bottom: 0;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    document.body.appendChild(wrap);

    // ── 8. poster — letter size ratio ─────────────────────────────────────────
    const vw = window.innerWidth - 48;
    const vh = window.innerHeight - 32 - 48;
    const RATIO = 8.5 / 11;
    let pw, ph;
    if (vw / vh < RATIO) { pw = vw; ph = vw / RATIO; }
    else { ph = vh; pw = vh * RATIO; }

    const poster = document.createElement('div');
    poster.id = 'poster';
    poster.style.cssText = `
        position: relative;
        width: ${pw}px;
        height: ${ph}px;
        background: white;
        box-shadow: 0 4px 24px rgba(0,0,0,0.12);
        overflow: hidden;
        flex-shrink: 0;
        padding: 0px;
        box-sizing: border-box;
    `;
    wrap.appendChild(poster);

    const scale = pw / 816;

    // ── 9. folders capture — centered, full width, aspect-ratio preserved ─────
    if (bgDataUrl) {
        const bg = document.createElement('img');
        bg.src = bgDataUrl;
        bg.style.cssText = `
            position: absolute;
            left: 0;
            width: 100%;
            height: auto;
            top: 50%;
            transform: translateY(-50%);
            pointer-events: none;
            z-index: 1;
            opacity: 0.4;
        `;
        poster.appendChild(bg);
    }

    // ── 10. figure centered ───────────────────────────────────────────────────
    if (figureDataUrl) {
        const fig = document.createElement('img');
        fig.src = figureDataUrl;
        fig.style.cssText = `
            position: absolute;
            left: 50%;
            top: 52%;
            transform: translate(-50%, -50%);
            height: 68%;
            object-fit: contain;
            pointer-events: none;
            z-index: 2;
        `;
        poster.appendChild(fig);
    }

    // ── 11. text layout — flex space-between ─────────────────────────────────
    const PAD     = pw * 0.01;
    const FSIZE   = Math.max(11, Math.round(24 * scale));
    const LHEIGHT = FSIZE * 1.5;
    const COLW    = pw - PAD * 2;
    const rand    = (a, b) => Math.random() * (b - a) + a;

    const shuffled = [...logGroups].sort(() => Math.random() - 0.5);

    const textLayer = document.createElement('div');
    textLayer.style.cssText = `
        position: absolute;
        top: ${PAD}px;
        left: ${PAD}px;
        right: ${PAD}px;
        bottom: ${PAD}px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        z-index: 4;
        pointer-events: none;
    `;
    poster.appendChild(textLayer);

    shuffled.forEach((group) => {
        if (!group.entries || !group.entries.length) return;

        const block = document.createElement('div');
        block.style.cssText = `
            font-family: "Inter", sans-serif;
            font-size: ${FSIZE}px;
            font-weight: 300;
            color: #000;
            line-height: ${LHEIGHT}px;
            white-space: normal;
            word-break: break-word;
            pointer-events: none;
            text-align: justify;
            text-align-last: justify;
            text-shadow: 0 1px 8px rgba(255,255,255,0.9), 0 0px 2px rgba(255,255,255,1);
        `;

        group.entries.forEach((entry, idx) => {
            const text = typeof entry === 'object' ? entry.text : entry;
            const img  = typeof entry === 'object' ? entry.image : null;

            if (idx === 0) {
                const lbl = document.createElement('span');
                lbl.textContent = text + '  ';
                lbl.style.fontWeight = '500';
                block.appendChild(lbl);
                return;
            }

            if (img) {
                const imgEl = document.createElement('img');
                imgEl.src = img;
                imgEl.style.cssText = `
                    display: inline-block;
                    vertical-align: bottom;
                    width: auto;
                    height: ${Math.round(FSIZE * rand(2.5, 3.5))}px;
                    object-fit: cover;
                    margin: 0 3px;
                    opacity: 0.9;
                    image-rendering: pixelated;
                    border: 0.35px black solid;
                `;
                block.appendChild(imgEl);
            }

            const span = document.createElement('span');
            span.textContent = text + '  ';
            block.appendChild(span);
        });

        textLayer.appendChild(block);
    });

    // ── 12. print / pdf ───────────────────────────────────────────────────────
    dlBtn.addEventListener('click', () => {
        const win = window.open('', '_blank');
        const printScale = 816 / pw;
        win.document.write(`<!DOCTYPE html><html><head>
            <style>
                @page { size: letter portrait; margin: 0; }
                body  { margin: 0; padding: 0; width: 8.5in; height: 11in; overflow: hidden; }
                #poster { transform: scale(${printScale}); transform-origin: top left; }
            </style>
        </head><body>${poster.outerHTML}</body></html>`);
        win.document.close();
        win.focus();
        setTimeout(() => { win.print(); win.close(); }, 600);
    });
}