// math-lessons-5.js — Lessons for Topics 18-21
Object.assign(LESSONS, {

'mi-18-1': {
  title: 'Add & Subtract Money',
  sections: [
    {
      heading: 'Working with Money',
      content: '<p>Money uses a decimal system. <strong>£1 = 100p.</strong> Always write amounts with 2 decimal places — £3.07 means 3 pounds and 7 pence. Writing £3.7 is ambiguous; it could be confused with £3.70 or £37.00.</p><div class="lesson-diagram" data-diagram="y7-math-5-0"></div><p><strong>Adding money:</strong> line up the decimal points exactly and add as with any decimal. Example: £4.99 + £2.35 = £7.34</p><div style="background:#f1f8e9;padding:0.75em 1em;border-radius:8px;margin:0.5em 0;font-family:monospace">  £4.99<br>+ £2.35<br>──────<br>  £7.34</div>'
    },
    {
      heading: 'Finding Change',
      content: '<p><strong>Change = Amount given − Total cost.</strong> There are two good methods — choose whichever feels quicker for the numbers involved.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong style="display:block;margin-bottom:4px">Column subtraction</strong>£10.00 − £6.73<br><span style="font-family:monospace;font-size:0.9em">  £10.00<br>−  £6.73<br>───────<br>   £3.27</span></div><div style="background:#f3e5f5;padding:10px;border-radius:8px"><strong style="display:block;margin-bottom:4px">Count up (often faster)</strong>£6.73 → £7.00 = 27p<br>£7.00 → £10.00 = £3.00<br>Total change = <strong>£3.27</strong></div></div><p>The count-up method (also called "shopkeeper\'s method") works by adding upward to a round number first — it\'s less likely to lead to errors.</p>'
    },
    {
      heading: 'Word Problems',
      content: '<p>Always read carefully to decide whether to <strong>add</strong> (combining amounts) or <strong>subtract</strong> (finding what remains or the difference).</p><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Mia buys lunch (£3.50) and a drink (£1.20). She has £6. How much is left?<div class="lesson-diagram" data-diagram="y7-math-5-1"></div></div><p><strong>Tip:</strong> Underline each amount and circle whether the question asks you to combine or find what remains.</p>'
    }
  ]
},

'mi-18-2': {
  title: 'Sale Prices & Unit Prices',
  sections: [
    {
      heading: 'Calculating Sale Prices',
      content: '<p>A <strong>discount</strong> is a percentage reduction from the original price. There are two equivalent methods — use whichever is faster.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong style="display:block;margin-bottom:4px">Method 1 — Subtract</strong>20% off £80:<br>20% of £80 = £16<br>Sale price = £80 − £16 = <strong>£64</strong></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong style="display:block;margin-bottom:4px">Method 2 — Multiplier</strong>100% − 20% = 80% = 0.80<br>£80 × 0.80 = <strong>£64</strong><br><span style="font-size:0.85em;color:#555">One step, less chance of error</span></div></div><div class="lesson-diagram" data-diagram="y7-math-5-2"></div>'
    },
    {
      heading: 'Unit Prices',
      content: '<p>The <strong>unit price</strong> is the cost for a single unit — per gram, per litre, per item. Comparing unit prices is the fairest way to find better value.</p><p><strong>Unit price = Total cost ÷ Number of units</strong></p><table style="width:100%;border-collapse:collapse;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Pack</th><th style="padding:8px;border:1px solid #ccc">Price</th><th style="padding:8px;border:1px solid #ccc">Unit price (per 100g)</th><th style="padding:8px;border:1px solid #ccc">Better value?</th></tr><tr><td style="padding:8px;border:1px solid #ccc">400g</td><td style="padding:8px;border:1px solid #ccc">£2.80</td><td style="padding:8px;border:1px solid #ccc">70p / 100g</td><td style="padding:8px;border:1px solid #ccc">✗</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc"><strong>600g</strong></td><td style="padding:8px;border:1px solid #ccc"><strong>£3.90</strong></td><td style="padding:8px;border:1px solid #ccc"><strong>65p / 100g</strong></td><td style="padding:8px;border:1px solid #ccc;color:#2e7d32"><strong>✓ Better value</strong></td></tr></table>'
    },
    {
      heading: 'Finding the Original Price',
      content: '<p>If you know the sale price and the discount percentage, you can work backwards to find the original price. The sale price represents (100% − discount%) of the original.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> An item costs £36 after a 10% discount.<br>Sale price = 90% of original &nbsp;→&nbsp; Original = sale price ÷ 0.9<br>Original = £36 ÷ 0.9 = <strong>£40</strong></div><div class="lesson-diagram" data-diagram="y7-math-5-3"></div>'
    }
  ]
},

'mi-18-3': {
  title: 'VAT & Tips',
  sections: [
    {
      heading: 'What is VAT?',
      content: '<p><strong>VAT (Value Added Tax)</strong> is a government tax added to the price of most goods and services. In the UK, the standard rate is <strong>20%</strong>.</p><p><strong>Adding 20% VAT:</strong> Multiply by 1.2 (which equals 100% + 20%).</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> £50 before VAT → £50 × 1.2 = <strong>£60 including VAT</strong></div><div class="lesson-diagram" data-diagram="y7-math-5-4"></div>'
    },
    {
      heading: 'Price Including VAT',
      content: '<p>When a price <em>already includes</em> VAT (this is called the VAT-inclusive or gross price), divide by 1.2 to find the original pre-VAT amount.</p><p><strong>Pre-VAT price = VAT-inclusive price ÷ 1.2</strong></p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> A phone costs £240 including VAT.<br>Pre-VAT price = £240 ÷ 1.2 = <strong>£200</strong><br>VAT amount = £240 − £200 = <strong>£40</strong></div><p>This is useful for businesses that can reclaim VAT — they need to know how much VAT they actually paid.</p>'
    },
    {
      heading: 'Calculating Tips',
      content: '<p>A <strong>tip</strong> is a voluntary extra payment — usually a percentage of a restaurant or service bill — to thank good service.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Restaurant bill £55, leave a 15% tip.<br>15% of £55 = 0.15 × £55 = £8.25<br>Total to pay = £55 + £8.25 = <strong>£63.25</strong></div><div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Quick mental method for 15%:</strong><br>10% of £55 = £5.50 (move decimal one place)<br>5% = half of 10% = £2.75<br>15% = £5.50 + £2.75 = <strong>£8.25</strong></div>'
    }
  ]
},

// ── mi-18-4: Multiply & Divide Money & Coins ──────────────────────────────
'mi-18-4': {
  title: 'Multiply & Divide Money & Coins',
  sections: [
    {
      heading: 'Multiplying Money',
      content: '<p>To multiply a money amount by a whole number, convert to pence first (avoids decimal errors), multiply, then convert back.</p><div style="background:#e8f5e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> £3.45 × 6<br>345p × 6 = 2,070p = <strong>£20.70</strong></div><div style="background:#e3f2fd;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Alternative:</strong> Split into pounds and pence:<br>£3 × 6 = £18 &nbsp;|&nbsp; 45p × 6 = 270p = £2.70<br>Total = £18 + £2.70 = <strong>£20.70</strong></div>'
    },
    {
      heading: 'Dividing Money',
      content: '<p>To divide money equally, again convert to pence, divide, then convert back.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> Share £15.60 among 4 people<br>1,560p ÷ 4 = 390p = <strong>£3.90 each</strong><br>Check: £3.90 × 4 = £15.60 ✓</div><p>If it doesn\'t divide evenly, round to the nearest penny and note the remainder.</p>'
    },
    {
      heading: 'Coin Combinations',
      content: '<p>Some problems ask you to find how many coins of each type make a total. Work systematically, starting with the largest coin.</p><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Example:</strong> Make 80p using 50p, 20p and 10p coins<br>• 1×50p + 1×20p + 1×10p = 80p ✓<br>• 4×20p = 80p ✓<br>• 1×50p + 3×10p = 80p ✓</div><div style="background:#fce4ec;padding:1em;border-radius:8px;margin:0.75em 0"><strong>Tip:</strong> If the question says "only 20p coins", divide: 140p ÷ 20p = 7 coins.</div>'
    }
  ]
},

'mi-19-1': {
  title: 'Elapsed Time',
  sections: [
    {
      heading: 'Calculating Elapsed Time',
      content: '<p><strong>Elapsed time</strong> is the duration between a start time and an end time. The most reliable method is to count up in stages — it avoids errors with borrowing across hours.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> From 10:45 to 13:20<br><div class="lesson-diagram" data-diagram="y7-math-5-5"></div>Total: 2h 15min + 20min = <strong>2h 35min</strong></div>'
    },
    {
      heading: 'Finding Start or End Times',
      content: '<p>Once you can calculate elapsed time, you can also work forwards (finding the end time) or backwards (finding the start time).</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong style="display:block;margin-bottom:4px">Finding end time</strong>Start: 14:50, duration: 1h 50min<br>14:50 + 1h = 15:50<br>15:50 + 50min = <strong>16:40</strong></div><div style="background:#f3e5f5;padding:10px;border-radius:8px"><strong style="display:block;margin-bottom:4px">Finding start time</strong>Ends: 18:45, duration: 3h 25min<br>18:45 − 3h = 15:45<br>15:45 − 25min = <strong>15:20</strong></div></div><p><strong>Tip for subtraction:</strong> if subtracting minutes would go below zero, borrow an hour (60 min) from the hours column.</p>'
    },
    {
      heading: 'Converting Time Units',
      content: '<p>1 hour = 60 minutes. 1 day = 24 hours. 1 week = 7 days. These conversions don\'t follow the decimal system, so be extra careful.</p><p><strong>Hours and minutes → total minutes:</strong><br>Multiply hours by 60, then add the remaining minutes.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>2h 40min</strong> = 2 × 60 + 40 = 120 + 40 = <strong>160 minutes</strong><br><strong>3h 15min</strong> = 3 × 60 + 15 = 180 + 15 = <strong>195 minutes</strong></div><p><strong>Total minutes → hours and minutes:</strong><br>Divide by 60 — the quotient is hours, the remainder is minutes.<br>Example: 200 minutes = 200 ÷ 60 = 3 remainder 20 → <strong>3h 20min</strong></p>'
    }
  ]
},

'mi-19-2': {
  title: '12-Hour & 24-Hour Time',
  sections: [
    {
      heading: '12-Hour vs 24-Hour Clock',
      content: '<p>The <strong>12-hour clock</strong> uses <em>am</em> (midnight to noon) and <em>pm</em> (noon to midnight), cycling from 1:00 to 12:59 twice each day. The <strong>24-hour clock</strong> runs from 00:00 (midnight) to 23:59, never repeating — so there is no need for am or pm.</p><div class="lesson-diagram" data-diagram="y7-math-5-6"></div>'
    },
    {
      heading: 'Converting Between Formats',
      content: '<p>Follow these rules systematically — never guess.</p><table style="width:100%;border-collapse:collapse;margin:0.75em 0;font-size:0.92em"><tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Conversion</th><th style="padding:8px;border:1px solid #ccc">Rule</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr><tr><td style="padding:8px;border:1px solid #ccc">am → 24hr</td><td style="padding:8px;border:1px solid #ccc">Add leading zero (except 12 am = 00:00)</td><td style="padding:8px;border:1px solid #ccc">7:30 am = 07:30</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">pm → 24hr</td><td style="padding:8px;border:1px solid #ccc">Add 12 to hours (12 pm stays 12:00)</td><td style="padding:8px;border:1px solid #ccc">3:45 pm = 15:45</td></tr><tr><td style="padding:8px;border:1px solid #ccc">00:xx → 12hr</td><td style="padding:8px;border:1px solid #ccc">→ 12:xx am</td><td style="padding:8px;border:1px solid #ccc">00:30 = 12:30 am</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">13:00–23:59 → 12hr</td><td style="padding:8px;border:1px solid #ccc">Subtract 12 and add pm</td><td style="padding:8px;border:1px solid #ccc">17:20 = 5:20 pm</td></tr></table>'
    },
    {
      heading: 'Reading Timetables',
      content: '<p>Transport timetables almost always use 24-hour time to avoid any ambiguity between morning and afternoon departures — a missed am/pm label could send you to the wrong train!</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> A bus leaves at 08:47 and arrives at 11:23.<br>Count up: 08:47 → 11:00 = 2h 13min → 11:23 = 23min more<br>Journey time = <strong>2h 36min</strong></div><p><strong>Tip:</strong> On a timetable, dashes (—) mean the service doesn\'t stop there. Bold times often indicate a change of service.</p>'
    }
  ]
},

'mi-19-3': {
  title: 'Time Zones & Schedules',
  sections: [
    {
      heading: 'Time Zones',
      content: '<p>The world is divided into time zones anchored to <strong>UTC</strong> (Coordinated Universal Time). Zones east of UTC are ahead; zones west are behind. The UK operates on GMT (= UTC) in winter and GMT+1 (BST) in summer.</p><table style="width:100%;border-collapse:collapse;margin:0.75em 0;font-size:0.92em"><tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">City</th><th style="padding:8px;border:1px solid #ccc">Offset</th><th style="padding:8px;border:1px solid #ccc">If London = 14:00</th></tr><tr><td style="padding:8px;border:1px solid #ccc">London (GMT+0)</td><td style="padding:8px;border:1px solid #ccc">+0</td><td style="padding:8px;border:1px solid #ccc">14:00</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">Paris (CET)</td><td style="padding:8px;border:1px solid #ccc">+1</td><td style="padding:8px;border:1px solid #ccc">15:00</td></tr><tr><td style="padding:8px;border:1px solid #ccc">New York (EST)</td><td style="padding:8px;border:1px solid #ccc">−5</td><td style="padding:8px;border:1px solid #ccc">09:00</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">Dubai (GST)</td><td style="padding:8px;border:1px solid #ccc">+4</td><td style="padding:8px;border:1px solid #ccc">18:00</td></tr><tr><td style="padding:8px;border:1px solid #ccc">Tokyo (JST)</td><td style="padding:8px;border:1px solid #ccc">+9</td><td style="padding:8px;border:1px solid #ccc">23:00</td></tr></table>'
    },
    {
      heading: 'Crossing Midnight',
      content: '<p>Converting across time zones can push the time past midnight — which means the <strong>date also changes</strong>. Always check whether the result is above 24:00 or below 00:00.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> It is 20:00 Monday in London (GMT+0). What time is it in Sydney (GMT+10)?<br>20:00 + 10 hours = 30:00 → subtract 24 hours = <strong>06:00 Tuesday</strong></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> It is 02:00 Tuesday in London. What time is it in New York (GMT−5)?<br>02:00 − 5 hours = −3:00 → add 24 hours = <strong>21:00 Monday</strong></div>'
    },
    {
      heading: 'Reading Transport Timetables',
      content: '<p>Timetables list departure and arrival times in 24-hour format. To find journey duration, subtract departure from arrival — counting up in stages if that\'s easier.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Depart 13:47, arrive 15:32.<br>13:47 → 15:00 = 1h 13min → 15:32 = 32min more → wait, recount:<br>13:47 → 15:47 = exactly 2h, then back 15min = <strong>1h 45min</strong></div><p><strong>Tip:</strong> If you arrive at a station at 08:50 and the next service is 09:20, you must wait 09:20 − 08:50 = <strong>30 minutes</strong>.</p>'
    }
  ]
},

'mi-20-1': {
  title: 'Plot Points on a Coordinate Plane',
  sections: [
    {
      heading: 'The Coordinate System',
      content: '<p>A <strong>coordinate plane</strong> is formed by two perpendicular number lines crossing at the <strong>origin</strong> (0, 0). Every point has a unique address written as an ordered pair (x, y).</p><div class="lesson-diagram" data-diagram="y7-math-5-7"></div>'
    },
    {
      heading: 'Plotting Points',
      content: '<p>Always go <strong>along the corridor, then up (or down) the stairs</strong> — x first, then y. The sign tells you the direction.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Plot (3, −2)</strong><ol style="margin:0.3em 0;padding-left:1.2em;font-size:0.9em"><li>Start at origin (0,0)</li><li>Move <strong>3 right</strong> (x = +3)</li><li>Move <strong>2 down</strong> (y = −2)</li><li>Mark the point ●</li></ol></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Plot (−4, 1)</strong><ol style="margin:0.3em 0;padding-left:1.2em;font-size:0.9em"><li>Start at origin (0,0)</li><li>Move <strong>4 left</strong> (x = −4)</li><li>Move <strong>1 up</strong> (y = +1)</li><li>Mark the point ●</li></ol></div></div>'
    },
    {
      heading: 'Reading Coordinates',
      content: '<p>To read the coordinates of a plotted point, draw dashed lines vertically down to the x-axis and horizontally across to the y-axis. Read off where those lines cross each axis.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> A point sits 4 units to the left and 3 units above the origin.<br>x = −4 (left is negative), y = +3 (up is positive)<br>Coordinates: <strong>(−4, 3)</strong></div><p><strong>Common mistake:</strong> Do not swap x and y — x always comes first in the bracket. (3, 5) and (5, 3) are completely different points.</p>'
    }
  ]
},

'mi-20-2': {
  title: 'Quadrants & Axes',
  sections: [
    {
      heading: 'The Four Quadrants',
      content: '<p>The axes divide the coordinate plane into four regions called <strong>quadrants</strong>, numbered with Roman numerals anticlockwise from the top-right.</p><div class="lesson-diagram" data-diagram="y7-math-5-8"></div>'
    },
    {
      heading: 'Points on the Axes',
      content: '<p>Points on the <strong>x-axis</strong> always have y = 0. Points on the <strong>y-axis</strong> always have x = 0. The origin is the only point on both axes simultaneously.</p><div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin:0.75em 0;text-align:center"><div style="background:#e8f5e9;padding:8px;border-radius:8px"><strong>On x-axis</strong><br>(y = 0)<br><span style="font-size:0.9em">(4, 0) &nbsp; (−2, 0)</span></div><div style="background:#e3f2fd;padding:8px;border-radius:8px"><strong>On y-axis</strong><br>(x = 0)<br><span style="font-size:0.9em">(0, 3) &nbsp; (0, −5)</span></div><div style="background:#fff3e0;padding:8px;border-radius:8px"><strong>Origin</strong><br>(x = y = 0)<br><span style="font-size:0.9em">(0, 0)</span></div></div>'
    },
    {
      heading: 'Identifying the Quadrant',
      content: '<p>Look at the signs of both coordinates — they directly tell you which quadrant the point is in.</p><table style="width:100%;border-collapse:collapse;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">x sign</th><th style="padding:8px;border:1px solid #ccc">y sign</th><th style="padding:8px;border:1px solid #ccc">Quadrant</th><th style="padding:8px;border:1px solid #ccc">Example</th></tr><tr><td style="padding:8px;border:1px solid #ccc">+</td><td style="padding:8px;border:1px solid #ccc">+</td><td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#2e7d32">I</td><td style="padding:8px;border:1px solid #ccc">(5, 3)</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">−</td><td style="padding:8px;border:1px solid #ccc">+</td><td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#1565c0">II</td><td style="padding:8px;border:1px solid #ccc">(−5, 3)</td></tr><tr><td style="padding:8px;border:1px solid #ccc">−</td><td style="padding:8px;border:1px solid #ccc">−</td><td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#6a1b9a">III</td><td style="padding:8px;border:1px solid #ccc">(−5, −3)</td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">+</td><td style="padding:8px;border:1px solid #ccc">−</td><td style="padding:8px;border:1px solid #ccc;font-weight:bold;color:#e65100">IV</td><td style="padding:8px;border:1px solid #ccc">(4, −7)</td></tr></table>'
    }
  ]
},

'mi-20-3': {
  title: 'Coordinate Maps & Directions',
  sections: [
    {
      heading: 'Finding Distances',
      content: '<p>When two points share one coordinate (same row or same column), the distance between them is simply the difference in the other coordinate — no Pythagoras needed.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Same x → vertical distance</strong><br>|y₂ − y₁|<br>From (3, 2) to (3, 8):<br>|8 − 2| = <strong>6 units</strong></div><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Same y → horizontal distance</strong><br>|x₂ − x₁|<br>From (−3, 0) to (5, 0):<br>|5 − (−3)| = <strong>8 units</strong></div></div><p>The vertical bars | | mean absolute value — always take the positive result.</p>'
    },
    {
      heading: 'Following Directions',
      content: '<p>Moving right <strong>increases</strong> x. Moving left <strong>decreases</strong> x. Moving up <strong>increases</strong> y. Moving down <strong>decreases</strong> y. Apply each move one at a time to avoid errors.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> From (1, 3): move right 4, then down 3.<br>After right 4: (1+4, 3) = (5, 3)<br>After down 3: (5, 3−3) = <strong>(5, 0)</strong></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> From (−2, 4): move left 3, then up 2.<br>(−2−3, 4+2) = <strong>(−5, 6)</strong></div>'
    },
    {
      heading: 'Midpoints',
      content: '<p>The <strong>midpoint</strong> of a line segment is the point exactly halfway between the two endpoints. Find it by averaging the x-coordinates and averaging the y-coordinates separately.</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center"><strong>Midpoint = ( (x₁+x₂)/2 , (y₁+y₂)/2 )</strong></p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Midpoint of A(−3, −3) and B(3, −3):<br>x: (−3 + 3) ÷ 2 = 0 &nbsp;&nbsp; y: (−3 + −3) ÷ 2 = −3<br>Midpoint = <strong>(0, −3)</strong></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Midpoint of P(1, 5) and Q(7, −1):<br>x: (1+7) ÷ 2 = 4 &nbsp;&nbsp; y: (5+(−1)) ÷ 2 = 2<br>Midpoint = <strong>(4, 2)</strong></div>'
    }
  ]
},

'mi-21-1': {
  title: 'Arithmetic Sequences',
  sections: [
    {
      heading: 'What is an Arithmetic Sequence?',
      content: '<p>An <strong>arithmetic sequence</strong> has a <strong>common difference</strong> — a fixed amount added (or subtracted) each time. The sequence increases by the same step every term.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Increasing (d &gt; 0)</strong><br>3, 7, 11, 15, 19…<br><span style="font-size:0.85em;color:#555">d = +4 each time</span></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Decreasing (d &lt; 0)</strong><br>20, 15, 10, 5, 0…<br><span style="font-size:0.85em;color:#555">d = −5 each time</span></div></div><div class="lesson-diagram" data-diagram="y7-math-5-9"></div>'
    },
    {
      heading: 'The nth-Term Formula',
      content: '<p>The <strong>nth-term formula</strong> lets you calculate any term directly — without listing all previous terms. It is always in the form <strong>dn + c</strong>, where d is the common difference.</p><p style="background:#e8f5e9;padding:0.5em 1em;border-radius:6px;text-align:center"><strong>nth term = dn + (a − d)</strong>, where d = common difference, a = first term</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Find the nth term of 5, 8, 11, 14…<br>d = 3, a = 5. &nbsp; nth term = 3n + (5 − 3) = <strong>3n + 2</strong><br>Check: 3(1)+2=5 ✓ &nbsp; 3(2)+2=8 ✓ &nbsp; 3(3)+2=11 ✓</div>'
    },
    {
      heading: 'Finding Specific Terms',
      content: '<p>To find <em>which position</em> a value occupies in the sequence, set the nth-term formula equal to that value and solve for n. If n is a whole number, the value is in the sequence — if not, it isn\'t.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Is 45 in the sequence 5, 9, 13, 17…?<br>nth term = 4n + 1. &nbsp; Set 4n + 1 = 45<br>4n = 44 → n = 11. &nbsp; It is a whole number → <strong>Yes — the 11th term.</strong></div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Is 50 in the sequence 3, 7, 11…?<br>nth term = 4n − 1. &nbsp; 4n − 1 = 50 → 4n = 51 → n = 12.75<br>Not a whole number → <strong>No — 50 is not in this sequence.</strong></div>'
    }
  ]
},

'mi-21-2': {
  title: 'Geometric Sequences',
  sections: [
    {
      heading: 'What is a Geometric Sequence?',
      content: '<p>A <strong>geometric sequence</strong> has a <strong>common ratio</strong> — each term is <em>multiplied</em> by the same fixed amount. This is fundamentally different from arithmetic sequences, where a fixed amount is added.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Growing (r &gt; 1)</strong><br>2, 6, 18, 54…<br><span style="font-size:0.85em;color:#555">r = ×3 each time</span></div><div style="background:#e3f2fd;padding:10px;border-radius:8px"><strong>Shrinking (0 &lt; r &lt; 1)</strong><br>80, 40, 20, 10…<br><span style="font-size:0.85em;color:#555">r = ×½ each time</span></div></div><div class="lesson-diagram" data-diagram="y7-math-5-10"></div>'
    },
    {
      heading: 'Identifying the Common Ratio',
      content: '<p>Find the common ratio by dividing any term by the term before it: r = term₂ ÷ term₁. Check a second pair to confirm the ratio is constant.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> 3, 6, 12, 24…<br>r = 6 ÷ 3 = <strong>2</strong>. &nbsp; Check: 12 ÷ 6 = 2 ✓</div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> 100, 50, 25, 12.5…<br>r = 50 ÷ 100 = <strong>0.5</strong> (or ½). &nbsp; Check: 25 ÷ 50 = 0.5 ✓</div><p>If r is negative, the sequence alternates between positive and negative terms — still geometric.</p>'
    },
    {
      heading: 'Arithmetic vs Geometric',
      content: '<p>Always identify the type of sequence first — the method for each is completely different.</p><table style="width:100%;border-collapse:collapse;margin:0.75em 0"><tr style="background:#e8f5e9"><th style="padding:8px;border:1px solid #ccc">Type</th><th style="padding:8px;border:1px solid #ccc">Test</th><th style="padding:8px;border:1px solid #ccc">Example</th><th style="padding:8px;border:1px solid #ccc">Key feature</th></tr><tr><td style="padding:8px;border:1px solid #ccc">Arithmetic</td><td style="padding:8px;border:1px solid #ccc">Subtract consecutive terms</td><td style="padding:8px;border:1px solid #ccc">1, 3, 5, 7… (diff = 2)</td><td style="padding:8px;border:1px solid #ccc">Constant <em>difference</em></td></tr><tr style="background:#f9f9f9"><td style="padding:8px;border:1px solid #ccc">Geometric</td><td style="padding:8px;border:1px solid #ccc">Divide consecutive terms</td><td style="padding:8px;border:1px solid #ccc">1, 3, 9, 27… (ratio = 3)</td><td style="padding:8px;border:1px solid #ccc">Constant <em>ratio</em></td></tr></table>'
    }
  ]
},

'mi-21-3': {
  title: 'Expressions for Sequences',
  sections: [
    {
      heading: 'nth-Term Expressions',
      content: '<p>An <strong>nth-term expression</strong> (also called position-to-term rule) is a formula — substitute n to calculate any term without listing all the previous ones.</p><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> nth term = 4n − 1<br><table style="border-collapse:collapse;margin-top:0.5em;font-size:0.9em"><tr style="background:#c8e6c9"><td style="padding:5px 10px;border:1px solid #ccc"><strong>n</strong></td><td style="padding:5px 10px;border:1px solid #ccc">1</td><td style="padding:5px 10px;border:1px solid #ccc">2</td><td style="padding:5px 10px;border:1px solid #ccc">3</td><td style="padding:5px 10px;border:1px solid #ccc">4</td><td style="padding:5px 10px;border:1px solid #ccc">10</td></tr><tr><td style="padding:5px 10px;border:1px solid #ccc"><strong>term</strong></td><td style="padding:5px 10px;border:1px solid #ccc">3</td><td style="padding:5px 10px;border:1px solid #ccc">7</td><td style="padding:5px 10px;border:1px solid #ccc">11</td><td style="padding:5px 10px;border:1px solid #ccc">15</td><td style="padding:5px 10px;border:1px solid #ccc">39</td></tr></table></div>'
    },
    {
      heading: 'Writing the nth-Term Expression',
      content: '<p>For an arithmetic sequence, follow these two steps:</p><ol><li>Find the common difference d — this is the <strong>coefficient of n</strong>.</li><li>Work out the <strong>constant</strong>: substitute n = 1 and adjust so the formula gives the first term.</li></ol><div style="background:#f1f8e9;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Find the nth term for 3, 5, 7, 9… (d = 2)<br>Start with 2n. When n=1: 2(1) = 2, but the first term is 3.<br>Need to add 1. &nbsp; nth term = <strong>2n + 1</strong><br>Check: 2(4)+1 = 9 ✓</div><div style="background:#fff3e0;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Example:</strong> Find the nth term for 10, 7, 4, 1… (d = −3)<br>Start with −3n. When n=1: −3(1) = −3, but first term is 10.<br>Need to add 13. &nbsp; nth term = <strong>−3n + 13</strong><br>Check: −3(1)+13 = 10 ✓</div>'
    },
    {
      heading: 'Using Expressions to Find Terms',
      content: '<p>Set the expression equal to the target value and solve for n. The answer tells you the term\'s position — <em>but only if n is a positive whole number</em>.</p><div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:0.75em 0"><div style="background:#e8f5e9;padding:10px;border-radius:8px"><strong>Is 100 in 3n + 1?</strong><br>3n + 1 = 100<br>3n = 99 → n = 33 ✓<br><strong>Yes — the 33rd term</strong></div><div style="background:#fff3e0;padding:10px;border-radius:8px"><strong>Is 77 in 5n + 2?</strong><br>5n + 2 = 77<br>5n = 75 → n = 15 ✓<br><strong>Yes — the 15th term</strong></div></div><div style="background:#fce4ec;padding:1em;border-radius:8px;margin:0.5em 0"><strong>Is 50 in 4n + 2?</strong><br>4n + 2 = 50 → 4n = 48 → n = 12 ✓ → Yes, 12th term.<br><strong>Is 51 in 4n + 2?</strong><br>4n + 2 = 51 → 4n = 49 → n = 12.25 ✗ → <strong>Not a term in this sequence.</strong></div>'
    }
  ]
}

});
