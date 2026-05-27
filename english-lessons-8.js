// english-lessons-8.js — Lesson HTML for English Topic 8: Shakespeare
// Islands: ei-08-1 through ei-08-4

Object.assign(LESSONS, {

// ── ei-08-1: Shakespeare's Language ──────────────────────────────────────────
'ei-08-1': `
<h2>Shakespeare&rsquo;s Language</h2>
<p>Shakespeare wrote over 400 years ago &mdash; his English sounds different but it is not a foreign language. With a few key words and techniques under your belt, you can unlock even the trickiest speeches. Let&rsquo;s start with the vocabulary that trips people up the most.</p>

<h3>Common Elizabethan Words</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Elizabethan Word</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Modern Meaning</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>thee / thou</strong></td>
    <td style="padding:8px;border:1px solid #ccc">you (as object / subject)</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>thy / thine</strong></td>
    <td style="padding:8px;border:1px solid #ccc">your / yours</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>dost / doth</strong></td>
    <td style="padding:8px;border:1px solid #ccc">do / does</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>hath</strong></td>
    <td style="padding:8px;border:1px solid #ccc">has</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>art</strong></td>
    <td style="padding:8px;border:1px solid #ccc">are (thou art = you are)</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>wherefore</strong></td>
    <td style="padding:8px;border:1px solid #ccc">why (NOT where!)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>ere</strong></td>
    <td style="padding:8px;border:1px solid #ccc">before</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>hence / hither / thither</strong></td>
    <td style="padding:8px;border:1px solid #ccc">from here / to here / to there</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>hark</strong></td>
    <td style="padding:8px;border:1px solid #ccc">listen</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>prithee</strong></td>
    <td style="padding:8px;border:1px solid #ccc">please (I pray thee)</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>forsooth</strong></td>
    <td style="padding:8px;border:1px solid #ccc">in truth</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>methinks</strong></td>
    <td style="padding:8px;border:1px solid #ccc">I think</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>anon</strong></td>
    <td style="padding:8px;border:1px solid #ccc">soon</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>marry</strong></td>
    <td style="padding:8px;border:1px solid #ccc">indeed (an exclamation, not about weddings!)</td>
  </tr>
</table>

<h3>Verse vs Prose</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Feature</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Verse</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Prose</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Who speaks it?</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Nobles, lovers, characters in emotional or formal moments</td>
    <td style="padding:8px;border:1px solid #ccc">Common people, servants, characters in relaxed or comic scenes</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>What does it look like?</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Lines start with capitals; each line has a set rhythm</td>
    <td style="padding:8px;border:1px solid #ccc">Normal sentences and paragraphs, no fixed rhythm</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>When is it used?</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Serious, poetic, or passionate speeches</td>
    <td style="padding:8px;border:1px solid #ccc">Everyday conversation, comedy, or madness</td>
  </tr>
</table>
<p><strong>Iambic pentameter</strong> is Shakespeare&rsquo;s main verse rhythm: 10 syllables per line, arranged in 5 &ldquo;beats&rdquo; following a <em>da-DUM</em> pattern. Try clapping the rhythm:</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <em>&ldquo;But SOFT, what LIGHT through YON-der WIN-dow BREAKS?&rdquo;</em><br>
  da-DUM / da-DUM / da-DUM / da-DUM / da-DUM
</div>
<p>Why does the switch matter? When a noble character drops into prose, it can signal <strong>madness</strong> (Hamlet, Ophelia) or <strong>intimacy</strong> &mdash; Shakespeare uses form itself to tell the story.</p>

<h3>Soliloquies and Asides</h3>
<p>A <strong>soliloquy</strong> is when a character speaks alone on stage, revealing their inner thoughts to the audience. It shows true feelings and creates a bond between character and viewer. An <strong>aside</strong> is a short remark spoken to the audience that other characters cannot hear &mdash; it creates dramatic irony and shares secrets.</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example soliloquy-style passage:</strong><br>
  <em>&ldquo;O, what a wretched soul am I,<br>
  That smiles before the court yet weeps within!<br>
  They see a prince; I know a frightened boy,<br>
  Whose crown sits heavier than any chain.&rdquo;</em><br><br>
  <strong>What it reveals:</strong> The character feels trapped &mdash; there is a gap between their public image (a smiling prince) and private reality (a frightened boy). The metaphor of the crown as a chain shows power feels like a burden, not a gift.
</div>

<h3>Wordplay and Puns</h3>
<p>Shakespeare loved double meanings. In <em>Romeo and Juliet</em>, Mercutio jokes: <em>&ldquo;You have dancing shoes with nimble <strong>soles</strong>&rdquo;</em> &mdash; &ldquo;soles&rdquo; sounds like &ldquo;souls,&rdquo; creating a witty link between dancing and the spirit. Spotting puns shows you understand his humour and skill with language.</p>

<h3>Top Tips</h3>
<ul>
  <li>Don&rsquo;t panic at unfamiliar words &mdash; use the glossary table above and read the line aloud.</li>
  <li>Check whether a speech is in verse or prose &mdash; it tells you something about the character and the mood.</li>
  <li>If a character is alone on stage, they are telling you the truth &mdash; pay close attention to soliloquies.</li>
</ul>`,

// ── ei-08-2: Themes & Characters ─────────────────────────────────────────────
'ei-08-2': `
<h2>Themes &amp; Characters</h2>
<p>Shakespeare&rsquo;s plays explore big, universal ideas that still matter today. Understanding his major themes and how he builds characters will help you write with real insight in your essays.</p>

<h3>Six Major Themes</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Theme</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Definition</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Key Play</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Key Quotation</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Modern Relevance</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Love</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Romantic, familial, or unrequited love and its consequences</td>
    <td style="padding:8px;border:1px solid #ccc">Romeo and Juliet</td>
    <td style="padding:8px;border:1px solid #ccc"><em>&ldquo;My bounty is as boundless as the sea&rdquo;</em></td>
    <td style="padding:8px;border:1px solid #ccc">Love still crosses social boundaries and divides families</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Ambition / Power</strong></td>
    <td style="padding:8px;border:1px solid #ccc">The desire for status or control, and the corruption it brings</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth</td>
    <td style="padding:8px;border:1px solid #ccc"><em>&ldquo;I have no spur to prick the sides of my intent&rdquo;</em></td>
    <td style="padding:8px;border:1px solid #ccc">Political leaders still face the temptation of unchecked power</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Jealousy / Revenge</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Destructive emotions that poison relationships</td>
    <td style="padding:8px;border:1px solid #ccc">Othello</td>
    <td style="padding:8px;border:1px solid #ccc"><em>&ldquo;O, beware, my lord, of jealousy!&rdquo;</em></td>
    <td style="padding:8px;border:1px solid #ccc">Jealousy and manipulation remain common in everyday life</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Fate / Supernatural</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Destiny, prophecy, and forces beyond human control</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth / Romeo and Juliet</td>
    <td style="padding:8px;border:1px solid #ccc"><em>&ldquo;A pair of star-cross&rsquo;d lovers&rdquo;</em></td>
    <td style="padding:8px;border:1px solid #ccc">People still debate free will vs destiny</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Appearance vs Reality</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Things are not always as they seem; disguise, deception, illusion</td>
    <td style="padding:8px;border:1px solid #ccc">Much Ado About Nothing / Twelfth Night</td>
    <td style="padding:8px;border:1px solid #ccc"><em>&ldquo;All that glisters is not gold&rdquo;</em></td>
    <td style="padding:8px;border:1px solid #ccc">Social media creates gaps between image and reality</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Order vs Chaos</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Disruption of the natural or social order, and its restoration</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth / The Tempest</td>
    <td style="padding:8px;border:1px solid #ccc"><em>&ldquo;Fair is foul, and foul is fair&rdquo;</em></td>
    <td style="padding:8px;border:1px solid #ccc">Societies still struggle when rules and norms break down</td>
  </tr>
</table>

<h3>How Themes Connect</h3>
<p>Themes rarely appear alone. <strong>Ambition</strong> links to <strong>order vs chaos</strong> &mdash; when Macbeth murders the king, he disrupts the natural order and Scotland descends into turmoil. <strong>Love</strong> links to <strong>fate</strong> &mdash; Romeo and Juliet are &ldquo;star-cross&rsquo;d,&rdquo; meaning their destiny was sealed before they ever met. Showing these connections in your essays demonstrates deeper understanding.</p>

<h3>Analysing Character</h3>
<p>Shakespeare reveals character through four key evidence sources:</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Evidence Source</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">What to Look For</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Example (Macbeth)</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>What they say</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Their words, tone, and imagery</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth calls the murder a deed of &ldquo;deep damnation&rdquo;</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>What they do</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Their actions and decisions</td>
    <td style="padding:8px;border:1px solid #ccc">He kills Duncan despite his own doubts</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>What others say about them</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Reputation and perception</td>
    <td style="padding:8px;border:1px solid #ccc">Lady Macbeth calls him &ldquo;too full o&rsquo; th&rsquo; milk of human kindness&rdquo;</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>How they change</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Their character arc across the play</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth moves from loyal soldier to paranoid tyrant</td>
  </tr>
</table>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example &mdash; analysing a speech:</strong><br>
  <em>&ldquo;Is this a dagger which I see before me, / The handle toward my hand?&rdquo;</em> (Macbeth, Act 2 Scene 1)<br><br>
  <strong>What it reveals:</strong> Macbeth sees a hallucinated dagger leading him toward Duncan&rsquo;s chamber. The question form shows his confusion and fear. The fact that the handle points &ldquo;toward my hand&rdquo; suggests he feels drawn to violence almost against his will &mdash; as if fate or his own ambition is guiding him.
</div>

<h3>Shakespeare&rsquo;s Character Types</h3>
<ul>
  <li><strong>The Tragic Hero</strong> &mdash; noble but flawed; their hamartia (fatal flaw) leads to their downfall (e.g. Macbeth&rsquo;s ambition, Othello&rsquo;s jealousy).</li>
  <li><strong>The Villain</strong> &mdash; often given compelling motives, making them fascinating rather than simply evil (e.g. Iago, Lady Macbeth).</li>
  <li><strong>The Comic Character</strong> &mdash; the Fool or servant who provides humour but often speaks hidden truths.</li>
  <li><strong>The Strong Woman</strong> &mdash; often disguised or defiant, challenging the expectations of her time (e.g. Portia, Viola, Beatrice).</li>
</ul>

<h3>Remember</h3>
<p>Shakespeare&rsquo;s themes endure because they capture universal human experiences &mdash; ambition, love, jealousy, justice. When you write about a character, always connect their behaviour to the wider themes of the play.</p>`,

// ── ei-08-3: Dramatic Devices ────────────────────────────────────────────────
'ei-08-3': `
<h2>Dramatic Devices</h2>
<p>Shakespeare was not just a poet &mdash; he was a playwright. He used a range of dramatic devices to control what the audience feels, knows, and expects. Understanding these techniques helps you explain <em>how</em> his plays work, not just <em>what</em> happens.</p>

<h3>Key Dramatic Devices</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Device</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Definition</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Shakespeare Example</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Effect on Audience</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Dramatic irony</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Audience knows something the characters do not</td>
    <td style="padding:8px;border:1px solid #ccc">Romeo believes Juliet is dead, but we know she is only sleeping</td>
    <td style="padding:8px;border:1px solid #ccc">Creates tension, anguish, and a desire to intervene</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Foreshadowing</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Hints or warnings about future events</td>
    <td style="padding:8px;border:1px solid #ccc">&ldquo;These violent delights have violent ends&rdquo; (Romeo and Juliet)</td>
    <td style="padding:8px;border:1px solid #ccc">Makes the audience anxious; creates a sense of inevitability</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Tension / Suspense</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Uncertainty about what will happen next</td>
    <td style="padding:8px;border:1px solid #ccc">The knocking at the gate after Duncan&rsquo;s murder (Macbeth)</td>
    <td style="padding:8px;border:1px solid #ccc">Keeps the audience on edge, afraid of discovery</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Soliloquy</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Character speaks alone, sharing inner thoughts with audience</td>
    <td style="padding:8px;border:1px solid #ccc">Hamlet&rsquo;s &ldquo;To be, or not to be&rdquo;</td>
    <td style="padding:8px;border:1px solid #ccc">Creates intimacy; reveals true motivation</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Pathetic fallacy / Supernatural</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Weather, nature, or ghosts mirror emotions or signal disruption</td>
    <td style="padding:8px;border:1px solid #ccc">The storm in Macbeth on the night of Duncan&rsquo;s murder</td>
    <td style="padding:8px;border:1px solid #ccc">Atmosphere of danger; nature itself rejects the crime</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Comic relief</strong></td>
    <td style="padding:8px;border:1px solid #ccc">A humorous scene placed within a serious or tragic sequence</td>
    <td style="padding:8px;border:1px solid #ccc">The Porter scene in Macbeth (Act 2 Scene 3)</td>
    <td style="padding:8px;border:1px solid #ccc">Releases tension briefly, making the next dark moment hit harder</td>
  </tr>
</table>

<h3>Dramatic Irony &mdash; A Closer Look</h3>
<p>Dramatic irony is one of Shakespeare&rsquo;s most powerful tools. When the audience knows something the characters do not, every word on stage carries a double meaning. In <em>Romeo and Juliet</em>, Romeo drinks poison believing Juliet is truly dead &mdash; but we know she has only taken a sleeping potion. This gap between our knowledge and his creates unbearable tension and a profound sense of tragedy.</p>

<h3>Foreshadowing</h3>
<p>Shakespeare plants clues early so that later events feel both surprising and inevitable. Friar Lawrence&rsquo;s warning &mdash; <em>&ldquo;These violent delights have violent ends&rdquo;</em> &mdash; signals the catastrophe to come. When you spot foreshadowing, explain how it builds a sense of doom and prepares the audience emotionally.</p>

<h3>Comedy vs Tragedy</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Feature</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Tragedy</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Comedy</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Ending</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Ends in death and destruction</td>
    <td style="padding:8px;border:1px solid #ccc">Ends in marriage and celebration</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Hero</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Tragic hero with a hamartia (fatal flaw)</td>
    <td style="padding:8px;border:1px solid #ccc">Characters use disguise and mistaken identity</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Emotional effect</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Catharsis &mdash; emotional release through pity and fear</td>
    <td style="padding:8px;border:1px solid #ccc">Confusion is resolved; forgiveness restores harmony</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Structure</strong></td>
    <td style="padding:8px;border:1px solid #ccc">5-act structure building to catastrophe</td>
    <td style="padding:8px;border:1px solid #ccc">Complications untangled in the final act</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Examples</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth, Romeo and Juliet, Othello, Hamlet</td>
    <td style="padding:8px;border:1px solid #ccc">A Midsummer Night&rsquo;s Dream, Twelfth Night, Much Ado About Nothing</td>
  </tr>
</table>

<h3>The Fool and Comic Relief</h3>
<p>The Fool or comic character provides humour in the darkest moments, but often speaks truths that other characters cannot. In <em>King Lear</em>, the Fool mocks Lear for giving away his kingdom &mdash; speaking honestly where courtiers stay silent. Comic relief also works as a dramatic contrast: a joke right before a murder scene makes the horror feel even sharper.</p>

<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example &mdash; spotting devices in a scene:</strong><br>
  In Act 2 of <em>Macbeth</em>, right after the murder, the Porter drunkenly jokes about being a gatekeeper of Hell. This is <strong>comic relief</strong> (releasing tension after the killing), but it is also <strong>dramatic irony</strong> (the audience knows a real horror has just occurred inside) and <strong>foreshadowing</strong> (the castle truly has become a kind of Hell). One scene, three devices working together.
</div>

<h3>Staging and Atmosphere</h3>
<p>Shakespeare uses storms, darkness, ghosts, and sword fights to create atmosphere. At the Globe Theatre, audiences used their imagination, aided by the power of language. When Shakespeare writes <em>&ldquo;thunder and lightning&rdquo;</em> in a stage direction, the words that follow do the real work of making the audience feel fear and chaos.</p>

<h3>Top Tips</h3>
<ul>
  <li>Always name the device, give a specific example, and explain its effect on the audience.</li>
  <li>Look for moments where multiple devices overlap &mdash; this makes for stronger analysis.</li>
  <li>Remember that comedy and tragedy are not just about laughing or crying; they are <em>structures</em> with specific features.</li>
</ul>`,

// ── ei-08-4: Writing About Shakespeare ───────────────────────────────────────
'ei-08-4': `
<h2>Writing About Shakespeare</h2>
<p>Knowing Shakespeare&rsquo;s language, themes, and devices is only half the battle. You also need to write about them with clarity and precision. This lesson shows you exactly how to structure a Shakespeare essay that earns top marks.</p>

<h3>The PEEL Structure for Shakespeare</h3>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Step</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">What to Do</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Shakespeare Example</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Point</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Make a clear claim about a character, theme, or device</td>
    <td style="padding:8px;border:1px solid #ccc">Shakespeare presents Macbeth as a character torn apart by guilt.</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Evidence</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Embed a SHORT quotation (2&ndash;6 words ideally)</td>
    <td style="padding:8px;border:1px solid #ccc">He fears his hands will &ldquo;pluck out mine eyes.&rdquo;</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Explain</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Analyse specific words &mdash; what do they suggest, imply, or reveal?</td>
    <td style="padding:8px;border:1px solid #ccc">The violent verb &ldquo;pluck&rdquo; suggests self-punishment; he cannot bear to see what he has done.</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Link</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Connect to context, the question, or a wider theme</td>
    <td style="padding:8px;border:1px solid #ccc">An Elizabethan audience would see this as divine punishment for regicide &mdash; a sin against God&rsquo;s ordained order.</td>
  </tr>
</table>

<h3>Embedding Quotations</h3>
<p>The key rule: weave the quote into YOUR sentence so it reads naturally. Never just dump a long quotation on its own.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Weak Embedding</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Strong Embedding</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Macbeth says &ldquo;Is this a dagger which I see before me?&rdquo;</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth hallucinates &ldquo;a dagger&rdquo; before him, revealing his fractured mental state.</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc">Lady Macbeth says &ldquo;Out, damned spot! Out, I say!&rdquo;</td>
    <td style="padding:8px;border:1px solid #ccc">Lady Macbeth&rsquo;s desperate cry to remove the &ldquo;damned spot&rdquo; shows guilt has destroyed her composure.</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc">Romeo says &ldquo;But soft, what light through yonder window breaks?&rdquo;</td>
    <td style="padding:8px;border:1px solid #ccc">Romeo compares Juliet to &ldquo;light&rdquo; breaking through darkness, elevating her above the ordinary world.</td>
  </tr>
</table>

<h3>Analysing Word Choices</h3>
<p>Top-mark answers zoom in on individual words and explore their connotations. Pick one or two specific words from a quotation and ask: what does this word suggest? What images or feelings does it create?</p>
<div style="background:#fff3e0;padding:1em;border-radius:8px;margin:1em 0">
  <strong>Example &mdash; zooming in on a word:</strong><br>
  Quote: Lady Macbeth tells her husband to &ldquo;look like the innocent flower, but be the serpent under it.&rdquo;<br><br>
  The word <strong>&ldquo;serpent&rdquo;</strong> carries connotations of the Devil and the serpent in the Garden of Eden, suggesting that the Macbeths&rsquo; deception is not just dishonest but deeply <em>evil</em>. The contrast between &ldquo;flower&rdquo; and &ldquo;serpent&rdquo; reinforces the theme of <strong>appearance vs reality</strong> &mdash; beauty hides danger. Shakespeare&rsquo;s audience, familiar with Biblical imagery, would immediately recognise this as a warning of the sin to come.
</div>

<h3>Using Context</h3>
<p>Context means the historical and social background of the play. Do not just state a fact &mdash; link it directly to your analysis.</p>
<table style="width:100%;border-collapse:collapse;margin:1em 0">
  <tr>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Elizabethan Context</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Brief Explanation</th>
    <th style="background:#f59e0b;color:white;padding:8px;border:1px solid #ccc;text-align:left">Most Relevant Plays</th>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>The Great Chain of Being</strong></td>
    <td style="padding:8px;border:1px solid #ccc">A fixed hierarchy: God &rarr; King &rarr; Nobles &rarr; Commoners. Disrupting it was seen as unnatural.</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth, King Lear</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Divine Right of Kings</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Kings were chosen by God; killing a king was a sin against heaven.</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth, Richard II</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Role of Women</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Women were expected to be obedient, silent, and submissive to men.</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth, The Taming of the Shrew, Much Ado About Nothing</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Witchcraft and the Supernatural</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Belief in witches was widespread; King James I wrote a book on witchcraft.</td>
    <td style="padding:8px;border:1px solid #ccc">Macbeth, Hamlet, The Tempest</td>
  </tr>
  <tr>
    <td style="padding:8px;border:1px solid #ccc"><strong>Social Hierarchy</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Strict class divisions determined what you could wear, say, and do.</td>
    <td style="padding:8px;border:1px solid #ccc">Romeo and Juliet, Twelfth Night</td>
  </tr>
  <tr style="background:#fafafa">
    <td style="padding:8px;border:1px solid #ccc"><strong>Theatre and Performance</strong></td>
    <td style="padding:8px;border:1px solid #ccc">Plays were performed in daylight with no scenery; boys played female roles.</td>
    <td style="padding:8px;border:1px solid #ccc">A Midsummer Night&rsquo;s Dream, Twelfth Night</td>
  </tr>
</table>
<p>How to use context well: <em>&ldquo;An Elizabethan audience would have been shocked by Lady Macbeth&rsquo;s ambition because women were expected to be obedient and submissive. Her command to &lsquo;unsex me here&rsquo; directly challenges the natural order.&rdquo;</em></p>

<h3>Planning a Shakespeare Essay</h3>
<ol>
  <li><strong>Introduction:</strong> Brief context + a clear thesis (your overall argument).</li>
  <li><strong>Paragraph 1:</strong> First point using PEEL &mdash; focus on character or theme.</li>
  <li><strong>Paragraph 2:</strong> Second point using PEEL &mdash; develop or contrast your first idea.</li>
  <li><strong>Paragraph 3:</strong> Third point using PEEL &mdash; explore a device or contextual link.</li>
  <li><strong>Conclusion:</strong> Summarise your argument and comment on wider significance &mdash; why does this still matter today?</li>
</ol>

<h3>Remember</h3>
<ul>
  <li>Keep quotations <strong>short</strong> (2&ndash;6 words) and embed them into your own sentences.</li>
  <li>Zoom in on <strong>specific words</strong> and explore what they suggest or imply.</li>
  <li>Always <strong>link context</strong> to your analysis &mdash; never state it in isolation.</li>
  <li>Use PEEL for every paragraph to keep your writing focused and analytical.</li>
</ul>`

}); // end Object.assign(LESSONS)
