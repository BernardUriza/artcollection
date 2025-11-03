#!/bin/bash
# Setup auto-launch for Art Collection PWA on macOS

set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PLIST_DIR="$HOME/Library/LaunchAgents"
PLIST_FILE="$PLIST_DIR/com.artcollection.launcher.plist"
LAUNCHER_SCRIPT="$PROJECT_DIR/scripts/launch-app.sh"

echo "Setting up auto-launch for Art Collection..."

# Create LaunchAgents directory if it doesn't exist
mkdir -p "$PLIST_DIR"

# Create the launcher script
cat > "$LAUNCHER_SCRIPT" << 'SCRIPT_EOF'
#!/bin/bash
# Launch Art Collection PWA

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

# Check if pnpm is available, if not use npm
if command -v pnpm &> /dev/null; then
  pnpm dev > /tmp/artcollection.log 2>&1 &
else
  npm run dev > /tmp/artcollection.log 2>&1 &
fi

# Log PID for monitoring
echo $! > /tmp/artcollection.pid

# Open browser if available
sleep 3
if command -v open &> /dev/null; then
  open "http://localhost:8888"
fi
SCRIPT_EOF

chmod +x "$LAUNCHER_SCRIPT"

# Create the LaunchAgent plist file
cat > "$PLIST_FILE" << 'PLIST_EOF'
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>com.artcollection.launcher</string>

  <key>ProgramArguments</key>
  <array>
    <string>/bin/bash</string>
    <string>LAUNCHER_SCRIPT_PATH</string>
  </array>

  <key>RunAtLoad</key>
  <true/>

  <key>KeepAlive</key>
  <dict>
    <key>SuccessfulExit</key>
    <false/>
  </dict>

  <key>StandardOutPath</key>
  <string>/tmp/artcollection.out.log</string>

  <key>StandardErrorPath</key>
  <string>/tmp/artcollection.err.log</string>

  <key>WorkingDirectory</key>
  <string>PROJECT_DIR_PATH</string>
</dict>
</plist>
PLIST_EOF

# Replace placeholders
sed -i '' "s|LAUNCHER_SCRIPT_PATH|$LAUNCHER_SCRIPT|g" "$PLIST_FILE"
sed -i '' "s|PROJECT_DIR_PATH|$PROJECT_DIR|g" "$PLIST_FILE"

echo "✓ Launcher script created at: $LAUNCHER_SCRIPT"
echo "✓ LaunchAgent plist created at: $PLIST_FILE"

# Load the LaunchAgent
launchctl load "$PLIST_FILE" 2>/dev/null || echo "Note: You may need to run 'launchctl load $PLIST_FILE' manually"

echo ""
echo "Auto-launch setup complete!"
echo ""
echo "The app will now:"
echo "  1. Launch automatically on system startup"
echo "  2. Run 'pnpm dev' in the background"
echo "  3. Open http://localhost:8888 in your browser"
echo ""
echo "To disable auto-launch, run:"
echo "  launchctl unload $PLIST_FILE"
echo ""
echo "To view logs:"
echo "  tail -f /tmp/artcollection.log"
echo ""
