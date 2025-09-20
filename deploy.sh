#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   ./deploy.sh        -> normal deploy (must be on main branch)
#   ./deploy.sh --dry  -> dry-run deploy (preview only)

# --- Load config ---
if [ -f .env ]; then
  echo "📂 Loading config from .env file"
  # Use set -a to automatically export all variables
  set -a
  source .env
  set +a
else
  echo "⚠️  No .env file found, using defaults"
fi

# Defaults (safe to commit, override with .env)
TARGET_USER="${TARGET_USER:-user}"
TARGET_HOST="${TARGET_HOST:-example.com}"
TARGET_PATH="${TARGET_PATH:-/var/www/jeana.dev/}"

# Debug: Show what variables are being used
echo "🔧 Using TARGET_USER: $TARGET_USER"
echo "🔧 Using TARGET_HOST: $TARGET_HOST"
echo "🔧 Using TARGET_PATH: $TARGET_PATH"

# --- Branch safety ---
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [[ "$CURRENT_BRANCH" != "main" ]]; then
echo "❌ Refusing to deploy: you are on branch '$CURRENT_BRANCH' (must be on 'main')."
exit 1
fi

# --- Dry run option ---
RSYNC_FLAGS="-avz --delete -e ssh"
if [[ "${1:-}" == "--dry" ]]; then
  echo "🔎 Dry run mode enabled"
  RSYNC_FLAGS="$RSYNC_FLAGS --dry-run"
fi

# --- Build ---
echo "🚀 Building site for production (branch: $CURRENT_BRANCH)..."
npm run clean
npm run build

# --- Deploy ---
echo "📂 Deploying to ${TARGET_USER}@${TARGET_HOST}:${TARGET_PATH}"

rsync $RSYNC_FLAGS _site/ ${TARGET_USER}@${TARGET_HOST}:${TARGET_PATH}

echo "✅ Deploy complete!"
echo "🌐 Site URL: https://${TARGET_HOST}/"
echo "🔗 View the live site to confirm everything looks correct."
