/**
 * Latin Verb Conjugation Database
 * 
 * =============================================================================
 * FORMAT GUIDE:
 * =============================================================================
 * 
 * {
 *     infinitive: 'amare',        // Latin infinitive
 *     translation: 'to love',      // English translation
 *     type: 'a',                  // conjugation type: a, e, i, 3, or irregular
 *     conjugations: {
 *         indikativ: {
 *             aktiv: {
 *                 present: { sg: { '1': 'amō', '2': 'amās', '3': 'amat' }, pl: { ... } },
 *                 imperfect: { ... },
 *                 perfect: { ... },
 *                 plusquamperfect: { ... },
 *                 future1: { ... }
 *             },
 *             passiv: { ... }
 *         },
 *         imperativ: {
 *             aktiv: { present: { sg: { '2': 'amā' }, pl: { '2': 'amāte' } } },
 *             passiv: { present: { sg: { '2': 'amāre' }, pl: { '2': 'amāminī' } } }
 *         },
 *         konjunktiv: {
 *             aktiv: {
 *                 present: { ... },
 *                 imperfect: { ... },
 *                 perfect: { ... },
 *                 plusquamperfect: { ... }
 *             },
 *             passiv: { ... }
 *         }
 *     }
 * }
 * 
 * NOTES:
 * - Use null for forms that don't exist (e.g., 'esse' has no passive)
 * - Mood codes: ind-akt, ind-pas, imp-akt, imp-pas, kon-akt, kon-pas
 * =============================================================================
 */

// Helper functions

/**
 * Transforms a legacy format verb to new format
 * Legacy: conjugations.present, conjugations.imperfect, etc. (flat)
 * New: conjugations.indikativ.aktiv.present, etc. (nested)
 * @param {Object} verb - The verb object
 * @returns {Object} - Transformed verb in new format
 */
function transformVerbToNewFormat(verb) {
    // Check if already in new format
    if (verb.conjugations && verb.conjugations.indikativ) {
        return verb;
    }
    
    // Check if it's legacy format (tenses at root level)
    if (verb.conjugations && verb.conjugations.present && !verb.conjugations.indikativ) {
        const legacy = verb.conjugations;
        
        // Transform to new format
        verb.conjugations = {
            indikativ: {
                aktiv: {
                    present: legacy.present || null,
                    imperfect: legacy.imperfect || null,
                    perfect: legacy.perfect || null,
                    plusquamperfect: legacy.plusquamperfect || null,
                    future1: legacy.future1 || null
                },
                passiv: null  // Legacy verbs don't have passive
            },
            imperativ: null,   // Legacy verbs don't have imperativ
            konjunktiv: null    // Legacy verbs don't have konjunktiv
        };
    }
    
    return verb;
}

/**
 * Transforms all legacy verbs to new format (call once at startup)
 */
function initializeVerbs() {
    for (const verbName in verbs) {
        verbs[verbName] = transformVerbToNewFormat(verbs[verbName]);
    }
}

// Initialize on load
initializeVerbs();

/**
 * Gets conjugation data from verb
 * @param {Object} verb - The verb object
 * @param {string} moodType - Mood type (ind, imp, kon)
 * @param {string} voice - Voice (akt, pas)
 * @param {string} tense - Tense (present, imperfect, etc.)
 * @returns {Object|null} - Conjugation data or null if not found
 */
function getConjugationData(verb, moodType, voice, tense) {
    if (!verb || !verb.conjugations) {
        return null;
    }
    
    // Map mood codes to full names
    const moodMap = { 'ind': 'indikativ', 'imp': 'imperativ', 'kon': 'konjunktiv' };
    const voiceMap = { 'akt': 'aktiv', 'pas': 'passiv' };
    
    const fullMood = moodMap[moodType] || moodType;
    const fullVoice = voiceMap[voice] || voice;
    
    if (!verb.conjugations[fullMood]) {
        return null;
    }
    
    const moodData = verb.conjugations[fullMood];
    if (!moodData[fullVoice] || !moodData[fullVoice][tense]) {
        return null;
    }
    
    return moodData[fullVoice][tense];
}

/**
 * Removes macrons from Latin text for comparison
 * @param {string} text - The text to remove macrons from
 * @returns {string} - Text without macrons
 */
function removeMacrons(text) {
    return text
        .replace(/ā/g, 'a')
        .replace(/ē/g, 'e')
        .replace(/ī/g, 'i')
        .replace(/ō/g, 'o')
        .replace(/ū/g, 'u')
        .replace(/Ā/g, 'A')
        .replace(/Ē/g, 'E')
        .replace(/Ī/g, 'I')
        .replace(/Ō/g, 'O')
        .replace(/Ū/g, 'U');
}

/**
 * Gets a random verb form from the vocabulary
 * @returns {Object} - Object containing verb, tense, number, person, mood, and form
 */
function getRandomForm() {
    const verbNames = Object.keys(verbs);
    const randomVerb = verbNames[Math.floor(Math.random() * verbNames.length)];
    
    // Get enabled moods from state, or default to ind-akt
    const enabledMoods = mode1State.enabledMoods || ['ind-akt'];
    
    // Try to find a form from enabled moods
    const result = getFormFromMoods(randomVerb, enabledMoods);
    
    if (result) {
        return result;
    }
    
    // Fallback: try all moods
    return getFormFromMoods(randomVerb, moodKeys);
}

/**
 * Try to get a random form from a verb using the specified moods
 */
function getFormFromMoods(verbName, moods) {
    const verb = verbs[verbName];
    
    for (const mood of moods) {
        const [moodType, voice] = mood.split('-');
        const tenses = moodTenses[mood] || ['present'];
        
        for (const tense of tenses) {
            const tenseData = getConjugationData(verb, moodType, voice, tense);
            
            if (tenseData && typeof tenseData === 'object') {
                const numbers = Object.keys(tenseData);
                if (numbers.length === 0) continue;
                
                const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
                const persons = Object.keys(tenseData[randomNumber]);
                if (persons.length === 0) continue;
                
                const randomPerson = persons[Math.floor(Math.random() * persons.length)];
                
                // Map back to full names for display
                const moodMap = { 'ind': 'indikativ', 'imp': 'imperativ', 'kon': 'konjunktiv' };
                const voiceMap = { 'akt': 'aktiv', 'pas': 'passiv' };
                
                return {
                    verb: verbName,
                    mood: mood,
                    moodType: moodMap[moodType] || moodType,
                    voice: voiceMap[voice] || voice,
                    tense: tense,
                    number: randomNumber,
                    person: randomPerson,
                    form: tenseData[randomNumber][randomPerson]
                };
            }
        }
    }
    
    return null;
}

/**
 * Updates the score display in the DOM
 */
function updateScoreDisplay() {
    document.getElementById('score-correct').textContent = scoreState.correct;
    document.getElementById('score-incorrect').textContent = scoreState.incorrect;
}
