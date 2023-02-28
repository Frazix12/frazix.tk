@ECHO OFF

SET comment=Saved on %date%-%time%

IF "%~1"=="" GOTO COMMIT
SET username=%1
SET comment=%comment% by %username%

:COMMIT
ECHO %comment%
git checkout development
git add .
git commit -m "%comment%"
git push origin