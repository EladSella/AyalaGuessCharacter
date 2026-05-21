# Handoff for Claude: Ayala Guess Character

Hello Claude! This is a handoff document to get you up to speed on the **Ayala Guess Character** game we've been building for the user's daughter, Ayala. 

## What This Project Is
A competitive web-based arcade game where the player has 120 seconds to guess as many anime characters as possible using their voice. Each stage gives them 30 seconds to guess the character based on a color palette.

## Technical Stack & Architecture
- **Vanilla HTML/CSS/JS** with a sleek, modern, glassmorphism UI.
- **Web Speech API**: Uses `webkitSpeechRecognition` set to `he-IL` (Hebrew) for voice input.
- **Fuzzy Matching**: Custom Levenshtein distance algorithm implemented in `game.js` to forgive slight mispronunciations in Hebrew (e.g., "אולמאיט" instead of "אול מייט").
- **Dynamic Audio**: Plays the specific anime opening theme (`.webm` audio) in the background based on the current character's series.
- **TTS & Timeout**: A circular SVG countdown timer. If 30 seconds pass, it plays a buzzer (`assets/buzzer.webm`) and uses `SpeechSynthesis` to announce the timeout in Hebrew.
- **Local Storage Leaderboard**: Saves the top 5 scores.

## Current State & Known Issues (IMPORTANT!)
The game is fully functional with 25 characters defined in `game.js`. **However, there is one pending task you need to assist the user with:**

1. **Missing Images for the Last 10 Characters**: 
   - I (AntiGravity) added 10 new characters to the `game.js` array (Shinobu, Giyu, Muzan, All Might, Aizawa, Leorio, Chrollo, Netero, Tadano, Najimi).
   - *However*, my AI image generation quota was exhausted, so I could not generate the `.png` files for these 10 characters.
   - **Current Fallback:** `game.js` has an `onerror` handler on the image tag that displays a blue SVG `?` if the image file is missing.
   - **Your Task:** You need to help the user acquire these 10 images (either by guiding them to download them manually, writing a scraper, or generating them if your tool supports it). The image paths defined in `game.js` are `assets/shinobu.png`, `assets/giyu.png`, etc.

## File Structure
- `index.html` - The UI and layout.
- `style.css` - Custom properties, CSS animations, and styling.
- `game.js` - The core game engine.
- `assets/` - Contains 4 background music files (`.webm`), `buzzer.webm`, and the first 15 character `.png` files.

## Guidelines for Continuing Work
- Always ensure the Speech Recognition language remains `he-IL`.
- The user is using Chrome on Android, which requires user interaction (like clicking the "Tap to Speak" mic button) to initialize audio playback and speech recognition. The code already handles this gracefully.
- If you add new characters, they must have an array of phonetic Hebrew aliases to ensure the Levenshtein matching works well.

Good luck! 🚀
