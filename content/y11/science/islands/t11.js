// science-y11-t11.js — Year 11 Science Topic 11: Biology Required Practicals
// Islands: s11i-11-1 .. s11i-11-2
// Contains: FLASHCARDS, QUESTIONS (test bank) and LESSONS for this topic.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s11i-11-1 — Biology Practicals 1
  {id:"s11fc-11-1-1",islandId:"s11i-11-1",front:"Describe how to use a light microscope to observe onion cells.",
   back:"1. Peel a thin layer of onion epidermis and place it on a slide.\n2. Add a drop of iodine stain to highlight the cells.\n3. Carefully lower a coverslip to avoid air bubbles.\n4. Start with the lowest magnification objective lens.\n5. Focus using the coarse then fine adjustment knob.\n6. Move to higher magnification to see more detail.",difficulty:2,category:"application"},
  {id:"s11fc-11-1-2",islandId:"s11i-11-1",front:"Describe the method for food tests: how do you test for starch?",
   back:"Add a few drops of iodine solution to the food sample.\n\nPositive result: the solution turns blue-black.\nNegative result: the solution remains brown-orange.\n\nIodine binds to the helical structure of starch molecules, producing the characteristic blue-black colour.",difficulty:1,category:"application"},
  {id:"s11fc-11-1-3",islandId:"s11i-11-1",front:"How do you investigate the effect of concentration on osmosis in potatoes?",
   back:"1. Cut potato cylinders of equal size and blot dry.\n2. Measure and record the initial mass of each.\n3. Place each cylinder in a different concentration of sucrose solution.\n4. Leave for a set time (e.g. 30 minutes).\n5. Remove, blot dry and re-weigh.\n6. Calculate the percentage change in mass.\n\nThe independent variable is sucrose concentration; the dependent variable is percentage change in mass.",difficulty:2,category:"application"},
  {id:"s11fc-11-1-4",islandId:"s11i-11-1",front:"How do you investigate the effect of pH on amylase activity?",
   back:"1. Set up test tubes with starch solution and buffer solutions at different pH values.\n2. Add amylase enzyme to each tube and start a timer.\n3. At regular intervals, take a sample and test with iodine on a spotting tile.\n4. Record the time taken for the iodine to stop turning blue-black (starch fully digested).\n\nIndependent variable: pH. Dependent variable: time for starch to be digested.",difficulty:2,category:"application"},
  {id:"s11fc-11-1-5",islandId:"s11i-11-1",front:"In the osmosis practical, why do you calculate percentage change in mass rather than absolute change?",
   back:"Potato cylinders may have slightly different starting masses. Calculating percentage change standardises the results:\n\n% change = (final mass − initial mass) ÷ initial mass × 100\n\nThis allows a fair comparison between cylinders of slightly different sizes.",difficulty:2,category:"concept"},

  // s11i-11-2 — Biology Practicals 2
  {id:"s11fc-11-2-1",islandId:"s11i-11-2",front:"How do you investigate the effect of light intensity on the rate of photosynthesis?",
   back:"1. Place pondweed (Elodea) in a beaker of water with a lamp at a set distance.\n2. Count the number of oxygen bubbles produced per minute (or collect gas in a syringe).\n3. Move the lamp to different distances and repeat.\n4. Use the inverse square law: light intensity ∝ 1/d².\n\nIndependent variable: light intensity (distance of lamp). Dependent variable: rate of oxygen production.",difficulty:2,category:"application"},
  {id:"s11fc-11-2-2",islandId:"s11i-11-2",front:"How do you use a quadrat to estimate the population of a plant species in a field?",
   back:"1. Place quadrats randomly across the field (use random number coordinates).\n2. Count the number of the target species in each quadrat.\n3. Calculate the mean number per quadrat.\n4. Estimate total population: mean count × (total area ÷ quadrat area).\n\nRandom placement avoids bias; repeats improve reliability.",difficulty:2,category:"application"},
  {id:"s11fc-11-2-3",islandId:"s11i-11-2",front:"Describe the decay practical: how do you investigate factors affecting the rate of decay?",
   back:"1. Set up boiling tubes with fresh milk and lipase enzyme (or use damp bread with mould).\n2. Add phenolphthalein indicator and sodium carbonate to milk (turns pink).\n3. Place tubes at different temperatures.\n4. Time how long for the solution to go colourless (fat digested → acid produced → indicator changes).\n\nIndependent variable: temperature. Dependent variable: time to change colour.",difficulty:2,category:"application"},
  {id:"s11fc-11-2-4",islandId:"s11i-11-2",front:"Why must quadrats be placed randomly in a field investigation?",
   back:"Random placement avoids sampling bias.\n\nIf the investigator chooses where to place quadrats, they might unconsciously select areas with more (or fewer) organisms, giving unrepresentative results.\n\nUsing random number generators for coordinates ensures the sample is representative of the whole area.",difficulty:2,category:"concept"},
  {id:"s11fc-11-2-5",islandId:"s11i-11-2",front:"In the photosynthesis practical, what control variables must be kept constant?",
   back:"1. Temperature of the water (use a heat shield or thermometer).\n2. CO₂ concentration (add sodium hydrogencarbonate to ensure it is not limiting).\n3. Type and length of pondweed.\n4. Volume of water.\n5. Colour/wavelength of light (same lamp).\n\nControlling these ensures only the independent variable (light intensity) affects the results.",difficulty:2,category:"concept"}
);

// ── TEST QUESTIONS ────────────────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s11i-11-1":[
    {q:"In the osmosis practical, what is the independent variable?",opts:["Mass of potato","Temperature","Concentration of sucrose solution","Time left in solution"],c:2,e:"The independent variable is the one you deliberately change — here it is the concentration of sucrose solution. Mass is the dependent variable (what you measure)."},
    {q:"Why is iodine used in the amylase practical?",opts:["It speeds up the reaction","It kills bacteria","It tests for the presence of starch","It measures pH"],c:2,e:"Iodine turns blue-black in the presence of starch. When amylase has digested all the starch, the iodine stays brown-orange, showing digestion is complete."},
    {q:"A potato in a 1.0 M sucrose solution loses mass. This is because:",opts:["Water moved into the potato by osmosis","Water moved out of the potato by osmosis","Sucrose moved into the potato","The potato dissolved in the solution"],c:1,e:"The sucrose solution has a lower water potential than the potato cells. Water moves out of the potato cells by osmosis (from high to low water potential), causing a decrease in mass."},
    {q:"When using a microscope, you should start with:",opts:["The highest magnification","The eyepiece removed","The lowest magnification objective","The fine focus only"],c:2,e:"Always start with the lowest magnification to find and centre the specimen. Then switch to higher magnification for more detail, using the fine focus knob to sharpen the image."},
    {q:"In the food test for protein (biuret test), a positive result gives:",opts:["Blue-black colour","Orange-red colour","Lilac/purple colour","No colour change"],c:2,e:"The biuret test for protein produces a lilac (purple) colour when protein is present. The solution changes from blue (the colour of biuret reagent) to purple."}
  ],
  "s11i-11-2":[
    {q:"In the photosynthesis practical, what is measured as the dependent variable?",opts:["Distance of the lamp","Temperature of water","Number of oxygen bubbles per minute","Concentration of CO₂"],c:2,e:"The rate of photosynthesis is measured by counting oxygen bubbles per minute (or collecting gas volume). The lamp distance controls light intensity (independent variable)."},
    {q:"A student estimates 15 daisies per 0.25 m² quadrat. The field is 200 m². What is the estimated total?",opts:["3000","6000","12000","15000"],c:2,e:"Mean per m² = 15 ÷ 0.25 = 60 daisies per m². Total = 60 × 200 = 12 000 daisies."},
    {q:"In the decay practical, why might a student use a water bath at 35°C rather than room temperature?",opts:["It slows down the reaction for easier observation","Enzyme activity is typically highest around 35-40°C, speeding up decay","It kills the bacteria","It denatures the enzyme"],c:1,e:"Lipase (and many enzymes) work fastest near body temperature (35-40°C). Using a water bath at 35°C ensures a reasonable rate of reaction for the practical."},
    {q:"Why is sodium hydrogencarbonate added to the water in the pondweed photosynthesis experiment?",opts:["To increase oxygen levels","To keep the pH constant","To ensure CO₂ is not a limiting factor","To prevent the water from heating up"],c:2,e:"Sodium hydrogencarbonate dissolves to release CO₂ into the water, ensuring the concentration of CO₂ does not limit the rate of photosynthesis — so only light intensity affects the results."},
    {q:"Which of these would make a quadrat study more reliable?",opts:["Using only one quadrat","Placing quadrats only in areas with lots of organisms","Taking more quadrat samples at random positions","Using a smaller field"],c:2,e:"More random samples give a more representative picture of the whole area, increasing the reliability of the population estimate. One quadrat or biased placement reduces reliability."}
  ]
});

// ── LESSONS ───────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's11i-11-1': `
<h2>Biology Practicals 1</h2>
<p>The AQA Biology required practicals test your ability to plan, carry out and evaluate experiments. Here we review the key practicals on <strong>microscopy</strong>, <strong>food tests</strong>, <strong>osmosis</strong> and <strong>enzyme activity</strong>.</p>

<h3>Microscopy</h3>
<p>To observe plant cells under a light microscope: prepare a thin sample on a slide, add a stain (iodine for plant cells), lower a coverslip, and focus starting on the <strong>lowest magnification</strong>. Calculate magnification: <strong>magnification = image size ÷ actual size</strong>.</p>

<h3>Food tests</h3>
<ul>
<li><strong>Starch</strong> — iodine solution → blue-black if positive.</li>
<li><strong>Sugars</strong> — Benedict's reagent, heat → green/yellow/orange/brick-red if positive.</li>
<li><strong>Protein</strong> — biuret reagent → lilac/purple if positive.</li>
<li><strong>Lipids</strong> — ethanol emulsion test → cloudy white emulsion if positive.</li>
</ul>

<h3>Osmosis investigation</h3>
<p>Potato cylinders of equal size are placed in sucrose solutions of different concentrations. After a set time, the <strong>percentage change in mass</strong> is calculated. In dilute solutions, water enters the potato (mass increases); in concentrated solutions, water leaves (mass decreases).</p>

<h3>Enzyme activity (amylase and pH)</h3>
<p>Amylase digests starch. Using buffer solutions at different pH values, test with iodine at regular intervals. Record the time for the starch to be fully digested. The optimum pH gives the shortest time.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A potato cylinder has an initial mass of 2.50 g and a final mass of 2.20 g. Calculate the percentage change.</p>
<p><strong>A:</strong> % change = (2.20 − 2.50) ÷ 2.50 × 100 = −0.30 ÷ 2.50 × 100 = <strong>−12%</strong>. The negative sign shows the potato lost mass (water left by osmosis).</p>

<h3>Common mistake</h3>
<p>Students often forget to list <strong>control variables</strong> in practical questions. Always state what was kept the same (temperature, volume, time, size of sample) and why — to ensure a fair test.</p>`,

's11i-11-2': `
<h2>Biology Practicals 2</h2>
<p>This section covers the required practicals on <strong>photosynthesis rate</strong>, <strong>field investigations</strong> (quadrats) and <strong>decay</strong>.</p>

<h3>Photosynthesis rate</h3>
<p>Place pondweed (Elodea) in water with a lamp at a measured distance. Count <strong>oxygen bubbles per minute</strong> as a measure of photosynthesis rate. Move the lamp to different distances to vary light intensity. Add sodium hydrogencarbonate to ensure CO₂ is not limiting.</p>
<p>Light intensity is proportional to 1/d², so halving the distance quadruples the intensity.</p>

<h3>Quadrat sampling</h3>
<p>To estimate a plant population in a field:</p>
<ul>
<li>Use <strong>random coordinates</strong> to place quadrats (avoids bias).</li>
<li>Count the target species in each quadrat.</li>
<li>Calculate the <strong>mean count per quadrat</strong>.</li>
<li>Scale up: estimated population = mean per quadrat × (total area ÷ quadrat area).</li>
</ul>

<h3>Decay investigation</h3>
<p>The rate of decay by microorganisms can be investigated using milk, lipase and phenolphthalein indicator. The indicator turns pink in alkaline conditions. As lipase breaks down fat into fatty acids, the pH drops and the indicator goes colourless. Comparing times at different temperatures shows how temperature affects enzyme-driven decay.</p>

<h3>Worked example</h3>
<p><strong>Q:</strong> A student counts an average of 8 buttercups in a 0.5 m × 0.5 m quadrat. The field is 500 m². Estimate the total population.</p>
<p><strong>A:</strong> Quadrat area = 0.5 × 0.5 = 0.25 m².<br>
Mean density = 8 ÷ 0.25 = 32 per m².<br>
Estimated population = 32 × 500 = <strong>16 000 buttercups</strong>.</p>

<h3>Common mistake</h3>
<p>Students forget to convert the quadrat area correctly. A 50 cm × 50 cm quadrat is <strong>0.25 m²</strong>, not 0.5 m². Always multiply the two side lengths to get the area.</p>`

});
