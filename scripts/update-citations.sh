#!/usr/bin/env bash
# Downloads the OONI citations CSV from Google Sheets and saves it to static/.
#

set -euo pipefail

SHEET_URL="https://docs.google.com/spreadsheets/d/e/2PACX-1vR6S08XNC0cehSAf1-0H8xmHy_3L4UJ1Ck4xhYu6fpaXYVNKZ9-uNWeU53ifWoX7Abed6ly64DCvEJS/pub?gid=787044716&single=true&output=csv"
OUT="static/OONI-citations.csv"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"

cd "$REPO_ROOT"

echo "Downloading citations CSV from Google Sheets..."
curl --silent --show-error --location --fail \
  --output "$OUT.tmp" \
  "$SHEET_URL"

# Make sure the download looks like a CSV with enough rows
ROW_COUNT=$(wc -l < "$OUT.tmp")
if [ "$ROW_COUNT" -lt 10 ]; then
  echo "ERROR: Downloaded file looks too small ($ROW_COUNT lines). Aborting." >&2
  rm -f "$OUT.tmp"
  exit 1
fi

# Show a diff so you can review what changed before accepting
if [ -f "$OUT" ] && command -v diff > /dev/null 2>&1; then
  echo ""
  echo "--- Changes vs current file (${ROW_COUNT} rows downloaded) ---"
  diff --unified=2 "$OUT" "$OUT.tmp" || true
  echo "---"
else
  echo "(${ROW_COUNT} rows downloaded)"
fi

mv "$OUT.tmp" "$OUT"
echo ""
echo "Saved to $OUT ($ROW_COUNT rows)"
