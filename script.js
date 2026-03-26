import {folders, BADGE_PATH} from './contents/content.js';
import { showEndingButton } from './ending.js';

let activeRootId = null;
let activeGlow = null;
let activeSection = null;
let shownBadges = new Set();
let logsVisible = true;

// logs
const logGroups = [];
let currentGroup = null;
const imageEntries = [];

const logsPanel = document.getElementById("logs-panel");
const logsBtn = document.getElementById("logs-btn");
logsBtn.classList.add('active');

logsBtn.addEventListener("click", () => {
    logsVisible = !logsVisible;
    logsPanel.classList.toggle('hidden', !logsVisible);
    logsBtn.classList.toggle('active', logsVisible);
})

function addLog(text, imageSrc = null, videoSrc = null) {
    if (currentGroup) currentGroup.entries.push({ text, image: imageSrc, src: videoSrc });

    const entry = document.createElement('span');
    entry.className = "log";
    entry.textContent = text;
    logsPanel.appendChild(entry);
    logsPanel.scrollTop = logsPanel.scrollHeight;
}

// helpers
function makeDraggable(el) {
    let isDragging = false;
    let startX, startY, origLeft, origTop;

    el.addEventListener('mousedown', (e) => {
        if (e.target.tagName === 'INPUT') return;

        const rect          = el.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        startX   = e.clientX;
        startY   = e.clientY;
        origLeft = rect.left - containerRect.left;
        origTop  = rect.top  - containerRect.top;

        el.style.left = origLeft + 'px';
        el.style.top  = origTop  + 'px';

        isDragging = true;
        el.dataset.dragged = 'false';

        e.stopPropagation();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;

        if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
            el.dataset.dragged = 'true';
            el.classList.add('dragging');
        }

        if (el.dataset.dragged === 'true') {
            el.style.left = (origLeft + dx) + 'px';
            el.style.top  = (origTop  + dy) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        el.classList.remove('dragging');
    });
}

function seededRand(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = Math.imul(31, h) + str.charCodeAt(i) | 0;
    return ((h >>> 0) / 0xffffffff);
}
 
function scatterPositions(parentEl, children) {
    const stageW = window.innerWidth;
    const stageH = window.innerHeight - 32;
    const rect   = parentEl.getBoundingClientRect();
 
    const parentX = (rect.left + rect.width / 2) / stageW;
    const parentY = (rect.top  - 32 + rect.height) / stageH;

    let clusterX, clusterY;
    let attempts = 0;
    do {
        clusterX = 0.08 + Math.random() * 0.80;
        clusterY = 0.12 + Math.random() * 0.72;
        attempts++;
    } while (
        attempts < 20 &&
        Math.abs(clusterX - parentX) < 0.15 &&
        Math.abs(clusterY - parentY) < 0.15
    );
 
    const FOLDER_W = 0.12; // gap between nest folders
    const FOLDER_H = 0.12; // jitter
 
    const count = children.length;

    const totalW = count * FOLDER_W;
    const startX = clusterX - totalW / 2;
 
    return children.map((child, i) => {
        let x = startX + i * FOLDER_W + (Math.random() - 0.5) * 0.04;
        let y = clusterY + (Math.random() - 0.5) * FOLDER_H;
 
        x = Math.max(0.02, Math.min(0.88, x));
        y = Math.max(0.08, Math.min(0.88, y));
 
        return { left: `${(x * 100).toFixed(1)}%`, top: `${(y * 100).toFixed(1)}%` };
    });
}

// making folder node
function makeFolderEl(data, isRoot, glowColor) {
    const el = document.createElement("div");
    el.className = "folder-node " + (isRoot ? 'root-folder' : 'sub-folder');
    el.dataset.id = data.id;
    el.dataset.dragged = 'false';
    if(data.done) el.classList.add('done-node');

    // glow
    const inner = document.createElement('div');
    inner.className = 'folder-inner';

    const glow = document.createElement("div");
    glow.className = 'folder-glow';
    glow.style.background =  'rgba(151,184,201,1)';
    inner.appendChild(glow);

    if (data.image || data.type === 'video') {
        el.classList.add('image-node');
        const imgWrap = document.createElement("div");
        imgWrap.className = 'node-image-wrap';

        if (data.type === 'video') {
            const video = document.createElement('video');
            video.src = data.src;
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            video.className = 'node-image';
            imgWrap.appendChild(video);
        } else {
            const nodeImg = document.createElement('img');
            nodeImg.src = data.image;
            nodeImg.alt = data.label || '';
            nodeImg.className = 'node-image';
            nodeImg.onerror = () => {
                nodeImg.src = 'assets/folder-low-res.png';
                nodeImg.className = 'folder-icon';
            };
            imgWrap.appendChild(nodeImg);
            imageEntries.push(data.image);
        }

        inner.appendChild(imgWrap);
    } else {
        const icon = document.createElement('div');
        icon.className = 'folder-icon';
        const iconImg = document.createElement("img");
        iconImg.src = 'assets/folder-low-res.png';
        iconImg.alt = "folder";
        icon.appendChild(iconImg);
        inner.appendChild(icon);
    }

    if(data.label) {
        const lbl = document.createElement('div');
        lbl.className = 'folder-label';
        lbl.textContent = data.label;
        inner.appendChild(lbl);
    }

    el.appendChild(inner);
    return el;
}

// root folders
const container = document.getElementById('folders-container');
const rootEls = {};

folders.forEach(folder => {
    const el = makeFolderEl(folder, true, folder.glowColor);
    el.style.top = folder.position.top;
    el.style.left = folder.position.left;
    el.style.pointerEvents = 'auto'
    container.appendChild(el);
    rootEls[folder.id] = el;

    makeDraggable(el);

    el.addEventListener('click', () => {
        if (el.dataset.dragged === 'true') { el.dataset.dragged = 'false'; return;}
        if (activeRootId !== null) return;
        if (el.classList.contains('dimmed')) return;
        if (el.dataset.completed === 'true') return;
        openSection(folder, el);
    });
});

// section open & close
function openSection(folder, rootEl) {
    activeRootId = folder.id;
    activeGlow = folder.glowColor;
    activeSection = folder.label;

    currentGroup = { rootLabel: folder.label, entries: [] };
    logGroups.push(currentGroup);

    addLog(folder.label, null);

    Object.values(rootEls).forEach(el => {
        if(el === rootEl) return;
        el.classList.add('dimmed');
        el.style.pointerEvents = 'none';
    });

    rootEl.classList.add('active-root');
    rootEl.style.pointerEvents = 'none';

    renderChildren(folder.children, rootEl);
}

// render children
function renderChildren(children, parentEl) {
    if(!children || children.length === 0) return;

    const positions = scatterPositions(parentEl, children);

    children.forEach((child, i) => {
        const el = makeFolderEl(child, false, activeGlow);
        el.style.left = positions[i].left;
        el.style.top = positions[i].top;
        el.style.pointerEvents = 'auto';
        el.dataset.group = child.id.split('--')[0] + '--' + (parentEl.dataset.id || 'root');

        el.classList.add('entering');
        container.appendChild(el);
        requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('entering')));

        makeDraggable(el);

        el.addEventListener('click', () => {
            if(el.dataset.dragged === 'true') { el.dataset.dragged = 'false'; return; }
            if(el.classList.contains('selected') || el.classList.contains('unselected')) return;

            if (child.url) {
                window.open(child.url, '_blank');
                handleDoneClick(child, el);
                addLog(data.label, null);
                return;
            }

            if(child.done) {
                handleDoneClick(child, el);
            } else {
                handleSubClick(child, el);
            }
        });
    });
}

// subclick 
function handleSubClick(data, clickedEl) {
    addLog(data.label, data.image || null, data.src || null);

    const group = clickedEl.dataset.group;
    document.querySelectorAll(`.sub-folder[data-group="${group}"]`).forEach(el => {
        if(el !== clickedEl) {
            el.classList.add('unselected');
            el.style.pointerEvents = 'none';
        }
    });

    clickedEl.classList.add('selected');
    clickedEl.style.pointerEvents = 'none';

    if(data.children && data.children.length > 0) {
        renderChildren(data.children, clickedEl);
    }
}

// done click

function handleDoneClick(data, clickedEl) {
    addLog(data.label, data.image || null, data.src || null);

    if(!shownBadges.has(data.id)) {
        shownBadges.add(data.id);
        const badgeLayer = document.getElementById('badge-layer');
        if(badgeLayer) {
            const img = document.createElement('img');
            img.src = BADGE_PATH + data.badge;
            img.alt = data.id;
            img.onerror = () => img.remove();
            badgeLayer.appendChild(img);
            requestAnimationFrame(() => requestAnimationFrame(() => img.classList.add('visible')));
        }
    }

    const completedRootId = activeRootId;

    document.querySelectorAll('.sub-folder').forEach(el => {
        el.classList.add('unselected');
        el.classList.remove('selected');
        el.style.pointerEvents = 'none';
        el.style.zIndex = '1';
    });
    
    Object.values(rootEls).forEach(el => {
        if (el.dataset.completed === 'true') return;
        el.classList.remove('dimmed', 'active-root');
        el.style.pointerEvents = 'auto';
    });

    const completedRootEl = rootEls[completedRootId];
    if(completedRootEl) {
        completedRootEl.dataset.completed = 'true';
        completedRootEl.classList.add('dimmed');
        completedRootEl.style.pointerEvents = 'none';
    }

    activeRootId = null;
    activeGlow = null;
    activeSection = null;
    currentGroup = null;

    const allDone = Object.values(rootEls).every(el => el.classList.contains('dimmed'));
    if (allDone) showEndingButton(rootEls, logGroups, imageEntries);
}