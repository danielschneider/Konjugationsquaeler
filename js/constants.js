// Constants for labels and display names
const tenseLongNames = {
    present: 'Präsens',
    imperfect: 'Imperfekt',
    perfect: 'Perfekt',
    plusquamperfect: 'Plusquamperfekt',
    future1: 'Futur 1'
};

// Mood and voice combinations
const moodLongNames = {
    'ind-akt': 'Indikativ Aktiv',
    'ind-pass': 'Indikativ Passiv',
    'imp-akt': 'Imperativ Aktiv',
    'imp-pass': 'Imperativ Passiv',
    'konj-akt': 'Konjunktiv Aktiv',
    'konj-pass': 'Konjunktiv Passiv'
};

const moodKeys = [
    { key: 'ind-akt', active: false },
    { key: 'ind-pass', active: true },
    { key: 'imp-akt', active: false },
    { key: 'imp-pass', active: false},
    { key: 'konj-akt', active: false},
    { key: 'konj-pass', active: false }
];

// Get only active mood keys as array of strings
function getActiveMoodKeys() {
    return moodKeys.filter(mood => mood.active).map(mood => mood.key);
}
// Tenses available for each mood
const moodTenses = {
    'ind-akt': ['present', 'imperfect', 'perfect', 'plusquamperfect', 'future1'],
    'ind-pass': ['present', 'imperfect', 'perfect', 'plusquamperfect', 'future1'],
    'imp-akt': ['present'],
    'imp-pass': ['present'],
    'konj-akt': ['present', 'imperfect', 'perfect', 'plusquamperfect'],
    'konj-pass': ['present', 'imperfect', 'perfect', 'plusquamperfect']
};

// Persons available for each mood (Imperativ only has 2nd person)
const moodPersons = {
    'ind-akt': ['1', '2', '3'],
    'ind-pass': ['1', '2', '3'],
    'imp-akt': ['2'],
    'imp-pass': ['2'],
    'konj-akt': ['1', '2', '3'],
    'konj-pass': ['1', '2', '3']
};

const personNames = {
    '1': '1. Person',
    '2': '2. Person',
    '3': '3. Person'
};

const numberNames = {
    sg: 'Singular',
    pl: 'Plural'
};
