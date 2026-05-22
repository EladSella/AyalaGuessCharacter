@echo off
rem ------------------------------------------------------------
rem Ayala Guess Character – Quick launch script
rem ------------------------------------------------------------
rem Change to the folder where this script resides
cd /d "%~dp0"

rem Ensure dependencies are installed
if not exist "node_modules" (
    echo Installing npm dependencies ...
    npm ci
) else (
    echo npm dependencies already installed.
)

rem Build the web assets (if needed)
if not exist "www" (
    echo Building the web assets ...
    npm run build
) else (
    echo Web assets already built.
)

rem Open the game in the default browser
start "" "index.html"

rem Optional: start a simple HTTP server for testing on mobile devices
rem npx http-server -c-1 -p 8080
