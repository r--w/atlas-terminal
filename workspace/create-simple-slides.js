const fs = require('fs');
const path = require('path');

// Ultra-minimal template that will definitely fit
const baseStyle = `html { background: #0a1628; }
body {
  width: 720pt; height: 405pt; margin: 0; padding: 30pt 40pt;
  background: #0a1628; font-family: Arial, sans-serif;
  display: flex; flex-direction: column;
}
h1 { color: #10b981; font-size: 32pt; font-weight: bold; margin: 0 0 5pt 0; }
h2 { color: #f1f5f9; font-size: 16pt; margin: 0 0 12pt 0; font-weight: normal; }
h3 { color: #10b981; font-size: 10pt; margin: 0 0 5pt 0; font-weight: bold; }
p { color: #cbd5e1; font-size: 9pt; margin: 0 0 5pt 0; line-height: 1.2; }
ul { list-style: none; padding: 0; margin: 0; }
li { color: #cbd5e1; font-size: 8pt; padding: 2pt 0 2pt 12pt; position: relative; line-height: 1.1; }
li::before { content: '▸'; position: absolute; left: 0; color: #10b981; font-size: 9pt; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15pt; margin-top: 8pt; }
.grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12pt; margin-top: 8pt; }
.grid4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10pt; margin-top: 8pt; }
.box { background: #1a2332; padding: 8pt; border-radius: 4pt; border-left: 2pt solid #fbbf24; }
.center { text-align: center; justify-content: center; align-items: center; }
.metric { background: #1a2332; padding: 10pt; border: 2pt solid #fbbf24; border-radius: 4pt; text-align: center; }
.metric-val { font-size: 24pt; color: #fbbf24; font-weight: bold; margin: 3pt 0; }
.metric-label { font-size: 7pt; color: #94a3b8; text-transform: uppercase; margin: 0; }`;

const slides = [
  {
    num: 1,
    content: `<div class="center">
<h1>ATLAS TERMINAL</h1>
<h2>The institutional terminal for on-chain wealth management</h2>
<p style="font-size: 11pt; max-width: 500pt; margin: 15pt auto 0;">Transform fragmented on-chain data into actionable investment intelligence. An AI-powered portfolio and settlement engine for the tokenized economy.</p>
</div>`
  },
  // Will add more slides programmatically
];

// Create slide 1 since it's working
const html1 = `<!DOCTYPE html>
<html>
<head><style>${baseStyle}</style></head>
<body class="center">
<h1>ATLAS TERMINAL</h1>
<h2>The institutional terminal for on-chain wealth management</h2>
<p style="font-size: 11pt; max-width: 500pt; margin: 15pt auto 0;">Transform fragmented on-chain data into actionable investment intelligence. An AI-powered portfolio and settlement engine.</p>
</body>
</html>`;

fs.writeFileSync('slides/slide01.html', html1);
console.log('Created slide 1');

// Slide 2 - The Problem
const html2 = `<!DOCTYPE html>
<html>
<head><style>${baseStyle}</style></head>
<body>
<h1>THE PROBLEM</h1>
<h2>Institutions are flying blind on-chain</h2>
<div class="grid2">
  <div>
    <h3>Key problems</h3>
    <ul>
      <li>No unified view across chains</li>
      <li>Manual allocation decisions</li>
      <li>Settlement inefficiencies</li>
      <li>Compliance blind spots</li>
    </ul>
  </div>
  <div class="box">
    <h3>Today's reality</h3>
    <p style="margin-bottom: 4pt;">A CIO managing $500M must:</p>
    <ul>
      <li>Log into 15+ dashboards</li>
      <li>Manually track yields</li>
      <li>Miss opportunities</li>
    </ul>
  </div>
</div>
</body>
</html>`;

fs.writeFileSync('slides/slide02.html', html2);
console.log('Created slide 2');

console.log('Done! Created simplified slides 1-2. Run node convert.js to test.');
