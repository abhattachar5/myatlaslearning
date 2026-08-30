// Written companion to F16 "The Coding Competition" — see 1.js for the approach.
window.COMPREHENSION_PASSAGES = window.COMPREHENSION_PASSAGES || [];
window.COMPREHENSION_PASSAGES.push(
  {
    id: 'F16W',
    title: 'The Coding Competition',
    type: 'fiction',
    source: 'Original passage — technology / teamwork / pressure',
    text: 'The timer on the screen read 01:47:23 and was counting down. In one hour and forty-seven minutes, Team Pixel — which consisted of Dani, her best friend Leo, and a boy called Sanjay whom they had met approximately ninety minutes ago — would need to present a working app to a panel of judges. At the moment, what they had was not so much a working app as a collection of errors displayed in angry red text.\n\n\'It\'s the API call,\' Sanjay said, his fingers moving across the keyboard at a speed that made Dani feel both impressed and inadequate. \'The data\'s coming back but it\'s nested three levels deep and we\'re only reading two.\'\n\n\'Can you fix it?\' Dani asked.\n\n\'I can fix anything,\' Sanjay said, without looking up. \'The question is whether I can fix it in time.\'\n\nDani turned to Leo, who was supposed to be designing the user interface but had spent the last twenty minutes staring at a colour palette on his screen with the expression of someone choosing which wire to cut on a bomb. Leo was an artist — genuinely talented, endlessly creative — but deadlines made him freeze. The more urgent the task, the more paralysed he became.\n\n\'Leo,\' Dani said quietly. \'Just pick blue. Blue is fine. Everything works in blue.\'\n\nLeo looked at her with wounded eyes. \'Dani, blue is not just blue. There are four hundred shades of—\'\n\n\'Pick one.\'\n\nDani\'s own role was project manager, which sounded important but in practice meant she was the person who panicked on behalf of the whole team so that the others didn\'t have to. She kept the task list, watched the clock, and made decisions when nobody else would. It was not glamorous work. It did not involve code or design or anything that would look impressive on screen during the final presentation. But without it, she had learned, talented people could spend three hours arguing about shades of blue while their app crashed in the background.\n\nThe timer hit 01:00:00. One hour left. Sanjay\'s fix worked — the data flowed correctly for the first time, populating the screen with real information instead of error messages. Leo, having been firmly steered towards a colour scheme, had produced an interface that was simple, clean, and — Dani had to admit — beautiful.\n\n\'It\'s actually working,\' Leo said, as though he didn\'t quite believe it.\n\n\'Of course it\'s working,\' Sanjay said. \'I fixed the back end. You made it pretty. And Dani made sure we didn\'t kill each other in the process.\'\n\nDani laughed, but she also wrote that down. When the judges asked what each team member contributed, she wanted a good answer. \'Prevented murders\' had a nice ring to it.',
    questions: [
      {
        q: 'Give two details describing the problems Team Pixel is facing near the start of the passage.',
        skill: 'Retrieval',
        marks: 2,
        guidance: 'Award 1 mark per valid point (max 2). Accept any two of: what they have is "a collection of errors displayed in angry red text"; the API data is nested three levels deep but they are only reading two; Leo has spent twenty minutes staring at a colour palette without deciding; they only have one hour and forty-seven minutes left.',
        model: 'Model answer: At the start, Team Pixel\'s app is just showing "a collection of errors displayed in angry red text". Sanjay explains that the data is nested three levels deep but they are only reading two, and Leo has spent twenty minutes just staring at a colour palette without choosing anything.'
      },
      {
        q: 'Leo stares at the colour palette "with the expression of someone choosing which wire to cut on a bomb." What technique is used here, and what effect does it create?',
        skill: 'Language',
        marks: 3,
        guidance: '3 marks: names the technique (simile), quotes it, and explains the effect (exaggerates how seriously and anxiously Leo treats a small decision, showing he freezes under pressure, and adds humour). 2 marks: names it with a quotation but a weaker explanation. 1 mark: a simple comment.',
        model: 'Model answer: The writer uses a simile, comparing Leo\'s expression to someone defusing a bomb. This is deliberately exaggerated, since choosing a colour is nowhere near as serious as defusing a bomb, which shows how badly Leo freezes under pressure over even small decisions — and it also makes the moment quite funny.'
      },
      {
        q: 'How does the writer use the countdown timer through the passage to build tension? Refer to more than one point in the passage.',
        skill: 'Structure',
        marks: 4,
        guidance: '4 marks: explains how the timer is mentioned at the start (01:47:23) and later (01:00:00), tracking progress and creating urgency, with evidence from both points, explaining the effect. 3 marks: explains with evidence from one point. 2 marks: limited evidence. 1 mark: a simple comment.',
        model: 'Model answer: The writer starts by telling us the timer reads "01:47:23" and is counting down, which immediately creates pressure. Later in the passage, we are told the timer "hit 01:00:00", showing that almost an hour has passed and the team is running out of time. By returning to the timer at different points, the writer keeps reminding the reader of the deadline, which builds tension as the team races to fix their app.'
      },
      {
        q: 'Do you think Dani\'s role as project manager is as important as Sanjay\'s coding or Leo\'s design work, even though it "did not involve code or design"? Use evidence from the text to explain your answer.',
        skill: 'Personal response',
        marks: 5,
        guidance: 'Reward a clear personal view supported by evidence, either way. Higher marks (4–5) engage with the line "without it... talented people could spend three hours arguing about shades of blue while their app crashed", Sanjay\'s final comment that Dani "made sure we didn\'t kill each other", and whether organisational skill counts as equally valuable. Mid marks (2–3) for a clear opinion with some reference to the text. Low marks (1) for an opinion with little or no evidence.',
        model: 'Model answer: I think Dani\'s role is just as important, even though it isn\'t as visible as Sanjay\'s coding or Leo\'s design. The passage tells us that without her, "talented people could spend three hours arguing about shades of blue while their app crashed in the background", which shows that her organising and decision-making stopped the team from falling apart. Sanjay even says at the end that she "made sure we didn\'t kill each other", which shows the other team members recognise how valuable her role really was, even if it doesn\'t look impressive on screen.'
      }
    ]
  }
);
