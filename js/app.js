// Main application logic

// ==================== MODE 1: GUESS THE FORM ====================

function switchMode(mode) {
    document.querySelector('.mode-1').classList.remove('active');
    document.querySelector('.mode-2').classList.remove('active');
    document.querySelector('.mode-3').classList.remove('active');
    document.querySelectorAll('.mode-btn').forEach(btn => btn.classList.remove('active'));
    
    // Reset error flags when switching modes
    mode1LastError = false;
    mode2LastError = false;
    
    if (mode === 1) {
        document.querySelector('.mode-1').classList.add('active');
        document.querySelectorAll('.mode-btn')[0].classList.add('active');
        nextMode1();
    } else if (mode === 2) {
        document.querySelector('.mode-2').classList.add('active');
        document.querySelectorAll('.mode-btn')[1].classList.add('active');
        nextMode2();
    } else if (mode === 3) {
        document.querySelector('.mode-3').classList.add('active');
        document.querySelectorAll('.mode-btn')[2].classList.add('active');
        initMode3();
    }
}

function toggleSelection(type, value) {
    // Don't toggle mood - it's always Indikativ Aktiv
    if (type === 'mood') {
        return;
    }
    
    // Toggle the selection: if already selected, deselect; otherwise select
    mode1State.selected[type] = mode1State.selected[type] === value ? null : value;
    
    // Update button classes based on current state
    document.querySelectorAll(`.toggle-btn`).forEach(btn => {
        const parentGroup = btn.closest('.toggle-group');
        const labelElement = parentGroup?.querySelector('.toggle-label');
        const labelText = labelElement?.textContent || '';
        
        // Determine which group this button belongs to
        let buttonType = null;
        if (labelText === 'Zeit') buttonType = 'tense';
        else if (labelText === 'Person') buttonType = 'person';
        else if (labelText === 'Numerus') buttonType = 'number';
        else if (labelText === 'Modus') buttonType = 'mood';
        
        // If this button is in the same group as the one being toggled
        if (buttonType === type) {
            // Deselect all buttons in this group first
            btn.classList.remove('selected');
            
            // Check if this button matches the current selection
            let matches = false;
            
            if (type === 'tense') {
                // Compare using the tenseLongNames mapping
                matches = tenseLongNames[value] === btn.textContent && mode1State.selected.tense === value;
            } else if (type === 'person') {
                // Compare person number (e.g., "1" from "1. Pers.")
                matches = btn.textContent.match(/\d/)?.[0] === value && mode1State.selected.person === value;
            } else if (type === 'number') {
                // Direct text comparison for singular/plural
                matches = ((value === 'sg' && btn.textContent === 'Singular') || (value === 'pl' && btn.textContent === 'Plural')) && mode1State.selected.number === value;
            } else if (type === 'mood') {
                // Mood is always selected
                matches = btn.textContent === 'Indikativ Aktiv';
            }
            
            if (matches) {
                btn.classList.add('selected');
            }
        } else if (buttonType === 'mood') {
            // Always keep mood button selected
            btn.classList.add('selected');
        }
    });
}

function nextMode1() {
    mode1State.form = getRandomForm();
    mode1State.selected = { tense: null, person: null, number: null, mood: 'ind-act' };
    document.getElementById('mode1-question').textContent = mode1State.form.form;
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('selected'));
    // Keep the mood button selected
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        if (btn.textContent === 'Indikativ Aktiv') {
            btn.classList.add('selected');
        }
    });
    document.getElementById('mode1-feedback').classList.add('hidden');
    checkInProgress = false;
    document.querySelector('.mode-1 .ok-btn').disabled = false;
    document.getElementById('mode1-btn').textContent = 'Prüfen';
}

function checkMode1() {
    // Prevent button hammering
    if (checkInProgress) return;
    checkInProgress = true;
    document.querySelector('.mode-1 .ok-btn').disabled = true;
    
    // Cancel any pending timeout
    if (pendingTimeout) clearTimeout(pendingTimeout);
    
    // If last check was an error, clicking OK again moves to next question
    if (mode1LastError) {
        mode1LastError = false;
        nextMode1();
        return;
    }
    
    const isCorrect = 
        mode1State.selected.tense === mode1State.form.tense &&
        mode1State.selected.person === mode1State.form.person &&
        mode1State.selected.number === mode1State.form.number;

    const feedback = document.getElementById('mode1-feedback');
    if (isCorrect) {
        scoreState.correct++;
        feedback.textContent = '✓ Richtig!';
        feedback.className = 'feedback correct';
        mode1LastError = false;
        updateScoreDisplay();
        feedback.classList.remove('hidden');
        
        // Auto-advance on correct answer
        pendingTimeout = setTimeout(() => {
            nextMode1();
            pendingTimeout = null;
        }, 1500);
    } else {
        scoreState.incorrect++;
        const correct = `${tenseLongNames[mode1State.form.tense]}, ${personNames[mode1State.form.person]}, ${numberNames[mode1State.form.number]}`;
        feedback.textContent = `✗ Falsch! Korrekt: ${correct}`;
        feedback.className = 'feedback incorrect';
        mode1LastError = true;
        updateScoreDisplay();
        feedback.classList.remove('hidden');
        checkInProgress = false;
        document.querySelector('.mode-1 .ok-btn').disabled = false;
        document.getElementById('mode1-btn').textContent = 'Weiter';
    }
}

// ==================== MODE 2: TYPE THE FORM ====================

function nextMode2() {
    mode2State.form = getRandomForm();
    mode2State.currentQuestion = mode2State.form;
    document.getElementById('mode2-verb').textContent = mode2State.form.verb;
    document.getElementById('mode2-tense').textContent = tenseLongNames[mode2State.form.tense];
    document.getElementById('mode2-person').textContent = personNames[mode2State.form.person];
    document.getElementById('mode2-number').textContent = numberNames[mode2State.form.number];
    document.getElementById('mode2-input').value = '';
    document.getElementById('mode2-feedback').textContent = '';
    document.getElementById('mode2-feedback').classList.add('hidden');
    document.getElementById('mode2-hint').textContent = '';
    document.getElementById('mode2-hint').classList.add('hidden');
    document.getElementById('mode2-input').focus();
    checkInProgress = false;
    document.querySelector('.mode-2 .ok-btn').disabled = false;
    document.getElementById('mode2-btn').textContent = 'Prüfen';
}

function checkMode2() {
    // Prevent button hammering
    if (checkInProgress) return;
    checkInProgress = true;
    document.querySelector('.mode-2 .ok-btn').disabled = true;
    
    // Cancel any pending timeout
    if (pendingTimeout) clearTimeout(pendingTimeout);
    
    // If last check was an error, clicking Check again moves to next question
    if (mode2LastError) {
        mode2LastError = false;
        nextMode2();
        return;
    }
    
    const userInput = document.getElementById('mode2-input').value.trim().toLowerCase();
    const correctForm = mode2State.form.form.toLowerCase();
    // Normalize both inputs by removing macrons for comparison
    const userInputNormalized = removeMacrons(userInput).toLowerCase();
    const correctFormNormalized = removeMacrons(correctForm).toLowerCase();
    
    const feedback = document.getElementById('mode2-feedback');
    const hint = document.getElementById('mode2-hint');
    const input = document.getElementById('mode2-input');
    
    // Accept answer with or without macrons
    if (userInputNormalized === correctFormNormalized) {
        scoreState.correct++;
        feedback.textContent = '✓ Richtig! Sehr gut!';
        feedback.className = 'feedback correct';
        hint.textContent = '';
        hint.classList.add('hidden');
        mode2LastError = false;
        updateScoreDisplay();
        feedback.classList.remove('hidden');
        
        // Auto-advance on correct answer
        pendingTimeout = setTimeout(() => {
            nextMode2();
            pendingTimeout = null;
        }, 1500);
    } else {
        scoreState.incorrect++;
        feedback.textContent = `✗ Falsch. Die richtige Form ist: ${mode2State.form.form}`;
        feedback.className = 'feedback incorrect';
        hint.textContent = `Tipp: Das Infinitiv ist ${mode2State.form.verb}. Die Form, die du suchst, ist: ${mode2State.form.form} (Makron optional)`;
        hint.classList.remove('hidden');
        mode2LastError = true;
        updateScoreDisplay();
        feedback.classList.remove('hidden');
        checkInProgress = false;
        document.querySelector('.mode-2 .ok-btn').disabled = false;
        document.getElementById('mode2-btn').textContent = 'Weiter';
        
        // Clear input and focus for retry on wrong answer
        input.value = '';
        input.focus();
    }
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        checkMode2();
    }
}

// ==================== MODE 3: CONJUGATION TABLE ====================

function initMode3() {
    // Create verb selector buttons
    const selector = document.getElementById('verb-selector');
    selector.innerHTML = '';
    
    const verbNames = Object.keys(verbs).sort();
    verbNames.forEach(verb => {
        const btn = document.createElement('button');
        btn.className = 'verb-btn' + (verb === mode3CurrentVerb ? ' selected' : '');
        btn.textContent = verb;
        btn.onclick = () => showConjugationTable(verb);
        selector.appendChild(btn);
    });
    
    showConjugationTable(mode3CurrentVerb);
}

function showConjugationTable(verbName) {
    mode3CurrentVerb = verbName;
    
    // Update selected button
    document.querySelectorAll('.verb-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.textContent === verbName) {
            btn.classList.add('selected');
        }
    });
    
    const verb = verbs[verbName];
    const tenses = Object.keys(verb.conjugations);
    let html = '<div style="margin-bottom: 30px; padding: 15px; background-color: #0f3460; border-radius: 8px;"><span style="font-size: 0.9rem; color: #888; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">Modus:</span> <span style="color: #6366f1; font-weight: 600; margin-left: 10px;">Indikativ Aktiv</span></div>';
    
    // Create table for each tense
    tenses.forEach(tense => {
        html += `
        <div style="margin-bottom: 30px;">
            <h3 style="color: #6366f1; margin-bottom: 12px; font-size: 1.2rem;">${tenseLongNames[tense]} <span style="font-size: 0.9rem; color: #aaa;">(Indikativ Aktiv)</span></h3>
            <table class="conjugation-table">
                <thead>
                    <tr>
                        <th style="width: 25%;">Person</th>
                        <th style="width: 25%;">Singular</th>
                        <th style="width: 25%;">Plural</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${personNames['1']}</td>
                        <td><strong>${verb.conjugations[tense].sg['1']}</strong></td>
                        <td><strong>${verb.conjugations[tense].pl['1']}</strong></td>
                    </tr>
                    <tr>
                        <td>${personNames['2']}</td>
                        <td><strong>${verb.conjugations[tense].sg['2']}</strong></td>
                        <td><strong>${verb.conjugations[tense].pl['2']}</strong></td>
                    </tr>
                    <tr>
                        <td>${personNames['3']}</td>
                        <td><strong>${verb.conjugations[tense].sg['3']}</strong></td>
                        <td><strong>${verb.conjugations[tense].pl['3']}</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        `;
    });
    
    document.getElementById('table-container').innerHTML = html;
}

// ==================== INITIALIZATION ====================

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    nextMode1();
});
