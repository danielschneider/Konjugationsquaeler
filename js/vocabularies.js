/**
 * Latin Verb Conjugation Database
 * 
 * =============================================================================
 * VERB ORGANIZATION:
 * =============================================================================
 * Verbs are organized into separate files by conjugation type:
 * - js/data/a-verben.js   : A-Konjugation (1st conjugation)
 * - js/data/e-verben.js   : E-Konjugation (2nd conjugation)  
 * - js/data/i-verben.js   : I-Konjugation (4th conjugation)
 * - js/data/irregular.js   : Irregular and 3rd conjugation verbs
 * 
 * FORMAT:
 * =============================================================================
 * Each verb must follow this structure:
 * 
 * {
 *     infinitive: 'amare',
 *     translation: 'to love',
 *     type: 'a',  // a, e, i, 3, or irregular
 *     conjugations: {
 *         indikativ: {
 *             aktiv: { present: {...}, imperfect: {...}, ... },
 *             passiv: {...} or null
 *         },
 *         imperativ: {
 *             aktiv: { present: {...} },
 *             passiv: {...} or null
 *         },
 *         konjunktiv: {
 *             aktiv: { present: {...}, imperfect: {...}, ... },
 *             passiv: {...} or null
 *         }
 *     }
 * }
 * 
 * Use null for forms that don't exist (e.g., 'esse' has no passive).
 * =============================================================================
 */

// Import verb data from organized files
// Note: These variables must be defined before this file loads
// In the browser, we assign them directly

const verbs = {};

// Combine all verb data
Object.assign(verbs, typeof window.aVerbs !== 'undefined' ? window.aVerbs : {});
Object.assign(verbs, typeof window.eVerbs !== 'undefined' ? window.eVerbs : {});
Object.assign(verbs, typeof window.iVerbs !== 'undefined' ? window.iVerbs : {});
Object.assign(verbs, typeof window.irregularVerbs !== 'undefined' ? window.irregularVerbs : {});
