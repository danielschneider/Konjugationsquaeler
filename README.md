# Konjugationsquäler - Latin Verb Conjugation Trainer

A web application for practicing Latin verb conjugations in German.

## Project Structure

```
LatinMaster/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   ├── vocabularies.js # Latin verb database (easy to edit!)
│   ├── constants.js    # Labels and display names
│   ├── helpers.js      # Utility functions
│   ├── state.js       # Application state
│   └── app.js         # Main application logic
└── README.md           # This file
```

## How to Add New Verbs

The verb vocabulary is stored in [`js/vocabularies.js`](js/vocabularies.js). To add a new verb, follow this pattern:

```javascript
newverb: {
    infinitive: 'newverb',
    translation: 'English translation',
    conjugations: {
        present: {
            sg: { '1': 'form', '2': 'form', '3': 'form' },
            pl: { '1': 'form', '2': 'form', '3': 'form' }
        },
        imperfect: {
            sg: { '1': 'form', '2': 'form', '3': 'form' },
            pl: { '1': 'form', '2': 'form', '3': 'form' }
        },
        perfect: {
            sg: { '1': 'form', '2': 'form', '3': 'form' },
            pl: { '1': 'form', '2': 'form', '3': 'form' }
        },
        plusquamperfect: {
            sg: { '1': 'form', '2': 'form', '3': 'form' },
            pl: { '1': 'form', '2': 'form', '3': 'form' }
        },
        future1: {
            sg: { '1': 'form', '2': 'form', '3': 'form' },
            pl: { '1': 'form', '2': 'form', '3': 'form' }
        }
    }
}
```

### Example: Adding "portare" (to carry)

```javascript
portare: {
    infinitive: 'portare',
    translation: 'to carry',
    conjugations: {
        present: {
            sg: { '1': 'portō', '2': 'portās', '3': 'portat' },
            pl: { '1': 'portāmus', '2': 'portātis', '3': 'portant' }
        },
        imperfect: {
            sg: { '1': 'portābam', '2': 'portābās', '3': 'portābat' },
            pl: { '1': 'portābāmus', '2': 'portābātis', '3': 'portābant' }
        },
        perfect: {
            sg: { '1': 'portāvī', '2': 'portāvistī', '3': 'portāvit' },
            pl: { '1': 'portāvimus', '2': 'portāvistis', '3': 'portāvērunt' }
        },
        plusquamperfect: {
            sg: { '1': 'portāveram', '2': 'portāverās', '3': 'portāverat' },
            pl: { '1': 'portāverāmus', '2': 'portāverātis', '3': 'portāverant' }
        },
        future1: {
            sg: { '1': 'portābō', '2': 'portābis', '3': 'portābit' },
            pl: { '1': 'portābimus', '2': 'portābitis', '3': 'portābunt' }
        }
    }
}
```

## Available Tenses

- **present** - Präsens
- **imperfect** - Imperfekt
- **perfect** - Perfekt
- **plusquamperfect** - Plusquamperfekt
- **future1** - Futur I

## Macrons Support

The app supports Latin macrons (ā, ē, ī, ō, ū). When checking answers in "Form eingeben" mode, both versions with and without macrons are accepted.

## Features

1. **Form erraten** - Guess the correct tense, person, and number from a given verb form
2. **Form eingeben** - Type the correct verb form given the infinitive and grammatical features
3. **Tabelle** - View complete conjugation tables for all verbs

## Running the Application

Simply open `index.html` in a web browser. No build process or server required.

## Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari

## File Descriptions

| File | Description |
|------|-------------|
| [`js/vocabularies.js`](js/vocabularies.js) | Verb database - **edit this to add/remove verbs** |
| [`js/constants.js`](js/constants.js) | Label translations (German) |
| [`js/helpers.js`](js/helpers.js) | Utility functions (macron removal, random form generation) |
| [`js/state.js`](js/state.js) | Application state variables |
| [`js/app.js`](js/app.js) | Main application logic and event handlers |
| [`css/style.css`](css/style.css) | All CSS styles |
