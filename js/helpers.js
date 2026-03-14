// Helper functions

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
 * @returns {Object} - Object containing verb, tense, number, person, and form
 */
function getRandomForm() {
    const verbNames = Object.keys(verbs);
    const randomVerb = verbNames[Math.floor(Math.random() * verbNames.length)];
    const tenses = Object.keys(verbs[randomVerb].conjugations);
    const randomTense = tenses[Math.floor(Math.random() * tenses.length)];
    const numbers = Object.keys(verbs[randomVerb].conjugations[randomTense]);
    const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
    const persons = Object.keys(verbs[randomVerb].conjugations[randomTense][randomNumber]);
    const randomPerson = persons[Math.floor(Math.random() * persons.length)];
    
    const conjugation = verbs[randomVerb].conjugations[randomTense][randomNumber][randomPerson];
    
    return {
        verb: randomVerb,
        tense: randomTense,
        number: randomNumber,
        person: randomPerson,
        form: conjugation
    };
}

/**
 * Updates the score display in the DOM
 */
function updateScoreDisplay() {
    document.getElementById('score-correct').textContent = scoreState.correct;
    document.getElementById('score-incorrect').textContent = scoreState.incorrect;
}
