// content.js
// ─────────────────────────────────────────────────────────────────────────────
// LOVE(♡) → INDEPENDENCE(♥)  —  folder & content data
// ─────────────────────────────────────────────────────────────────────────────

export const folders = [

  // ── WE FIGHT ───────────────────────────────────────────────────────────────
  {
    id: "we-fight",
    label: "We fight",
    color: "#e57373",
    glowColor: "rgba(229, 115, 115, 0.8)",
    position: { top: "8%", left: "4%" },
    children: [

      {
        id: "we-fight--hurtful-things",
        label: "and we said some hurtful things to each other.",
        children: [
          {
            id: "we-fight--regrets",
            label: "Regrets come after.",
            children: [
              {
                id: "we-fight--even-if",
                label: "Even if we fight,",
                children: [
                  {
                    id: "we-fight--dont-hate",
                    label: "Doesn't mean that I hate my mom and dad, right?",
                    children: [
                      {
                        id: "we-fight--then-why",
                        label: "Then why?",
                        children: [
                          {
                            id: "we-fight--emotions",
                            label: "Sometimes our emotions come out in a way of anger or annoyance, but it's really",
                            children: [
                              { id: "we-fight--worry",   label: "worry.",   done: true, badge: "we-fight-emotions.png" },
                              { id: "we-fight--empathy", label: "empathy.", done: true, badge: "we-fight-emotions.png" },
                              { id: "we-fight--sorry",   label: "sorry.",   done: true, badge: "we-fight-emotions.png" },
                              { id: "we-fight--care",    label: "care.",    done: true, badge: "we-fight-emotions.png" },
                              { id: "we-fight--sadness", label: "sadness.", done: true, badge: "we-fight-emotions.png" }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "we-fight--why-harder-sorry",
                label: "Why is it so much harder to say sorry now?",
                children: [
                  {
                    id: "we-fight--back-then",
                    label: "Back then, I would do something wrong,",
                    children: [
                      {
                        id: "we-fight--cocoa-powder",
                        label: "like in this case, I snuck cocoa powder from the pantry and went to town with it.",
                        image: "assets/images/cocoa-powder.jpg",
                        children: [
                          {
                            id: "we-fight--cocoa-powder-sorry",
                            label: "Then I would get into trouble, and cry sorry.",
                            image: "assets/images/cocoa-powder-sorry.jpg",
                            children: [
                              {
                                id: "we-fight--now-complicated",
                                label: "But now it's all complicated.",
                                children: [
                                  { id: "we-fight--words-dont-come",  label: "My words just doesn't come out on its own to say sorry.", done: true, badge: "we-fight-sorry.png" },
                                  {
                                    id: "we-fight--letter-of-apology",
                                    label: "I need to write down.",
                                    image: "assets/images/letter-of-apology.jpg",
                                    children: [
                                      { id: "we-fight--what-wrong",  label: "What I have done wrong.",                             done: true, badge: "we-fight-sorry.png" },
                                      { id: "we-fight--how-wrong",   label: "How is that wrong.",                                  done: true, badge: "we-fight-sorry.png" },
                                      { id: "we-fight--prevent",     label: "What will I do to prevent same behavior to repeat.",   done: true, badge: "we-fight-sorry.png" },
                                      { id: "we-fight--truly-sorry", label: "That I am truly sorry.",                              done: true, badge: "we-fight-sorry.png" }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        id: "we-fight--silent-dinners",
        label: "and there are silent dinners.",
        children: [
          {
            id: "we-fight--mom-cooks",
            label: "Why does mom still cooks dinner after fights?",
            image: "assets/images/mom-cooks.jpg",
            children: [
              { id: "we-fight--mom-cooks-a", label: "She's probably still mad at me.",                                        image: "assets/images/mom-cooks-a.jpg", done: true, badge: "silent-dinners.png" },
              { id: "we-fight--mom-cooks-b", label: "Did she just give up on me and doesn't want to talk to me from now on?", image: "assets/images/mom-cooks-b.jpg", done: true, badge: "silent-dinners.png" },
              { id: "we-fight--mom-cooks-c", label: "It still tastes good.",                                                  image: "assets/images/mom-cooks-c.jpg", done: true, badge: "silent-dinners.png" },
              { id: "we-fight--mom-cooks-d", label: "Should I say sorry to her.",                                             image: "assets/images/mom-cooks-d.png", done: true, badge: "we-fight-sorry.png"   }
            ]
          },
          {
            id: "we-fight--no-one-talks",
            label: "No one talks.",
            children: [
              {
                id: "we-fight--thing-they-want",
                label: "thing they want to say,",
                children: [
                  {
                    id: "we-fight--extension",
                    label: "because once it's on, family dinner becomes an extension of earlier fights, and no one wants that.",
                    children: [
                      { id: "we-fight--most-valued", label: "Family dinner is the most valued, loved, and promised time for our family, no one gets to ruin it.", done: true, badge: "silent-dinners.png" }
                    ]
                  }
                ]
              },
              {
                id: "we-fight--out-loud",
                label: "out loud,",
                children: [
                  {
                    id: "we-fight--thoughts-floating",
                    label: "but so many thoughts floating on everyone's head.",
                    children: [
                      { id: "we-fight--get-out",    label: "\"I just want to get out of here.\"",  done: true, badge: "silent-dinners.png" },
                      { id: "we-fight--what-said",  label: "\"What did they say to me earlier?\"", done: true, badge: "silent-dinners.png" },
                      { id: "we-fight--why-i-said", label: "\"Why did I say that?\"",              done: true, badge: "silent-dinners.png" },
                      { id: "we-fight--face-red",   label: "\"My face is red.\"",                  done: true, badge: "silent-dinners.png" }
                    ]
                  },
                  {
                    id: "we-fight--side-dishes",
                    label: "just side dishes slowly disappearing from the plates.",
                    children: [
                      { id: "we-fight--no-shared-soup", label: "No one touches the shared soup.",          done: true, badge: "silent-dinners.png" },
                      {
                        id: "we-fight--sound-of-chewing",
                        label: "You can even hear the sound of chewing,",
                        children: [
                          { id: "we-fight--chapsticks",  label: "and chapsticks clashing.",               done: true, badge: "silent-dinners.png" },
                          { id: "we-fight--spoons",      label: "and putting down spoons on the table.",  done: true, badge: "silent-dinners.png" },
                          { id: "we-fight--soup-bubble", label: "and more soup bubbling in the kitchen.", done: true, badge: "silent-dinners.png" },
                          { id: "we-fight--swallowing",  label: "and swallowing.",                        done: true, badge: "silent-dinners.png" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "we-fight--went-out",
            label: "We went out for dinner to have,",
            children: [
              {
                id: "we-fight--kbbq",
                label: "K-bbq.",
                children: [
                  {
                    id: "we-fight--kbbq-routine",
                    label: "Some people might think \"really? K-bbq\" after a fight?, but K-bbq almost every Saturday is sort of a routine to our family,",
                    children: [
                      { id: "we-fight--routines-win", label: "and some routines win occasional fights.", done: true, badge: "eat-out.png" },
                      {
                        id: "we-fight--kbbq-crucial",
                        label: "it is the most crucial thing.",
                        children: [
                          {
                            id: "we-fight--kbbq-new-town",
                            label: "When we move to a new town, our top priority is to find a good K-bbq restaurant ASAP.",
                            children: [
                              {
                                id: "we-fight--kbbq-weve-went",
                                label: "We've went through,",
                                children: [
                                  { id: "we-fight--jipbul",    label: "짚불 삼겹살.",  url: "https://maps.app.goo.gl/rZnyrxGga7wSHnY36", done: true, badge: "eat-out.png" },
                                  { id: "we-fight--guiga",     label: "구이가.",        url: "https://maps.app.goo.gl/1oKB498wa9jenw1A7", done: true, badge: "eat-out.png" },
                                  { id: "we-fight--jungjeon",  label: "중전금고기.",    url: "https://maps.app.goo.gl/vKL3ADVZMPoU7A5y6", done: true, badge: "eat-out.png" },
                                  { id: "we-fight--wolsugeum", label: "월수금통돼지.",  url: "https://maps.app.goo.gl/tG3pfGhhxYU7RMPUA", done: true, badge: "eat-out.png" }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "we-fight--stew",
                label: "Stew.",
                children: [
                  {
                    id: "we-fight--stew-awkward",
                    label: "It is the most awkward situation,",
                    children: [
                      { id: "we-fight--stew-30min",      label: "when you argue with mom and dad like 30 minutes ago, and now you have to share a big steamy pot of stew all the sudden.", done: true, badge: "eat-out.png" },
                      {
                        id: "we-fight--stew-fried-rice",
                        label: "because stew always comes with fried rice afterwards.",
                        children: [
                          { id: "we-fight--not-really-fried", label: "When you think about it, it's not really fried rice because there's no \"frying.\"", done: true, badge: "eat-out.png" },
                          {
                            id: "we-fight--perfect-rice",
                            label: "The perfect amount of soup, bits of meat, and umami after boiling for at least half an hour creates the perfect rice.",
                            children: [
                              { id: "we-fight--egg",        label: "With egg on top.",                    done: true, badge: "egg-on-top.png"         },
                              { id: "we-fight--no-cheese",  label: "And no cheese, because mom hates, cheese.", done: true, badge: "cheese-on-top.png"     },
                              { id: "we-fight--seaweed",    label: "With seaweed.",                       done: true, badge: "seaweed.png"             },
                              { id: "we-fight--sesame-oil", label: "With drizzle of sesame oil.",         done: true, badge: "sesame-oil-drizzle.png"  }
                            ]
                          }
                        ]
                      },
                      {
                        id: "we-fight--stew-prep",
                        label: "because stew comes with preparation before eating.",
                        children: [
                          { id: "we-fight--individual-bowls", label: "You are the one who has to spread out individual bowls for everyone.",                             done: true, badge: "eat-out.png" },
                          { id: "we-fight--dad-stirs",        label: "Dad has to stir the soup in between so it doesn't get stick on pot.",                             done: true, badge: "eat-out.png" },
                          { id: "we-fight--10-minutes",       label: "Boiling with the lids closed, for at least 10 minutes, which is time solely for patience and silence.", done: true, badge: "eat-out.png" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }

    ]
  },

  // ── WE FIND LOVE ───────────────────────────────────────────────────────────
  {
    id: "we-find-love",
    label: "We find love",
    color: "#f9c846",
    glowColor: "rgba(249, 200, 70, 0.8)",
    position: { top: "8%", left: "14%" },
    children: [

      {
        id: "we-find-love--packages",
        label: "in packages from Korea",
        children: [
          {
            id: "we-find-love--sesame-oil",
            label: "There is a bottle of sesame oil.",
            image: "assets/images/sesame-oil.png",
            children: [
              {
                id: "we-find-love--grandma-grows",
                label: "My grandma grows assortment of crops in her garden. I didn't even know you can actually grow sesame,",
                children: [
                  {
                    id: "we-find-love--thresh",
                    label: "thresh the sesame seeds over clean cloth,",
                    children: [
                      {
                        id: "we-find-love--wash-dry",
                        label: "wash the seeds, dry them,",
                        children: [
                          {
                            id: "we-find-love--pan-roast",
                            label: "pan roast on low heat,",
                            children: [
                              {
                                id: "we-find-love--local-mill",
                                label: "and bring to the local mill,",
                                children: [
                                  {
                                    id: "we-find-love--grind",
                                    label: "where they will grind seeds,",
                                    children: [
                                      {
                                        id: "we-find-love--squeeze",
                                        label: "and squeeze the oil and filter through fine cloth.",
                                        children: [
                                          {
                                            id: "we-find-love--not-waste-a-drop",
                                            label: "When I get a bottle of this sesame oil, I promise to myself, I will not waste a drop of this",
                                            children: [
                                              {
                                                id: "because-i-can-picture-my-grandma",
                                                label: "because I can picture my grandma making this one bottle and sending it to mom, hoping it will eventually get to me.",
                                                image: "assets/images/grandma-sesame.jpg",
                                                done: true,
                                                badge: "sesame-oil.png"
                                              }
                                            ]
                                          }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },

          {
            id: "we-find-love--chili-pepper",
            label: "There is a bag of Korean chili pepper flakes.",
            image: "assets/images/chili-pepper-flakes.png",
            children: [
              { id: "chili-spicier-stuff", label: "Spicier stuff", done: true, badge: "chili-pepper.png" },
              {
                id: "we-find-love--chili-hmart",
                label: "I know you can find one in H mart but they are packaged in factories. The stuff mom sends are chili that is grown in my grandma's kitchen garden,",
                children: [
                  {
                    id: "we-find-love--chili-dried",
                    label: "dried on the roof of her apartment,",
                    children: [
                      { id: "chili-blended-at-home", label: "and blended at home.", done: true, badge: "chili-pepper.png" }
                    ]
                  }
                ]
              }
            ]
          },

          {
            id: "we-find-love--eyeglasses",
            label: "There are eyeglasses.",
            image: "assets/images/eye-glasses.png",
            children: [
              {
                id: "we-find-love--always-wanted-glasses",
                label: "I always wanted to wear eyeglasses.",
                children: [
                  {
                    id: "we-find-love--mom-glasses",
                    label: "Because mom used to wear glasses when I was younger and wanted to be like her.",
                    image: "assets/images/mom-glasses.jpg",
                    children: [
                      {
                        id: "we-find-love--me-glasses",
                        label: "Now I know it's generally tiring to find eyeglasses first thing in the morning or wear contact lenses, and mom also got lasik.",
                        image: "assets/images/me-glasses.png",
                        done: true,
                        badge: "eyeglasses.png"
                      }
                    ]
                  }
                ]
              }
            ]
          },

          {
            id: "we-find-love--medicines",
            label: "There are some medicines.",
            image: "assets/images/medicines.png",
            children: [
              {
                id: "we-find-love--always-say",
                label: "I always say",
                children: [
                  {
                    id: "we-find-love--medicines-in-us",
                    label: "there are medicines in US too, no need to get it sent all the way from Korea.",
                    children: [
                      {
                        id: "we-find-love--just-want-to-send",
                        label: "But I feel like they sometimes just want to send medicines here.",
                        children: [
                          {
                            id: "we-find-love--wont-buy",
                            label: "Because they know I won't buy medicines here because I think they are waste of money, and delusional, thinking I'm built different, and can fight over any illness.",
                            children: [
                              {
                                id: "we-find-love--mom-dad-sent",
                                label: "Mom and dad sent me",
                                children: [
                                  { id: "general-cold-medicines", label: "general cold medicines.", done: true, badge: "general-cold-medicines.png" },
                                  { id: "tylenols",               label: "tylenols.",               done: true, badge: "tylenols.png"               },
                                  { id: "allergy-relief",         label: "allergy relief.",         done: true, badge: "allergy-relief.png"         }
                                ]
                              }
                            ]
                          },
                          {
                            id: "we-find-love--want-to-do-something",
                            label: "Because they want to do something for me,",
                            children: [
                              {
                                id: "we-find-love--11003kms",
                                label: "and we are 11003Kms apart,",
                                children: [
                                  {
                                    id: "we-find-love--gotta-send",
                                    label: "they at least gotta send me some",
                                    children: [
                                      { id: "eye-ointment", label: "eye ointment.",            done: true, badge: "eye-ointment.png" },
                                      { id: "bandages",     label: "bandages.",                done: true, badge: "bandages.png"     },
                                      { id: "hot-patch",    label: "hot patch for muscle pain", done: true, badge: "hot-patch.png"    },
                                      {
                                        id: "anthelmintic",
                                        label: "anthelmintic.",
                                        children: [
                                          { id: "anthelmintic-annual-event", label: "This is also a annual event for our family, because both mom and dad came from sea-side of Korea, we eat A LOT of raw fish and seafood. So since I was younger, it was MANDATORY to take this once a year.", done: true, badge: "anthelmintic-annual-event.png" }
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        id: "we-find-love--worries",
        label: "when my parents asks if I'd miss home.",
        children: [
          {
            id: "we-find-love--mom-thinks",
            label: "Mom thinks that there's no authentic Korean in NYC",
            children: [
              {
                id: "we-find-love--is-it-true",
                label: "Well is that true?",
                children: [
                  {
                    id: "we-find-love--can-i-find-korean",
                    label: "Can I ever find what's KOREAN in NYC?",
                    children: [
                      {
                        id: "we-find-love--yes-i-can",
                        label: "Yes, I can.",
                        children: [
                          { id: "people-same-language",  label: "There are people who speaks the same language as you.",              done: true, badge: "home.png" },
                          { id: "good-korean-restaurants", label: "There are some good Korean restaurants.",                          done: true, badge: "home.png" },
                          { id: "korean-villages-nyc",   label: "There are villages where you can find Korean signs and storefronts everywhere", done: true, badge: "home.png" },
                          { id: "murray-hill-since-90s", label: "and those probably were there since the 90s.", image: "assets/images/murray-hill.jpg", done: true, badge: "home.png" }
                        ]
                      },
                      {
                        id: "we-find-love--no-i-cant",
                        label: "No, I can't.",
                        children: [
                          { id: "family-not-here",        label: "My family's not here.",                                               done: true, badge: "cry.png" },
                          { id: "cant-have-moms-cooking", label: "I can't have mom's cooking.",                                        done: true, badge: "cry.png" },
                          { id: "korean-food-price",      label: "Good Korean food doesn't have to be KRW29881.40 before tax and tips.", done: true, badge: "cry.png" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "we-find-love--do-i-miss-home",
                label: "Do I miss home?",
                children: [
                  {
                    id: "we-find-love--hmart",
                    label: "When I literally live 15 minutes walk from Hmart?",
                    image: "assets/images/h-mart.png",
                    children: [
                      { id: "still-miss-home-hmart", label: "I still miss home.", done: true, badge: "cry.png" }
                    ]
                  },
                  {
                    id: "we-find-love--ktown",
                    label: "When I literally live 30 minute by subway from K-town?",
                    image: "assets/images/k-town.jpg",
                    children: [
                      { id: "still-miss-home-ktown", label: "I still miss home.", done: true, badge: "cry.png" }
                    ]
                  },
                  {
                    id: "we-find-love--murray-hill",
                    label: "When I literally live from 35 minutes from where I can find Korean signs and storefronts everywhere?",
                    image: "assets/images/murray-hill.jpg",
                    children: [
                      { id: "still-miss-home-murray-hill", label: "I still miss home.", done: true, badge: "cry.png" }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        id: "we-find-love--dads-office",
        label: "in my dad's home office.",
        children: [
          {
            id: "we-find-love--exotic",
            label: "It always feels exotic to be in there because it's always FILLED with things.",
            children: [
              {
                id: "we-find-love--scavenger-hunt",
                label: "It feels like a little scavenger hunt reading and digging things I don't fully understand.",
                children: [

                  {
                    id: "we-find-love--his-books",
                    label: "His books.",
                    image: "assets/images/his-books.png",
                    children: [
                      { id: "we-find-love--old-books", label: "Old books from 80s and 90s, with occasional Chinese characters that I still can't understand.", done: true, badge: "dads-office.png" },
                      {
                        id: "we-find-love--books-person",
                        label: "He always wanted me to take some of his books and read them,",
                        children: [
                          {
                            id: "we-find-love--books-values",
                            label: "telling me these books made the person he is now, and taught the most important values in his life.",
                            children: [
                              {
                                id: "we-find-love--books-like",
                                label: "Books like",
                                children: [
                                  {
                                    id: "we-find-love--man-who-mastered-time",
                                    label: "[The Man Who Mastered Time] by Daniil Alexandrovich Granin",
                                    image: "assets/images/the-man-who-mastered-time.png",
                                    children: [
                                      { id: "we-find-love--too-difficult",  label: "But they were of course too difficult and complicated for 14 years old me to understand.",                done: true, badge: "dads-office.png" },
                                      { id: "we-find-love--reading-comics", label: "At the time I was reading comics and fantasy novels, there were no way I would read these philosophical texts.", done: true, badge: "dads-office.png" }
                                    ]
                                  },
                                  { id: "we-find-love--zarathustra", label: "[Thus Spoke Zarathustra] by Friedrich Nietzsche", image: "assets/images/thus-spoke-zarathustra.png", done: true, badge: "dads-office.png" },
                                  { id: "we-find-love--cosmos",      label: "[Cosmos] by Carl Sagan",                         image: "assets/images/book-cosmos.png",               done: true, badge: "dads-office.png" }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  },

                  {
                    id: "we-find-love--memory-box",
                    label: "Memory box.",
                    image: "assets/images/memory-box.png",
                    children: [
                      {
                        id: "we-find-love--memory-box-opened",
                        label: "This pink box is dedicated just for collecting and saving all the old monuments of me and my little sister.",
                        image: "assets/images/memory-box-opened.png",
                        children: [
                          { id: "we-find-love--umbilical-cord", label: "Umbilical cord",       image: "assets/images/umbilical-cord.jpg",   done: true, badge: "dads-office.png" },
                          { id: "we-find-love--baby-teeth",     label: "Few of my baby teeth", image: "assets/images/baby-teeth.jpg",        done: true, badge: "dads-office.png" },
                          { id: "we-find-love--letters",        label: "Letters I wrote",       image: "assets/images/pink-box-letters.jpg", done: true, badge: "dads-office.png" },
                          {
                            id: "we-find-love--diary",
                            label: "My 10 year old diary.",
                            image: "assets/images/pink-box-diary.jpg",
                            children: [
                              { id: "we-find-love--diary-mandatory", label: "This was mandatory to write every week in elementary school.", done: true, badge: "dads-office.png" }
                            ]
                          }
                        ]
                      }
                    ]
                  },

                  {
                    id: "we-find-love--golf",
                    label: "Some golf gears.",
                    children: [
                      {
                        id: "we-find-love--golf-job",
                        label: "And that is because when he first got a job right after graduating university, he worked at a company which managed golf memberships and gears.",
                        children: [
                          {
                            id: "we-find-love--barely-golfs",
                            label: "He now barely golfs, because of his back pain and shifting to new field,",
                            children: [
                              {
                                id: "we-find-love--but-i-still-see",
                                label: "but I still see",
                                children: [
                                  { id: "golf-balls",   label: "golf balls lying around.",           image: "assets/images/golf-balls.png",   done: true, badge: "dads-office.png" },
                                  { id: "golf-bag",     label: "golf bag with clubs in the corner.", image: "assets/images/golf-bag.png",     done: true, badge: "dads-office.png" },
                                  { id: "ball-markers", label: "ball markers in the basket.",        image: "assets/images/ball-markers.png", done: true, badge: "dads-office.png" },
                                  { id: "golf-gloves",  label: "golf gloves in his closet.",         image: "assets/images/golf-gloves.png",  done: true, badge: "dads-office.png" }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }

                ]
              }
            ]
          }
        ]
      }

    ]
  },

  // ── WE MISS ────────────────────────────────────────────────────────────────
  {
    id: "we-miss",
    label: "We miss",
    color: "#80deea",
    glowColor: "rgba(128, 222, 234, 0.8)",
    position: { top: "8%", left: "24%" },
    children: [

      {
        id: "we-miss--younger",
        label: "the time I was younger.",
        children: [
          {
            id: "we-miss--little-baby",
            label: "My mom and dad will always see me as their little baby.",
            children: [
              {
                id: "we-miss--complain",
                label: "And I will complain about that time to time.",
                children: [
                  {
                    id: "we-miss--dont-acknowledge",
                    label: "Feels like they don't acknowledge that since I moved out and started living abroad,",
                    children: [
                      { id: "we-miss--done-dishes", label: "do dishes.",        type: "video", src: "assets/videos/dishes.mov",   done: true, badge: "chores.png" },
                      { id: "we-miss--cook",        label: "cook my own food.", type: "video", src: "assets/videos/cooking.mov",  done: true, badge: "chores.png" },
                      { id: "we-miss--clean",       label: "clean my room.",    type: "video", src: "assets/videos/cleaning.mov", done: true, badge: "chores.png" }
                    ]
                  }
                ]
              },
              {
                id: "we-miss--remember-younger",
                label: "And that's because they remember when I was younger more vividly than I do.",
                children: [
                  {
                    id: "we-miss--episodes",
                    label: "Episodes of me younger I know just because mom and dad told me like old tale.",
                    children: [
                      {
                        id: "we-miss--boxer",
                        label: "It's kind of the bits I did whenever I wore this hoodie, I used to sing [Rocky theme song] and pretend to be a boxer with two fists up in my face.",
                        image: "assets/images/boxer.jpg",
                        done: true,
                        badge: "we-miss-boxer.png"
                      },
                      {
                        id: "we-miss--amusement-park",
                        label: "This my dad tells me whenever he thinks I am stubborn, opening with \"you used to so stubborn as a kid also…\", he talks about this one time I went to the amusement park. Me and parents walked pass one of those coin-operating kiddie ride, and I decided to sit on the ground, insisting not to walk until I get a ride.",
                        image: "assets/images/amusement-park.jpg",
                        children: [
                          { id: "we-miss--amusement-park-ride", label: "And I did ride!!!", image: "assets/images/amusement-park-ride.jpg", done: true, badge: "happy.png" }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: "we-miss--odd-things",
            label: "And sometimes they will make me do some odd things,",
            children: [
              {
                id: "we-miss--pose",
                label: "like to pose in front of camera which makes me so awkward.",
                children: [
                  {
                    id: "we-miss--pose-because",
                    label: "because whenever I pose",
                    children: [
                      {
                        id: "we-miss--pose-hi",
                        label: "hi,",
                        children: [
                          { id: "we-miss--pose-hi-img", label: "they see this.", image: "assets/images/hi.jpg", children: [] }
                        ]
                      },
                      {
                        id: "we-miss--pose-peace",
                        label: "peace sign,",
                        children: [
                          { id: "we-miss--pose-peace-img", label: "they see this that they called \"beui!\".", image: "assets/images/peace.jpg", done: true, badge: "hands.png" }
                        ]
                      },
                      {
                        id: "we-miss--pose-double-peace",
                        label: "double peace sign,",
                        children: [
                          { id: "we-miss--pose-double-peace-img", label: "they see this that they called \"beui-beui!\".", image: "assets/images/double-peace.jpg", done: true, badge: "hands.png" }
                        ]
                      },
                      {
                        id: "we-miss--pose-cheeks",
                        label: "poking cheeks,",
                        children: [
                          { id: "we-miss--pose-cheeks-img", label: "they see this that they called \"ippeunjis~\".", image: "assets/images/cheeks.jpg", done: true, badge: "hands.png" }
                        ]
                      },
                      {
                        id: "we-miss--pose-flower",
                        label: "flower hands under my face,",
                        children: [
                          { id: "we-miss--pose-flower-img", label: "they see this that they called \"kkoccbatchim~\".", image: "assets/images/flower.jpg", done: true, badge: "hands.png" }
                        ]
                      }
                    ]
                  }
                ]
              },
              {
                id: "we-miss--try-on-clothes",
                label: "like to try on clothes which looks just funny to me.",
                image: "assets/images/clothes.jpg",
                children: [
                  {
                    id: "we-miss--cutesy",
                    label: "And that is because, when I was younger I used to just wear what my mom and dad tells me to wear, and to them it was so cutesy,",
                    children: [
                      { id: "we-miss--orange-overalls", label: "like this orange overalls.", image: "assets/images/orange-overalls.jpg", done: true, badge: "orange-overalls.png" },
                      {
                        id: "we-miss--gray-uniform",
                        label: "like this gray uniform.",
                        image: "assets/images/gray-uniform.jpg",
                        children: [
                          {
                            id: "we-miss--gray-uniform-kindergarten",
                            label: "This was the uniform for my kindergarten.",
                            image: "assets/images/gray-uniform-a.jpg",
                            children: [
                              { id: "we-miss--gray-uniform-english", label: "My parents sent me to kindergarten where they teach English.", image: "assets/images/gray-uniform-b.jpg", done: true, badge: "gray-uniform.png" }
                            ]
                          }
                        ]
                      },
                      {
                        id: "we-miss--purple-jacket",
                        label: "like this purple jacket.",
                        image: "assets/images/purple-jacket.jpg",
                        children: [
                          { id: "we-miss--purple-jacket-yeon", label: "I actually do remember this jacket, because was passed down to my younger sister.", image: "assets/images/purple-jacket-yeon.jpg", done: true, badge: "purple-jacket.png" },
                          {
                            id: "we-miss--lavender-jacket",
                            label: "For some reason I always thought this jacket was reversible and could also be worn as fleece jacket when I flip. But as I'm looking through the photos, I realize that they were two separate jackets, because the lining of lighter purple jacket does not match.",
                            image: "assets/images/lavender-jacket.jpg",
                            children: [
                              { id: "we-miss--lavender-jacket-yeon", label: "And this lavender jacket was also passed down to my sister.", image: "assets/images/lavender-jacket-yeon.jpg", done: true, badge: "lavender-jacket.png" }
                            ]
                          },
                          {
                            id: "we-miss--purple-jacket-many",
                            label: "I can see how I or mom and dad really liked this jacket, I can see so many pictures of me wearing this.",
                            children: [
                              { id: "purple-jacket-a", label: "1", image: "assets/images/purple-jacket-a.jpg", done: true, badge: "purple-jacket.png" },
                              { id: "purple-jacket-b", label: "2", image: "assets/images/purple-jacket-b.jpg", done: true, badge: "purple-jacket.png" },
                              { id: "purple-jacket-c", label: "3", image: "assets/images/purple-jacket-c.jpg", done: true, badge: "purple-jacket.png" },
                              { id: "purple-jacket-d", label: "4", image: "assets/images/purple-jacket-d.jpg", done: true, badge: "purple-jacket.png" },
                              { id: "purple-jacket-e", label: "5", image: "assets/images/purple-jacket-e.jpg", done: true, badge: "purple-jacket.png" }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },

      {
        id: "we-miss--tv",
        label: "when our family had very strict weekly schedule of watching TV shows.",
        children: [
          {
            id: "we-miss--weekdays",
            label: "Monday through Friday",
            children: [
              {
                id: "we-miss--tv-news",
                label: "Dad wakes up the earliest and turns on the news channel.",
                image: "assets/images/tv-news.jpg",
                children: [
                  { id: "we-miss--tv-news-still", label: "He still does this.", done: true, badge: "tv.png" }
                ]
              },
              { id: "we-miss--tv-lets-get-together", label: "By the time I wake up we always had kids channel on while me and my mom go through a war every morning, getting ready. When <모여라 딩동댕 Let's Get Together Ding Dong Deng> starts, it was time to leave.", image: "assets/images/tv-lets-get-together.png", done: true, badge: "tv.png" }
            ]
          },
          {
            id: "we-miss--saturday",
            label: "Saturday",
            children: [
              { id: "we-miss--tv-kirarin", label: "TV was mine from morning till afternoon, usually watching typical shoujo anime like <라라의 스타일기 Kirarin Revolution> or <캐릭캐릭 체인지 Shugo Chara!> from Tooniverse.", image: "assets/images/tv-kirarin-revolution.png", done: true, badge: "tv.png" }
            ]
          },
          {
            id: "we-miss--sunday",
            label: "Sunday: was a big TV day.",
            children: [
              { id: "we-miss--tv-galaxy-express", label: "On Sunday mornings, I can't remember which channel, but they aired retro animations like <개구리 왕눈이 Demetan Croaker, The Boy Frog> and <은하철도 999 Galaxy Express 999>. Those were the animations my mom and dad grew up with, and still was fun for me. Sometimes if I wake up too late I would miss it.", image: "assets/images/tv-galaxy-express.png", done: true, badge: "tv.png" },
              { id: "we-miss--tv-family-outing",  label: "Around dinner time, while mom prepares dinner, I would turn TV to channel 6 to watch <패밀리가 떴다 Family Outing> because it starred one of the k-pop idols I liked.",                                                                                                                                             image: "assets/images/tv-family-outing.jpg",      done: true, badge: "tv.png" },
              { id: "we-miss--tv-2d1n",           label: "By the time we would sit around to have dinner, the channel was changed to 7 to watch <1박 2일 2 Days & 1 Night> because that was my mom and dad's fav variety TV show. I always wanted to stick to <패밀리가 떴다 Family Outing> but I couldn't win when it was two against one.",                              image: "assets/images/tv-two-days-one-night.png", done: true, badge: "tv.png" },
              { id: "we-miss--tv-gag-concert",    label: "At night there was this legendary sketch comedy show <개그콘서트 Gag Concert>, which is comedy show like SNL but for family.",                                                                                                                                                                                    image: "assets/images/tv-gag-concert.png",        done: true, badge: "tv.png" },
              { id: "we-miss--tv-late",           label: "After <개그콘서트 Gag Concert> sometimes we went to bed right away, but sometimes, when there were some good reality show or k-dramas airing at the time, we would watch those and go to bed around 11:30PM.",                                                                                                    image: "assets/images/gentleman-dignity.jpg",     done: true, badge: "tv.png" }
            ]
          }
        ]
      }

    ]
  }

];

// Badge image base path (relative to index.html)
export const BADGE_PATH = "assets/star-badge/";