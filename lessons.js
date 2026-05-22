// lessons.js — Pre-written lesson HTML for every island.
// Format mirrors what the AI prompt returns: h4 headings, ul/dl, .example-box

var LESSONS = {

"island-1": `<h4>Introduction</h4>
<p>Number and place value are the foundation of all mathematics. Every digit in a number has a <strong>value</strong> that depends on its <strong>position</strong> — and knowing this lets you round, order and calculate with confidence. Master this island first and everything else becomes easier.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Each digit's value depends on its position: thousands, hundreds, tens, ones, tenths, hundredths.</li>
<li><strong>Rounding rule:</strong> look at the digit to the right of where you're rounding — if it's 5 or more, round up; if it's 4 or less, round down.</li>
<li><strong>Negative numbers</strong> are below zero. On a number line, numbers get smaller as you move left. −7 is less than −2.</li>
<li><strong>BODMAS</strong> sets the order of operations: Brackets, Orders (powers/roots), Division, Multiplication, Addition, Subtraction.</li>
<li>When multiplying or dividing with negatives: same signs → positive answer; different signs → negative answer.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Calculate 3 + 4 × 2 − (8 − 3)</p>
<p><strong>Solution:</strong><br>
Step 1 — Brackets first: (8 − 3) = 5<br>
Step 2 — Multiplication: 4 × 2 = 8<br>
Step 3 — Left to right, add/subtract: 3 + 8 − 5 = <strong>6</strong></p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Place value</dt><dd>The value a digit has because of its position in a number (e.g. the 3 in 4,<strong>3</strong>21 is worth 300).</dd>
<dt>Integer</dt><dd>Any whole number, positive, negative or zero (e.g. −4, 0, 7).</dd>
<dt>BODMAS</dt><dd>The order in which operations must be carried out: Brackets, Orders, Division, Multiplication, Addition, Subtraction.</dd>
<dt>Rounding</dt><dd>Replacing a number with a nearby, simpler number of a given accuracy (e.g. 4,732 rounded to the nearest hundred is 4,700).</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Calculating left to right without BODMAS: 3 + 4 × 2 = 14 — ✅ Correct: multiply first, 3 + 8 = <strong>11</strong>.</li>
<li>❌ Thinking −7 is bigger than −2 because 7 > 2 — ✅ Correct: on a number line −7 is further left, so it is <strong>smaller</strong>.</li>
<li>❌ Rounding 4,750 to the nearest hundred as 4,700 — ✅ Correct: the tens digit is 5, so round <strong>up</strong> to 4,800.</li>
</ul>`,

"island-2": `<h4>Introduction</h4>
<p>Fractions, decimals and percentages are three different ways of writing the same value — and being able to switch between them is one of the most useful skills in maths. Once you see that ¾, 0.75 and 75% are identical, comparing and calculating becomes straightforward.</p>
<h4>📌 Key Points</h4>
<ul>
<li>To convert a <strong>fraction to a decimal</strong>: divide the numerator by the denominator (e.g. 3 ÷ 4 = 0.75).</li>
<li>To convert a <strong>decimal to a percentage</strong>: multiply by 100 (e.g. 0.75 × 100 = 75%).</li>
<li>To find <strong>a percentage of an amount</strong>: convert the percentage to a decimal and multiply (e.g. 30% of 80 = 0.3 × 80 = 24).</li>
<li><strong>Equivalent fractions</strong> have the same value: ½ = 2⁄4 = 4⁄8. Multiply or divide top and bottom by the same number.</li>
<li>To compare FDP, convert everything to decimals first — then order is easy.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Put in order, smallest to largest: 3⁄5, 0.58, 62%, 0.6</p>
<p><strong>Solution:</strong><br>
Convert all to decimals:<br>
3⁄5 = 3 ÷ 5 = 0.60 &nbsp;|&nbsp; 0.58 &nbsp;|&nbsp; 62% = 0.62 &nbsp;|&nbsp; 0.6 = 0.60<br>
Order: 0.58 &lt; 0.60 = 0.60 &lt; 0.62<br>
Answer: <strong>0.58, 3⁄5 and 0.6 (tied), 62%</strong></p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Numerator</dt><dd>The top number of a fraction — how many parts you have.</dd>
<dt>Denominator</dt><dd>The bottom number of a fraction — how many equal parts the whole is split into.</dd>
<dt>Equivalent fractions</dt><dd>Fractions that represent the same value: ½ = 2⁄4 = 50%.</dd>
<dt>Percentage</dt><dd>A number expressed as a fraction of 100. "Per cent" means "out of 100".</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Writing 3⁄5 as 0.35 (just placing digits) — ✅ Correct: <strong>divide</strong> 3 ÷ 5 = 0.6.</li>
<li>❌ Finding 20% by dividing by 20 — ✅ Correct: divide by 5 (because 20% = 1⁄5), or multiply by 0.2.</li>
<li>❌ Assuming the fraction with the bigger denominator is always bigger — ✅ Correct: convert to decimals to compare reliably.</li>
</ul>`,

"island-3": `<h4>Introduction</h4>
<p>Algebra is the language of mathematics — instead of specific numbers, we use letters to represent unknown values. This lets us write general rules that work for any number. Year 7 algebra covers expressions, sequences and solving equations.</p>
<h4>📌 Key Points</h4>
<ul>
<li>An <strong>expression</strong> is a collection of terms (e.g. 3x + 5). An <strong>equation</strong> has an equals sign and can be solved (e.g. 3x + 5 = 14).</li>
<li><strong>Substitution</strong>: replace the letter with its value and calculate. Always put brackets around the substituted number.</li>
<li>To find the <strong>nth term</strong> of a linear sequence: (common difference)n + (first term − common difference).</li>
<li>To <strong>solve an equation</strong>: do the same operation to both sides until the letter is alone.</li>
<li><strong>Like terms</strong> have exactly the same letter part and can be collected: 3x + 2x = 5x, but 3x + 2y cannot be simplified.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Solve 4x − 3 = 13. Also find the nth term of 5, 8, 11, 14…</p>
<p><strong>Solution (equation):</strong><br>
Add 3 to both sides: 4x = 16 → Divide both sides by 4: <strong>x = 4</strong><br>
Check: 4(4) − 3 = 16 − 3 = 13 ✓<br><br>
<strong>Solution (nth term):</strong><br>
Common difference = 3, first term = 5<br>
nth term = 3n + (5 − 3) = <strong>3n + 2</strong><br>
Check n=1: 3(1)+2 = 5 ✓ &nbsp; n=3: 3(3)+2 = 11 ✓</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Variable</dt><dd>A letter representing an unknown or changing number (e.g. x, y, n).</dd>
<dt>Expression</dt><dd>A mathematical phrase with numbers and variables but no equals sign (e.g. 2x + 3).</dd>
<dt>Equation</dt><dd>A statement that two expressions are equal, containing an equals sign (e.g. 2x + 3 = 11).</dd>
<dt>nth term</dt><dd>A formula that generates any term in a sequence when you substitute the term number n.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Substituting x = 3 into 2x as 23 — ✅ Correct: 2x means 2 <strong>×</strong> x, so 2 × 3 = 6.</li>
<li>❌ Collecting unlike terms: 3x + 4 = 7x — ✅ Correct: 3x and 4 are unlike terms; they <strong>cannot</strong> be combined.</li>
<li>❌ Only dividing one side when solving — ✅ Correct: whatever you do to one side, <strong>do to both</strong> sides.</li>
</ul>`,

"island-4": `<h4>Introduction</h4>
<p>Geometry covers the properties of shapes, angles and measurements. You will learn to classify triangles and quadrilaterals, calculate areas and perimeters, and use angle facts to find missing angles — skills that appear throughout all of maths.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Angles in a <strong>triangle</strong> add up to 180°. Angles in a <strong>quadrilateral</strong> add up to 360°.</li>
<li><strong>Area of a triangle</strong> = ½ × base × perpendicular height. Always use the vertical height, not the slant.</li>
<li><strong>Area of a rectangle</strong> = length × width. <strong>Perimeter</strong> = sum of all sides.</li>
<li>Triangle types by sides: <strong>equilateral</strong> (all equal), <strong>isosceles</strong> (two equal), <strong>scalene</strong> (all different).</li>
<li>Coordinates are written (x, y) — across first, then up. Remember: "along the corridor and up the stairs".</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> A triangle has angles 47° and 83°. Find the third angle. Also find the area if base = 10 cm, height = 6 cm.</p>
<p><strong>Solution (angles):</strong><br>
Third angle = 180° − 47° − 83° = <strong>50°</strong><br><br>
<strong>Solution (area):</strong><br>
Area = ½ × 10 × 6 = ½ × 60 = <strong>30 cm²</strong></p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Perimeter</dt><dd>The total distance around the outside of a shape. Measured in cm, m etc.</dd>
<dt>Area</dt><dd>The amount of space inside a 2D shape. Measured in cm², m² etc.</dd>
<dt>Perpendicular height</dt><dd>The vertical height of a triangle — measured at right angles to the base, NOT the slant side.</dd>
<dt>Quadrilateral</dt><dd>Any four-sided polygon. Includes squares, rectangles, parallelograms and trapeziums.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Using the slant height in the triangle area formula — ✅ Correct: always use the <strong>perpendicular</strong> (vertical) height.</li>
<li>❌ Giving area in cm instead of cm² — ✅ Correct: area is always in <strong>square units</strong>.</li>
<li>❌ Assuming all quadrilaterals have angles of 90° — ✅ Correct: only rectangles and squares are guaranteed to have right angles.</li>
</ul>`,

"island-5": `<h4>Introduction</h4>
<p>Statistics helps us make sense of data by summarising and displaying it. The four key measures of average and spread — mean, median, mode and range — each tell us something different about a data set, and choosing the right one matters.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Mean</strong> = sum of all values ÷ number of values. Best average for evenly spread data with no extreme values.</li>
<li><strong>Median</strong> = the middle value when data is ordered. For an even number of values, find the mean of the two middle ones.</li>
<li><strong>Mode</strong> = the most frequent value. There can be more than one mode, or no mode at all.</li>
<li><strong>Range</strong> = highest − lowest. Measures spread, not average.</li>
<li>Bar charts show frequency per category. Pie charts show proportions of a whole (must total 360°).</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Data: 4, 7, 2, 9, 7, 3. Find the mean, median, mode and range.</p>
<p><strong>Solution:</strong><br>
Mean = (4+7+2+9+7+3) ÷ 6 = 32 ÷ 6 ≈ <strong>5.3</strong><br>
Ordered: 2, 3, 4, <u>7</u>, 7, 9 → two middle values: 4 and 7 → Median = (4+7) ÷ 2 = <strong>5.5</strong><br>
Mode = <strong>7</strong> (appears twice)<br>
Range = 9 − 2 = <strong>7</strong></p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Mean</dt><dd>The arithmetic average: total sum divided by the number of values.</dd>
<dt>Median</dt><dd>The middle value in an ordered data set.</dd>
<dt>Mode</dt><dd>The value that appears most often in a data set.</dd>
<dt>Range</dt><dd>A measure of spread: the difference between the highest and lowest values.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Finding the median without ordering the data first — ✅ Correct: <strong>always order</strong> before finding the middle.</li>
<li>❌ Confusing range with an average — ✅ Correct: range measures <strong>spread</strong>, not a typical value.</li>
<li>❌ Dividing by the total when calculating the mean — ✅ Correct: divide by the <strong>number of values</strong>, not their sum.</li>
</ul>`,

"island-6": `<h4>Introduction</h4>
<p>Reading comprehension is the skill of deeply understanding a text — not just the words on the page, but what they <em>suggest</em>. Inference, annotation and identifying fact versus opinion are skills you will use in every exam subject, not just English.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Inference</strong>: using evidence in the text to work out something the author hasn't directly stated. Always cite a quote.</li>
<li><strong>Fact</strong> can be verified as true or false. <strong>Opinion</strong> is a personal view — look for words like "best", "should", "I believe".</li>
<li><strong>Annotating</strong> means adding your own notes to a text: underline key words, circle devices, write "this suggests…" in the margin.</li>
<li><strong>Author's purpose</strong>: texts are written to inform, entertain, persuade, advise or describe — identifying this shapes how you read.</li>
<li>Always use the phrase <em>"This suggests…"</em> or <em>"This implies…"</em> when explaining an inference.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> "She slammed the door so hard the windowpanes rattled." What can you infer about the character?</p>
<p><strong>Solution:</strong><br>
Quote: "slammed the door so hard the windowpanes rattled"<br>
Inference: The word "slammed" and the physical force implied by rattling glass suggest she is <strong>extremely angry or distressed</strong>. The author doesn't say this — we work it out from the description of her action.<br>
Model answer: <em>"The verb 'slammed' suggests the character is furious, as the violent force of the action implies she cannot control her emotions."</em></p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Inference</dt><dd>A conclusion reached by reading between the lines — using clues rather than stated facts.</dd>
<dt>Deduction</dt><dd>Similar to inference; arriving at a logical conclusion from evidence in the text.</dd>
<dt>Annotation</dt><dd>Notes written on or alongside a text to record observations, questions or analysis.</dd>
<dt>Author's purpose</dt><dd>The reason a text was written — to inform, persuade, entertain, advise or describe.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Writing a quote then stopping — ✅ Correct: always <strong>explain</strong> what the quote shows using "this suggests…"</li>
<li>❌ Treating opinions as facts because they sound confident — ✅ Correct: ask "can this be proven?" If not, it's an <strong>opinion</strong>.</li>
<li>❌ Re-telling the story instead of analysing — ✅ Correct: focus on <strong>how</strong> the author creates meaning, not just <strong>what</strong> happens.</li>
</ul>`,

"island-7": `<h4>Introduction</h4>
<p>Creative writing is about making deliberate choices to affect your reader. Great writers don't just tell a story — they control atmosphere, tension and emotion through specific techniques. Mastering structure and the "show, don't tell" principle will transform your writing.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The <strong>story mountain</strong> has five stages: Opening → Build-up → Climax → Resolution → Ending.</li>
<li><strong>Show, don't tell</strong>: instead of writing "he was scared", show it — "his hands trembled; he pressed himself against the cold wall".</li>
<li>Vary your <strong>sentence lengths</strong>: short sentences create tension. Longer, flowing sentences slow the pace and build atmosphere.</li>
<li>Start with a <strong>powerful opening</strong>: drop the reader into the action (in medias res), set atmosphere, or pose an intriguing question.</li>
<li>Use all five senses in descriptions — sight, sound, smell, taste and touch — to make scenes feel real.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Rewrite this sentence using "show, don't tell": "The old house was scary."</p>
<p><strong>Solution:</strong><br>
❌ Tell: "The old house was scary."<br>
✅ Show: <em>"The front door hung open on one rusted hinge. Inside, something moved. A floorboard groaned. She didn't go in."</em><br><br>
Notice: no adjective tells us it's scary — the details create the feeling. Short sentences build tension. The reader draws the conclusion.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Narrative</dt><dd>A story or account of events told from a particular perspective.</dd>
<dt>Protagonist</dt><dd>The main character — the one the reader follows.</dd>
<dt>Tension</dt><dd>A feeling of suspense or anxiety created by the writer to keep the reader engaged.</dd>
<dt>In medias res</dt><dd>Latin for "in the middle of things" — starting a story in the middle of the action.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Starting with "My name is…" or "One day…" — ✅ Correct: start with <strong>action, atmosphere or a hook</strong> that grabs attention immediately.</li>
<li>❌ Using the same sentence length throughout — ✅ Correct: <strong>vary sentence length</strong> to control pace and tension.</li>
<li>❌ Over-describing everything equally — ✅ Correct: describe what <strong>matters</strong> — use detail selectively for impact.</li>
</ul>`,

"island-8": `<h4>Introduction</h4>
<p>Grammar and punctuation are the technical tools of writing — they signal meaning, control pace and show the examiner that you have precise control over language. Mastering clauses, apostrophes and advanced punctuation marks like the semicolon will lift your grade significantly.</p>
<h4>📌 Key Points</h4>
<ul>
<li>A <strong>clause</strong> contains a subject and a verb and can stand alone: "She ran." A <strong>phrase</strong> has no complete verb: "through the dark forest".</li>
<li><strong>Apostrophe for contraction</strong>: marks a missing letter — it's = it is; don't = do not.</li>
<li><strong>Apostrophe for possession</strong>: the dog's lead (one dog). The dogs' leads (multiple dogs — apostrophe after the s).</li>
<li><strong>Colon</strong>: introduces a list or an explanation. <strong>Semicolon</strong>: joins two complete, closely related sentences.</li>
<li><strong>Subordinate clauses</strong> add extra information and need a main clause to make sense: "Although it was raining, she went out."</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Punctuate correctly: "its the dogs favourite toy the children love it"</p>
<p><strong>Solution:</strong><br>
<em>"It's the dog's favourite toy; the children love it."</em><br><br>
• it's = it is (contraction) → apostrophe for missing letter<br>
• dog's = belonging to the dog → possessive apostrophe<br>
• Semicolon joins two complete related clauses</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Clause</dt><dd>A group of words containing a subject and a verb. A main clause makes sense alone; a subordinate clause does not.</dd>
<dt>Subordinate clause</dt><dd>A dependent clause that adds information but cannot stand alone as a sentence (e.g. "because she was tired").</dd>
<dt>Colon</dt><dd>Punctuation used to introduce a list or an explanation of what came before it.</dd>
<dt>Semicolon</dt><dd>Punctuation that joins two grammatically complete, related sentences into one.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Writing "its" when you mean "it is" — ✅ Correct: if you can replace it with "it is", use <strong>it's</strong> (with apostrophe).</li>
<li>❌ Using a comma to join two full sentences — ✅ Correct: use a <strong>semicolon</strong> or a connective like "and", "but", "because".</li>
<li>❌ Apostrophe in simple plurals: "apple's for sale" — ✅ Correct: plurals <strong>never</strong> need an apostrophe — "apples for sale".</li>
</ul>`,

"island-9": `<h4>Introduction</h4>
<p>Literary devices are the tools poets and writers use to create vivid images, emphasise ideas and provoke emotion. Being able to identify a device is only half the skill — the real mark of a good student is being able to explain its <strong>effect</strong> on the reader.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Simile</strong>: compares using "like" or "as" — "the moon was <em>like</em> a silver coin".</li>
<li><strong>Metaphor</strong>: says one thing <em>is</em> another — "the moon <em>was</em> a silver coin". More direct and powerful than a simile.</li>
<li><strong>Personification</strong>: gives human qualities to non-human things — "the wind <em>whispered</em> through the trees".</li>
<li><strong>Alliteration</strong>: repetition of the same consonant sound at the start of nearby words — creates rhythm and mood.</li>
<li><strong>Onomatopoeia</strong>: words that sound like what they describe — crash, sizzle, hiss.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Analyse: "The cruel, clawing cold crept into her bones."</p>
<p><strong>Solution:</strong><br>
Device 1 — <strong>Alliteration</strong>: "cruel, clawing cold crept" — the repeated hard 'c' sound creates a harsh, uncomfortable feeling, mirroring the pain of the cold.<br>
Device 2 — <strong>Personification</strong>: the cold "crept" — giving the cold a stealthy, almost predatory quality makes it feel threatening and inescapable.<br><br>
Model answer: <em>"The alliteration of 'cruel, clawing cold crept' creates a harsh, relentless rhythm that reflects the biting, inescapable nature of the cold."</em></p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Simile</dt><dd>A comparison using "like" or "as" — highlights a similarity between two different things.</dd>
<dt>Metaphor</dt><dd>A direct comparison stating one thing IS another — creates a stronger, more immediate image than a simile.</dd>
<dt>Personification</dt><dd>Attributing human characteristics to non-human things to create vivid, emotional images.</dd>
<dt>Alliteration</dt><dd>Repetition of the same consonant sound at the start of neighbouring words — creates rhythm and emphasis.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Identifying a device without explaining its effect — ✅ Correct: always say <strong>what effect it has on the reader</strong>.</li>
<li>❌ Calling every comparison a "simile" — ✅ Correct: simile uses "like/as"; without those words it is a <strong>metaphor</strong>.</li>
<li>❌ Listing devices robotically — ✅ Correct: weave analysis into a flowing <strong>PEE paragraph</strong>.</li>
</ul>`,

"island-10": `<h4>Introduction</h4>
<p>Speaking and listening skills are assessed formally in school and are vital in everyday life — job interviews, debates, presentations and conversations all depend on them. Learning to structure your spoken arguments and listen actively sets you apart from most speakers.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>PEEL</strong> works for speech too: Point → Evidence → Explanation → Link. Structure every argument you make.</li>
<li><strong>Active listening</strong>: maintain eye contact, nod, avoid interrupting, and ask follow-up questions to show engagement.</li>
<li><strong>Formal language</strong>: no slang or contractions, complete sentences, standard grammar. Use it in presentations and debates.</li>
<li><strong>Confident delivery</strong>: vary your tone and pace, project your voice, use pauses for effect, and make eye contact — not just with your notes.</li>
<li>In a debate, always acknowledge the <strong>other side</strong> before rebutting — it shows maturity and makes your argument stronger.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Write a PEEL spoken argument for: "School uniform should be abolished."</p>
<p><strong>Solution:</strong><br>
<strong>Point:</strong> "School uniform suppresses students' individuality and self-expression."<br>
<strong>Evidence:</strong> "A 2019 study found that 68% of students felt uniform prevented them from expressing their identity."<br>
<strong>Explanation:</strong> "This is significant because adolescence is a critical period for developing a sense of self — restricting expression may harm students' confidence and wellbeing."<br>
<strong>Link:</strong> "It is therefore clear that uniform policy needs to be urgently reconsidered."</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Rhetoric</dt><dd>The art of persuasive speaking — using language deliberately to influence an audience.</dd>
<dt>PEEL</dt><dd>A structure for arguments: Point, Evidence, Explanation, Link.</dd>
<dt>Register</dt><dd>The level of formality in language — formal register suits public speaking; informal suits conversation with friends.</dd>
<dt>Active listening</dt><dd>Fully concentrating on a speaker, showing engagement through body language and follow-up questions.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Reading word-for-word from a script — ✅ Correct: use <strong>brief notes</strong> as prompts and speak naturally.</li>
<li>❌ Speaking too quickly when nervous — ✅ Correct: <strong>slow down</strong>, use deliberate pauses — silence is powerful.</li>
<li>❌ Dismissing the opposing view — ✅ Correct: acknowledge it and <strong>rebut</strong> it — this shows a stronger argument.</li>
</ul>`,

"island-24": `<h4>Introduction</h4>
<p>Ratios and proportion describe relationships between quantities — how things compare and scale. These skills are used in recipes, maps, scale models, currency exchange and countless real-world situations. Speed, distance and time calculations are a key part of this island.</p>
<h4>📌 Key Points</h4>
<ul>
<li>To <strong>simplify a ratio</strong>: divide both parts by their Highest Common Factor (e.g. 12:18 → ÷6 → 2:3).</li>
<li>To <strong>divide in a ratio</strong>: find the total number of parts, calculate the value of one part, then multiply.</li>
<li>The <strong>unitary method</strong>: find the value of 1 unit first, then scale up (e.g. if 5 items cost £3.50, 1 item = £0.70, so 8 items = £5.60).</li>
<li><strong>Speed = Distance ÷ Time</strong>. Use the SDT triangle: cover the letter you want to find.</li>
<li>Map scales use ratio: 1:25,000 means 1 cm on the map = 25,000 cm = 250 m in real life.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Share £72 in the ratio 3:5. Also: a car travels 195 km in 2.5 hours — find its speed.</p>
<p><strong>Solution (ratio):</strong><br>
Total parts = 3 + 5 = 8 &nbsp;|&nbsp; One part = £72 ÷ 8 = £9<br>
Shares: 3 × £9 = <strong>£27</strong> and 5 × £9 = <strong>£45</strong> &nbsp; Check: £27 + £45 = £72 ✓<br><br>
<strong>Solution (speed):</strong><br>
Speed = Distance ÷ Time = 195 ÷ 2.5 = <strong>78 km/h</strong></p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Ratio</dt><dd>A comparison of two or more quantities showing how many times one contains the other (e.g. 3:5).</dd>
<dt>Proportion</dt><dd>An equation stating that two ratios are equal; also describes a part in relation to the whole.</dd>
<dt>Unitary method</dt><dd>Finding the value of one unit first, then scaling to find any other quantity.</dd>
<dt>Scale</dt><dd>A ratio comparing a measurement on a map or model to the real-life measurement.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Forgetting to add ratio parts before dividing — ✅ Correct: total parts = <strong>sum</strong> of all parts in the ratio.</li>
<li>❌ Writing speed in km instead of km/h — ✅ Correct: speed has a <strong>rate unit</strong> — distance per unit of time.</li>
<li>❌ Simplifying ratio 4:6 to 2:4 — ✅ Correct: divide by the <strong>HCF</strong> (which is 2): 4:6 → <strong>2:3</strong>.</li>
</ul>`,

"island-25": `<h4>Introduction</h4>
<p>Shakespeare wrote his plays over 400 years ago, yet his stories of love, power, jealousy and fate still feel deeply human today. Understanding the theatrical context — the Globe, the audience, the stagecraft — helps you appreciate why he wrote the way he did.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The <strong>Globe Theatre</strong> (1599) was open-air; no lighting effects, no elaborate sets — Shakespeare used language to create atmosphere.</li>
<li><strong>Groundlings</strong> stood in the yard for 1p and were very vocal. Shakespeare had to entertain all classes at once.</li>
<li>All female roles were played by <strong>boy actors</strong> — there were no women on the Elizabethan stage.</li>
<li>Key dramatic techniques: <strong>aside</strong> (character speaks to audience, others can't hear), <strong>soliloquy</strong> (character alone on stage revealing inner thoughts).</li>
<li>Use the <strong>PEE</strong> structure for analytical writing: Point → Evidence (quote) → Explanation of effect.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Write a PEE paragraph on how Shakespeare presents Puck as mischievous in <em>A Midsummer Night's Dream</em>.</p>
<p><strong>Solution:</strong><br>
<strong>Point:</strong> Shakespeare presents Puck as playfully mischievous and superior to humans.<br>
<strong>Evidence:</strong> When Puck says "Lord, what fools these mortals be!", he uses an exclamation to express delight in human confusion.<br>
<strong>Explanation:</strong> The noun "fools" reduces the human characters to objects of amusement, suggesting Puck views them with affectionate contempt. This reinforces the play's theme that love makes people irrational and ridiculous.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Soliloquy</dt><dd>A speech where a character is alone on stage and reveals their inner thoughts to the audience.</dd>
<dt>Aside</dt><dd>A brief remark spoken to the audience that other characters on stage cannot hear.</dd>
<dt>Theme</dt><dd>A central idea or message explored throughout a play (e.g. love, power, appearance vs reality).</dd>
<dt>Stagecraft</dt><dd>The techniques used to create theatrical effects — including language, movement, costume and props.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Retelling the plot instead of analysing — ✅ Correct: focus on <strong>how</strong> Shakespeare creates effects, not just <strong>what</strong> happens.</li>
<li>❌ Vague explanations: "this is effective" — ✅ Correct: say <strong>why</strong> it is effective and what it suggests about theme or character.</li>
<li>❌ Forgetting context — ✅ Correct: link analysis to <strong>Elizabethan audience expectations</strong> when relevant.</li>
</ul>`,

"island-26": `<h4>Introduction</h4>
<p>Non-fiction writing appears everywhere — newspapers, speeches, blogs, letters and adverts. Being able to read these texts critically and write them effectively is one of the most practical skills English teaches. Always ask: who is this for, and what does it want me to think or do?</p>
<h4>📌 Key Points</h4>
<ul>
<li>Always identify <strong>Purpose</strong> (why?), <strong>Audience</strong> (who?) and <strong>Tone</strong> (how?) — known as PAT.</li>
<li>News articles use the <strong>inverted pyramid</strong>: most important facts first (5 Ws: Who, What, Where, When, Why).</li>
<li>Persuasive writing techniques — <strong>AFOREST</strong>: Anecdote, Fact, Opinion, Rhetorical question, Emotive language, Statistics, Triplet (rule of three).</li>
<li>The <strong>rule of three</strong> makes ideas memorable: "fast, reliable and affordable". Three feels complete to the ear.</li>
<li>Match your <strong>register</strong> to purpose: formal for speeches/letters; informal for blogs.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Identify the persuasive techniques in: "Every day, thousands of children go to school hungry. Surely we can do better? A well-fed child is a learning child, a happy child, a future leader."</p>
<p><strong>Solution:</strong><br>
• "Thousands of children go to school hungry" — <strong>statistic / emotive language</strong> creates urgency and sympathy.<br>
• "Surely we can do better?" — <strong>rhetorical question</strong> implies the answer is obvious and challenges the reader.<br>
• "a learning child, a happy child, a future leader" — <strong>rule of three / tricolon</strong> builds rhythm and makes the argument feel inevitable.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Rhetoric</dt><dd>The art of persuasive language — using words deliberately to move, convince or motivate an audience.</dd>
<dt>Tone</dt><dd>The attitude or feeling conveyed by the writing — formal, humorous, angry, sympathetic etc.</dd>
<dt>AFOREST</dt><dd>A mnemonic for persuasive techniques: Anecdote, Fact, Opinion, Rhetorical question, Emotive language, Statistics, Triplet.</dd>
<dt>Register</dt><dd>The level of formality in language, chosen to suit the audience and purpose.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Writing persuasively without thinking about audience — ✅ Correct: always ask <strong>who</strong> you are writing for and adjust tone accordingly.</li>
<li>❌ Using every technique in every sentence — ✅ Correct: use techniques <strong>purposefully</strong> — quality over quantity.</li>
<li>❌ Confusing fact and opinion in your own writing — ✅ Correct: use facts to <strong>support</strong> opinions, not instead of them.</li>
</ul>`,

"island-27": `<h4>Introduction</h4>
<p>Myths, legends and Gothic fiction all use the power of storytelling to explore fear, heroism and the unknown. From ancient Greek gods to Victorian haunted houses, these genres have shaped literature for thousands of years — and their techniques are still used by writers today.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Myth</strong>: explains natural phenomena through gods and supernatural beings (e.g. Persephone explains the seasons).</li>
<li><strong>Legend</strong>: based loosely on historical figures; celebrates human heroism (e.g. King Arthur, Beowulf).</li>
<li><strong>Gothic conventions</strong>: decayed settings, supernatural events, darkness, death, madness and heightened emotion.</li>
<li><strong>Pathetic fallacy</strong>: using weather or environment to reflect a character's mood — "the storm raged as she opened the letter".</li>
<li><strong>Atmosphere</strong> in Gothic writing is built through slow, sensory description — not just by stating that something is scary.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Write a Gothic description of an abandoned house using at least two techniques.</p>
<p><strong>Solution:</strong><br>
<em>"The iron gate hung at an angle, its hinges bleeding rust onto the cracked path below. Above, clouds pressed down like a grey fist. Not a single window was intact; the broken panes stared out like hollow eyes, watching."</em><br><br>
Techniques used:<br>
• <strong>Pathetic fallacy</strong>: "clouds pressed down like a grey fist" — oppressive weather mirrors threat.<br>
• <strong>Personification</strong>: windows "staring like hollow eyes" — the house seems alive and sinister.<br>
• <strong>Simile</strong>: "grey fist" — the sky becomes a threat, suggesting violence.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Gothic</dt><dd>A genre characterised by dark, atmospheric settings, the supernatural and intense emotion.</dd>
<dt>Pathetic fallacy</dt><dd>Using weather or environment to reflect a character's mood or the atmosphere of a scene.</dd>
<dt>Atmosphere</dt><dd>The mood or feeling created in a piece of writing through language, setting and description.</dd>
<dt>Archetype</dt><dd>A recurring character type found across myths and stories — the hero, the villain, the trickster.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Just listing Gothic features without using them — ✅ Correct: <strong>apply</strong> the conventions to your own descriptive writing.</li>
<li>❌ Stating "this creates atmosphere" without explaining how — ✅ Correct: name the technique and say <strong>what specific feeling</strong> it creates.</li>
<li>❌ Confusing myth and legend — ✅ Correct: myths feature <strong>gods and explain the world</strong>; legends feature <strong>human heroes</strong>.</li>
</ul>`


,

"island-11": `<h4>Introduction</h4>
<p>All living things are made of cells — the basic building blocks of life. Understanding cell structure and the seven life processes gives you the foundation for all of biology. Every organism, from a bacterium to a blue whale, must carry out the same essential functions to stay alive.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Animal cells</strong> contain: nucleus, cell membrane, cytoplasm, mitochondria, ribosomes.</li>
<li><strong>Plant cells</strong> have everything animal cells have, PLUS: cell wall (cellulose), chloroplasts, large permanent vacuole.</li>
<li><strong>MRS GREN</strong> — the 7 life processes all living things must carry out: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.</li>
<li>Organisation: Cell → Tissue → Organ → Organ System → Organism.</li>
<li><strong>Specialised cells</strong> have adaptations for their function: red blood cells have no nucleus (more room for haemoglobin); root hair cells have a large surface area for absorbing water.</li>
</ul>
<div class="lesson-diagram" data-diagram="cell-comparison"><p class="diagram-caption">Comparing animal and plant cell structures</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Explain two ways a plant cell differs from an animal cell and why each difference matters.</p>
<p><strong>Solution:</strong><br>
1. <strong>Cell wall</strong> (plant only): made of cellulose; provides rigid support and shape. Animal cells rely on the skeleton for support — plant cells support themselves.<br>
2. <strong>Chloroplasts</strong> (plant only): contain chlorophyll and carry out photosynthesis — converting light energy into glucose. Animal cells cannot make their own food and must consume it.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Nucleus</dt><dd>The control centre of the cell; contains DNA with instructions for all cell activities.</dd>
<dt>Mitochondria</dt><dd>Organelles where aerobic respiration occurs — releasing energy from glucose for the cell to use.</dd>
<dt>Chloroplast</dt><dd>Organelle in plant cells containing chlorophyll; the site of photosynthesis.</dd>
<dt>MRS GREN</dt><dd>Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition — the 7 characteristics of living things.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Saying all plant cells have chloroplasts — ✅ Correct: only cells that carry out photosynthesis (e.g. leaf cells) have chloroplasts. Root cells do <strong>not</strong>.</li>
<li>❌ Confusing cell membrane and cell wall — ✅ Correct: <strong>all</strong> cells have a membrane; only plant cells have a <strong>wall</strong>.</li>
<li>❌ Thinking the vacuole stores food — ✅ Correct: the large vacuole in plant cells stores <strong>water and cell sap</strong>, maintaining pressure.</li>
</ul>`,

"island-12": `<h4>Introduction</h4>
<p>Ecosystems are communities of living organisms interacting with each other and their environment. Food chains and webs show how energy flows from producers through consumers — and understanding this helps explain how changes in one population affect the whole ecosystem.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Producers</strong> make their own food via photosynthesis (plants, algae). They always start a food chain.</li>
<li>The <strong>arrow in a food chain</strong> shows the direction of energy transfer — it points FROM what is eaten TO what eats it.</li>
<li><strong>Primary consumers</strong> eat producers (herbivores). <strong>Secondary consumers</strong> eat primary consumers. <strong>Tertiary consumers</strong> eat secondary consumers.</li>
<li><strong>Adaptations</strong> are inherited features that help an organism survive and reproduce in its environment.</li>
<li>Energy is <strong>lost at each stage</strong> of a food chain — that is why food chains rarely have more than 4–5 levels.</li>
</ul>
<div class="lesson-diagram" data-diagram="food-chain"><p class="diagram-caption">Energy flow through a food chain</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> In the food chain: Grass → Rabbit → Fox → Eagle — what would happen if the rabbit population suddenly dropped by 80%?</p>
<p><strong>Solution:</strong><br>
• <strong>Grass</strong> population would likely <strong>increase</strong> — less being eaten.<br>
• <strong>Fox</strong> population would <strong>decrease</strong> — less food available; some would starve.<br>
• <strong>Eagle</strong> population would also <strong>decrease</strong> — foxes (their prey) are now scarcer.<br>
This shows how a change in one species ripples through the entire food web.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Producer</dt><dd>An organism that makes its own food through photosynthesis — always at the start of a food chain.</dd>
<dt>Consumer</dt><dd>An organism that obtains energy by eating other organisms.</dd>
<dt>Adaptation</dt><dd>An inherited feature that improves an organism's ability to survive and reproduce in its environment.</dd>
<dt>Food web</dt><dd>A diagram showing the feeding relationships between multiple species in an ecosystem.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Drawing arrows to show "what eats what" (pointing at the predator) — ✅ Correct: arrows show <strong>energy flow</strong>, pointing away from what is eaten.</li>
<li>❌ Confusing adaptation with mutation — ✅ Correct: adaptations are <strong>inherited</strong> features; they develop over many generations, not in one lifetime.</li>
<li>❌ Thinking producers are animals — ✅ Correct: producers are <strong>plants and algae</strong> that photosynthesise; they cannot move in search of food.</li>
</ul>`,

"island-13": `<h4>Introduction</h4>
<p>Everything around you is made of particles — tiny pieces of matter in constant motion. The particle model explains why solids keep their shape, why gases fill any container, and what happens when substances heat up or change state. It is one of the most powerful explanatory models in science.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Solid</strong>: particles close together in a fixed, regular arrangement — vibrate in place only. Definite shape and volume.</li>
<li><strong>Liquid</strong>: particles close together but can slide past each other. Definite volume, no fixed shape.</li>
<li><strong>Gas</strong>: particles far apart, moving quickly in all directions. No fixed shape or volume — fills any container.</li>
<li><strong>Changes of state</strong>: melting (solid → liquid), evaporation (liquid → gas), condensation (gas → liquid), freezing (liquid → solid). All are reversible physical changes.</li>
<li><strong>Diffusion</strong>: particles spread from areas of high concentration to low concentration until evenly spread.</li>
</ul>
<div class="lesson-diagram" data-diagram="particle-states"><p class="diagram-caption">Particle arrangement in solids, liquids and gases</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Explain, using particle theory, what happens when ice is heated until it becomes steam.</p>
<p><strong>Solution:</strong><br>
1. Ice (solid): particles vibrate in fixed positions. As heat is added, particles gain kinetic energy.<br>
2. At 0°C — <strong>melting</strong>: particles have enough energy to break free of fixed positions → liquid water. Particles still close but can move.<br>
3. At 100°C — <strong>boiling/evaporation</strong>: particles gain enough energy to overcome attractions entirely → steam (gas). Particles move fast and far apart.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Particle model</dt><dd>The theory that all matter is made of tiny particles in constant motion, explaining properties of solids, liquids and gases.</dd>
<dt>Diffusion</dt><dd>The net movement of particles from a region of high concentration to low concentration.</dd>
<dt>Change of state</dt><dd>A physical change between solid, liquid and gas — reversible, with no new substance formed.</dd>
<dt>Kinetic energy</dt><dd>The energy of movement. Heating particles gives them more kinetic energy, making them move faster.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Saying particles "get bigger" when heated — ✅ Correct: particles stay the same size; they just <strong>move faster and spread further apart</strong>.</li>
<li>❌ Confusing melting and dissolving — ✅ Correct: melting is a change of state (solid → liquid via heat); dissolving is a solid mixing into a liquid — <strong>different processes</strong>.</li>
<li>❌ Saying evaporation only happens at 100°C — ✅ Correct: evaporation happens at <strong>any temperature</strong> from the surface of a liquid; boiling happens throughout.</li>
</ul>`,

"island-14": `<h4>Introduction</h4>
<p>Forces are pushes or pulls that can change the speed, direction or shape of an object. Understanding balanced and unbalanced forces, gravity, friction and how to calculate speed gives you the tools to explain almost every moving object in the physical world.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Forces are measured in <strong>Newtons (N)</strong>. They have both size and direction.</li>
<li><strong>Balanced forces</strong> (net force = 0) → no change in motion. Object stays still or moves at constant speed.</li>
<li><strong>Unbalanced forces</strong> (net force ≠ 0) → object speeds up, slows down, or changes direction.</li>
<li><strong>Mass</strong> (kg) = amount of matter — never changes. <strong>Weight</strong> (N) = gravitational force on that mass — changes with gravity. Weight = mass × gravitational field strength (W = mg).</li>
<li><strong>Speed = Distance ÷ Time</strong>. On Earth, g = 10 N/kg; on the Moon, g = 1.6 N/kg.</li>
</ul>
<div class="lesson-diagram" data-diagram="force-arrows"><p class="diagram-caption">Balanced vs unbalanced forces on an object</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> A 5 kg object sits on a table. What is its weight on Earth? Are the forces on it balanced?</p>
<p><strong>Solution:</strong><br>
Weight = mass × g = 5 × 10 = <strong>50 N downward</strong> (gravity pulling it down).<br>
The table pushes up with a <strong>normal reaction force of 50 N</strong>.<br>
Forces are <strong>balanced</strong> (50 N up = 50 N down) → the object stays still. ✓<br>
On the Moon: Weight = 5 × 1.6 = <strong>8 N</strong> — but the mass is still 5 kg.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Force</dt><dd>A push or pull acting on an object, measured in Newtons (N). Forces can change speed, direction or shape.</dd>
<dt>Friction</dt><dd>A force opposing motion between two surfaces in contact. Can be useful (grip) or unhelpful (energy loss).</dd>
<dt>Mass</dt><dd>The amount of matter in an object, measured in kg. Constant everywhere in the universe.</dd>
<dt>Weight</dt><dd>The gravitational force on an object, measured in Newtons. Depends on local gravitational field strength.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Using kg as the unit for weight — ✅ Correct: weight is a <strong>force</strong>, measured in <strong>Newtons</strong>. Mass is in kg.</li>
<li>❌ Thinking balanced forces mean no forces — ✅ Correct: balanced means forces <strong>cancel out</strong> — they are still present, just equal and opposite.</li>
<li>❌ Thinking friction is always bad — ✅ Correct: friction is <strong>essential</strong> for walking, driving and gripping — it's only unhelpful in machines where it wastes energy.</li>
</ul>`,

"island-15": `<h4>Introduction</h4>
<p>Light and sound are both forms of energy that travel as waves — but they behave very differently. Light travels at incredible speed through a vacuum and obeys strict laws of reflection. Sound needs particles to travel through and cannot exist in empty space.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Light travels in <strong>straight lines</strong> (rectilinear propagation) at 300,000 km/s — the fastest speed in the universe.</li>
<li><strong>Law of reflection</strong>: angle of incidence = angle of reflection (both measured from the <em>normal</em> — a line at 90° to the surface).</li>
<li>Light does <strong>not</strong> need a medium — it travels through a vacuum (this is how sunlight reaches Earth).</li>
<li><strong>Sound</strong> is a longitudinal wave caused by vibrations. It needs a medium (solid, liquid or gas) and <strong>cannot travel through a vacuum</strong>.</li>
<li>Sound travels faster through solids than liquids, faster through liquids than gases. Speed in air ≈ 340 m/s.</li>
</ul>
<div class="lesson-diagram" data-diagram="law-of-reflection"><p class="diagram-caption">The law of reflection: angle of incidence = angle of reflection</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> A ray of light hits a flat mirror. The angle between the ray and the mirror surface is 35°. Find the angle of reflection.</p>
<p><strong>Solution:</strong><br>
The angle of incidence is measured from the <strong>normal</strong> (not the mirror surface).<br>
Angle from surface = 35° → Angle of incidence = 90° − 35° = <strong>55°</strong><br>
Law of reflection: angle of reflection = angle of incidence = <strong>55°</strong><br><br>
⚠️ Always measure angles from the <strong>normal</strong>, not from the mirror itself.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Normal</dt><dd>An imaginary line at 90° to a surface at the point where a ray hits it — used to measure angles of incidence and reflection.</dd>
<dt>Angle of incidence</dt><dd>The angle between the incoming ray of light and the normal.</dd>
<dt>Vacuum</dt><dd>A space containing no matter (particles). Light can travel through it; sound cannot.</dd>
<dt>Longitudinal wave</dt><dd>A wave where the vibrations are parallel to the direction of travel — sound is a longitudinal wave.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Measuring the angle of reflection from the mirror surface — ✅ Correct: always measure from the <strong>normal</strong> (the perpendicular line).</li>
<li>❌ Thinking sound travels faster than light — ✅ Correct: light travels at 300,000 km/s; sound at ~340 m/s — light is nearly <strong>a million times faster</strong>.</li>
<li>❌ Saying light "bounces off" a mirror — ✅ Correct: use precise language — light is <strong>reflected</strong> according to the law of reflection.</li>
</ul>`,

"island-28": `<h4>Introduction</h4>
<p>Reproduction ensures the continuation of species. Sexual reproduction creates genetic variation — vital for evolution — while asexual reproduction produces identical offspring quickly. In plants, pollination and fertilisation are the key steps; in humans, puberty prepares the body for the possibility of reproduction.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Sexual reproduction</strong>: two parents, gametes (sex cells) join at fertilisation → genetically unique offspring.</li>
<li><strong>Asexual reproduction</strong>: one parent, no gametes → genetically identical offspring (clones). Examples: runners, bulbs, binary fission in bacteria.</li>
<li><strong>Pollination</strong>: transfer of pollen from anther to stigma. Insect-pollinated flowers are bright with nectar; wind-pollinated flowers are small and dull with light pollen.</li>
<li>After pollination, a pollen tube grows to the ovule — <strong>fertilisation</strong> occurs when the male gamete fuses with the female gamete (ovum).</li>
<li><strong>Puberty</strong> is triggered by hormones: oestrogen (females) and testosterone (males), causing physical and emotional changes.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Compare insect pollination and wind pollination. Why do their flowers look different?</p>
<p><strong>Solution:</strong><br>
<strong>Insect-pollinated:</strong> Need to attract insects → bright petals, strong scent, nectar as reward. Pollen is sticky to attach to insects. Fewer pollen grains needed.<br>
<strong>Wind-pollinated:</strong> No need to attract anything → small, dull petals (often none). Pollen is tiny and light — produced in vast quantities to maximise chance of reaching another flower. Stigmas are feathery to catch floating pollen.<br><br>
Key principle: the <strong>method of pollination drives the flower's design</strong>.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Gamete</dt><dd>A sex cell — in animals: sperm (male) and egg (female); in plants: pollen (male) and ovum (female).</dd>
<dt>Fertilisation</dt><dd>The fusion of male and female gametes to form a zygote — the first cell of a new organism.</dd>
<dt>Pollination</dt><dd>The transfer of pollen from the anther to the stigma of a flower — necessary before fertilisation can occur.</dd>
<dt>Clone</dt><dd>A genetically identical copy of a parent organism, produced by asexual reproduction.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Confusing pollination and fertilisation — ✅ Correct: pollination is <strong>transfer of pollen</strong>; fertilisation is the <strong>joining of gametes</strong> inside the ovule.</li>
<li>❌ Thinking asexual reproduction is "better" — ✅ Correct: asexual is faster but produces <strong>no variation</strong> — a disease can wipe out all identical offspring.</li>
<li>❌ Saying all flowers are insect-pollinated — ✅ Correct: grasses, wheat and many trees are <strong>wind-pollinated</strong>.</li>
</ul>`,

"island-29": `<h4>Introduction</h4>
<p>Chemistry begins with understanding what matter is made of. Atoms combine to form elements and compounds, the Periodic Table organises all known elements, and chemical reactions produce new substances with new properties. These ideas underpin all of chemistry.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Element</strong>: one type of atom only. Cannot be broken down by chemical means. Found in the Periodic Table (e.g. O, Fe, Cu).</li>
<li><strong>Compound</strong>: two or more different elements <em>chemically</em> bonded together (e.g. H₂O, NaCl). Has different properties from its elements.</li>
<li><strong>Mixture</strong>: substances physically combined — not chemically bonded. Each keeps its own properties. Separable by physical means.</li>
<li>The <strong>Periodic Table</strong>: elements arranged by atomic number. Groups (columns) = similar properties. Periods (rows) = new electron shell.</li>
<li>Separation techniques: filtration, evaporation, distillation, chromatography — choose based on what you're separating.</li>
</ul>
<h4>🔤 Common Element Symbols</h4>
<p>Every element has a <strong>chemical symbol</strong> — one or two letters. The first letter is always a <strong>capital</strong>; the second (if there is one) is always <strong>lowercase</strong>.</p>
<table style="border-collapse:collapse;width:100%;font-size:.85rem;margin:10px 0;">
<tr style="background:var(--surface);"><th style="padding:6px 10px;border:1px solid var(--border);text-align:left;">Element</th><th style="padding:6px 10px;border:1px solid var(--border);text-align:center;">Symbol</th><th style="padding:6px 10px;border:1px solid var(--border);text-align:left;">Note</th></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Hydrogen</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>H</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">Lightest element</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Carbon</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>C</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">In all living things</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Nitrogen</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>N</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">78% of air</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Oxygen</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>O</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">21% of air; we breathe it</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Sulfur</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>S</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">Yellow solid, rotten-egg smell</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Chlorine</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>Cl</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">Two letters! (C alone = carbon)</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Sodium</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>Na</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">From Latin <em>natrium</em></td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Iron</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>Fe</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">From Latin <em>ferrum</em></td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Copper</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>Cu</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">From Latin <em>cuprum</em></td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Magnesium</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>Mg</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">Burns with bright white flame</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Calcium</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>Ca</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">In bones and teeth</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Aluminium</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>Al</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">Lightweight metal</td></tr>
<tr><td style="padding:5px 10px;border:1px solid var(--border);">Potassium</td><td style="padding:5px 10px;border:1px solid var(--border);text-align:center;"><strong>K</strong></td><td style="padding:5px 10px;border:1px solid var(--border);">From Latin <em>kalium</em></td></tr>
</table>
<p><strong>Tricky ones to remember:</strong> Na, Fe, Cu, and K don't match their English names — they come from Latin!</p>
<h4>🧪 Reading Chemical Formulae</h4>
<p>A <strong>chemical formula</strong> tells you which elements are in a substance and <strong>how many atoms</strong> of each. The small number written below and to the right (a <em>subscript</em>) tells you the count. No number means just 1.</p>
<ul>
<li><strong>O₂</strong> — two oxygen atoms bonded together. This is oxygen gas (the gas we breathe).</li>
<li><strong>H₂O</strong> — two hydrogen atoms + one oxygen atom = <strong>water</strong>.</li>
<li><strong>CO₂</strong> — one carbon atom + two oxygen atoms = <strong>carbon dioxide</strong> (the gas we breathe out).</li>
<li><strong>NaCl</strong> — one sodium + one chlorine = <strong>sodium chloride</strong> (table salt).</li>
<li><strong>MgO</strong> — one magnesium + one oxygen = <strong>magnesium oxide</strong>.</li>
<li><strong>HCl</strong> — one hydrogen + one chlorine = <strong>hydrochloric acid</strong>.</li>
</ul>
<p><strong>Tip:</strong> Some elements naturally exist in pairs — H₂, O₂, N₂, Cl₂. These are called <em>diatomic</em> molecules.</p>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Write a word equation for the reaction between magnesium and oxygen. Is this a physical or chemical change?</p>
<p><strong>Solution:</strong><br>
Word equation: <strong>Magnesium + Oxygen → Magnesium oxide</strong><br>
This is a <strong>chemical change</strong> because:<br>
• A new substance is formed (magnesium oxide) with different properties<br>
• The change is <strong>irreversible</strong> — you cannot easily get magnesium back from magnesium oxide<br>
• Energy is released (bright white light and heat — this is why magnesium burns so brightly)<br><br>
Compare with melting ice (physical change) — no new substance, fully reversible.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Atom</dt><dd>The smallest particle of an element that retains the chemical properties of that element.</dd>
<dt>Compound</dt><dd>A substance formed when two or more elements are chemically bonded in fixed proportions.</dd>
<dt>Periodic Table</dt><dd>A table of all known elements arranged in order of atomic number, revealing patterns in properties.</dd>
<dt>Chemical symbol</dt><dd>A one- or two-letter shorthand for an element (e.g. O = oxygen, Fe = iron). The first letter is always a capital.</dd>
<dt>Chemical formula</dt><dd>A combination of symbols and subscript numbers that shows which elements are in a substance and how many atoms of each (e.g. CO₂ = 1 carbon + 2 oxygens).</dd>
<dt>Diatomic molecule</dt><dd>A molecule made of exactly two atoms bonded together. Some elements naturally exist as pairs: H₂, O₂, N₂, Cl₂.</dd>
<dt>Chromatography</dt><dd>A separation technique that uses a solvent to separate dissolved substances by how far they travel up paper.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking a mixture and a compound are the same — ✅ Correct: in a compound elements are <strong>chemically bonded</strong>; in a mixture they are just <strong>physically mixed</strong>.</li>
<li>❌ Using filtration to separate a dissolved solid — ✅ Correct: filtration only separates <strong>insoluble</strong> solids. Use <strong>evaporation</strong> for dissolved solids like salt.</li>
<li>❌ Writing word equations with formulae (H₂O) — ✅ Correct: <strong>word</strong> equations use names only; formulae are for <strong>symbol</strong> equations.</li>
</ul>`,

"island-16": `<h4>Introduction</h4>
<p>The Norman Conquest of 1066 was one of the most dramatic turning points in English history. Within a single year, England had three different kings and was transformed by a foreign ruling class. The effects on language, culture and power lasted for centuries.</p>
<h4>📌 Key Points</h4>
<ul>
<li>When Edward the Confessor died in January 1066, three men claimed the throne: <strong>Harold Godwinson</strong>, <strong>William of Normandy</strong> and <strong>Harald Hardrada</strong>.</li>
<li>Harold was crowned immediately but faced two invasions. He defeated Hardrada at Stamford Bridge (Sept 1066) then rushed south to meet William.</li>
<li>At the <strong>Battle of Hastings</strong> (14 Oct 1066): the Norman feigned retreat broke the English shield wall. Harold was killed.</li>
<li>William used <strong>castles</strong> to control the population — motte-and-bailey designs were quick to build across England.</li>
<li>The <strong>Domesday Book</strong> (1086) surveyed all land and wealth in England for taxation — and proved William owned everything.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> "The Battle of Hastings was won mainly because of Harold's mistakes." How far do you agree?</p>
<p><strong>Solution (how to structure your argument):</strong><br>
<strong>Evidence for:</strong> Harold's army was exhausted after Stamford Bridge; he didn't wait to rest. Breaking formation to chase the Normans showed poor discipline.<br>
<strong>Evidence against:</strong> William's tactical brilliance — the feigned retreat was a deliberate, skilled manoeuvre. Norman cavalry and archers gave a clear tactical advantage.<br>
<strong>Conclusion:</strong> Both sides' actions mattered. William's tactics were decisive, but Harold's tired army and poor positioning at Senlac Hill made his defeat more likely.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Conquest</dt><dd>The taking of a territory by military force.</dd>
<dt>Shield wall</dt><dd>The Anglo-Saxon defensive tactic of soldiers standing shoulder-to-shoulder with overlapping shields.</dd>
<dt>Domesday Book</dt><dd>William's survey of England (1086) recording land ownership, value and resources for taxation.</dd>
<dt>Motte-and-bailey</dt><dd>An early Norman castle: a wooden tower (keep) on a raised mound (motte) next to an enclosed courtyard (bailey).</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking William had an immediate, easy conquest — ✅ Correct: there were rebellions for years after 1066; William used the <strong>Harrying of the North</strong> (1069–70) to crush resistance brutally.</li>
<li>❌ Saying Harold was definitely killed by an arrow to the eye — ✅ Correct: the Bayeux Tapestry is ambiguous — historians <strong>debate</strong> exactly how Harold died.</li>
<li>❌ Confusing the Domesday Book with a census — ✅ Correct: it recorded <strong>land and wealth</strong> for taxation, not just population numbers.</li>
</ul>`,

"island-17": `<h4>Introduction</h4>
<p>After 1066, William needed to control England with a small Norman ruling class over a large English population. The feudal system provided the structure — a strict hierarchy of loyalty, land and obligation. The Catholic Church reinforced this order with spiritual as well as earthly power.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The <strong>feudal pyramid</strong> (top to bottom): King → Lords/Barons/Church → Knights → Peasants/Serfs. Everyone owed loyalty and service upward.</li>
<li>The King owned all land — lords held it in exchange for military service; knights held it from lords in exchange for fighting.</li>
<li><strong>Peasants</strong> (villagers/serfs) worked the land in exchange for protection and a small strip to farm. They could not leave without permission.</li>
<li>The <strong>Catholic Church</strong> collected tithes (10% of income), ran hospitals and schools, and could excommunicate even kings.</li>
<li><strong>Stone castles</strong> (replacing wooden motte-and-bailey) became permanent symbols of Norman power from the late 11th century.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Why was the feudal system effective at keeping William in control of England?</p>
<p><strong>Solution:</strong><br>
1. <strong>Military control</strong>: lords provided knights when needed → William always had an army without paying for one permanently.<br>
2. <strong>Local control</strong>: each lord managed their own estate → Norman power reached every corner of England.<br>
3. <strong>Loyalty enforced</strong>: breaking feudal obligations meant losing land — the greatest punishment possible.<br>
4. <strong>Church support</strong>: the Church taught that the social order was God's will → rebellion was a <strong>sin</strong>, not just a crime.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Feudalism</dt><dd>A hierarchical system where land is exchanged for loyalty and military service.</dd>
<dt>Tithe</dt><dd>A compulsory tax of one-tenth of annual income or produce, paid to the local church.</dd>
<dt>Serf</dt><dd>A peasant bound to work a lord's land; could not leave without the lord's permission.</dd>
<dt>Excommunication</dt><dd>Being expelled from the Catholic Church — cutting a person off from all religious sacraments and, it was believed, from God and heaven.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking all peasants were equally poor and powerless — ✅ Correct: there were different levels of peasant; some <strong>villeins</strong> had land and relative security.</li>
<li>❌ Thinking the feudal system only existed in England — ✅ Correct: feudalism existed across <strong>most of medieval Europe</strong>.</li>
<li>❌ Underestimating the Church's power — ✅ Correct: the Church was arguably <strong>more powerful</strong> than many kings — it controlled education, charity, and people's belief in salvation.</li>
</ul>`,

"island-18": `<h4>Introduction</h4>
<p>The Black Death arrived in England in 1348 and killed roughly one third of the population within two years. No event in medieval history was more devastating — or more transformative. Its long-term effects cracked the foundations of the feudal system itself.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Caused by the bacterium <em>Yersinia pestis</em> — spread mainly by fleas on black rats biting humans. Medieval people had no idea of this.</li>
<li>Arrived in England via trade ships landing in Dorset in 1348, having swept from Central Asia through Europe since 1347.</li>
<li><strong>Symptoms</strong>: buboes (painful swellings in armpits/groin/neck), black skin patches, fever, vomiting blood. Most died within 1–5 days.</li>
<li>Medieval explanations: God's punishment for sin, bad air (miasma), planetary alignment — all wrong.</li>
<li><strong>Long-term effects</strong>: labour shortage → peasants could demand wages → weakened serfdom → contributed to the Peasants' Revolt (1381).</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> "The Black Death was the most important cause of the decline of the feudal system." How far do you agree?</p>
<p><strong>Solution (structured argument):</strong><br>
<strong>For:</strong> The labour shortage gave surviving peasants bargaining power for the first time. Lords had to pay wages or risk losing their workers entirely. This directly challenged the economic foundation of feudalism.<br>
<strong>Against:</strong> The feudal system was already under strain from Magna Carta (1215) and growing trade. The Black Death <strong>accelerated</strong> change rather than causing it from scratch.<br>
<strong>Judgement:</strong> The Black Death was the <strong>most dramatic single cause</strong>, but it worked alongside long-term trends already weakening the system.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Bubonic plague</dt><dd>The most common form of plague, causing swollen lymph nodes (buboes); spread by flea bites.</dd>
<dt>Miasma theory</dt><dd>The medieval belief that disease was caused by "bad air" from rotting matter — incorrect, but widely held until germ theory in the 19th century.</dd>
<dt>Labour shortage</dt><dd>A lack of workers — after the Black Death, so many people had died that the survivors had more economic power.</dd>
<dt>Peasants' Revolt (1381)</dt><dd>An uprising by English peasants against continued serfdom and high taxes — partly a consequence of the Black Death's social changes.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Saying medieval people "ignored" the plague — ✅ Correct: they took it extremely seriously but used <strong>incorrect theories</strong> because germ theory didn't exist yet.</li>
<li>❌ Thinking the plague only affected poor people — ✅ Correct: the plague killed across <strong>all social classes</strong> — even clergy and nobility died in large numbers.</li>
<li>❌ Saying the plague "ended" feudalism overnight — ✅ Correct: the process was gradual and took <strong>over a century</strong> to fully transform medieval society.</li>
</ul>`,

"island-19": `<h4>Introduction</h4>
<p>Magna Carta — the "Great Charter" — was signed by King John in 1215 and is one of the most important documents in world history. For the first time, a king was made legally subject to the rule of law. Its principles influenced democratic constitutions across the globe, including the United States.</p>
<h4>📌 Key Points</h4>
<ul>
<li>King John was deeply unpopular: he lost Normandy (1204), taxed barons heavily, quarrelled with the Pope, and ignored traditional rights.</li>
<li>In 1215, barons marched on London and forced John to negotiate at <strong>Runnymede</strong>. He signed Magna Carta on 15 June 1215.</li>
<li>Key principles: no imprisonment without fair trial (<strong>habeas corpus</strong>), the king must obey the law, taxes require baronial consent.</li>
<li><strong>Simon de Montfort's Parliament</strong> (1265) expanded representation beyond barons to include knights and town representatives — a crucial step.</li>
<li>Magna Carta established that <strong>no one is above the law</strong> — the foundation of constitutional government.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> How significant was Magna Carta? Consider its short-term and long-term impact.</p>
<p><strong>Solution:</strong><br>
<strong>Short-term (1215):</strong> Limited immediate impact — John died in 1216, and the charter was often ignored or reissued in modified form. It was primarily a document protecting <strong>barons' rights</strong>, not ordinary people.<br>
<strong>Long-term:</strong> Hugely significant. The principle that the king must obey the law became the foundation of the English constitution. It influenced the US Bill of Rights (1791) and the Universal Declaration of Human Rights (1948).<br>
<strong>Judgement:</strong> More significant <strong>in retrospect</strong> than at the time — later generations gave it its legendary status.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Magna Carta</dt><dd>Latin for "Great Charter" — the 1215 document limiting royal power and establishing that the king must obey the law.</dd>
<dt>Habeas corpus</dt><dd>The right not to be imprisoned without a fair trial — one of the key principles established by Magna Carta.</dd>
<dt>Parliament</dt><dd>A body of representatives that advises and later controls the king — began developing in the 13th century.</dd>
<dt>Constitutional government</dt><dd>A system where a ruler's power is limited and defined by laws or a constitution.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking Magna Carta was democratic — ✅ Correct: it protected <strong>barons' rights</strong>, not ordinary people's. Democracy developed much later.</li>
<li>❌ Saying John willingly signed Magna Carta — ✅ Correct: he was <strong>forced</strong> to sign under military pressure and tried to get the Pope to annul it almost immediately.</li>
<li>❌ Confusing Magna Carta with Parliament — ✅ Correct: Magna Carta was a <strong>document</strong>; Parliament was a separate institution that developed gradually afterwards.</li>
</ul>`,

"island-31": `<h4>Introduction</h4>
<p>The Crusades were a series of religious wars launched by Christian Europe to capture and defend the Holy Land. They lasted nearly 200 years, involved kings, knights and ordinary pilgrims, and had lasting consequences for relations between Christianity and Islam — consequences still felt today.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Pope Urban II called the First Crusade in <strong>1095</strong>, promising forgiveness of sins to those who fought. Jerusalem was captured in 1099.</li>
<li>Crusaders were motivated by <strong>religion</strong> (spiritual rewards), <strong>politics</strong> (land and power) and <strong>adventure</strong> — rarely just one motive.</li>
<li><strong>Saladin</strong> recaptured Jerusalem in 1187. He was respected for his military skill and relatively merciful treatment of Christian civilians.</li>
<li><strong>Richard I</strong> led the Third Crusade (1189–92), won battles but couldn't retake Jerusalem. Negotiated a treaty allowing Christian pilgrims access.</li>
<li>Long-term legacy: increased Christian-Muslim hostility, but also expanded <strong>trade</strong> and transferred Islamic learning (maths, medicine, astronomy) to Europe.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Were the Crusades primarily motivated by religion? Explain your answer.</p>
<p><strong>Solution:</strong><br>
<strong>Religious motives:</strong> Pope's promise of indulgence (forgiveness of sins); Jerusalem was the holiest city in Christianity; many believed they were doing God's will.<br>
<strong>Non-religious motives:</strong> Younger sons of nobles had no land to inherit — the Crusades offered wealth and territory. Kings used Crusades to rid themselves of troublesome knights. Italian merchants profited from supplying Crusader armies.<br>
<strong>Conclusion:</strong> Religion was the <strong>stated</strong> motive, but political and economic interests were often equally powerful — especially for leaders.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Crusade</dt><dd>A religious war fought by Christians to capture or defend the Holy Land (Jerusalem and surrounding area).</dd>
<dt>Indulgence</dt><dd>A pardon granted by the Pope, reducing punishment for sins — offered to Crusaders as a spiritual reward.</dd>
<dt>Holy Land</dt><dd>The region around Jerusalem, sacred to Christians, Muslims and Jews — the destination of the Crusades.</dd>
<dt>Jihad</dt><dd>An Arabic term meaning "struggle" — in the context of the Crusades, the Muslim effort to defend or recapture the Holy Land.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking Crusaders were entirely motivated by religion — ✅ Correct: motives were <strong>mixed</strong> — land, wealth, adventure and status all played a role.</li>
<li>❌ Thinking the Crusades were a clear Christian victory — ✅ Correct: the Crusades ultimately <strong>failed</strong> — Jerusalem was in Muslim hands by 1244 and never returned to Christian control.</li>
<li>❌ Seeing Saladin as a villain — ✅ Correct: Saladin was widely respected even by his Christian enemies for his military genius and <strong>relatively merciful</strong> conduct.</li>
</ul>`,

"island-32": `<h4>Introduction</h4>
<p>The Renaissance and Reformation transformed Europe between the 14th and 17th centuries. New ideas about human potential challenged the Church's authority; the Printing Press spread these ideas rapidly; and the religious unity of Western Christianity was permanently broken. England's Reformation was driven as much by royal politics as by theology.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The <strong>Renaissance</strong> (meaning "rebirth") began in Italy — a revival of ancient Greek and Roman learning, focusing on human potential (<strong>humanism</strong>).</li>
<li>The <strong>Printing Press</strong> (Gutenberg, c.1450) spread ideas across Europe for the first time — essential for the Reformation.</li>
<li><strong>Martin Luther</strong> (1517): nailed his 95 Theses to a church door in Wittenberg, attacking the sale of indulgences and papal authority.</li>
<li><strong>Henry VIII</strong> wanted to divorce Catherine of Aragon. The Pope refused. Henry broke from Rome, made himself Head of the Church of England (Act of Supremacy, 1534).</li>
<li><strong>Dissolution of the Monasteries</strong> (1536–41): Henry seized Church lands and wealth — politically and financially motivated.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Compare Luther's and Henry VIII's reasons for breaking with Rome. Were they similar?</p>
<p><strong>Solution:</strong><br>
<strong>Luther:</strong> Driven by genuine theological conviction — salvation through faith alone (sola fide), not payments; the Bible should be available in everyday language; the Pope had too much worldly power.<br>
<strong>Henry:</strong> Driven primarily by personal and political need — he wanted a divorce Catherine couldn't give him a male heir. He also wanted the Church's wealth.<br>
<strong>Similarity:</strong> Both challenged papal authority.<br>
<strong>Difference:</strong> Luther was a <strong>theological reformer</strong>; Henry was a <strong>political opportunist</strong> who remained Catholic in doctrine.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Humanism</dt><dd>A Renaissance philosophy focusing on human potential, reason and achievement rather than purely religious concerns.</dd>
<dt>Reformation</dt><dd>The 16th-century religious movement that challenged the Catholic Church and led to the creation of Protestant Christianity.</dd>
<dt>Indulgence</dt><dd>A payment to the Church to reduce punishment for sins — Luther's central target in his 95 Theses.</dd>
<dt>Act of Supremacy (1534)</dt><dd>The law making Henry VIII Supreme Head of the Church of England, replacing the Pope's authority.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Confusing Luther and Henry VIII as having the same reasons — ✅ Correct: Luther's break was <strong>theological</strong>; Henry's was primarily <strong>political and personal</strong>.</li>
<li>❌ Thinking the Printing Press "caused" the Reformation — ✅ Correct: it was a crucial <strong>enabler</strong> that spread ideas — without it, Luther's Theses may not have spread beyond Wittenberg.</li>
<li>❌ Saying Henry VIII became Protestant — ✅ Correct: Henry kept most Catholic practices — he just rejected <strong>papal authority</strong>, not Catholic theology.</li>
</ul>`,

"island-33": `<h4>Introduction</h4>
<p>The Tudor dynasty produced some of England's most dramatic monarchs. Religious upheaval, political intrigue, a famous naval victory and one of England's greatest reigns all unfolded within a single family across little more than a century. Elizabeth I's reign in particular defined England's emerging national identity.</p>
<h4>📌 Key Points</h4>
<ul>
<li>After Henry VIII: <strong>Edward VI</strong> (Protestant, simplified Church) → <strong>Mary I</strong> (Catholic, burned ~300 Protestants) → <strong>Elizabeth I</strong> (Protestant "middle way").</li>
<li>Elizabeth's <strong>religious settlement</strong> was deliberately moderate — Protestant in theology but retaining some Catholic ceremony to keep broad support.</li>
<li>The <strong>Spanish Armada</strong> (1588): Philip II of Spain sent 130 ships to invade. English fireships at Gravelines and violent storms destroyed the fleet.</li>
<li>Elizabethan England saw a cultural golden age: Shakespeare, theatre, exploration (Drake's circumnavigation 1577–80).</li>
<li>Elizabeth never married or named an heir — the <strong>succession question</strong> was a major weakness of her otherwise stable reign.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> "Elizabeth I was the greatest Tudor monarch." How far do you agree?</p>
<p><strong>Solution:</strong><br>
<strong>For:</strong> 45-year reign brought stability after decades of religious upheaval. Defeat of the Armada enhanced national confidence. Arts flourished. England became a significant naval power.<br>
<strong>Against:</strong> She never resolved the succession — causing a crisis at her death. Poverty and failed harvests caused significant suffering. The Irish rebellion was suppressed brutally.<br>
<strong>Judgement:</strong> Elizabeth's achievements in stability and culture were remarkable, but her failure to provide an heir was a serious weakness. Her <strong>long-term legacy</strong> was largely positive for England's development.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Religious settlement</dt><dd>Elizabeth's compromise religious policy — Protestant but moderate enough to include most English people.</dd>
<dt>Armada</dt><dd>The Spanish fleet of 130 ships sent to invade England in 1588, defeated by a combination of English tactics and violent storms.</dd>
<dt>Succession</dt><dd>The process of determining who will inherit a throne — Elizabeth's lack of an heir made this a political crisis.</dd>
<dt>Reformation</dt><dd>The break from the Catholic Church and establishment of Protestant Christianity in England.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Getting the order of monarchs wrong — ✅ Correct: Henry VIII → Edward VI → Mary I → Elizabeth I. Learn this sequence.</li>
<li>❌ Saying England won the Armada purely through military skill — ✅ Correct: the <strong>storms</strong> were crucial — many historians argue England could not have won without them.</li>
<li>❌ Thinking Elizabeth's reign was entirely peaceful — ✅ Correct: there were plots against her life, ongoing religious tension and brutal colonial violence in Ireland.</li>
</ul>`,

"island-34": `<h4>Introduction</h4>
<p>The Transatlantic Slave Trade was one of history's greatest crimes — a commercially organised system that enslaved an estimated 12 million Africans over 400 years. Britain was central to it. Understanding its operation, its human cost and the struggle for abolition is essential to understanding the modern world.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The <strong>triangular trade</strong>: Britain → West Africa (goods exchanged for enslaved people) → Americas (enslaved people sold, plantation goods bought) → Britain (sugar, tobacco, cotton sold for profit).</li>
<li>The <strong>Middle Passage</strong>: the crossing from Africa to the Americas. Enslaved people were chained below decks in horrific conditions. Up to 20% died during the crossing.</li>
<li>Cities including Bristol and Liverpool grew wealthy from the trade — profits funded banks, businesses and buildings still standing today.</li>
<li>Enslaved people resisted in many ways: work slowdowns, escape, revolt (e.g. the Haitian Revolution, 1791–1804).</li>
<li><strong>Abolition</strong>: 1807 — Slave Trade Act (trade abolished); 1833 — Slavery Abolition Act (enslaved people freed in British territories). Slaveholders were compensated; enslaved people were not.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Why did abolition take so long despite widespread knowledge of conditions on the Middle Passage?</p>
<p><strong>Solution:</strong><br>
1. <strong>Economic interests</strong>: the trade was enormously profitable. Plantation owners, merchants and MPs had financial stakes in its continuation.<br>
2. <strong>Political power</strong>: slaveholders and their supporters had significant influence in Parliament.<br>
3. <strong>Racism</strong>: many people used racial arguments to justify the system — dehumanising enslaved people made it easier to ignore their suffering.<br>
4. <strong>Gradual change</strong>: public opinion shifted slowly through the work of abolitionists like Wilberforce and Equiano — change required sustained campaigning over decades.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Triangular trade</dt><dd>The three-stage transatlantic trading system: goods to Africa, enslaved people to the Americas, plantation products back to Europe.</dd>
<dt>Middle Passage</dt><dd>The sea crossing from West Africa to the Americas where enslaved Africans were transported in appalling conditions.</dd>
<dt>Abolitionist</dt><dd>Someone who campaigned for the ending of slavery — key figures include William Wilberforce and Olaudah Equiano.</dd>
<dt>Emancipation</dt><dd>The act of freeing enslaved people — achieved in British territories by the Slavery Abolition Act of 1833.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking abolition was easy or quick — ✅ Correct: it took over <strong>20 years</strong> of sustained campaigning by abolitionists against powerful economic and political opposition.</li>
<li>❌ Forgetting enslaved people's own resistance — ✅ Correct: enslaved people were <strong>active agents</strong> in their own liberation — revolts and resistance were constant.</li>
<li>❌ Thinking the 1807 Act ended slavery — ✅ Correct: 1807 ended the <strong>trade</strong>; slavery itself continued until <strong>1833</strong> in British territories.</li>
</ul>`,

"island-20": `<h4>Introduction</h4>
<p>Maps are geographers' most powerful tool — they communicate enormous amounts of information in a compact, visual form. Being able to read grid references, interpret contour lines and use map scale are skills you'll use in geography exams, fieldwork and everyday navigation.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>4-figure grid reference</strong>: go along the eastings first, then up the northings. Memory aid: "along the corridor and up the stairs."</li>
<li><strong>6-figure grid reference</strong>: more precise — estimate tenths within each grid square (e.g. 273456).</li>
<li><strong>Contour lines</strong> join points of equal height. Close together = steep slope. Far apart = gentle slope. Circles closing in = hilltop.</li>
<li><strong>Map scale</strong>: 1:25,000 means 1 cm on map = 25,000 cm = 250 m in real life. 1:50,000 means 1 cm = 500 m.</li>
<li><strong>Large scale</strong> maps show small areas in great detail. <strong>Small scale</strong> maps show large areas with little detail.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> On a 1:50,000 map, two points are 6 cm apart. What is the real-life distance? What does it mean if the contour lines between them are very close together?</p>
<p><strong>Solution:</strong><br>
Real-life distance: 1 cm = 50,000 cm = 500 m, so 6 cm = 6 × 500 m = <strong>3,000 m = 3 km</strong>.<br>
Close contour lines between the two points indicate a <strong>steep slope</strong> — the route would involve significant climbing or descending.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Easting</dt><dd>The vertical grid lines on a map — numbered left to right. Read first in a grid reference.</dd>
<dt>Northing</dt><dd>The horizontal grid lines on a map — numbered bottom to top. Read second in a grid reference.</dd>
<dt>Contour line</dt><dd>A line on a map connecting all points of equal height above sea level.</dd>
<dt>Map scale</dt><dd>The ratio between a distance on a map and the corresponding real-life distance.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Reading northings before eastings — ✅ Correct: <strong>eastings first</strong> (left-right), then northings (up-down). "Along the corridor, then up the stairs."</li>
<li>❌ Thinking close contours mean a valley — ✅ Correct: close contours mean a <strong>steep slope</strong> — they could be a hill or a valley; look at the numbers to tell which way the ground rises.</li>
<li>❌ Confusing large scale with showing a large area — ✅ Correct: large scale = <strong>zoomed in</strong>, lots of detail, small area. Small scale = zoomed out, large area, less detail.</li>
</ul>`,

"island-21": `<h4>Introduction</h4>
<p>Weather affects our daily lives, but climate shapes civilisations. The UK's temperate maritime climate — mild, wet and changeable — is the result of its island location, prevailing winds and warm ocean currents. Understanding these factors helps explain not just British weather but climate patterns worldwide.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Weather</strong>: short-term atmospheric conditions (today's temperature, rain). <strong>Climate</strong>: average weather over 30+ years for a region.</li>
<li>Key weather instruments: thermometer (temperature), rain gauge (rainfall/mm), anemometer (wind speed), barometer (air pressure), wind vane (wind direction).</li>
<li>The UK's climate is shaped by: <strong>prevailing south-westerly winds</strong> from the Atlantic; the <strong>North Atlantic Drift</strong> (warm ocean current); island location; relief (western uplands cause relief rainfall).</li>
<li><strong>Relief rainfall</strong>: moist air rises over hills → cools → condenses → rains. Western UK is wetter than the east.</li>
<li><strong>Climate change</strong>: enhanced greenhouse effect is causing global temperatures to rise, leading to more extreme weather events.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Why is Manchester wetter than London, even though both are in England?</p>
<p><strong>Solution:</strong><br>
1. Prevailing winds blow from the <strong>south-west</strong> — picking up moisture over the Atlantic Ocean.<br>
2. These moist air masses hit the <strong>Pennines</strong> (hills west of Manchester) — air is forced to rise.<br>
3. Rising air <strong>cools and condenses</strong> → rain falls on the western (windward) side — <strong>relief rainfall</strong>.<br>
4. By the time air descends on the eastern (leeward) side, it has lost much of its moisture — the <strong>rain shadow</strong> effect makes London drier.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Prevailing wind</dt><dd>The most common wind direction for a given location — in the UK, this is south-westerly.</dd>
<dt>North Atlantic Drift</dt><dd>A warm ocean current from the Gulf of Mexico that keeps the UK warmer than its latitude would suggest.</dd>
<dt>Relief rainfall</dt><dd>Rain caused when moist air is forced to rise over hills, cools and condenses.</dd>
<dt>Rain shadow</dt><dd>The dry area on the leeward (sheltered) side of a hill or mountain range.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Saying "weather and climate are the same thing" — ✅ Correct: weather is <strong>day-to-day</strong>; climate is the <strong>long-term average</strong> (30+ years).</li>
<li>❌ Thinking the UK is warm because it's close to the equator — ✅ Correct: the UK is at ~50–60°N; it's warm for its latitude thanks to the <strong>North Atlantic Drift</strong>.</li>
<li>❌ Confusing rain gauge and barometer — ✅ Correct: rain gauge measures <strong>rainfall (mm)</strong>; barometer measures <strong>air pressure (millibars)</strong>.</li>
</ul>`,

"island-22": `<h4>Introduction</h4>
<p>Rivers are among the most powerful forces shaping the landscape. From the steep, fast-flowing upper course to the wide, meandering lower course, rivers constantly erode, transport and deposit material — creating distinctive landforms at each stage of their journey.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Three river processes</strong>: Erosion (wearing away), Transportation (carrying material), Deposition (dropping material when energy decreases).</li>
<li>Types of erosion: hydraulic action (force of water), abrasion (sediment scraping), solution (dissolving rock), attrition (particles wearing each other down).</li>
<li>Upper course: steep, fast, narrow — dominant erosion. <strong>V-shaped valleys</strong> and waterfalls.</li>
<li>Middle/lower course: gentle gradient, wide — dominant deposition. <strong>Meanders</strong>, floodplains, oxbow lakes.</li>
<li><strong>Meander formation</strong>: faster water on outside of bend erodes (river cliff); slower water inside deposits (slip-off slope). Over time the loop is cut off → oxbow lake.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Describe how an oxbow lake forms from a meander.</p>
<p><strong>Solution:</strong><br>
1. Water flows faster on the <strong>outside</strong> of a meander bend → lateral erosion undercuts the bank → <strong>river cliff</strong> forms.<br>
2. Water flows slower on the <strong>inside</strong> → deposition builds up → <strong>slip-off slope</strong> (beach-like) forms.<br>
3. The meander neck becomes narrower as erosion continues on both outer banks.<br>
4. During a flood, the river cuts across the narrow neck — taking the <strong>shorter route</strong>.<br>
5. Deposition seals off the old meander loop → isolated as an <strong>oxbow lake</strong>.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Erosion</dt><dd>The wearing away and removal of material by the river — greatest in the upper course where the river has most energy.</dd>
<dt>Deposition</dt><dd>The dropping of material when a river loses energy — greatest in the lower course on flat land.</dd>
<dt>Meander</dt><dd>A large bend in a river, formed by differential erosion and deposition on opposite banks.</dd>
<dt>Oxbow lake</dt><dd>A curved lake formed when a meander loop is cut off from the main river channel.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Saying erosion happens on the inside of a meander — ✅ Correct: erosion (and river cliffs) form on the <strong>outside</strong>; deposition on the <strong>inside</strong>.</li>
<li>❌ Thinking rivers always flow straight — ✅ Correct: rivers naturally develop meanders due to variations in <strong>flow speed and erosion</strong>.</li>
<li>❌ Confusing transportation and deposition — ✅ Correct: transportation is <strong>carrying</strong> material; deposition is <strong>dropping</strong> it when the river slows down.</li>
</ul>`,

"island-23": `<h4>Introduction</h4>
<p>Where people choose to live is not random — it is shaped by physical geography, economic opportunity and historical patterns. Today, over half the world's population lives in urban areas, and this proportion is growing rapidly. Understanding why people settle and migrate helps explain the human geography of the entire planet.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Population density</strong> = total population ÷ area (km²). High density = many people per km²; low density = few people per km².</li>
<li><strong>Physical factors</strong> encouraging settlement: flat land, fertile soil, near fresh water, sheltered from wind, mild climate.</li>
<li><strong>Human factors</strong>: transport links, employment, existing services (schools, hospitals), trade routes.</li>
<li><strong>Urbanisation</strong> = increasing proportion of population living in cities. Driven by pull factors (jobs, services) and push factors (rural poverty, mechanisation of farming).</li>
<li><strong>Settlement hierarchy</strong>: hamlet → village → town → city → conurbation. Higher up = more services, larger population, greater sphere of influence.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Country A has a population of 8,000,000 and an area of 400 km². Country B has a population of 2,000,000 and an area of 500 km². Which is more densely populated?</p>
<p><strong>Solution:</strong><br>
Country A: 8,000,000 ÷ 400 = <strong>20,000 people/km²</strong><br>
Country B: 2,000,000 ÷ 500 = <strong>4,000 people/km²</strong><br>
Country A is <strong>5 times</strong> more densely populated. Despite having fewer total people, Country B's much larger area means people are more spread out.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Population density</dt><dd>The number of people per square kilometre — a measure of how crowded an area is.</dd>
<dt>Urbanisation</dt><dd>The process by which an increasing proportion of a country's population lives in urban (city/town) areas.</dd>
<dt>Push factors</dt><dd>Reasons that drive people away from an area — e.g. lack of jobs, poverty, natural disasters.</dd>
<dt>Pull factors</dt><dd>Reasons that attract people to an area — e.g. employment, better services, higher wages.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Dividing area by population — ✅ Correct: population density = <strong>population ÷ area</strong>, not the other way round.</li>
<li>❌ Thinking high population density always means a city — ✅ Correct: some <strong>rural</strong> areas (e.g. river deltas used for farming) can have very high density.</li>
<li>❌ Confusing urbanisation with urban growth — ✅ Correct: urbanisation is about the <strong>proportion</strong> living in cities; urban growth is about the <strong>size</strong> of cities growing.</li>
</ul>`,

"island-35": `<h4>Introduction</h4>
<p>Biomes are the world's major ecosystems, each defined by its climate, vegetation and wildlife. From the dense tropical rainforest to the parched Sahara, biomes follow predictable patterns across the globe — and human activity is threatening many of them at an alarming rate.</p>
<h4>📌 Key Points</h4>
<ul>
<li>A <strong>biome</strong> is a large-scale ecosystem defined by climate and dominant vegetation type. Distribution follows latitude and climate zones.</li>
<li><strong>Tropical rainforest</strong>: near the Equator; hot (~27°C) and wet (2,000mm+ rainfall/year) all year. Four layers: emergent, canopy, understorey, forest floor.</li>
<li><strong>Hot desert</strong>: very hot days, cold nights; minimal rainfall (&lt;250mm/year); found 20–30° north and south of Equator.</li>
<li><strong>Deforestation</strong> causes: logging, cattle ranching, palm oil, mining, population pressure. Effects: biodiversity loss, climate change, soil erosion, disrupted water cycle.</li>
<li>Adaptations are critical — every organism in a biome has specific features allowing it to survive the local conditions.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Explain how the drip-tip leaf and buttress roots are adaptations to the tropical rainforest.</p>
<p><strong>Solution:</strong><br>
<strong>Drip-tip leaves:</strong> The rainforest receives heavy, frequent rainfall. Leaves with pointed tips allow water to run off quickly, preventing the growth of algae and fungi that would block sunlight and damage the leaf. This <strong>adaptation responds to the excessive rainfall</strong> of the biome.<br><br>
<strong>Buttress roots:</strong> The soil is thin (nutrients quickly washed away by rain). Large, wide roots spreading out from the base of tall trees provide stability and increase the surface area for absorbing nutrients. This <strong>adaptation responds to shallow, nutrient-poor soil</strong>.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Biome</dt><dd>A large global ecosystem defined by its climate, characteristic vegetation and wildlife.</dd>
<dt>Biodiversity</dt><dd>The variety of living species in an area — the tropical rainforest has the highest biodiversity on Earth.</dd>
<dt>Deforestation</dt><dd>The large-scale clearing of forest, typically for agriculture, logging or development.</dd>
<dt>Adaptation</dt><dd>An inherited feature that helps an organism survive in its specific environment.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking all of Africa is hot desert — ✅ Correct: Africa contains <strong>multiple biomes</strong> — rainforest, savanna, desert, Mediterranean and more.</li>
<li>❌ Saying deforestation only affects local wildlife — ✅ Correct: deforestation releases stored carbon, contributing to <strong>global</strong> climate change.</li>
<li>❌ Confusing climate zone with biome — ✅ Correct: climate zone refers to temperature and rainfall patterns; biome includes the <strong>living organisms</strong> adapted to those conditions.</li>
</ul>`,

"island-36": `<h4>Introduction</h4>
<p>The ground beneath your feet is constantly moving — just too slowly to notice. The Earth's tectonic plates shift on convection currents in the mantle, and where they meet, they produce the planet's most dramatic and dangerous events: volcanoes and earthquakes. Understanding plate boundaries saves lives.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Earth's structure</strong> (outside → in): crust → mantle → outer core (liquid) → inner core (solid).</li>
<li><strong>Convection currents</strong> in the mantle drive plate movement — hot rock rises, spreads, cools and sinks, dragging plates above.</li>
<li><strong>Constructive boundary</strong>: plates move apart → magma rises → new crust → volcanoes and rift valleys (e.g. Iceland).</li>
<li><strong>Destructive boundary</strong>: oceanic plate subducts under continental → melts → volcanoes and fold mountains → earthquakes (e.g. Japan, Andes).</li>
<li><strong>Conservative boundary</strong>: plates slide past each other → no volcanoes → massive earthquakes (e.g. San Andreas Fault).</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Japan experiences frequent earthquakes and volcanic eruptions. Using plate tectonics, explain why.</p>
<p><strong>Solution:</strong><br>
Japan sits on a <strong>destructive plate boundary</strong> where the Pacific Plate (oceanic, denser) is forced under the Eurasian Plate (continental) — a process called <strong>subduction</strong>.<br><br>
<strong>Earthquakes:</strong> As the plates grind together, enormous friction builds up. When this is suddenly released, the energy travels as seismic waves → earthquake.<br>
<strong>Volcanoes:</strong> The subducting plate melts as it descends into the mantle, forming magma. This forces its way up through weaknesses in the continental crust → volcanic eruption.<br>
Japan's location above this boundary makes both hazards <strong>frequent and severe</strong>.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Tectonic plate</dt><dd>A large, rigid segment of the Earth's crust and upper mantle that moves on convection currents in the mantle.</dd>
<dt>Subduction</dt><dd>The process where a denser oceanic plate is forced under a lighter continental plate at a destructive boundary.</dd>
<dt>Epicentre</dt><dd>The point on the Earth's surface directly above the focus (origin) of an earthquake — usually where shaking is most intense.</dd>
<dt>Richter scale</dt><dd>A logarithmic scale measuring earthquake magnitude — each step represents 10 times more energy released.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Saying volcanoes form at all plate boundaries — ✅ Correct: <strong>no volcanoes</strong> form at conservative boundaries — only earthquakes.</li>
<li>❌ Confusing focus and epicentre — ✅ Correct: the <strong>focus</strong> is underground where the earthquake originates; the <strong>epicentre</strong> is on the surface above it.</li>
<li>❌ Thinking the Richter scale is linear — ✅ Correct: it is <strong>logarithmic</strong> — a magnitude 7 earthquake releases 10× more energy than a magnitude 6.</li>
</ul>`,

"island-37": `<h4>Introduction</h4>
<p>Africa is not a country — it is a vast, diverse continent of 54 nations, thousands of languages and extraordinary geographical variety. Challenging misconceptions about Africa is an important geographical skill, as is understanding development indicators and the complex impact of tourism on African economies and environments.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Africa has 54 countries, over 2,000 languages, and contains every type of landscape: desert, rainforest, savanna, mountains and coastlines.</li>
<li><strong>HDI (Human Development Index)</strong> measures development using three indicators: life expectancy, education, and income per person (GNI per capita).</li>
<li>Africa's development varies enormously: some countries (e.g. Seychelles, South Africa) have high HDI; others (e.g. Niger, South Sudan) face severe challenges.</li>
<li><strong>Tourism</strong> brings foreign exchange, jobs and conservation funding — but can also cause "leakage" (profits leaving the local economy), environmental damage and cultural erosion.</li>
<li><strong>Sustainable development</strong>: meeting present needs without compromising future generations' ability to meet theirs — tourism and resource use must balance economic, social and environmental goals.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Assess the benefits and costs of tourism in Kenya.</p>
<p><strong>Solution:</strong><br>
<strong>Benefits:</strong><br>
• Economic: tourism is Kenya's largest foreign exchange earner; supports ~10% of employment directly and indirectly.<br>
• Environmental: national parks funded by tourism revenue protect wildlife and habitats (e.g. Masai Mara).<br>
• Cultural: demand for cultural experiences supports traditional crafts and communities.<br><br>
<strong>Costs:</strong><br>
• Leakage: profits from foreign-owned hotels and airlines leave Kenya — reducing local benefit.<br>
• Environmental: off-road vehicles damage savanna habitats; water-intensive hotels strain supplies in dry regions.<br>
• Cultural: commodification — traditions performed for tourists can lose authentic meaning.<br><br>
<strong>Conclusion:</strong> Tourism can bring significant benefits if managed sustainably and profits kept locally.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>HDI</dt><dd>Human Development Index — a composite score (0–1) measuring a country's development through life expectancy, education and income.</dd>
<dt>Leakage</dt><dd>The proportion of tourism income that flows out of the local economy to foreign companies or imported goods.</dd>
<dt>Sustainable development</dt><dd>Development that meets present needs without compromising the ability of future generations to meet theirs.</dd>
<dt>GNI per capita</dt><dd>Gross National Income per person — a measure of average income used in the HDI calculation.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Treating Africa as one country with one culture — ✅ Correct: Africa is a <strong>continent of 54 diverse nations</strong>. Generalisations are almost always wrong.</li>
<li>❌ Saying tourism is always good for development — ✅ Correct: without careful management, leakage means most profit <strong>leaves</strong> the local economy.</li>
<li>❌ Confusing GDP and HDI — ✅ Correct: GDP measures only <strong>economic output</strong>; HDI measures health and education <strong>as well as</strong> income.</li>
</ul>`,

"island-30": `<h4>Introduction</h4>
<p>Energy is the ability to do work — and it exists in many different stores. The crucial principle is that energy is never created or destroyed, only transferred between stores. Understanding how this works explains everything from a bouncing ball to a power station.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Key energy stores: <strong>kinetic</strong> (moving), <strong>thermal</strong> (heat), <strong>chemical</strong> (food/fuel), <strong>gravitational potential</strong> (height), <strong>elastic potential</strong> (stretched/compressed), <strong>nuclear</strong>.</li>
<li><strong>Law of Conservation of Energy</strong>: energy cannot be created or destroyed — only transferred from one store to another.</li>
<li>Energy is transferred by: <strong>heating</strong>, <strong>forces doing work</strong>, <strong>electricity</strong>, and <strong>waves</strong> (light, sound).</li>
<li><strong>Conduction</strong> (solids), <strong>convection</strong> (fluids) and <strong>radiation</strong> (no medium needed) are the three methods of heat transfer.</li>
<li>No device is 100% efficient — some energy is always "wasted" as thermal energy (heat) in the surroundings.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Describe the energy transfers when a ball is dropped from a height and bounces.</p>
<p><strong>Solution:</strong><br>
1. Ball held still at height → <strong>gravitational potential energy (GPE)</strong> store is full.<br>
2. Ball falls → GPE transfers to <strong>kinetic energy (KE)</strong> store. KE increases as it speeds up.<br>
3. Ball hits ground → KE transfers to <strong>elastic potential energy</strong> (ball squashes briefly) and <strong>thermal energy + sound</strong> (some is wasted).<br>
4. Ball bounces up → elastic PE transfers back to KE, then to GPE — but less than before (energy lost as heat/sound).<br>
Each bounce is lower — total energy is <strong>conserved</strong> but some is in less useful forms.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Energy store</dt><dd>A way of holding energy — kinetic, thermal, chemical, gravitational potential, elastic potential, nuclear.</dd>
<dt>Conservation of energy</dt><dd>The principle that the total energy in a closed system remains constant — energy is never created or destroyed.</dd>
<dt>Conduction</dt><dd>Heat transfer through a solid by vibrating particles passing energy along the material.</dd>
<dt>Convection</dt><dd>Heat transfer in a fluid (liquid or gas) by the movement of currents — hot fluid rises, cool fluid sinks.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Saying energy "disappears" or is "used up" — ✅ Correct: energy is always <strong>transferred</strong> — it never vanishes, it just moves to a less useful store.</li>
<li>❌ Confusing heat transfer methods — ✅ Correct: conduction needs a <strong>solid</strong>; convection needs a <strong>fluid</strong>; radiation needs <strong>nothing</strong>.</li>
<li>❌ Thinking a more powerful device is more efficient — ✅ Correct: efficiency is about the <strong>proportion</strong> of useful output energy, not the total power.</li>
</ul>`,

"island-38": `<h4>Introduction</h4>
<p>Science is not just a body of facts — it is a method of finding things out. Scientific enquiry uses careful observation, measurement and testing to build reliable explanations. Before you can draw meaningful conclusions, you need to know how to plan a fair test, identify variables, and record results properly.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Every experiment has three types of variable: <strong>independent</strong> (what you change), <strong>dependent</strong> (what you measure), and <strong>control</strong> (what you keep the same).</li>
<li>A <strong>fair test</strong> changes only ONE independent variable at a time — everything else must stay the same.</li>
<li>A <strong>hypothesis</strong> is a testable prediction that explains WHY you expect a particular outcome.</li>
<li><strong>Repeating</strong> measurements and calculating a <strong>mean</strong> makes results more reliable. Discard obvious anomalies first.</li>
<li>Results can be <strong>displayed</strong> in tables, bar charts (categoric data) or line graphs (continuous data). Choose the graph type that matches your data.</li>
<li>Key lab safety rules: wear goggles for chemicals, tie back hair, never run, report spills, know where the fire extinguisher is.</li>
</ul>
<div class="lesson-diagram" data-diagram="variables-diagram"><p class="diagram-caption">The three types of variable in an experiment</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> A student investigates how temperature affects how quickly sugar dissolves. Identify the three types of variable.</p>
<p><strong>Solution:</strong><br>
Independent variable (what you change): <strong>temperature of the water</strong> (e.g. 20 °C, 40 °C, 60 °C, 80 °C).<br>
Dependent variable (what you measure): <strong>time taken for sugar to dissolve</strong> (in seconds).<br>
Control variables (keep the same): volume of water, amount of sugar, stirring speed, type of sugar.<br>
This makes it a fair test — any change in dissolving time must be due to temperature.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Independent variable</dt><dd>The variable you deliberately change in an experiment.</dd>
<dt>Dependent variable</dt><dd>The variable you observe or measure — it depends on the independent variable.</dd>
<dt>Control variable</dt><dd>A variable kept constant to ensure the test is fair.</dd>
<dt>Hypothesis</dt><dd>A testable, reasoned prediction (not just a guess) that can be supported or disproved by data.</dd>
<dt>Anomaly</dt><dd>A result that does not fit the overall pattern and may be due to error.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Changing more than one variable at once — ✅ Correct: change ONLY the independent variable so you know what caused the effect.</li>
<li>❌ Writing a hypothesis with no explanation — ✅ Correct: include a reason ("I predict X because…").</li>
<li>❌ Drawing a line of best fit through every point including anomalies — ✅ Correct: ignore outliers and draw the line through the general trend.</li>
</ul>`,

"island-39": `<h4>Introduction</h4>
<p>Electricity powers almost everything in modern life, and magnetism is closely linked to it. Understanding how current flows in circuits, how components affect that flow, and how magnets create invisible fields gives you the tools to explain everything from a torch to a maglev train.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Current</strong> (I) is the flow of charge, measured in Amps (A). <strong>Voltage</strong> (V) is the push from the battery, measured in Volts (V). <strong>Resistance</strong> (R) opposes current, measured in Ohms (Ω).</li>
<li><strong>Ohm's Law</strong>: V = I × R — if voltage increases (and resistance stays the same), current increases.</li>
<li>In a <strong>series circuit</strong>: one loop, same current everywhere, voltage is shared between components.</li>
<li>In a <strong>parallel circuit</strong>: multiple branches, voltage the same across each branch, current splits between branches.</li>
<li><strong>Magnets</strong> have north and south poles. Like poles repel, opposite poles attract. A magnetic field is strongest at the poles.</li>
<li>An <strong>electromagnet</strong> is made by wrapping wire around an iron core and passing current through it — it can be switched on and off.</li>
</ul>
<div class="lesson-diagram" data-diagram="circuit-comparison"><p class="diagram-caption">Series vs parallel circuit layout</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> A 6 V battery is connected to a bulb with a resistance of 3 Ω. Calculate the current flowing.</p>
<p><strong>Solution:</strong><br>
V = I × R → rearrange → I = V ÷ R<br>
I = 6 V ÷ 3 Ω = <strong>2 A</strong><br>
A current of 2 Amps flows through the bulb.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Current (I)</dt><dd>The rate of flow of electric charge around a circuit. Measured in Amperes (A) using an ammeter in series.</dd>
<dt>Voltage (V)</dt><dd>The energy given to each unit of charge by the power source. Measured in Volts (V) using a voltmeter in parallel.</dd>
<dt>Resistance (R)</dt><dd>A measure of how much a component opposes the flow of current. Measured in Ohms (Ω).</dd>
<dt>Electromagnet</dt><dd>A temporary magnet made by passing current through a coil of wire around an iron core.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking current is "used up" by bulbs — ✅ Correct: current is the SAME everywhere in a series circuit; energy is transferred, not current.</li>
<li>❌ Connecting a voltmeter in series — ✅ Correct: voltmeters go in <strong>parallel</strong> across a component; ammeters go in <strong>series</strong>.</li>
<li>❌ Thinking all metals are magnetic — ✅ Correct: only iron, cobalt, nickel (and steel, which contains iron) are magnetic.</li>
</ul>`,

"island-40": `<h4>Introduction</h4>
<p>Waves transfer energy from one place to another without transferring matter. They are everywhere — from the sound of your voice to the light from the Sun. The electromagnetic (EM) spectrum organises all types of EM radiation by frequency and wavelength, from radio waves to deadly gamma rays.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Transverse waves</strong>: vibrations are perpendicular to the direction of travel (e.g. light, water waves). <strong>Longitudinal waves</strong>: vibrations are parallel (e.g. sound).</li>
<li><strong>Amplitude</strong> = height from rest to peak (relates to loudness/brightness). <strong>Wavelength</strong> = distance from one peak to the next. <strong>Frequency</strong> = number of waves per second (Hz).</li>
<li>Wave speed equation: <strong>v = f × λ</strong> (speed = frequency × wavelength).</li>
<li>The EM spectrum in order of increasing frequency: <strong>Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma rays</strong>.</li>
<li>All EM waves travel at the <strong>speed of light</strong> (3 × 10⁸ m/s) in a vacuum and do NOT need a medium.</li>
<li>Higher frequency = shorter wavelength = more energy = more dangerous.</li>
</ul>
<div class="lesson-diagram" data-diagram="wave-properties"><p class="diagram-caption">Transverse wave: amplitude, wavelength and frequency</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<div class="lesson-diagram" data-diagram="em-spectrum"><p class="diagram-caption">The electromagnetic spectrum in order</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> A wave has a frequency of 500 Hz and a wavelength of 0.6 m. Calculate the wave speed.</p>
<p><strong>Solution:</strong><br>
v = f × λ<br>
v = 500 Hz × 0.6 m = <strong>300 m/s</strong><br>
The wave travels at 300 metres per second.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Amplitude</dt><dd>The maximum displacement from the rest position — determines how much energy the wave carries.</dd>
<dt>Frequency</dt><dd>The number of complete waves passing a point per second. Measured in Hertz (Hz).</dd>
<dt>Wavelength (λ)</dt><dd>The distance from one point on a wave to the same point on the next wave (e.g. peak to peak).</dd>
<dt>Electromagnetic spectrum</dt><dd>The complete range of EM waves arranged by frequency/wavelength, from radio waves to gamma rays.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Measuring amplitude from peak to trough — ✅ Correct: amplitude is from the <strong>rest position to ONE peak</strong> (half of peak-to-trough).</li>
<li>❌ Thinking sound is an EM wave — ✅ Correct: sound is a <strong>longitudinal mechanical wave</strong> — it needs a medium and travels much slower than light.</li>
<li>❌ Getting the EM spectrum order wrong — ✅ Remember: "Really Mighty Insects Vex Ugly X-ray Guns" (Radio, Micro, IR, Visible, UV, X, Gamma).</li>
</ul>`,

"island-41": `<h4>Introduction</h4>
<p>With millions of species on Earth, scientists need a system to organise and name them. Classification groups organisms by shared characteristics — from broad kingdoms down to individual species. This system, pioneered by Carl Linnaeus, allows scientists worldwide to communicate clearly about living things.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The <strong>five kingdoms</strong>: Animals, Plants, Fungi, Protists, Prokaryotes (bacteria).</li>
<li>The classification hierarchy: <strong>Kingdom → Phylum → Class → Order → Family → Genus → Species</strong>. Memory aid: "King Philip Came Over For Good Soup."</li>
<li><strong>Vertebrates</strong> (animals with backbones) are divided into: Fish, Amphibians, Reptiles, Birds, Mammals.</li>
<li><strong>Invertebrates</strong> (no backbone) include: insects, arachnids, molluscs, crustaceans, worms.</li>
<li><strong>Binomial nomenclature</strong>: every species has a two-part Latin name — Genus (capital) + species (lowercase), always italicised. Example: <em>Homo sapiens</em>.</li>
<li>A <strong>dichotomous key</strong> uses a series of yes/no questions to identify an unknown organism step by step.</li>
</ul>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Use this simple key to identify an organism:<br>
1. Does it have a backbone? → Yes: go to 2 / No: Invertebrate<br>
2. Is it warm-blooded? → Yes: go to 3 / No: Fish, Amphibian or Reptile<br>
3. Does it have feathers? → Yes: Bird / No: Mammal</p>
<p><strong>Solution:</strong> An animal that has a backbone, is warm-blooded, and has no feathers → <strong>Mammal</strong>.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Species</dt><dd>A group of organisms that can reproduce together to produce fertile offspring.</dd>
<dt>Vertebrate</dt><dd>An animal with an internal backbone (spinal column).</dd>
<dt>Binomial nomenclature</dt><dd>The two-part naming system: Genus + species (e.g. <em>Canis lupus</em> = wolf).</dd>
<dt>Dichotomous key</dt><dd>A branching identification tool where each step has exactly two choices.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Calling all small creatures "insects" — ✅ Correct: insects have exactly <strong>6 legs</strong>. Spiders (8 legs) are arachnids, woodlice (14 legs) are crustaceans.</li>
<li>❌ Writing binomial names without italics or with both words capitalised — ✅ Correct: <em>Homo sapiens</em> (italics, genus capitalised, species lowercase).</li>
<li>❌ Thinking fungi are plants — ✅ Correct: fungi have NO chlorophyll and cannot photosynthesise. They feed by decomposing dead organisms.</li>
</ul>`,

"island-42": `<h4>Introduction</h4>
<p>Your body is a remarkable machine made of organ systems that work together to keep you alive. The circulatory system transports blood, the digestive system breaks down food, the respiratory system handles gas exchange, and the nervous system coordinates everything. Understanding these systems helps you make sense of your own health.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The <strong>heart</strong> is a double pump: the RIGHT side pumps blood to the lungs (pulmonary circuit); the LEFT side pumps oxygenated blood to the body (systemic circuit).</li>
<li>Blood vessels: <strong>arteries</strong> (thick walls, away from heart), <strong>veins</strong> (thin walls + valves, towards heart), <strong>capillaries</strong> (one-cell thick, site of exchange).</li>
<li>The <strong>digestive system</strong> path: Mouth → Oesophagus → Stomach → Small intestine (absorption) → Large intestine (water absorption) → Rectum.</li>
<li>In the <strong>lungs</strong>, oxygen diffuses from alveoli into the blood, and CO₂ diffuses out — this is gas exchange.</li>
<li>The <strong>nervous system</strong>: stimulus → receptor → sensory neurone → CNS (brain/spinal cord) → motor neurone → effector (muscle/gland) → response.</li>
<li><strong>Reflex actions</strong> bypass the brain for speed — e.g. pulling your hand from a flame.</li>
</ul>
<div class="lesson-diagram" data-diagram="heart-diagram"><p class="diagram-caption">The structure of the heart and blood flow</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Trace the path of blood from the body, through the heart and lungs, and back to the body.</p>
<p><strong>Solution:</strong><br>
1. Deoxygenated blood from the body enters the <strong>right atrium</strong> via the vena cava.<br>
2. Flows through the tricuspid valve into the <strong>right ventricle</strong>.<br>
3. Pumped to the <strong>lungs</strong> via the pulmonary artery (picks up O₂, drops off CO₂).<br>
4. Oxygenated blood returns to the <strong>left atrium</strong> via the pulmonary vein.<br>
5. Flows through the bicuspid valve into the <strong>left ventricle</strong>.<br>
6. Pumped to the <strong>body</strong> via the aorta — delivers oxygen to cells.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Artery</dt><dd>A blood vessel carrying blood AWAY from the heart, with thick elastic walls to withstand high pressure.</dd>
<dt>Alveoli</dt><dd>Tiny air sacs in the lungs where gas exchange occurs. Large surface area, thin walls, rich blood supply.</dd>
<dt>Enzyme</dt><dd>A biological catalyst that speeds up digestion by breaking down large food molecules (e.g. amylase breaks starch into sugars).</dd>
<dt>Reflex arc</dt><dd>The nerve pathway for an automatic response: receptor → sensory neurone → relay neurone → motor neurone → effector.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking arteries always carry oxygenated blood — ✅ Correct: the <strong>pulmonary artery</strong> carries deoxygenated blood to the lungs (arteries = AWAY from heart).</li>
<li>❌ Confusing absorption with digestion — ✅ Correct: digestion <strong>breaks down</strong> food; absorption is where nutrients <strong>pass into the blood</strong> (mostly in the small intestine).</li>
<li>❌ Saying the brain controls reflexes — ✅ Correct: reflexes use the <strong>spinal cord</strong> as the relay centre to save time.</li>
</ul>`,

"island-43": `<h4>Introduction</h4>
<p>Genetics explains how characteristics are passed from parents to offspring through DNA. Genes are instructions for making proteins, and different versions of a gene (alleles) create variation. Natural selection then acts on this variation — organisms best suited to their environment survive and reproduce more, gradually changing populations over time.</p>
<h4>📌 Key Points</h4>
<ul>
<li><strong>DNA</strong> is found in the nucleus, organised into <strong>chromosomes</strong>. Humans have 46 chromosomes (23 pairs). A <strong>gene</strong> is a section of DNA that codes for a protein.</li>
<li><strong>Alleles</strong> are different versions of the same gene. You inherit one allele from each parent.</li>
<li><strong>Dominant</strong> alleles (capital letter, e.g. B) show their effect even if only one copy is present. <strong>Recessive</strong> alleles (lowercase, e.g. b) only show when two copies are present (bb).</li>
<li><strong>Genotype</strong> = the alleles you have (e.g. Bb). <strong>Phenotype</strong> = the physical characteristic you display (e.g. brown eyes).</li>
<li>A <strong>Punnett square</strong> predicts the probability of offspring genotypes by crossing parent alleles.</li>
<li><strong>Natural selection</strong>: variation → competition → survival of the fittest → reproduction → beneficial traits passed on → population changes over time.</li>
</ul>
<div class="lesson-diagram" data-diagram="punnett-square"><p class="diagram-caption">Using a Punnett square to predict offspring genotypes</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Brown eyes (B) are dominant over blue eyes (b). Both parents are heterozygous (Bb). What are the possible offspring genotypes?</p>
<p><strong>Solution:</strong><br>
Punnett square:<br>
&nbsp;&nbsp;&nbsp;&nbsp;B&nbsp;&nbsp;&nbsp;b<br>
B&nbsp;&nbsp;BB&nbsp;&nbsp;Bb<br>
b&nbsp;&nbsp;Bb&nbsp;&nbsp;bb<br><br>
Offspring: 1 BB : 2 Bb : 1 bb<br>
Phenotype ratio: <strong>3 brown eyes : 1 blue eyes</strong> (75% brown, 25% blue)</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Gene</dt><dd>A short section of DNA on a chromosome that codes for a specific protein or characteristic.</dd>
<dt>Allele</dt><dd>A version of a gene. Different alleles produce different variations of a characteristic.</dd>
<dt>Homozygous</dt><dd>Having two identical alleles for a gene (BB or bb).</dd>
<dt>Heterozygous</dt><dd>Having two different alleles for a gene (Bb). The dominant allele determines the phenotype.</dd>
<dt>Natural selection</dt><dd>The process by which organisms with advantageous traits survive and reproduce more, passing those traits to the next generation.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Confusing genotype and phenotype — ✅ Correct: genotype is the <strong>alleles</strong> (letters); phenotype is the <strong>physical feature</strong> you can observe.</li>
<li>❌ Thinking evolution happens to individuals — ✅ Correct: individuals do not evolve; <strong>populations</strong> change over many generations through natural selection.</li>
<li>❌ Saying "survival of the fittest" means strongest — ✅ Correct: "fittest" means <strong>best adapted to the environment</strong>, not physically strongest.</li>
</ul>`,

"island-44": `<h4>Introduction</h4>
<p>Photosynthesis and respiration are two of the most important chemical processes in biology. Plants use photosynthesis to convert light energy into glucose (food), and all living things use respiration to release energy from that glucose. Together they form a cycle — each process uses the other's waste products.</p>
<div class="example-box" style="background:#f0f9ff;border-left:4px solid #3b82f6;">
<p><strong>🔤 Quick formula reminder</strong><br>
This topic uses chemical formulae — here's what the symbols mean:<br>
<strong>CO₂</strong> = carbon dioxide (1 carbon + 2 oxygen atoms) — the gas we breathe out<br>
<strong>H₂O</strong> = water (2 hydrogen + 1 oxygen)<br>
<strong>O₂</strong> = oxygen gas (2 oxygen atoms bonded) — the gas we breathe in<br>
<strong>C₆H₁₂O₆</strong> = glucose (a sugar — 6 carbon, 12 hydrogen, 6 oxygen atoms)<br>
The small numbers (subscripts) tell you how many atoms of each element are present.</p>
</div>
<h4>📌 Key Points</h4>
<ul>
<li><strong>Photosynthesis equation</strong>: Carbon dioxide + Water → (light energy, chlorophyll) → Glucose + Oxygen<br>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂</li>
<li>Photosynthesis happens in <strong>chloroplasts</strong> (which contain green chlorophyll) in leaf cells.</li>
<li>Three factors affect rate: <strong>light intensity</strong>, <strong>CO₂ concentration</strong>, and <strong>temperature</strong>. Each can be a limiting factor.</li>
<li><strong>Aerobic respiration</strong>: Glucose + Oxygen → Carbon dioxide + Water + ENERGY<br>C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy</li>
<li><strong>Anaerobic respiration</strong> (without oxygen): Glucose → Lactic acid + some energy (in animals) or Glucose → Ethanol + CO₂ + some energy (in yeast).</li>
<li>Aerobic releases <strong>much more energy</strong> than anaerobic. All living cells respire 24/7 — it never stops.</li>
</ul>
<div class="lesson-diagram" data-diagram="photosynthesis-diagram"><p class="diagram-caption">Photosynthesis: inputs and outputs</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> A student increases light intensity on a plant and measures the rate of photosynthesis. At first it rises, then it levels off. Explain why.</p>
<p><strong>Solution:</strong><br>
1. At low light, light is the <strong>limiting factor</strong> — increasing it speeds up photosynthesis.<br>
2. As light increases, the rate rises proportionally.<br>
3. Eventually the rate <strong>plateaus</strong> because another factor (e.g. CO₂ or temperature) becomes the new limiting factor.<br>
4. The plant cannot photosynthesise faster until THAT factor is also increased.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Photosynthesis</dt><dd>The process by which plants convert light energy, CO₂ and water into glucose and oxygen in chloroplasts.</dd>
<dt>Chlorophyll</dt><dd>The green pigment in chloroplasts that absorbs light energy for photosynthesis.</dd>
<dt>Aerobic respiration</dt><dd>Releasing energy from glucose using oxygen — happens in mitochondria, produces CO₂ + water + lots of energy.</dd>
<dt>Limiting factor</dt><dd>The factor in shortest supply that restricts the rate of a process (e.g. light intensity limiting photosynthesis).</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking plants only photosynthesise (not respire) — ✅ Correct: plants do <strong>both</strong>. They respire all the time; they photosynthesise only in light.</li>
<li>❌ Saying photosynthesis is the reverse of respiration — ✅ Correct: the equations look opposite, but they are completely different processes in different organelles.</li>
<li>❌ Thinking anaerobic respiration only happens during exercise — ✅ Correct: it happens whenever cells <strong>lack sufficient oxygen</strong>, e.g. waterlogged roots, yeast in bread dough.</li>
</ul>`,

"island-45": `<h4>Introduction</h4>
<p>Beneath your feet lies a dynamic planet. The Earth is made of layers — from a thin rocky crust to a super-hot iron core. Rocks are constantly being formed, broken down and reformed in the rock cycle. Understanding rock types and Earth's structure helps explain volcanoes, earthquakes, and the landscapes around us.</p>
<h4>📌 Key Points</h4>
<ul>
<li>Earth's four layers (outside to inside): <strong>Crust</strong> (thin, rocky, 5–70 km), <strong>Mantle</strong> (thick, semi-molten, convection currents), <strong>Outer core</strong> (liquid iron/nickel), <strong>Inner core</strong> (solid iron/nickel, ~5,500 °C).</li>
<li><strong>Igneous rocks</strong> form when magma or lava cools and solidifies. Intrusive (slow cooling underground → large crystals, e.g. granite). Extrusive (fast cooling on surface → small crystals, e.g. basalt).</li>
<li><strong>Sedimentary rocks</strong> form when layers of sediment are deposited, compacted and cemented over millions of years (e.g. sandstone, limestone). May contain fossils.</li>
<li><strong>Metamorphic rocks</strong> form when existing rocks are changed by extreme heat and/or pressure (e.g. marble from limestone, slate from mudstone).</li>
<li>The <strong>rock cycle</strong> shows how any rock type can become any other over geological time through weathering, erosion, deposition, heat, pressure, melting, and cooling.</li>
<li><strong>Fossils</strong> form when dead organisms are buried in sediment before they decay — they provide evidence of past life and evolution.</li>
</ul>
<div class="lesson-diagram" data-diagram="earth-layers"><p class="diagram-caption">The four layers of the Earth</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<div class="lesson-diagram" data-diagram="rock-cycle"><p class="diagram-caption">The rock cycle: how rocks transform between types</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Explain how a piece of granite (igneous rock) could eventually become marble (metamorphic rock).</p>
<p><strong>Solution:</strong><br>
1. Granite is <strong>weathered and eroded</strong> into small fragments.<br>
2. Fragments are <strong>transported</strong> (by rivers/wind) and <strong>deposited</strong> as sediment.<br>
3. Layers build up; weight <strong>compacts and cements</strong> the sediment into limestone (sedimentary rock).<br>
4. Tectonic forces push the limestone deep underground where <strong>intense heat and pressure</strong> change its structure → it becomes <strong>marble</strong> (metamorphic rock).</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Igneous</dt><dd>Rock formed from cooled magma or lava. "Igneous" comes from the Latin word for fire.</dd>
<dt>Sedimentary</dt><dd>Rock formed from compressed layers of sediment, often containing fossils.</dd>
<dt>Metamorphic</dt><dd>Rock that has been transformed by heat and/or pressure without melting completely.</dd>
<dt>Rock cycle</dt><dd>The continuous process by which rocks are created, broken down, and transformed between the three rock types.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking metamorphic rock involves melting — ✅ Correct: metamorphic rock changes structure under heat/pressure <strong>without fully melting</strong>. If it melts, it becomes magma → igneous.</li>
<li>❌ Confusing weathering and erosion — ✅ Correct: weathering = <strong>breaking down</strong> in place; erosion = <strong>transporting</strong> the broken pieces away.</li>
<li>❌ Thinking the rock cycle is one-directional — ✅ Correct: any rock type can become <strong>any other</strong> type — the cycle has multiple paths.</li>
</ul>`,

"island-46": `<h4>Introduction</h4>
<p>Earth's natural cycles — particularly the water cycle and carbon cycle — keep our planet habitable. Water circulates between oceans, atmosphere and land; carbon moves between living things, atmosphere, oceans and rocks. Human activities are now disrupting the carbon cycle, leading to the enhanced greenhouse effect and climate change.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The <strong>water cycle</strong>: Evaporation (liquid → gas) → Condensation (forms clouds) → Precipitation (rain/snow) → Collection (rivers/groundwater) → back to evaporation. Transpiration from plants also adds water vapour.</li>
<li>The <strong>carbon cycle</strong>: Carbon moves via photosynthesis (removes CO₂), respiration (releases CO₂), combustion (burning fossil fuels), decomposition, and dissolving in oceans.</li>
<li>The <strong>greenhouse effect</strong> is natural and essential — greenhouse gases (CO₂, methane, water vapour) trap heat and keep Earth warm enough for life.</li>
<li>The <strong>enhanced greenhouse effect</strong>: humans are burning fossil fuels and deforesting → extra CO₂ → more heat trapped → global temperatures rising = <strong>climate change</strong>.</li>
<li>Evidence for climate change: rising global temperatures, melting ice caps, rising sea levels, more extreme weather events, shifting ecosystems.</li>
<li>Reducing climate change: use renewable energy, reduce fossil fuel use, plant trees, reduce meat consumption, improve energy efficiency.</li>
</ul>
<div class="lesson-diagram" data-diagram="water-cycle"><p class="diagram-caption">The water cycle: evaporation, condensation and precipitation</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> Explain how cutting down and burning a forest increases the greenhouse effect.</p>
<p><strong>Solution:</strong><br>
1. Burning the trees releases <strong>stored carbon</strong> as CO₂ into the atmosphere (combustion).<br>
2. Fewer trees means <strong>less photosynthesis</strong> — so less CO₂ is removed from the atmosphere.<br>
3. More CO₂ in the atmosphere → more thermal energy (heat) is <strong>trapped</strong> by greenhouse gases → temperatures rise.<br>
Both effects combine: more CO₂ released AND less CO₂ absorbed = <strong>double impact</strong>.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Evaporation</dt><dd>Liquid water gaining energy and becoming water vapour (gas) — happens at the surface, below boiling point.</dd>
<dt>Condensation</dt><dd>Water vapour cooling and turning back into liquid water droplets — forms clouds.</dd>
<dt>Greenhouse gas</dt><dd>A gas that traps thermal energy in the atmosphere (e.g. CO₂, methane, water vapour).</dd>
<dt>Climate change</dt><dd>Long-term shifts in global temperatures and weather patterns, largely driven by increased greenhouse gas emissions from human activity.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Saying the greenhouse effect is bad — ✅ Correct: the NATURAL greenhouse effect is essential for life. It's the <strong>enhanced</strong> (extra) greenhouse effect that causes problems.</li>
<li>❌ Confusing weather and climate — ✅ Correct: weather is short-term (today's conditions); climate is the <strong>long-term average</strong> over 30+ years.</li>
<li>❌ Thinking only CO₂ is a greenhouse gas — ✅ Correct: methane, water vapour, and nitrous oxide are also greenhouse gases. Methane is actually more potent than CO₂ per molecule.</li>
</ul>`,

"island-47": `<h4>Introduction</h4>
<p>Our place in space is both humbling and fascinating. Earth is one of eight planets orbiting the Sun in our Solar System. Understanding why we have day and night, why the Moon changes shape, and why seasons exist comes down to how the Earth spins, tilts, and orbits — simple motions with profound effects.</p>
<h4>📌 Key Points</h4>
<ul>
<li>The eight planets in order from the Sun: <strong>Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune</strong>. Memory aid: "My Very Excited Mother Just Served Us Nachos."</li>
<li><strong>Day and night</strong> are caused by Earth rotating on its axis once every 24 hours — the side facing the Sun has daytime.</li>
<li><strong>Seasons</strong> are caused by Earth's <strong>axial tilt</strong> (23.5°). When the northern hemisphere tilts towards the Sun, it receives more direct sunlight → summer. When it tilts away → winter.</li>
<li>The <strong>Moon's phases</strong> occur because we see different amounts of the Moon's sunlit side as it orbits Earth (about 28 days for a full cycle): New Moon → Crescent → Quarter → Gibbous → Full Moon → back again.</li>
<li>A <strong>solar eclipse</strong> occurs when the Moon passes between Earth and Sun, blocking sunlight. A <strong>lunar eclipse</strong> occurs when Earth is between Sun and Moon, casting a shadow on the Moon.</li>
<li><strong>Gravity</strong> keeps planets in orbit around the Sun and the Moon in orbit around Earth. Larger mass = stronger gravitational pull.</li>
</ul>
<div class="lesson-diagram" data-diagram="solar-system"><p class="diagram-caption">The eight planets of the Solar System in order</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<div class="lesson-diagram" data-diagram="moon-phases"><p class="diagram-caption">The phases of the Moon</p><p class="diagram-expand-hint">Click to enlarge</p></div>
<h4>✏️ Worked Example</h4>
<div class="example-box">
<p><strong>Example:</strong> In June, the UK has long days and warm weather. In December, days are short and cold. Explain why.</p>
<p><strong>Solution:</strong><br>
1. In June, Earth's axial tilt means the <strong>northern hemisphere leans TOWARDS</strong> the Sun.<br>
2. Sunlight hits the UK at a more <strong>direct angle</strong> → more energy per unit area → warmer.<br>
3. The Sun is above the horizon for <strong>longer</strong> each day → more hours of heating.<br>
4. In December, the northern hemisphere tilts <strong>AWAY</strong> → sunlight is spread over a larger area (less intense) and days are shorter → colder.<br>
It is NOT because Earth is closer to the Sun in summer — Earth's orbit is nearly circular.</p>
</div>
<h4>📖 Key Vocabulary</h4>
<dl>
<dt>Orbit</dt><dd>The curved path one object takes around another due to gravity (e.g. Earth orbits the Sun in about 365.25 days).</dd>
<dt>Axis</dt><dd>An imaginary line through Earth from North Pole to South Pole, around which it rotates once per day.</dd>
<dt>Axial tilt</dt><dd>Earth's axis is tilted at 23.5° from vertical — this causes the seasons.</dd>
<dt>Solar eclipse</dt><dd>When the Moon passes directly between Earth and Sun, blocking sunlight from reaching part of Earth's surface.</dd>
</dl>
<h4>⚠️ Common Mistakes to Avoid</h4>
<ul>
<li>❌ Thinking summer happens because Earth is closer to the Sun — ✅ Correct: seasons are caused by Earth's <strong>axial tilt</strong>, not distance. (Australia has summer when we have winter!)</li>
<li>❌ Thinking the Moon produces its own light — ✅ Correct: the Moon <strong>reflects sunlight</strong>. Phases occur because we see different portions of its lit side.</li>
<li>❌ Confusing rotation and revolution — ✅ Correct: Earth <strong>rotates</strong> on its axis (causes day/night); it <strong>revolves</strong> (orbits) around the Sun (causes years).</li>
</ul>`

};
