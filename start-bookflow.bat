@echo off
setlocal
title BOOKFLOW

where pnpm >nul 2>nul
if errorlevel 1 (
  echo.
  echo BOOKFLOW icin Node.js ve pnpm gerekli.
  echo Node.js kurduktan sonra terminalde: corepack enable
  echo Ardindan bu dosyaya tekrar cift tikla.
  echo.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Ilk kurulum yapiliyor...
  call pnpm install
  if errorlevel 1 pause & exit /b 1
)

echo BOOKFLOW baslatiliyor...
start "" http://127.0.0.1:5173/
call pnpm dev -- --host 127.0.0.1
