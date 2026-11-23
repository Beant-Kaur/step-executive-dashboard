@echo off
title STEP & InnovaBeyond Executive Dashboard Live Server
echo ========================================================
echo   STEP & InnovaBeyond Executive Performance Dashboard
echo   Connecting to Live Server on port 8000...
echo ========================================================
echo.

netstat -ano | findstr ":8000" | findstr "LISTENING" >nul
if %ERRORLEVEL% equ 0 (
    echo [OK] Live Server is already running on port 8000.
    echo Opening dashboard in your default browser...
    start "" "http://localhost:8000/step_executive_dashboard.html"
    timeout /t 3 >nul
    exit
)

echo Starting local server on port 8000...
start "" "http://localhost:8000/step_executive_dashboard.html"
python -m http.server 8000 --directory "%~dp0"
pause
