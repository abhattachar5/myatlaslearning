// content/y7/comprehension/passages/1.js — Year 7 WRITTEN comprehension passages.
//
// These use the same {q, skill, marks, guidance, model} question shape as
// Year 8+ (see content/y8/comprehension/passages/), which comprehension.html
// detects automatically via isWrittenPassage() and renders as free-text
// answers marked by AI — no code change needed, only this data shape.
//
// The 40 existing Year 7 passages (content/y7/english/islands/4.js, ids F01–F40)
// stay exactly as they are: multiple-choice, self-marking. Do not convert them —
// students who already completed them should keep seeing that MCQ result.
//
// APPROACH: rather than writing brand-new passages from scratch, these entries
// REUSE the passage text from the existing, already-vetted F01–F40 bank (same
// story, verbatim) but give it a NEW id and a NEW set of open-response
// questions. This means the reading difficulty is inherited from content
// that's already proven right for this year group, instead of being guessed.
// Only the QUESTION PHRASING and MARK SCHEME are new — and those are
// deliberately written in plain Year 7 language, not GCSE exam-paper phrasing
// (no "to what extent do you agree", no GCSE levels-of-response ladders).
// Source id noted per passage so the relationship is traceable.
window.COMPREHENSION_PASSAGES = window.COMPREHENSION_PASSAGES || [];
window.COMPREHENSION_PASSAGES.push(
  {
    id: 'F01W', // written companion to F01 "The Jungle at Night" (same text, new questions)
    title: 'The Jungle at Night',
    type: 'fiction',
    source: 'Adapted from Rudyard Kipling, The Jungle Book (1894)',
    text: 'The moon rose above the trees and cast long silver shadows across the clearing where the wolf pack had gathered. Mowgli sat cross-legged on the Council Rock, watching the wolves circle below him. He had lived among them since he was a small child — carried into the cave by Father Wolf on a warm night when the tiger Shere Khan had come hunting in the wrong territory. That felt like a lifetime ago now. Mowgli could barely remember a world before the jungle.\n\nThe boy knew every scent in the jungle: the sweet heaviness of the mahua flower, the sharp tang of damp earth after rain, and the musty warmth of the wolf den where he slept each night. He understood the language of the wolves better than the language of men. When Akela, the great grey Lone Wolf, raised his head to howl, Mowgli felt the sound deep in his own chest, as though his bones were humming. He had once tried to howl back, and the younger cubs had fallen over each other in delight. Even Bagheera, the black panther who rarely showed affection, had purred.\n\nBut tonight something was different. The wolves were restless. Their ears twitched towards the bamboo thickets to the east, and even Baloo the bear had stopped his lazy scratching to sniff the wind. Mowgli had learned long ago to trust the instincts of the pack. If they were uneasy, there was reason. He rose to his feet and placed a hand on Akela\'s shoulder, feeling the old wolf\'s muscles tense beneath the coarse grey fur.\n\nThen the scent reached him — faint at first, carried on the warm breeze like a whisper. Smoke. Not the comforting smoke of a village cooking fire, but something sharper and more dangerous. Somewhere beyond the river, the jungle was burning. Mowgli\'s stomach tightened. Fire was the one thing every creature in the jungle feared, from the smallest mouse deer to Shere Khan himself. The wolves called it the Red Flower, and they would not even speak its true name. Mowgli had seen it only once before, when a lightning strike had set the grasslands ablaze and the animals had fled together — predator and prey side by side, enemies made equal by terror.\n\nAkela rose slowly to his feet, and one by one the pack turned to face the east. Nobody moved. The silence was heavier than the heat, broken only by the distant crack of splitting bamboo as the fire ate its way forward. Mowgli stood too, his bare feet gripping the warm stone of the Council Rock, and stared into the darkness where an orange glow was beginning to stain the sky. He was not afraid — not yet. But he could feel fear gathering around him, rising from the pack like heat from sun-baked earth.',
    questions: [
      {
        q: 'Give two signs from the passage that show the wolves are uneasy, before Mowgli himself smells the smoke.',
        skill: 'Retrieval',
        marks: 2,
        guidance: 'Award 1 mark per valid point (max 2). Accept any two of: the wolves were "restless"; their "ears twitched towards the bamboo thickets"; Baloo "stopped his lazy scratching to sniff the wind"; Akela\'s muscles tensed under Mowgli\'s hand. Do not accept a general statement like "they seemed worried" without a specific detail from the text.',
        model: 'Model answer: The wolves were restless, and their ears twitched towards the bamboo thickets. Baloo the bear also stopped scratching himself so he could sniff the wind.'
      },
      {
        q: 'The writer describes how, when Akela howls, "Mowgli felt the sound deep in his own chest, as though his bones were humming." What technique does the writer use here, and what effect does it have on the reader?',
        skill: 'Language',
        marks: 3,
        guidance: 'Award marks for identifying the technique (simile — "as though") and explaining its effect. 3 marks: names the technique, quotes it, and explains the effect (e.g. shows how deeply connected Mowgli feels to the wolves, almost as if the howl is inside his own body). 2 marks: names the technique with a quotation but a weaker or partial explanation of effect. 1 mark: a simple comment (e.g. "it shows he feels close to the wolves") without naming the technique or quoting.',
        model: 'Model answer: The writer uses a simile, comparing the feeling to his "bones humming". This shows that Mowgli doesn\'t just hear the howl — he feels it right through his body, which suggests how deeply connected he is to the wolf pack.'
      },
      {
        q: 'How does the writer build up tension as the passage goes on? Think about how the beginning feels different from the end.',
        skill: 'Structure',
        marks: 4,
        guidance: 'Reward a clear explanation of how the passage changes from calm to tense, with reference to the text at more than one point. 4 marks: explains the shift from a calm, peaceful opening (sensory details of scent, warmth, the cubs playing) to a tense ending (smoke, silence, "fear gathering"), using evidence from at least two points in the passage. 3 marks: explains the shift clearly with evidence from one part of the passage. 2 marks: notices the passage becomes more tense but with limited evidence. 1 mark: a simple comment on what happens, without explaining the change in feeling.',
        model: 'Model answer: At the start, the passage feels calm and happy — it describes Mowgli enjoying the "sweet heaviness of the mahua flower" and the cubs "falling over each other in delight". But partway through, the mood changes: the wolves become "restless", and by the end there is "silence" and Mowgli can feel "fear gathering around him". The writer builds tension by slowly adding more worrying details, like the smoke and the pack turning to face the danger, so that the passage feels much more frightening by the end than it did at the start.'
      },
      {
        q: 'Do you think Mowgli is right to trust the wolves\' instincts, even before he can smell the smoke himself? Use evidence from the text to explain your answer.',
        skill: 'Personal response',
        marks: 5,
        guidance: 'Reward a clear personal view supported by evidence from the text. There is no single "correct" opinion — reward reasoning, not the conclusion. Higher marks (4–5) for a view that refers to specific evidence, such as: the text tells us Mowgli "had learned long ago to trust the instincts of the pack"; the wolves turn out to be right, since the fire really is coming; details like Akela\'s tensed muscles and Baloo sniffing the wind show the wolves noticing real warning signs. Mid marks (2–3) for a clear opinion with some reference to the text. Low marks (1) for a simple opinion with little or no evidence.',
        model: 'Model answer: I think Mowgli is right to trust the wolves. The text says he "had learned long ago to trust the instincts of the pack", which shows this isn\'t the first time their instincts have been useful. The wolves notice small warning signs before Mowgli does, like the ears twitching and Baloo sniffing the wind, and it turns out they were right — there really is a fire coming. This shows that trusting the pack was a sensible decision, not just a guess.'
      }
    ]
  }
);
