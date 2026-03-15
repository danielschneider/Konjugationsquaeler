# Settings Overlay Feature - Plan

## Requirement
Create a settings overlay where users can toggle moods with checkboxes. The data should be stored locally in a cookie. By default, only "indicative active" should be active.

## Implementation Steps

### 1. Update constants.js
- Change `moodKeys` to read from cookie or use default
- Export the default configuration

### 2. Create settings overlay UI (HTML/CSS)
- Add overlay div to index.html
- Add styling in style.css
- Create checkbox list for all moods

### 3. Create JavaScript functionality
- Create `js/settings.js` or add to app.js:
  - Function to load settings from cookie
  - Function to save settings to cookie  
  - Function to open/close settings overlay
  - Function to update mood configuration based on checkboxes
  - Initialize on page load

### 4. Integration
- Add settings button to header area
- Initialize mood buttons based on saved settings
- Update mode 1 and mode 3 when settings change

## Default Configuration
```javascript
const defaultMoodSettings = {
    'ind-akt': true,    // Only this is active by default
    'ind-pass': false,
    'imp-akt': false,
    'imp-pass': false,
    'konj-akt': false,
    'konj-pass': false
};
```

## Cookie Structure
- Cookie name: `latinMasterMoodSettings`
- Value: JSON string like `{"ind-akt":true,"ind-pass":false,...}`

## UI Design
- Overlay covers entire screen with semi-transparent background
- Centered modal with:
  - Title: "Einstellungen"
  - Subtitle: "Aktiviere/deaktiviere Modi"
  - Checkbox list with mood names
  - "Speichern" and "Schließen" buttons

## Files to Modify
1. `index.html` - Add overlay HTML
2. `css/style.css` - Add overlay styling
3. `js/constants.js` - Update to support dynamic loading
4. `js/app.js` - Add settings functionality
