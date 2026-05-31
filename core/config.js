// core/config.js — the single source of truth for which years/subjects exist.
// Flip a year from `years` into `active` to switch it on across the whole app.
var CONFIG = {
  years:    ['y7', 'y8', 'y9', 'y10', 'y11'],
  active:   ['y7', 'y8'],   // both years migrated; Y7 loads first so Y8 reuse resolves
  subjects: ['math', 'english', 'science', 'history', 'geography', 'comprehension'],

  // Human-friendly labels
  yearLabel:    { y7: 'Year 7', y8: 'Year 8', y9: 'Year 9', y10: 'Year 10', y11: 'Year 11' },
  subjectLabel: { math: 'Mathematics', english: 'English', science: 'Science',
                  history: 'History', geography: 'Geography', comprehension: 'Comprehension' }
};
