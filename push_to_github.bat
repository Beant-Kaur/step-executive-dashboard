@echo off
title Push Executive Dashboard to GitHub
echo ========================================================
echo   STEP & InnovaBeyond Executive Performance Dashboard
echo   Pushing to GitHub: https://github.com/Beant-Kaur/step-executive-dashboard
echo ========================================================
echo.
cd /d "%~dp0"
git branch -M main
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ========================================================
    echo   [SUCCESS] Successfully pushed to GitHub!
    echo   View repository: https://github.com/Beant-Kaur/step-executive-dashboard
    echo ========================================================
) else (
    echo.
    echo If you see "Repository not found", please ensure you have created
    echo the empty repository at: https://github.com/new
    echo with the name: step-executive-dashboard
    echo.
)
pause
