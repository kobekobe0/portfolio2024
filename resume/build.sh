#!/bin/sh
# Prints resume/resume.html to public/Kobe_Brian_Santos_Resume.pdf with headless Chrome.
set -e
cd "$(dirname "$0")/.."
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/Kobe_Brian_Santos_Resume.pdf" \
  "file://$PWD/resume/resume.html"
