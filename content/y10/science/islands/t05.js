// content/y10/science/islands/t05.js — Year 10 Science Topic 5: Hormonal Coordination
// Islands s10i-05-1 .. s10i-05-2. Flashcards, static question banks, lessons.
// Authored by the atlas-content skill. All items original.

// ── FLASHCARDS ──────────────────────────────────────────────────────────────
FLASHCARDS.push(
  // s10i-05-1 — The Endocrine System
  {id:"s10fc-05-1-1", islandId:"s10i-05-1", front:"What is the endocrine system?",
   back:"The endocrine system is a collection of glands that produce hormones.\n\nHormones are chemical messengers carried in the blood from glands to target organs, where they produce an effect.\n\nKey glands:\n• Pituitary gland (the 'master gland') — in the brain\n• Thyroid — in the neck\n• Pancreas — in the abdomen\n• Adrenal glands — on top of the kidneys\n• Ovaries (female) / Testes (male)", difficulty:1, category:"definition"},
  {id:"s10fc-05-1-2", islandId:"s10i-05-1", front:"How is blood glucose controlled by insulin and glucagon?",
   back:"Blood glucose is controlled by the pancreas:\n\nWhen blood glucose is TOO HIGH:\n• Pancreas releases insulin\n• Insulin causes cells (especially liver and muscle) to take up glucose\n• Glucose is converted to glycogen for storage → blood glucose falls\n\nWhen blood glucose is TOO LOW:\n• Pancreas releases glucagon\n• Glucagon causes the liver to break down glycogen into glucose → blood glucose rises\n\nThis is an example of negative feedback.", difficulty:2, category:"concept"},
  {id:"s10fc-05-1-3", islandId:"s10i-05-1", front:"What is the difference between type 1 and type 2 diabetes?",
   back:"Type 1 diabetes:\n• The pancreas produces little or no insulin\n• Usually diagnosed in childhood\n• Treated with insulin injections and monitoring diet\n• An autoimmune condition\n\nType 2 diabetes:\n• Body cells no longer respond properly to insulin (insulin resistance)\n• Often linked to obesity and lifestyle\n• Managed with diet, exercise and sometimes medication\n• More common in adults", difficulty:2, category:"concept"},
  {id:"s10fc-05-1-4", islandId:"s10i-05-1", front:"Why is the pituitary gland called the 'master gland'?",
   back:"The pituitary gland, located at the base of the brain, secretes several hormones that control other glands.\n\nExamples:\n• TSH — stimulates the thyroid gland to release thyroxine\n• FSH — stimulates the ovaries to mature eggs\n• LH — triggers ovulation\n• ADH — controls water reabsorption in the kidneys\n• Growth hormone — stimulates growth\n\nBecause it coordinates the activity of many other glands, it is often called the master gland.", difficulty:2, category:"concept"},
  {id:"s10fc-05-1-5", islandId:"s10i-05-1", front:"What role does thyroxine play in the body?",
   back:"Thyroxine is produced by the thyroid gland. It controls the basal metabolic rate — the speed of chemical reactions in the body.\n\nThyroxine production is controlled by negative feedback:\n• The pituitary gland releases TSH, which stimulates the thyroid\n• When thyroxine levels are high enough, TSH release is reduced\n• When thyroxine levels drop, more TSH is released\n\nThyroxine also plays a role in growth and development.", difficulty:2, category:"concept"},

  // s10i-05-2 — Puberty & the Menstrual Cycle
  {id:"s10fc-05-2-1", islandId:"s10i-05-2", front:"Name the four key hormones that control the menstrual cycle.",
   back:"1. FSH (Follicle Stimulating Hormone) — released by the pituitary gland; causes an egg to mature in the ovary; stimulates oestrogen production\n\n2. Oestrogen — released by the ovaries; causes the uterus lining to thicken; stimulates LH release; inhibits FSH\n\n3. LH (Luteinising Hormone) — released by the pituitary gland; triggers ovulation (day 14)\n\n4. Progesterone — released by the empty follicle (corpus luteum); maintains the uterus lining; inhibits FSH and LH", difficulty:2, category:"definition"},
  {id:"s10fc-05-2-2", islandId:"s10i-05-2", front:"What happens during the menstrual cycle?",
   back:"The cycle lasts approximately 28 days:\n\nDays 1–5: Menstruation — the uterus lining breaks down and is shed\nDays 5–14: The lining rebuilds; an egg matures in the ovary (stimulated by FSH and oestrogen)\nDay 14: Ovulation — the mature egg is released (triggered by a surge of LH)\nDays 14–28: The lining is maintained by progesterone. If the egg is not fertilised, progesterone drops and the cycle restarts.", difficulty:2, category:"concept"},
  {id:"s10fc-05-2-3", islandId:"s10i-05-2", front:"How does hormonal contraception prevent pregnancy?",
   back:"Hormonal contraception (e.g. the pill, implant, injection) uses synthetic hormones to prevent pregnancy.\n\nMost contain progesterone (or a combination of oestrogen and progesterone). They work by:\n• Inhibiting FSH so eggs do not mature\n• Inhibiting LH so ovulation does not occur\n• Thickening cervical mucus to block sperm\n\nThey are very effective when used correctly but do not protect against STIs.", difficulty:2, category:"application"},
  {id:"s10fc-05-2-4", islandId:"s10i-05-2", front:"How can hormones be used to treat infertility?",
   back:"If a woman is not ovulating, fertility treatments can help:\n\n1. FSH and LH injections — FSH stimulates eggs to mature; LH triggers ovulation\n\n2. IVF (In Vitro Fertilisation):\n   • FSH is given to stimulate multiple eggs to mature\n   • Eggs are collected from the ovaries\n   • Eggs are fertilised with sperm in a laboratory dish\n   • One or two embryos are transferred to the uterus\n\nIVF is emotionally and physically demanding and not always successful.", difficulty:2, category:"application"},
  {id:"s10fc-05-2-5", islandId:"s10i-05-2", front:"What hormones trigger puberty?",
   back:"Puberty is triggered by the pituitary gland releasing FSH and LH, which stimulate the sex organs:\n\nIn males:\n• Testosterone (from testes) causes: voice deepening, facial hair, muscle development, sperm production\n\nIn females:\n• Oestrogen (from ovaries) causes: breast development, widening of hips, menstrual cycle begins\n\nBoth sexes: growth spurt, pubic and underarm hair, skin changes", difficulty:1, category:"concept"}
);

// ── STATIC QUESTION BANKS ───────────────────────────────────────────────────
Object.assign(QUESTIONS, {
  "s10i-05-1": [
    {q:"Which hormone causes blood glucose to decrease?",
     opts:["Glucagon","Adrenaline","Insulin","Thyroxine"], c:2,
     e:"Insulin is released by the pancreas when blood glucose is too high. It causes cells to take up glucose from the blood and the liver to convert glucose to glycogen, lowering the blood glucose concentration."},
    {q:"What is the key difference between type 1 and type 2 diabetes?",
     opts:["Type 1 is caused by obesity; type 2 is genetic","Type 1 involves no insulin production; type 2 involves insulin resistance","Type 1 affects adults only; type 2 affects children only","Type 1 is treated with diet; type 2 requires insulin injections"], c:1,
     e:"In type 1 diabetes, the pancreas produces little or no insulin (an autoimmune condition). In type 2 diabetes, the body's cells no longer respond properly to insulin (insulin resistance), often linked to lifestyle factors."},
    {q:"Why is the pituitary gland called the 'master gland'?",
     opts:["It is the largest gland in the body","It produces the most hormones","It secretes hormones that control other glands","It is located in the brain"], c:2,
     e:"The pituitary gland is the master gland because it secretes hormones (such as TSH, FSH, LH) that stimulate and regulate other endocrine glands. Its location in the brain is not the reason for its name."},
    {q:"What happens in the body when blood glucose drops too low?",
     opts:["Insulin is released to break down glycogen","Glucagon is released to convert glycogen to glucose","Adrenaline is released to slow the heart","Thyroxine is released to increase metabolism"], c:1,
     e:"When blood glucose is too low, the pancreas releases glucagon. Glucagon causes the liver to convert stored glycogen back into glucose and release it into the blood, raising the blood glucose concentration."},
    {q:"Which gland produces thyroxine?",
     opts:["Pituitary gland","Adrenal glands","Thyroid gland","Pancreas"], c:2,
     e:"The thyroid gland, located in the neck, produces thyroxine. Thyroxine controls the body's basal metabolic rate. Its production is regulated by TSH from the pituitary gland via negative feedback."}
  ],
  "s10i-05-2": [
    {q:"Which hormone triggers ovulation?",
     opts:["FSH","Oestrogen","LH","Progesterone"], c:2,
     e:"A surge of LH (Luteinising Hormone) from the pituitary gland triggers ovulation — the release of a mature egg from the ovary — around day 14 of the menstrual cycle. FSH stimulates the egg to mature; oestrogen stimulates LH release."},
    {q:"What is the role of progesterone in the menstrual cycle?",
     opts:["To stimulate egg maturation","To trigger ovulation","To maintain the uterus lining after ovulation","To cause menstruation"], c:2,
     e:"After ovulation, the empty follicle (corpus luteum) produces progesterone. Progesterone maintains the thick uterus lining, ready for a fertilised egg to implant. If no fertilisation occurs, progesterone levels drop and menstruation begins."},
    {q:"How does the contraceptive pill prevent pregnancy?",
     opts:["It kills sperm in the uterus","It contains hormones that inhibit FSH and LH, preventing ovulation","It thickens the uterus lining","It increases oestrogen to mature more eggs"], c:1,
     e:"The contraceptive pill contains synthetic hormones (usually progesterone, sometimes with oestrogen) that inhibit the release of FSH and LH from the pituitary gland. Without FSH, eggs do not mature; without LH, ovulation does not occur."},
    {q:"In IVF, why is FSH given to the woman?",
     opts:["To prevent ovulation","To stimulate the maturation of several eggs at once","To maintain the uterus lining","To kill bacteria in the uterus"], c:1,
     e:"FSH (Follicle Stimulating Hormone) is injected to stimulate the ovaries to mature multiple eggs at once. These eggs are then collected and fertilised with sperm in the laboratory. Having several eggs increases the chances of successful fertilisation."},
    {q:"Which hormone causes the uterus lining to thicken?",
     opts:["FSH","LH","Testosterone","Oestrogen"], c:3,
     e:"Oestrogen, released by the ovaries, causes the uterus lining to thicken and become rich in blood vessels during the first half of the menstrual cycle. This prepares the uterus for possible implantation of a fertilised egg."}
  ]
});

// ── LESSONS ─────────────────────────────────────────────────────────────────
Object.assign(LESSONS, {

's10i-05-1': `
<h2>The Endocrine System</h2>
<p>The endocrine system is a network of glands that produce and release hormones — chemical messengers that travel in the blood to target organs. Compared to the nervous system, hormonal responses are slower but longer-lasting and can affect multiple organs at once.</p>

<h3>Key Endocrine Glands</h3>
<ul>
  <li><strong>Pituitary gland</strong> — the 'master gland'; releases hormones (TSH, FSH, LH, ADH, growth hormone) that control other glands</li>
  <li><strong>Thyroid gland</strong> — produces thyroxine, which controls metabolic rate</li>
  <li><strong>Pancreas</strong> — produces insulin and glucagon to control blood glucose</li>
  <li><strong>Adrenal glands</strong> — produce adrenaline (fight-or-flight response)</li>
  <li><strong>Ovaries</strong> — produce oestrogen and progesterone</li>
  <li><strong>Testes</strong> — produce testosterone</li>
</ul>

<h3>Blood Glucose Control</h3>
<p>Blood glucose is controlled by the pancreas using negative feedback:</p>
<ul>
  <li><strong>Blood glucose too high:</strong> pancreas releases <em>insulin</em> → cells take up glucose; liver converts glucose to glycogen → blood glucose falls</li>
  <li><strong>Blood glucose too low:</strong> pancreas releases <em>glucagon</em> → liver converts glycogen to glucose → blood glucose rises</li>
</ul>

<h3>Diabetes</h3>
<ul>
  <li><strong>Type 1</strong> — pancreas produces no insulin; treated with insulin injections; usually diagnosed young; autoimmune</li>
  <li><strong>Type 2</strong> — body cells resist insulin; managed with diet, exercise, medication; often linked to obesity</li>
</ul>

<h3>Worked Example</h3>
<p>After eating a meal rich in carbohydrates, explain what happens to blood glucose and how the body responds.</p>
<p>Carbohydrates are digested into glucose, which is absorbed into the blood, raising blood glucose concentration. The pancreas detects this rise and releases insulin. Insulin causes body cells (especially liver and muscle cells) to take up glucose from the blood. The liver converts excess glucose into glycogen for storage. As a result, blood glucose concentration falls back to normal. This is an example of negative feedback.</p>

<h3>Common Mistake</h3>
<p>Students often mix up insulin and glucagon. Remember: <em>insulin</em> decreases blood glucose (think: "insulin = into cells"), and <em>glucagon</em> increases blood glucose (think: "glucagon = glucose gone up"). They have opposite effects and work together via negative feedback.</p>
`,

's10i-05-2': `
<h2>Puberty &amp; the Menstrual Cycle</h2>
<p>Hormones control the changes of puberty and the monthly menstrual cycle. Understanding the interplay of FSH, oestrogen, LH and progesterone is essential for this topic.</p>

<h3>Puberty</h3>
<p>Puberty begins when the pituitary gland releases FSH and LH, which stimulate the sex organs to produce sex hormones:</p>
<ul>
  <li><strong>Testosterone</strong> (from testes) — causes voice deepening, facial hair growth, muscle development and sperm production</li>
  <li><strong>Oestrogen</strong> (from ovaries) — causes breast development, hip widening and the start of the menstrual cycle</li>
</ul>

<h3>The Menstrual Cycle (approximately 28 days)</h3>
<ul>
  <li><strong>Days 1–5:</strong> Menstruation — the uterus lining breaks down and is shed</li>
  <li><strong>Days 5–14:</strong> FSH from the pituitary stimulates an egg to mature; the ovary releases oestrogen, which thickens the uterus lining and triggers an LH surge</li>
  <li><strong>Day ~14:</strong> Ovulation — LH surge causes the mature egg to be released from the ovary</li>
  <li><strong>Days 14–28:</strong> Progesterone (from the corpus luteum) maintains the thick lining. If no fertilisation occurs, progesterone drops → lining breaks down → cycle restarts</li>
</ul>

<h3>Contraception and Fertility</h3>
<ul>
  <li><strong>Hormonal contraception</strong> (pill, implant, injection) — contains hormones that inhibit FSH/LH, preventing egg maturation and ovulation</li>
  <li><strong>Fertility treatment</strong> — FSH/LH injections stimulate ovulation; IVF involves stimulating multiple eggs, fertilising them in the lab, then transferring embryos to the uterus</li>
</ul>

<h3>Worked Example</h3>
<p>Explain how the levels of oestrogen and progesterone interact during the menstrual cycle.</p>
<p>In the first half of the cycle, oestrogen levels rise as the egg matures. Oestrogen causes the uterus lining to thicken and stimulates a surge of LH, triggering ovulation. After ovulation, the empty follicle becomes the corpus luteum, which produces progesterone. Progesterone maintains the uterus lining and inhibits FSH and LH (preventing further egg maturation). If the egg is not fertilised, the corpus luteum degenerates, progesterone drops, and the lining is shed — starting a new cycle.</p>

<h3>Common Mistake</h3>
<p>A common error is confusing FSH and LH. Remember: <em>FSH</em> stimulates the <em>follicle</em> (egg maturation comes first), while <em>LH</em> triggers ovulation (the <em>release</em> of the mature egg). FSH starts the process; LH causes the key event mid-cycle.</p>
`

});

// ── s10i-05-3 — Contraception & Fertility Treatments ─────────────────────────
FLASHCARDS.push(
  {id:"s10fc-05-3-1", islandId:"s10i-05-3", front:"How do hormonal methods of contraception prevent pregnancy?",
   back:"Hormonal contraceptives contain oestrogen and/or progesterone, which inhibit FSH so that no eggs mature (and ovulation does not occur). They also thicken cervical mucus to block sperm.\n\nForms include:\n• The pill — taken orally\n• The implant, injection and skin patch — release hormones slowly over a long period\n\nThey are very effective but do not protect against STIs.", difficulty:2, category:"concept"},
  {id:"s10fc-05-3-2", islandId:"s10i-05-3", front:"List the main non-hormonal and barrier methods of contraception.",
   back:"• Condom — a barrier that stops sperm reaching the egg; also protects against STIs\n• Diaphragm — a barrier placed over the cervix (used with spermicide)\n• Spermicide — chemicals that kill or disable sperm\n• Intrauterine device (IUD) — placed in the uterus to prevent implantation (some also release hormones)\n• Sterilisation — surgically cutting/tying the sperm or egg tubes (permanent)\n• Abstinence — avoiding intercourse, especially when an egg may be present", difficulty:2, category:"definition"},
  {id:"s10fc-05-3-3", islandId:"s10i-05-3", front:"Which contraceptive methods protect against sexually transmitted infections (STIs)?",
   back:"Only barrier methods that physically cover the genitals protect against STIs — most importantly the condom.\n\nHormonal methods (the pill, implant, injection, patch) and the IUD prevent pregnancy but do NOT protect against STIs, because they do not form a physical barrier to body fluids.\n\nThis is an important point when evaluating which method to use.", difficulty:2, category:"application"},
  {id:"s10fc-05-3-4", islandId:"s10i-05-3", front:"How can FSH and LH be used as a fertility drug?",
   back:"If a woman does not produce enough FSH, her eggs may not mature, so she cannot become pregnant.\n\nA 'fertility drug' containing FSH and LH can be given:\n• FSH stimulates eggs to mature in the ovaries\n• LH triggers ovulation (release of the egg)\n\nThis can help the woman become pregnant naturally. A drawback is that it may cause several eggs to mature, leading to multiple births.", difficulty:2, category:"application"},
  {id:"s10fc-05-3-5", islandId:"s10i-05-3", front:"Describe IVF and evaluate it as a fertility treatment.",
   back:"IVF (in vitro fertilisation):\n1. The mother is given FSH and LH to mature several eggs\n2. The eggs are collected and fertilised by sperm in a laboratory\n3. The fertilised eggs develop into embryos\n4. One or two embryos are inserted into the mother's uterus\n\nEvaluation:\n• It is emotionally and physically stressful\n• Success rates are often low\n• It can lead to multiple births, which are risky for mother and babies", difficulty:2, category:"concept"}
);

Object.assign(QUESTIONS, {
  "s10i-05-3": [
    {q:"How does the contraceptive pill prevent the maturation of eggs?",
     opts:["By increasing FSH levels","By inhibiting FSH","By triggering ovulation","By thickening the uterus lining"], c:1,
     e:"The pill contains oestrogen and/or progesterone, which inhibit FSH. Without FSH, eggs do not mature in the ovaries, so the woman cannot become pregnant."},
    {q:"Which contraceptive method also protects against sexually transmitted infections?",
     opts:["The contraceptive pill","The intrauterine device (IUD)","The condom","The hormone implant"], c:2,
     e:"Only barrier methods like the condom protect against STIs, because they physically prevent contact between body fluids. Hormonal methods and the IUD prevent pregnancy but offer no protection against STIs."},
    {q:"Which of the following is a non-hormonal method of contraception?",
     opts:["The skin patch","The injection","The diaphragm","The implant"], c:2,
     e:"A diaphragm is a barrier method that covers the cervix to stop sperm reaching the egg — it uses no hormones. The patch, injection and implant are all hormonal methods."},
    {q:"In a fertility drug, what is the role of FSH?",
     opts:["It triggers ovulation","It stimulates eggs to mature in the ovaries","It thickens cervical mucus","It maintains the uterus lining"], c:1,
     e:"FSH (follicle stimulating hormone) stimulates eggs to mature in the ovaries. LH then triggers ovulation. Giving both can help a woman who does not produce enough of her own FSH to become pregnant."},
    {q:"Which of these is a recognised disadvantage of IVF?",
     opts:["It guarantees a successful pregnancy","It has low success rates and can cause multiple births","It protects against STIs","It removes the need for hormones"], c:1,
     e:"IVF is emotionally and physically stressful and often has low success rates. Because several embryos may be implanted, it can lead to multiple births, which carry risks for the mother and babies."}
  ]
});

Object.assign(LESSONS, {

's10i-05-3': `
<h2>Contraception &amp; Fertility Treatments</h2>
<p>Hormones can be used both to <strong>prevent</strong> pregnancy (contraception) and to <strong>help</strong> people who are struggling to conceive (fertility treatments). This island compares the methods and weighs up their advantages and disadvantages.</p>

<h3>Hormonal Contraception</h3>
<p>Hormonal methods use <strong>oestrogen and/or progesterone</strong> to prevent pregnancy. They work mainly by <strong>inhibiting FSH</strong>, so eggs do not mature, and by thickening cervical mucus to block sperm.</p>
<ul>
  <li><strong>The pill</strong> — taken orally; the combined pill contains oestrogen and progesterone</li>
  <li><strong>The implant, injection and patch</strong> — release hormones (usually progesterone) slowly over weeks to years</li>
</ul>
<p>These methods are very effective when used correctly, but they do <strong>not</strong> protect against STIs.</p>

<h3>Non-Hormonal and Barrier Methods</h3>
<ul>
  <li><strong>Condom</strong> — a barrier that stops sperm meeting the egg and also protects against STIs</li>
  <li><strong>Diaphragm</strong> — a barrier over the cervix, used with spermicide</li>
  <li><strong>Spermicide</strong> — chemicals that kill or disable sperm</li>
  <li><strong>Intrauterine device (IUD)</strong> — placed in the uterus to prevent implantation</li>
  <li><strong>Sterilisation</strong> — surgically cutting or tying the sperm/egg tubes (permanent)</li>
  <li><strong>Abstinence</strong> — avoiding intercourse, especially when an egg may be present</li>
</ul>

<h3>Comparing Methods</h3>
<p>When evaluating contraception, consider <strong>effectiveness</strong>, <strong>side effects</strong> and whether it gives <strong>STI protection</strong>. Hormonal methods are highly effective but can cause side effects and give no STI protection. Barrier methods are slightly less reliable but the condom uniquely protects against STIs.</p>

<h3>Treating Infertility</h3>
<p>If a woman does not make enough FSH, her eggs may not mature. A <strong>fertility drug</strong> containing FSH and LH can be given: FSH matures the eggs and LH triggers ovulation, helping her conceive naturally.</p>

<h3>IVF (In Vitro Fertilisation)</h3>
<ol>
  <li>The mother is given FSH and LH to mature several eggs</li>
  <li>Eggs are collected and fertilised by sperm in a laboratory</li>
  <li>The fertilised eggs develop into embryos</li>
  <li>One or two embryos are inserted into the uterus</li>
</ol>
<p>IVF is <strong>emotionally and physically stressful</strong>, has relatively <strong>low success rates</strong>, and can lead to <strong>multiple births</strong>, which are risky for mother and babies.</p>

<h3>Worked Example</h3>
<p>A couple are deciding between the contraceptive pill and condoms. Give one advantage of choosing condoms.</p>
<p>Condoms are a barrier method, so as well as preventing pregnancy they protect against sexually transmitted infections. The contraceptive pill prevents pregnancy effectively but offers no protection against STIs because it is a hormonal method.</p>

<h3>Common Mistake</h3>
<p>Students often assume the contraceptive pill protects against STIs. It does not — only barrier methods such as condoms prevent the spread of infection. The pill works hormonally to prevent ovulation, not by forming a barrier.</p>
`

});

// ── s10i-05-4 — Plant Hormones & Tropisms ────────────────────────────────────
FLASHCARDS.push(
  {id:"s10fc-05-4-1", islandId:"s10i-05-4", front:"What are phototropism and gravitropism (geotropism)?",
   back:"A tropism is a growth response of a plant towards or away from a stimulus.\n\n• Phototropism — growth in response to light. Shoots grow towards light (positive phototropism) to maximise photosynthesis.\n\n• Gravitropism (geotropism) — growth in response to gravity. Roots grow towards gravity (positive gravitropism) to anchor the plant and reach water; shoots grow away from it (negative gravitropism).", difficulty:1, category:"definition"},
  {id:"s10fc-05-4-2", islandId:"s10i-05-4", front:"What is auxin and how does it cause shoots to bend towards light?",
   back:"Auxin is the main plant growth hormone. It is produced in the tips of shoots and roots and controls cell elongation (how much cells lengthen).\n\nWhen light shines from one side, auxin moves to the shaded side of the shoot. The extra auxin makes the cells on the shaded side elongate more, so that side grows faster and the shoot bends towards the light.", difficulty:2, category:"concept"},
  {id:"s10fc-05-4-3", islandId:"s10i-05-4", front:"How does auxin affect shoots and roots differently?",
   back:"Auxin promotes cell elongation in shoots but inhibits it in roots — so the same hormone has opposite effects.\n\n• Shoots: positively phototropic (grow towards light) and negatively gravitropic (grow up, away from gravity).\n• Roots: negatively phototropic (grow away from light) and positively gravitropic (grow down, towards gravity).\n\nIn a root, auxin gathers on the lower side and inhibits growth there, so the upper side grows more and the root bends down.", difficulty:3, category:"application"},
  {id:"s10fc-05-4-4", islandId:"s10i-05-4", front:"Give the commercial uses of auxins.",
   back:"Auxins are used in agriculture and horticulture:\n\n• As weedkillers — selective herbicides that make broad-leaved weeds grow too fast and die, leaving narrow-leaved crops unharmed\n• As rooting powder — to encourage cuttings to grow roots quickly\n• In tissue culture — to promote growth of plant tissues in the laboratory", difficulty:2, category:"application"},
  {id:"s10fc-05-4-5", islandId:"s10i-05-4", front:"What are the commercial uses of gibberellins and ethene?",
   back:"Gibberellins are used to:\n• End seed dormancy so seeds germinate\n• Promote flowering\n• Increase fruit size\n\nEthene is a gas used to:\n• Control ripening of fruit during storage and transport — fruit can be picked and transported unripe (hard, less easily damaged) and then ripened with ethene before sale.", difficulty:2, category:"application"}
);

Object.assign(QUESTIONS, {
  "s10i-05-4": [
    {q:"What is phototropism?",
     opts:["Growth in response to gravity","Growth in response to light","Growth in response to water","Growth in response to touch"], c:1,
     e:"Phototropism is a plant's growth response to light. Shoots are positively phototropic — they grow towards the light to maximise the light available for photosynthesis."},
    {q:"Where in a plant is auxin produced?",
     opts:["In the roots only","In the tips of shoots and roots","In the flowers","In the older parts of the stem"], c:1,
     e:"Auxin is produced in the tips of shoots and roots. It then moves through the plant and controls cell elongation, causing the bending responses seen in tropisms."},
    {q:"A shoot is lit from one side. Why does it bend towards the light?",
     opts:["Auxin moves to the lit side, slowing growth there","Auxin moves to the shaded side, making those cells elongate more","Light destroys all the auxin","Water collects on the shaded side"], c:1,
     e:"Auxin accumulates on the shaded side of the shoot. There it promotes cell elongation, so the shaded side grows faster than the lit side, bending the shoot towards the light."},
    {q:"How do shoots and roots respond to gravity?",
     opts:["Both grow towards gravity","Both grow away from gravity","Shoots grow away from gravity; roots grow towards it","Shoots grow towards gravity; roots grow away from it"], c:2,
     e:"Shoots are negatively gravitropic (grow upward, away from gravity) while roots are positively gravitropic (grow downward, towards gravity). This anchors the plant and helps roots reach water."},
    {q:"Which plant hormone is used to control the ripening of fruit during storage and transport?",
     opts:["Auxin","Gibberellin","Ethene","Oestrogen"], c:2,
     e:"Ethene is a gas that controls fruit ripening. Fruit can be picked and transported while unripe (and less easily damaged), then treated with ethene to ripen it before sale."}
  ]
});

Object.assign(LESSONS, {

's10i-05-4': `
<h2>Plant Hormones &amp; Tropisms</h2>
<p>Plants cannot move around, but they can control the <strong>direction</strong> in which they grow using hormones. These growth responses, called <strong>tropisms</strong>, help plants reach light, water and support.</p>

<h3>Tropisms</h3>
<ul>
  <li><strong>Phototropism</strong> — growth in response to light. Shoots grow <em>towards</em> light (positive phototropism) to maximise photosynthesis.</li>
  <li><strong>Gravitropism (geotropism)</strong> — growth in response to gravity. Roots grow <em>towards</em> gravity (positive) to anchor the plant and find water; shoots grow <em>away</em> from gravity (negative).</li>
</ul>

<h3>The Role of Auxin</h3>
<p><strong>Auxin</strong> is the main plant growth hormone. It is produced in the <strong>tips</strong> of shoots and roots and controls <strong>cell elongation</strong>. Crucially, auxin becomes <strong>unequally distributed</strong> in response to a stimulus, and this uneven distribution causes the plant to bend.</p>
<p>When light comes from one side, auxin moves to the shaded side of the shoot. There it makes cells elongate more, so the shaded side grows faster and the shoot bends towards the light.</p>

<h3>Opposite Effects in Shoots and Roots</h3>
<p>Auxin <strong>promotes</strong> elongation in shoots but <strong>inhibits</strong> it in roots. This is why:</p>
<ul>
  <li>Shoots are <strong>positively phototropic</strong> and <strong>negatively gravitropic</strong></li>
  <li>Roots are <strong>negatively phototropic</strong> and <strong>positively gravitropic</strong></li>
</ul>

<h3>Commercial Uses of Plant Hormones</h3>
<ul>
  <li><strong>Auxins</strong> — used as selective weedkillers, as rooting powder for cuttings, and in tissue culture</li>
  <li><strong>Gibberellins</strong> — used to end seed dormancy, promote flowering and produce larger fruit</li>
  <li><strong>Ethene</strong> — a gas used to control the ripening of fruit during storage and transport</li>
</ul>

<h3>Worked Example</h3>
<p>A seed germinates underground in the dark. Explain how its root and shoot grow in the correct directions.</p>
<p>In the dark, the plant responds to gravity. In the root, auxin gathers on the lower side and inhibits elongation there, so the upper side grows faster and the root bends downward (positive gravitropism). In the shoot, auxin also gathers on the lower side but promotes elongation there, so the lower side grows faster and the shoot bends upward (negative gravitropism), eventually reaching the light.</p>

<h3>Common Mistake</h3>
<p>Students often state that auxin always speeds up growth. In fact auxin <em>promotes</em> cell elongation in shoots but <em>inhibits</em> it in roots. The same hormone produces opposite effects in different parts of the plant, which is exactly why roots and shoots bend in opposite directions.</p>
`

});
