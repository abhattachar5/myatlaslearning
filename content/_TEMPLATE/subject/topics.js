// content/<year>/<subject>/topics.js  — CANONICAL TEMPLATE (copy, don't load this).
// Declares the subject's topic tiles + island definitions for one year.

// 1) Topic tiles (the cards shown on the dashboard). Declare a year+subject array:
//    const MATH_TOPICS_Y9 = [ { id:'m9t-01', name:'…', emoji:'…', hasContent:true, description:'…' }, … ];

// 2) Island definitions — push into the shared CURRICULUM array:
// CURRICULUM.push(
//   { id:'m9i-01-1', subject:'Mathematics', subjectId:'math', topicId:'m9t-01',
//     yearGroup:'Year 9', name:'…', difficulty:1, prerequisites:[], topics:[…] },
//   …
// );
