// math-lessons-4.js — Lessons for Topics 14-17
Object.assign(LESSONS, {

'mi-14-1': {
  title: 'Order of Operations: Whole Numbers',
  sections: [
    {
      heading: 'What is BIDMAS?',
      content: '<p><strong>BIDMAS</strong> is the rule that tells everyone in the world how to evaluate the same expression and get the same answer. Without it, 3 + 4 × 2 could mean 14 or 11 — and both would seem "correct".</p><div class="lesson-diagram" data-diagram="y7-math-4-0"></div><p>Division/Multiplication and Addition/Subtraction are done <strong>left to right</strong> when they appear at the same level — they have equal priority within their pair.</p>'
    },
    {
      heading: 'Worked Examples',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>3 + 4 × 2</strong><br>× first: 4×2 = 8<br>Then +: 3+8 = <strong>11</strong></div><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>(5 + 3)² − 4</strong><br>Brackets: 5+3 = 8<br>Indices: 8² = 64<br>Subtract: 64−4 = <strong>60</strong></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>12 ÷ 3 × 2</strong><br>Left to right:<br>12÷3 = 4<br>4×2 = <strong>8</strong></div></div>'
    },
    {
      heading: 'Common Mistakes',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong style="color:#c62828">✗ Wrong</strong><br>3 + 4 × 2<br>= 7 × 2 = 14<br><span style="font-size:0.85em;color:#555">(adding before multiplying)</span></div><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong style="color:#2e7d32">✓ Correct</strong><br>3 + 4 × 2<br>= 3 + 8 = <strong>11</strong><br><span style="font-size:0.85em;color:#555">(multiply first)</span></div></div><div style="background:#fce4ec;padding:0.75em 1em;border-radius:8px;margin:0.5em 0"><strong>Also wrong:</strong> 12 ÷ 3 × 2 ≠ 2 (working right to left). Division and multiplication must go left to right.</div>'
    }
  ]
},

'mi-14-2': {
  title: 'Order of Operations: Decimals & Fractions',
  sections: [
    {
      heading: 'BIDMAS with Decimals and Fractions',
      content: '<p>BIDMAS applies equally to all number types. The rules never change — only the arithmetic becomes more careful.</p><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Key tip for fractions:</strong> Treat the fraction bar as hidden brackets. <br>The expression ½(6 + 2) means you <em>must</em> evaluate (6 + 2) first, giving ½ × 8 = 4.</div>'
    },
    {
      heading: 'Worked Examples',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>(1.5 + 0.5) × 4</strong><br>Brackets: 1.5+0.5 = 2<br>Multiply: 2×4 = <strong>8</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>½ + ¼ × 8</strong><br>Multiply first: ¼×8 = 2<br>Add: ½+2 = <strong>2½</strong></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>3.6 ÷ (0.9 × 2)</strong><br>Brackets: 0.9×2 = 1.8<br>Divide: 3.6÷1.8 = <strong>2</strong></div></div>'
    },
    {
      heading: 'Practice Strategy',
      content: '<p>Before calculating anything, scan the expression and number the steps in order:</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><ol style="margin:0;padding-left:1.3em"><li>Circle any brackets — evaluate these first.</li><li>Identify any indices (powers or roots) — evaluate next.</li><li>Scan left to right for × and ÷ — evaluate these together in order.</li><li>Finally, work left to right through + and −.</li></ol></div><div style="background:#fff3e0;padding:0.75em 1em;border-radius:8px;margin:0.5em 0"><strong>Fraction tip:</strong> Write ¾ as 3÷4 if it helps you see the operation clearly within a larger expression.</div>'
    }
  ]
},

'mi-14-3': {
  title: 'Order of Operations: Integers',
  sections: [
    {
      heading: 'BIDMAS with Negative Numbers',
      content: '<p>Negative integers add an extra layer of care — the position of the negative sign relative to brackets and indices changes the result completely.</p><div style="background:#fce4ec;padding:1em;border-radius:8px;border-left:4px solid #c62828;margin:0.75em 0"><strong>Critical distinction:</strong><br>−4² = −(4²) = −16 &nbsp;&nbsp; <span style="color:#555">(square applies to 4 only)</span><br>(−4)² = (−4)×(−4) = +16 &nbsp;&nbsp; <span style="color:#555">(square applies to −4)</span></div><p>The bracket makes all the difference. Without brackets, the negative sign is applied <em>after</em> the power.</p>'
    },
    {
      heading: 'Worked Examples',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>−3 × 4 + 5</strong><br>Multiply: −3×4 = −12<br>Add: −12+5 = <strong>−7</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>(−2)³</strong><br>(−2)×(−2) = +4<br>+4 × (−2) = <strong>−8</strong></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>10 − (−3) × 2</strong><br>Multiply: −3×2 = −6<br>Subtract −6: 10+6 = <strong>16</strong></div></div>'
    },
    {
      heading: 'Key Rule for Brackets with Indices',
      content: '<p>Always write brackets around a negative number when you mean to raise the negative to a power — without them, only the positive part is squared.</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Expression</th><th style="padding:8px;border:1px solid #ccc">What it means</th><th style="padding:8px;border:1px solid #ccc">Result</th></tr><tr><td style="padding:8px;border:1px solid #ccc">−5²</td><td style="padding:8px;border:1px solid #ccc">−(5²)</td><td style="padding:8px;border:1px solid #ccc;color:#c62828">−25</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">(−5)²</td><td style="padding:8px;border:1px solid #ccc">(−5)×(−5)</td><td style="padding:8px;border:1px solid #ccc;color:#2e7d32">+25</td></tr><tr><td style="padding:8px;border:1px solid #ccc">−5³</td><td style="padding:8px;border:1px solid #ccc">−(5³)</td><td style="padding:8px;border:1px solid #ccc;color:#c62828">−125</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">(−5)³</td><td style="padding:8px;border:1px solid #ccc">(−5)×(−5)×(−5)</td><td style="padding:8px;border:1px solid #ccc;color:#c62828">−125</td></tr></table>'
    }
  ]
},

'mi-15-1': {
  title: 'Rational Numbers on Number Lines',
  sections: [
    {
      heading: 'What Are Rational Numbers?',
      content: '<p>A <strong>rational number</strong> is any number that can be expressed as a fraction p/q, where p and q are integers and q ≠ 0. This is a very large set — it includes whole numbers, fractions, terminating decimals, and recurring decimals.</p><div class="lesson-diagram" data-diagram="y7-math-4-1"></div><p>Numbers like π and √2 are <strong>irrational</strong> — their decimal expansions go on forever without repeating, and cannot be written as an exact fraction.</p>'
    },
    {
      heading: 'Plotting on a Number Line',
      content: '<p>To plot a rational number: convert to a decimal if needed, identify which two integers it sits between, then mark its position proportionally.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example: Plot −¾ = −0.75</strong><br>It sits between −1 and 0, three-quarters of the way from 0 towards −1.<div class="lesson-diagram" data-diagram="y7-math-4-2"></div></div>'
    },
    {
      heading: 'Converting Recurring Decimals',
      content: '<p>Any recurring (repeating) decimal is rational — it can always be converted to a fraction using algebra.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Convert 0.333… to a fraction:</strong><br>Let x = 0.333…<br>Then 10x = 3.333…<br>Subtract: 10x − x = 3.333… − 0.333… → 9x = 3<br>x = 3/9 = <strong>⅓</strong></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Convert 0.727272… to a fraction:</strong><br>Let x = 0.727272…, then 100x = 72.727272…<br>99x = 72 → x = 72/99 = <strong>8/11</strong></div>'
    }
  ]
},

'mi-15-2': {
  title: 'Compare & Order Rational Numbers',
  sections: [
    {
      heading: 'Comparing Fractions and Decimals',
      content: '<p>To compare rational numbers reliably, convert all values to the <strong>same form</strong> — usually decimals — then compare. Be especially careful with negative values.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Which is greater: −⅖ or −⅓?</strong><br>Convert: −⅖ = −0.4, &nbsp; −⅓ ≈ −0.333<br>On the number line, −0.333 is to the right of −0.4 (closer to zero).<br>So −⅓ &gt; −⅖.</div><div style="background:#fce4ec;padding:0.75em 1em;border-radius:8px;margin:0.5em 0"><strong>Remember:</strong> With negatives, the number <em>closest to zero</em> is the <em>greatest</em>. −1 &lt; −½ &lt; 0.</div>'
    },
    {
      heading: 'Ordering a Mixed Set',
      content: '<p>When ordering a mix of fractions, decimals, and percentages, convert everything to decimals first, order those, then restate the answer in the original forms.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Order: 0.7, ¾, 71%</strong><br>Convert: 0.7 = 0.700 &nbsp; ¾ = 0.750 &nbsp; 71% = 0.710<br>Order (smallest to largest): 0.700 &lt; 0.710 &lt; 0.750<br>Answer: <strong>0.7 &lt; 71% &lt; ¾</strong></div>'
    },
    {
      heading: 'Absolute Value',
      content: '<p>The <strong>absolute value</strong> of a number is its distance from zero on the number line — always a positive result. Written with vertical bars: |x|.</p><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0;text-align:center"><div style="background:#e8f5e9;padding:8px;border-radius:8px">|−3.6| = <strong>3.6</strong></div><div style="background:#e8f5e9;padding:8px;border-radius:8px">|5| = <strong>5</strong></div><div style="background:#e8f5e9;padding:8px;border-radius:8px">|0| = <strong>0</strong></div></div><p>Absolute value is useful for comparing <em>how far</em> numbers are from zero (magnitude), regardless of direction. |−7| &gt; |3| because −7 is further from zero than 3 is.</p>'
    }
  ]
},

'mi-15-3': {
  title: 'Rational Number Problems',
  sections: [
    {
      heading: 'Adding and Subtracting Rational Numbers',
      content: '<p>Use a number line to guide your thinking — especially when the result changes sign. Convert to a common form first if the numbers are a mix of fractions and decimals.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> A temperature drops from 2½°C to −1¾°C. Find the change.<br>Change = −1¾ − 2½ = −7/4 − 10/4 = −17/4 = <strong>−4¼°C</strong><br><span style="font-size:0.85em;color:#555">The temperature dropped by 4¼ degrees (the negative sign shows it fell).</span></div>'
    },
    {
      heading: 'Real-World Problems',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Submarine depth</strong><br>At −12.5 m, rises 4.75 m.<br>−12.5 + 4.75 = <strong>−7.75 m</strong><br><span style="font-size:0.85em;color:#555">(still below sea level)</span></div><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Bank account</strong><br>Balance: −£45.50<br>Deposit £120.<br>−45.50 + 120 = <strong>£74.50</strong></div></div>'
    },
    {
      heading: 'Multiplying Rational Numbers',
      content: '<p>The sign rules for multiplying integers apply equally to fractions and decimals.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Same signs → Positive</strong><br>(−⅔)² = (−⅔)×(−⅔)<br>= 4/9<br><span style="font-size:0.85em;color:#555">negative × negative = positive</span></div><div style="background:#fce4ec;padding:10px;border-radius:8px"><strong>Different signs → Negative</strong><br>(−¾) × (4/5)<br>= −12/20 = <strong>−3/5</strong></div></div>'
    }
  ]
},

'mi-16-1': {
  title: 'Multi-Step Word Problems',
  sections: [
    {
      heading: 'A Strategy for Word Problems',
      content: '<p>The biggest reason students get word problems wrong is rushing past the reading. Take your time at the start — it saves time overall.</p><div class="lesson-diagram" data-diagram="y7-math-4-3"></div>'
    },
    {
      heading: 'Worked Examples',
      content: '<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 1:</strong> A cinema has 24 rows of 35 seats. 612 tickets are sold. How many seats are empty?<br>Total seats = 24 × 35 = 840<br>Empty = 840 − 612 = <strong>228 seats</strong></div><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example 2:</strong> 40% of a number is 28. Find 75% of the same number.<br>100% = 28 ÷ 0.4 = 70<br>75% of 70 = 0.75 × 70 = <strong>52.5</strong></div>'
    },
    {
      heading: 'Working Backwards',
      content: '<p>Some problems give the <em>final result</em> and ask for the starting value. Work backwards by reversing each step in reverse order.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> Sam thinks of a number, doubles it, adds 6, and gets 18. What is the number?<div class="lesson-diagram" data-diagram="y7-math-4-4"></div></div>'
    }
  ]
},

'mi-16-2': {
  title: 'Estimation Strategies',
  sections: [
    {
      heading: 'Why Estimate?',
      content: '<p>Estimation serves two purposes: getting a quick approximate answer when an exact one isn\'t needed, and checking whether a calculated answer is reasonable. A quick estimate takes seconds and can save you from submitting a badly wrong answer.</p><div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>The key method:</strong> Round each number to 1 significant figure, then calculate with those simpler numbers.<br>The result won\'t be exact — but it will be close enough to reveal any major errors.</div>'
    },
    {
      heading: 'Rounding to 1 Significant Figure',
      content: '<p>The first significant figure is the first non-zero digit from the left. Round to that digit — everything to the right becomes zero.</p><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0;font-size:0.9em"><div style="background:#f1f8e9;padding:8px;border-radius:8px">4,763 → <strong>5,000</strong></div><div style="background:#f1f8e9;padding:8px;border-radius:8px">0.0382 → <strong>0.04</strong></div><div style="background:#f1f8e9;padding:8px;border-radius:8px">61.7 → <strong>60</strong></div></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Estimate 487 × 32:</strong><br>≈ 500 × 30 = 15,000<br>Actual answer: 15,584 — about 4% off, which is perfectly acceptable for a check.</div>'
    },
    {
      heading: 'Checking Calculator Answers',
      content: '<p>Always estimate before or after using a calculator to catch input errors. A misplaced decimal or an extra digit is invisible to a calculator — but obvious against an estimate.</p><div style="background:#fce4ec;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Scenario:</strong> Your estimate is 15,000. The calculator shows 155,840.<br>That is ten times your estimate — you almost certainly typed an extra digit somewhere. Recheck!</div><div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Scenario:</strong> Your estimate is 15,000. The calculator shows 15,584.<br>That is close — the answer is credible.</div>'
    }
  ]
},

'mi-16-3': {
  title: 'Logical Reasoning Problems',
  sections: [
    {
      heading: 'Types of Logical Reasoning',
      content: '<p>Mathematical reasoning is about making convincing arguments — not just getting the right answer. These are the main techniques used across all of maths.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Counter-examples</strong><br>One example that disproves a claim</div><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Working systematically</strong><br>Listing all possibilities in order</div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Venn diagrams</strong><br>Organising overlapping sets</div><div style="background:#f3e5f5;padding:10px;border-radius:8px"><strong>Working backwards</strong><br>Starting from the result</div></div>'
    },
    {
      heading: 'Counter-Examples',
      content: '<p>A single counter-example is enough to disprove a universal claim. You only need one case where the statement fails.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>"All prime numbers are odd."</strong><br>Counter-example: 2 is prime and even. &nbsp; Statement is <strong>FALSE</strong>!</div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>"The product of two numbers is always greater than both."</strong><br>Counter-example: 0.5 × 0.5 = 0.25, which is less than either. &nbsp; Statement is <strong>FALSE</strong>!</div><p>One counter-example disproves. But to <em>prove</em> a statement is always true, you need a general argument — not just checking a few cases.</p>'
    },
    {
      heading: 'Worked Example',
      content: '<div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Working backwards:</strong> Sam thinks of a number, triples it, then subtracts 7. The result is 14. What was the number?<br>Reverse order: 14 + 7 = 21, then 21 ÷ 3 = <strong>7</strong>.</div><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Venn diagram reasoning:</strong> 20 students like sport, 15 like art, 5 like both.<br>Only sport: 20 − 5 = 15. &nbsp; Only art: 15 − 5 = 10. &nbsp; Total: 15 + 10 + 5 = <strong>30 students</strong>.<br><span style="font-size:0.85em;color:#555">Key: subtract the overlap to avoid counting the 5 who like both twice.</span></div>'
    }
  ]
},

// ── mi-16-4: Extra/Missing Info & Direction ──────────────────────────────
'mi-16-4': {
  title: 'Extra/Missing Information & Direction',
  sections: [
    {
      heading: 'Extra Information',
      content: '<p>Some word problems include data you do <strong>not need</strong> to solve them. This extra information can distract you if you don\'t read the question carefully.</p><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> "A shop sells apples for 40p and bananas for 25p. Mia buys 6 apples. How much does she spend?"<br><br>Extra info: <span style="text-decoration:line-through">bananas for 25p</span> — not needed!<br>Answer: 6 × 40p = <strong>£2.40</strong></div><p><strong>Strategy:</strong> Underline what the question asks. Then identify which numbers relate to that question. Cross out anything else.</p>'
    },
    {
      heading: 'Missing Information',
      content: '<p>Some problems don\'t give you enough data to find the answer. You need to identify <strong>what is missing</strong>.</p><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> "Pencils cost 30p each. How much does Sam spend?"<br><br>Missing: <strong>how many pencils Sam buys</strong>.<br>Without this, we cannot calculate the total cost.</div><div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>How to spot missing info:</strong><br>• Write out the calculation you would need<br>• Check if every value in that calculation is given<br>• Name the missing piece</div>'
    },
    {
      heading: 'Distance & Direction to Starting Point',
      content: '<p>These problems ask you to track movement along a line and find the <strong>net displacement</strong> — how far (and which direction) from the start you end up.</p><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> Walk 8 km east, then 3 km west, then 2 km east.<br><br>East: 8 + 2 = 10 km<br>West: 3 km<br>Net: 10 − 3 = <strong>7 km east</strong> of start<br>To return: walk <strong>7 km west</strong></div><div style="background:#f3e5f5;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Method:</strong><br>1. Add up all movements in one direction<br>2. Add up all movements in the opposite direction<br>3. Find the difference = net displacement<br>4. To return, travel the net distance in the <strong>opposite</strong> direction</div>'
    }
  ]
},

'mi-17-1': {
  title: 'Metric Units',
  sections: [
    {
      heading: 'The Metric System',
      content: '<p>The metric system is based on powers of 10, making conversions a matter of multiplying or dividing by 10, 100, or 1,000. The prefixes tell you the conversion factor.</p><table style="border-collapse:collapse;width:100%;margin:0.75em 0;font-size:0.9em"><tr style="background:#e8f5e9"><th style="border:1px solid #ccc;padding:8px">Prefix</th><th style="border:1px solid #ccc;padding:8px">Symbol</th><th style="border:1px solid #ccc;padding:8px">Meaning</th><th style="border:1px solid #ccc;padding:8px">Example</th></tr><tr><td style="border:1px solid #ccc;padding:8px">kilo-</td><td style="border:1px solid #ccc;padding:8px;text-align:center">k</td><td style="border:1px solid #ccc;padding:8px">× 1,000</td><td style="border:1px solid #ccc;padding:8px">1 km = 1,000 m</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">centi-</td><td style="border:1px solid #ccc;padding:8px;text-align:center">c</td><td style="border:1px solid #ccc;padding:8px">÷ 100</td><td style="border:1px solid #ccc;padding:8px">1 m = 100 cm</td></tr><tr><td style="border:1px solid #ccc;padding:8px">milli-</td><td style="border:1px solid #ccc;padding:8px;text-align:center">m</td><td style="border:1px solid #ccc;padding:8px">÷ 1,000</td><td style="border:1px solid #ccc;padding:8px">1 m = 1,000 mm</td></tr></table>'
    },
    {
      heading: 'Converting Metric Units',
      content: '<p>Remember: moving to a <strong>smaller unit</strong> means <strong>more</strong> of them, so <strong>multiply</strong>. Moving to a <strong>larger unit</strong> means <strong>fewer</strong> of them, so <strong>divide</strong>.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Large → Small (×)</strong><br>3.5 km → m<br>3.5 × 1,000 = <strong>3,500 m</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Small → Large (÷)</strong><br>450 ml → litres<br>450 ÷ 1,000 = <strong>0.45 l</strong></div></div>'
    },
    {
      heading: 'Key Conversions to Know',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0.75em 0;font-size:0.9em"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Length</strong><br>1 km = 1,000 m<br>1 m = 100 cm = 1,000 mm<br>1 cm = 10 mm</div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Mass</strong><br>1 kg = 1,000 g<br>1 tonne = 1,000 kg</div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Capacity</strong><br>1 litre = 1,000 ml<br>1 cl = 10 ml</div><div style="background:#f3e5f5;padding:10px;border-radius:8px"><strong>Area/Volume</strong><br>1 m² = 10,000 cm²<br>1 m³ = 1,000,000 cm³</div></div>'
    }
  ]
},

'mi-17-2': {
  title: 'Imperial Units',
  sections: [
    {
      heading: 'Common Imperial Units',
      content: '<p>Imperial units are still widely used in everyday UK life — road signs use miles, body weight is often given in stones and pounds, and recipes can use pints or cups. You need to recognise and work with both systems.</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="border:1px solid #ccc;padding:8px">Measurement</th><th style="border:1px solid #ccc;padding:8px">Imperial units and relationships</th></tr><tr><td style="border:1px solid #ccc;padding:8px"><strong>Length</strong></td><td style="border:1px solid #ccc;padding:8px">12 inches = 1 foot, 3 feet = 1 yard, 1,760 yards = 1 mile</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px"><strong>Weight</strong></td><td style="border:1px solid #ccc;padding:8px">16 ounces = 1 pound, 14 pounds = 1 stone</td></tr><tr><td style="border:1px solid #ccc;padding:8px"><strong>Volume</strong></td><td style="border:1px solid #ccc;padding:8px">2 pints = 1 quart, 8 pints = 1 gallon</td></tr></table>'
    },
    {
      heading: 'Converting Within Imperial Units',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>4 feet 6 inches → inches</strong><br>4 feet = 4 × 12 = 48 inches<br>48 + 6 = <strong>54 inches</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>3 stones 5 pounds → pounds</strong><br>3 stones = 3 × 14 = 42 pounds<br>42 + 5 = <strong>47 pounds</strong></div></div><div style="background:#fff3e0;padding:10px;border-radius:8px;margin:0.5em 0"><strong>2 gallons → pints</strong><br>2 × 8 = <strong>16 pints</strong></div>'
    },
    {
      heading: 'When Imperial is Used',
      content: '<p>Knowing when to expect imperial units avoids confusion:</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0.75em 0;font-size:0.9em"><div style="background:#e8f5e9;padding:8px;border-radius:8px"><strong>Road signs</strong><br>Speed in mph, distance in miles</div><div style="background:#e3f2fd;padding:8px;border-radius:8px"><strong>Body measurements</strong><br>Height in feet/inches, weight in stones</div><div style="background:#fff3e0;padding:8px;border-radius:8px"><strong>Older recipes</strong><br>Pints of milk, ounces of butter</div><div style="background:#f3e5f5;padding:8px;border-radius:8px"><strong>Screen sizes</strong><br>TV/monitor diagonals in inches</div></div>'
    }
  ]
},

'mi-17-3': {
  title: 'Convert Metric & Imperial',
  sections: [
    {
      heading: 'Key Approximate Conversions',
      content: '<p>These conversions are approximate — learn the most useful ones and use them for estimation in both directions.</p><table style="border-collapse:collapse;width:100%;font-size:0.9em;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="border:1px solid #ccc;padding:8px">Imperial</th><th style="border:1px solid #ccc;padding:8px">≈ Metric</th><th style="border:1px solid #ccc;padding:8px">Memory tip</th></tr><tr><td style="border:1px solid #ccc;padding:8px">1 inch</td><td style="border:1px solid #ccc;padding:8px">≈ 2.5 cm</td><td style="border:1px solid #ccc;padding:8px">Ruler width</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">1 foot</td><td style="border:1px solid #ccc;padding:8px">≈ 30 cm</td><td style="border:1px solid #ccc;padding:8px">A large ruler</td></tr><tr><td style="border:1px solid #ccc;padding:8px">1 mile</td><td style="border:1px solid #ccc;padding:8px">≈ 1.6 km</td><td style="border:1px solid #ccc;padding:8px">8 miles ≈ 13 km</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">1 pound (lb)</td><td style="border:1px solid #ccc;padding:8px">≈ 450 g</td><td style="border:1px solid #ccc;padding:8px">Just under half a kg</td></tr><tr><td style="border:1px solid #ccc;padding:8px">1 kg</td><td style="border:1px solid #ccc;padding:8px">≈ 2.2 pounds</td><td style="border:1px solid #ccc;padding:8px">A bag of sugar weighs ~2.2 lbs</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">1 pint</td><td style="border:1px solid #ccc;padding:8px">≈ 568 ml</td><td style="border:1px solid #ccc;padding:8px">Just over half a litre</td></tr><tr><td style="border:1px solid #ccc;padding:8px">1 gallon</td><td style="border:1px solid #ccc;padding:8px">≈ 4.5 litres</td><td style="border:1px solid #ccc;padding:8px">A large water bottle ×4.5</td></tr></table>'
    },
    {
      heading: 'Using Conversion Factors',
      content: '<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#f1f8e9;padding:10px;border-radius:8px"><strong>Imperial → Metric</strong><br>5 miles → km<br>5 × 1.6 = <strong>8 km</strong><br><br>3 kg → pounds<br>3 × 2.2 = <strong>6.6 lb</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Metric → Imperial</strong><br>80 km → miles<br>80 ÷ 1.6 = <strong>50 miles</strong><br><br>900 g → pounds<br>900 ÷ 450 = <strong>2 lb</strong></div></div>'
    },
    {
      heading: 'Converting in Both Directions',
      content: '<p>The key is to reason about whether the answer should be bigger or smaller than the starting value.</p><div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Tip:</strong> Kilometres are smaller than miles (1 mile = 1.6 km), so a distance in km will always be a <em>larger</em> number than the same distance in miles.<br>80 km &gt; 50 miles — both are the same distance, but 80 &gt; 50 because km are shorter.</div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Check your direction:</strong> Converting 5 miles to km — km are smaller, so you expect <em>more</em> of them. 5 × 1.6 = 8. ✓ (8 &gt; 5 ✓)</div>'
    }
  ]
},

// ── mi-17-4: Area/Volume Units & Temperature ──────────────────────────────
'mi-17-4': {
  title: 'Area/Volume Units & Temperature',
  sections: [
    {
      heading: 'Square Unit Conversions',
      content: '<p>When converting area units, you must square the conversion factor because area has <strong>two dimensions</strong>.</p><table style="border-collapse:collapse;width:100%;margin:0.75em 0;font-size:0.9em"><tr style="background:#e8f5e9"><th style="border:1px solid #ccc;padding:8px">Conversion</th><th style="border:1px solid #ccc;padding:8px">Factor</th><th style="border:1px solid #ccc;padding:8px">Why</th></tr><tr><td style="border:1px solid #ccc;padding:8px">m² → cm²</td><td style="border:1px solid #ccc;padding:8px;text-align:center">× 10,000</td><td style="border:1px solid #ccc;padding:8px">100 × 100 = 10,000</td></tr><tr style="background:#f9f9f9"><td style="border:1px solid #ccc;padding:8px">cm² → mm²</td><td style="border:1px solid #ccc;padding:8px;text-align:center">× 100</td><td style="border:1px solid #ccc;padding:8px">10 × 10 = 100</td></tr></table><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> 3 m² = 3 × 10,000 = <strong>30,000 cm²</strong></div>'
    },
    {
      heading: 'Cubic Units & Capacity',
      content: '<p>For volume, you <strong>cube</strong> the conversion factor (three dimensions).</p><div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Key facts:</strong><br>1 cm³ = 1 ml (exactly)<br>1,000 cm³ = 1 litre<br>1 m³ = 1,000,000 cm³ = <strong>1,000 litres</strong></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> A tank is 40 cm × 25 cm × 20 cm.<br>Volume = 20,000 cm³ = 20,000 ml = <strong>20 litres</strong></div>'
    },
    {
      heading: 'Comparing Temperatures',
      content: '<p>Temperatures below zero are negative. The closer to zero, the <strong>warmer</strong> the temperature.</p><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.75em 0">−2°C is warmer than −7°C<br>−7°C is warmer than −15°C<br><br><strong>Temperature rise</strong> from −5°C to 3°C:<br>−5 to 0 = 5 degrees, then 0 to 3 = 3 degrees.<br>Total rise = <strong>8°C</strong></div>'
    },
    {
      heading: 'Precision in Measurement',
      content: '<p><strong>Precision</strong> means how exact a measurement is. Choose units that match what you are measuring.</p><div style="background:#f3e5f5;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Guidelines:</strong><br>• Length of a pencil → mm or cm (precise)<br>• Distance between cities → km (no need for cm!)<br>• Mass of a letter → grams (not kg)<br>• A measurement of 4.7 cm means the real value is between 4.65 cm and 4.75 cm</div>'
    }
  ]
}

});
