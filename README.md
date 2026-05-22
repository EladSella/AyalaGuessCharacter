# Ayala Guess Character – Turning the Game into a Mobile App

## Overview
The game **Ayala Guess Character** is a browser‑based guessing game built with plain HTML, CSS and JavaScript.  With **Capacitor** it can be packaged as a native Android (APK) and iOS app.

## Prerequisites
| Tool | Version |
|------|---------|
| **Node.js** | `v24.x` (or later) |
| **npm** | bundled with Node |
| **Android Studio** | Panda 4 (or any recent stable version) |
| **Java JDK** | Embedded JDK that ships with Android Studio (set in *File → Settings → Build, Execution, Deployment → Build Tools → Gradle → Gradle JDK*) |
| **Capacitor** | `npm i @capacitor/core @capacitor/cli` |
| **Git** | any recent version |

> **Tip:** The repository already contains a GitHub Actions workflow (`.github/workflows/build‑apk.yml`) that will build the APK automatically after each push.

## 1. Clone the Repository
```bash
git clone https://github.com/EladSella/AyalaGuessCharacter.git
cd AyalaGuessCharacter
```
Make sure you **pull the latest changes** (the workflow and the updated assets) before proceeding:
```bash
git pull origin main
```

## 2. Install Dependencies
```bash
npm ci
```
This will install everything listed in `package.json` (including Capacitor).

## 3. Build the Web Assets
Capacitor uses the **web** folder (`www/`) as its source.  Build the assets with:
```bash
npm run build   # or npm run build:web if you have a custom script
```
After this step you should see the compiled files inside `www/` (HTML, CSS, JS, assets).

## 4. Add the Android Platform (first time only)
```bash
npx cap add android
```
Capacitor will create an `android/` folder with a full Android project.

## 5. Sync the Web Assets to the Native Project
```bash
npx cap sync android
```
This copies the `www/` directory into the Android project (`android/app/src/main/assets/public`).

## 6. Open the Project in Android Studio
```bash
npx cap open android
```
Android Studio will launch.  **Important configuration:**
1. Go to **File → Settings → Build, Execution, Deployment → Build Tools → Gradle**.
2. Set **Gradle JDK** to **Embedded JDK** (the one bundled with Android Studio).  This fixes the `jlink executable does not exist` error you saw earlier.
3. Ensure the **Android SDK** and **Build Tools** are installed (API 34 is fine).

## 7. Build the APK Manually (optional)
In Android Studio:
- Choose **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
- After the build finishes, click **Locate** to find the `app-release.apk` under `android/app/build/outputs/apk/release/`.

## 8. Using the GitHub Actions Workflow (automatic)
The repository now contains a workflow that builds the APK on every push:
```
.github/workflows/build-apk.yml
```
It does the following:
1. Checks out the repo.
2. Installs Node 24 (you can change the version if needed).
3. Installs npm dependencies.
4. Runs `npm run build` to create the web assets.
5. Adds the Android platform (if missing) and runs `npx cap sync android`.
6. Executes `./gradlew assembleRelease` inside the `android/` folder.
7. Uploads the resulting `app-release.apk` as an artifact called **ayala‑game‑apk**.

### How to Trigger the workflow
```bash
# After any change (or just to test) push a new commit
git add .
git commit -m "Trigger APK build"
git push origin main
```
Then go to the **Actions** tab of the repository:
<https://github.com/EladSella/AyalaGuessCharacter/actions>
Select the latest **Build Android APK** run, wait ~5 minutes, and download the APK artifact.

## 9. Updating the App (future changes)
Whenever you modify the game (new characters, UI tweaks, bug fixes):
1. Commit & push the changes.
2. The CI workflow will automatically rebuild the APK.
3. Download the new APK from the Actions page.

If you prefer a local build, just repeat steps **3‑7**.

## 10. iOS (optional)
Capacitor also supports iOS.  The steps are the same, but you need Xcode installed on macOS:
```bash
npx cap add ios
npx cap sync ios
npx cap open ios
```
Then use Xcode to archive and export the .ipa.

---
### TL;DR Quick Script
Create a small helper script (`build_android.sh`) in the repo root:
```bash
#!/usr/bin/env bash
set -e

# Install deps
npm ci

# Build web
npm run build

# Add / sync Android
npx cap add android || true
npx cap sync android

# Build APK
cd android
./gradlew assembleRelease
cd ..

echo "✅ APK built: android/app/build/outputs/apk/release/app-release.apk"
```
Make it executable (`chmod +x build_android.sh`) and run it whenever you want a fresh local APK.

---
**That’s it!** The game is now a fully packaged mobile app ready for distribution or testing on devices.

*AntiGravity*
