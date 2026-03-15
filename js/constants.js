// Constants for labels and display names
const tenseLongNames = {
    present: 'Präsens',
    imperfect: 'Imperfekt',
    perfect: 'Perfekt',
    plusquamperfect: 'Plusquamperfekt',
    future1: 'Futur 1'
};

// Default mood settings (can be overridden by cookie)
const defaultMoodSettings = {
    'ind-akt': true,    // Only this is active by default
    'ind-pass': false,
    'imp-akt': false,
    'imp-pass': false,
    'konj-akt': false,
    'konj-pass': false
};

// Get mood settings from cookie or use defaults
function getMoodSettings() {
    const cookieName = 'latinMasterMoodSettings';
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(cookieName + '='));
    
    if (cookieValue) {
        try {
            return JSON.parse(cookieValue.split('=')[1]);
        } catch (e) {
            console.error('Error parsing mood settings cookie:', e);
        }
    }
    return { ...defaultMoodSettings };
}

// Save mood settings to cookie
function saveMoodSettings(settings) {
    const cookieName = 'latinMasterMoodSettings';
    const expiryDays = 365;
    const date = new Date();
    date.setTime(date.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = cookieName + '=' + JSON.stringify(settings) + ';' + expires + ';path=/';
}

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
    { key: 'ind-pass', active: false },
    { key: 'imp-akt', active: false },
    { key: 'imp-pass', active: false},
    { key: 'konj-akt', active: false},
    { key: 'konj-pass', active: false }
];

// Initialize moodKeys from settings
function initializeMoodKeysFromSettings() {
    const settings = getMoodSettings();
    moodKeys.forEach(mood => {
        mood.active = settings[mood.key] || false;
    });
}

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
