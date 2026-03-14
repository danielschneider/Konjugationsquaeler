// State management for the application

// State for Mode 1 (Guess the form)
let mode1State = {
    verb: 'amare',
    form: null,
    selected: { tense: null, person: null, number: null, mood: null },
    enabledMoods: []  // No mood pre-selected
};

// Score tracking
let scoreState = {
    correct: 0,
    incorrect: 0
};

// Timeout tracking for auto-advance
let pendingTimeout = null;

// Track if last check was an error (for Mode 1)
let mode1LastError = false;

// Track if last check was an error (for Mode 2)
let mode2LastError = false;

// Track if a check is currently in progress (prevents button hammering)
let checkInProgress = false;

// State for Mode 2 (Type the form)
let mode2State = {
    verb: 'amare',
    form: null,
    currentQuestion: {}
};

// State for Mode 3 (Conjugation table)
let mode3CurrentVerb = 'amare';
let mode3CurrentMood = 'ind-akt';
