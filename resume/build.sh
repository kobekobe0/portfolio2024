#!/bin/sh
# Prints resume/resume.html to public/Kobe_Brian_Santos_Resume.pdf with headless Chrome.
# Chrome logs harmless display/GPU errors when run without a window; they are hidden here.
set -e
cd "$(dirname "$0")/.."
OUT="public/Kobe_Brian_Santos_Resume.pdf"
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer --log-level=3 \
  --print-to-pdf="$OUT" \
  "file://$PWD/resume/resume.html" >/dev/null 2>&1
PAGES=$(grep -ao '/Count [0-9]*' "$OUT" | head -1 | awk '{print $2}')
echo "Wrote $OUT ($PAGES page$( [ "$PAGES" = 1 ] || echo s ))"
[ "$PAGES" = 1 ] || echo "Warning: the resume no longer fits on one page. Shorten something in resume/resume.html."
