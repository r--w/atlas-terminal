#!/bin/bash

# Common base styles for all slides that fit within 720x405pt with proper margins
# Padding: 35pt all around leaves plenty of room
# Bottom margin requirement: 0.5" = 36pt from bottom

COMMON_STYLE='html { background: #0a1628; }
body {
  width: 720pt; height: 405pt; margin: 0; padding: 30pt 35pt;
  background: #0a1628; font-family: Arial, sans-serif; display: flex;
  flex-direction: column;
}
h1 { color: #10b981; font-size: 34pt; font-weight: bold; margin: 0 0 5pt 0; letter-spacing: -1pt; }
h2 { color: #f1f5f9; font-size: 17pt; margin: 0 0 12pt 0; font-weight: normal; }
h3 { color: #10b981; font-size: 11pt; margin: 0 0 6pt 0; font-weight: bold; }
p { color: #cbd5e1; font-size: 10pt; margin: 0 0 6pt 0; line-height: 1.2; }
ul { list-style: none; padding: 0; margin: 0 0 6pt 0; }
li { color: #cbd5e1; font-size: 9pt; padding: 3pt 0 3pt 14pt; position: relative; line-height: 1.15; }
li::before { content: "▸"; position: absolute; left: 0; color: #10b981; font-size: 10pt; }'

echo "Base styles created"
echo "$COMMON_STYLE"
