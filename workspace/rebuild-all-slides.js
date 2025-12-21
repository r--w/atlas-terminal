const fs = require('fs');

const createSlide = (title, subtitle, content) => `<!DOCTYPE html>
<html>
<head><style>
html { background: #0a1628; }
body {
  width: 720pt; height: 405pt; margin: 0; padding: 0;
  background: #0a1628; font-family: Arial, sans-serif; display: flex;
}
.slide { margin: 35pt 45pt; flex: 1; display: flex; flex-direction: column; }
h1 { color: #10b981; font-size: 32pt; font-weight: bold; margin: 0 0 5pt 0; }
h2 { color: #f1f5f9; font-size: 15pt; margin: 0 0 15pt 0; font-weight: normal; }
h3 { color: #10b981; font-size: 11pt; margin: 0 0 6pt 0; font-weight: bold; }
p { color: #cbd5e1; font-size: 9pt; margin: 0 0 6pt 0; line-height: 1.2; }
ul { list-style: none; padding: 0; margin: 0; }
li { color: #cbd5e1; font-size: 8pt; padding: 2pt 0 2pt 12pt; position: relative; line-height: 1.1; }
li::before { content: '▸'; position: absolute; left: 0; color: #10b981; font-size: 9pt; }
.grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 15pt; }
.grid3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12pt; }
.grid4 { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 10pt; }
.box { background: #1a2332; padding: 10pt; border-radius: 4pt; border-left: 2pt solid #fbbf24; }
.center { text-align: center; justify-content: center; align-items: center; }
.metric { background: #1a2332; padding: 8pt; border: 2pt solid #fbbf24; border-radius: 4pt; text-align: center; }
.val { font-size: 22pt; color: #fbbf24; font-weight: bold; margin: 2pt 0; }
.label { font-size: 7pt; color: #94a3b8; text-transform: uppercase; margin: 0; }
table { width: 100%; border-collapse: collapse; font-size: 8pt; }
th { color: #10b981; font-weight: bold; padding: 6pt; text-align: left; border-bottom: 1pt solid #10b981; }
td { color: #cbd5e1; padding: 6pt; border-bottom: 1pt solid rgba(16,185,129,0.2); }
.hi { color: #10b981; font-weight: bold; }
</style></head>
<body><div class="slide ${title === 'ATLAS TERMINAL' ? 'center' : ''}">${content}</div></body>
</html>`;

const slides = {
  '01': createSlide('ATLAS TERMINAL', '', `
<h1>ATLAS TERMINAL</h1>
<h2>The institutional terminal for on-chain wealth management</h2>
<p style="font-size: 10pt;">Transform fragmented on-chain data into actionable investment intelligence. An AI-powered portfolio and settlement engine.</p>`),

  '02': createSlide('THE PROBLEM', '', `
<h1>THE PROBLEM</h1>
<h2>Institutions are flying blind on-chain</h2>
<div class="grid2">
  <div>
    <h3>Key problems</h3>
    <ul><li>No unified view across chains</li><li>Manual allocation decisions</li><li>Settlement inefficiencies</li><li>Compliance blind spots</li></ul>
  </div>
  <div class="box">
    <h3>Today's reality</h3>
    <p>A CIO managing $500M must:</p>
    <ul><li>Log into 15+ dashboards</li><li>Manually track yields</li><li>Miss opportunities</li></ul>
  </div>
</div>`),

  '03': createSlide('USE CASE', '', `
<h1>USE CASE</h1>
<h2>How institutions use Atlas</h2>
<div class="grid4" style="margin-top: 10pt;">
  <div class="box"><p class="val" style="font-size: 28pt;">1</p><h3>Morning review</h3><p>One dashboard across all chains</p></div>
  <div class="box"><p class="val" style="font-size: 28pt;">2</p><h3>Insight</h3><p>AI recommends reallocating capital</p></div>
  <div class="box"><p class="val" style="font-size: 28pt;">3</p><h3>Risk check</h3><p>Constraints validated in real time</p></div>
  <div class="box"><p class="val" style="font-size: 28pt;">4</p><h3>Execution</h3><p>T+0 settlement with audit trail</p></div>
</div>
<p style="text-align: center; margin-top: 15pt; font-size: 10pt; color: #10b981; font-weight: bold;">Result: faster decisions, higher capital utilization, lower operational risk</p>`),

  '04': createSlide('MARKET', '', `
<h1>MARKET</h1>
<h2>Institutional wealth is moving on-chain</h2>
<div class="grid2">
  <div class="box"><h3>What is changing</h3><ul><li>Tokenized treasuries and funds are live</li><li>Banks entering production</li><li>Regulatory clarity improving</li></ul></div>
  <div class="box"><h3>Market signals</h3><ul><li>BlackRock BUIDL multi-billion AUM</li><li>JPMorgan tokenized products</li><li>RWA moving on-chain fast</li></ul></div>
</div>
<div class="grid3" style="margin-top: 10pt;">
  <div class="metric"><p class="label">Global AUM</p><p class="val">~$220T</p></div>
  <div class="metric"><p class="label">Tokenized by 2030</p><p class="val">~$16T</p></div>
  <div class="metric"><p class="label">Revenue opportunity</p><p class="val">$10B+</p></div>
</div>`),

  '05': createSlide('TIMING', '', `
<h1>TIMING</h1>
<h2>A short window of opportunity</h2>
<div class="grid2">
  <div class="box"><h3>Infrastructure ready</h3><ul><li>Ethereum L2s and Solana at scale</li><li>Tokenized treasuries live</li></ul></div>
  <div class="box"><h3>Institutions allocating</h3><ul><li>Family offices, banks active</li><li>Capital moving before tooling</li></ul></div>
  <div class="box"><h3>Legacy vendors slow</h3><ul><li>Bloomberg lacks native on-chain intelligence</li><li>18-24 month gap</li></ul></div>
  <div class="box"><h3>Value up the stack</h3><ul><li>Raw data commoditized</li><li>Decision intelligence premium</li></ul></div>
</div>`),

  '06': createSlide('SOLUTION', '', `
<h1>SOLUTION</h1>
<h2>The operating system for on-chain wealth</h2>
<div class="box" style="max-width: 550pt; margin: 15pt auto; padding: 20pt;">
  <h3 style="text-align: center; font-size: 16pt; margin-bottom: 10pt;">ATLAS TERMINAL</h3>
  <p style="text-align: center; margin-bottom: 12pt;">A Bloomberg-inspired platform combining real-time on-chain data with AI-driven portfolio intelligence.</p>
  <div class="grid2" style="gap: 10pt;">
    <p style="font-size: 8pt;">✓ Decision and allocation engine</p>
    <p style="font-size: 8pt;">✓ Portfolio command center</p>
    <p style="font-size: 8pt;">✓ Compliance intelligence layer</p>
    <p style="font-size: 8pt;">✓ Institutional-grade interface</p>
  </div>
</div>`),

  '07': createSlide('ARCHITECTURE', '', `
<h1>ARCHITECTURE</h1>
<h2>Platform architecture</h2>
<div style="display: flex; flex-direction: column-reverse; gap: 6pt; max-width: 500pt; margin: 0 auto;">
  <div class="box"><h3>Data foundation</h3><p>Coinpaprika real-time multi-chain data</p></div>
  <div class="box"><h3>Asset intelligence</h3><p>Ratings and asset insights</p></div>
  <div class="box"><h3>Pricing layer</h3><p>Cross-chain aggregation</p></div>
  <div class="box" style="border-color: #fbbf24; background: rgba(251,191,36,0.1);"><h3 style="color: #fbbf24;">AI engine</h3><p>Allocation recommendations</p></div>
  <div class="box"><h3>Institutional UX</h3><p>Terminal-style interface</p></div>
  <div class="box"><h3>Integrations</h3><p>Custody, trading, reporting</p></div>
</div>`),

  '08': createSlide('AI ENGINE', '', `
<h1>AI ENGINE</h1>
<h2>From data to decisions</h2>
<div class="grid2">
  <div><h3>What the AI does</h3><ul><li>Buy, hold, reduce signals</li><li>Settlement efficiency monitoring</li><li>Portfolio optimization</li><li>Continuous market adaptation</li></ul></div>
  <div class="box"><h3>Value delivered</h3><ul><li>Fewer manual decisions</li><li>Faster reactions</li><li>Reduced operational risk</li></ul><p style="margin-top: 8pt; color: #fbbf24; font-weight: bold;">Early pilots improve capital efficiency</p></div>
</div>`),

  '09': createSlide('SETTLEMENT', '', `
<h1>SETTLEMENT</h1>
<h2>Making settlement a competitive advantage</h2>
<div class="grid2">
  <div><h3>Capabilities</h3><ul><li>Track settlement times</li><li>Compare T+0 vs delayed</li><li>Estimate opportunity cost</li><li>Predict gas fees</li><li>Optimize routing</li></ul></div>
  <div class="box"><h3>Impact</h3><ul><li>Faster reinvestment</li><li>Lower settlement risk</li><li>Better liquidity management</li></ul></div>
</div>`),

  '10': createSlide('COMPLIANCE', '', `
<h1>COMPLIANCE</h1>
<h2>Compliance built into the workflow</h2>
<div class="grid2">
  <div><h3>What Atlas monitors</h3><ul><li>Portfolio risk in real time</li><li>Regulatory constraints</li><li>Counterparty exposure</li><li>Audit-ready reporting</li></ul></div>
  <div class="box"><h3>Benefits</h3><ul><li>Fewer compliance surprises</li><li>Reduced audit prep time</li><li>Real-time visibility</li></ul></div>
</div>`),

  '11': createSlide('DASHBOARD', '', `
<h1>DASHBOARD</h1>
<h2>One source of truth</h2>
<div class="grid2">
  <div><h3>Features</h3><ul><li>Aggregate positions</li><li>Real-time performance</li><li>Cross-protocol analytics</li><li>Custom alerts</li></ul></div>
  <div class="box"><h3>Outcome</h3><ul><li>Eliminate dashboard sprawl</li><li>Faster informed decisions</li></ul></div>
</div>`),

  '12': createSlide('COMPETITIVE', '', `
<h1>COMPETITIVE</h1>
<h2>Why Atlas wins</h2>
<table style="margin-top: 10pt;">
  <tr><th>Capability</th><th>Atlas</th><th>Bloomberg</th><th>Custody</th><th>In-house</th></tr>
  <tr><td>Multi-chain</td><td class="hi">Yes</td><td>No</td><td>Partial</td><td>Custom</td></tr>
  <tr><td>AI insights</td><td class="hi">Yes</td><td>No</td><td>No</td><td>Limited</td></tr>
  <tr><td>Settlement</td><td class="hi">Yes</td><td>No</td><td>Partial</td><td>No</td></tr>
  <tr><td>Compliance</td><td class="hi">Yes</td><td>Partial</td><td>Partial</td><td>Costly</td></tr>
  <tr><td>Deploy time</td><td class="hi">Fast</td><td>Slow</td><td>Medium</td><td>Very slow</td></tr>
</table>`),

  '13': createSlide('MOAT', '', `
<h1>MOAT</h1>
<h2>Building a durable moat</h2>
<div class="grid2">
  <div class="box"><h3>1. Proprietary data</h3><p>Decade of crypto market data infrastructure</p></div>
  <div class="box"><h3>2. AI for institutions</h3><p>Designed for real portfolios</p></div>
  <div class="box"><h3>3. Institutional trust</h3><p>Compliance-first architecture</p></div>
  <div class="box"><h3>4. Deep integrations</h3><p>High switching costs</p></div>
</div>`),

  '14': createSlide('GO-TO-MARKET', '', `
<h1>GO-TO-MARKET</h1>
<h2>Focused and high-touch</h2>
<div class="grid3">
  <div class="box"><h3>Phase 1: Pilot</h3><p><b>Target:</b> 3-5 institutions</p><p><b>Focus:</b> Product validation</p></div>
  <div class="box"><h3>Phase 2: Launch</h3><p><b>Target:</b> Mid-market</p><p><b>Revenue:</b> $1-2M ARR</p></div>
  <div class="box"><h3>Phase 3: Scale</h3><p><b>Target:</b> Enterprise</p><p><b>Revenue:</b> $20M+ ARR</p></div>
</div>
<div class="box" style="margin-top: 10pt;"><h3>Sales motion</h3><ul><li>Direct sales to CIOs and CFOs</li><li>Custody partnerships</li><li>Industry events</li></ul></div>`),

  '15': createSlide('PRICING', '', `
<h1>PRICING</h1>
<h2>Enterprise SaaS pricing</h2>
<table style="margin-top: 15pt;">
  <tr><th>Tier</th><th>Target customer</th><th>Monthly price</th></tr>
  <tr><td><b>Starter</b></td><td>Smaller institutions</td><td style="color: #fbbf24; font-weight: bold;">~$2,500</td></tr>
  <tr><td><b>Professional</b></td><td>Mid-market</td><td style="color: #fbbf24; font-weight: bold;">~$10,000</td></tr>
  <tr><td><b>Enterprise</b></td><td>Large institutions</td><td style="color: #fbbf24; font-weight: bold;">$25,000+</td></tr>
</table>
<p style="text-align: center; margin-top: 15pt;">Pricing scales with AUM, integrations, and support level.</p>`),

  '16': createSlide('TEAM', '', `
<h1>TEAM</h1>
<h2>Built by people who know the space</h2>
<div class="grid2" style="margin-top: 20pt;">
  <div class="box"><h3>Founding team</h3><p>10+ years building crypto market data infrastructure. Deep DeFi, data engineering, and product execution experience.</p></div>
  <div class="box"><h3>Advisors</h3><p>Institutional finance and compliance experts. Strategic partners in custody and infrastructure.</p></div>
</div>`),

  '17': createSlide('RISKS', '', `
<h1>RISKS</h1>
<h2>Addressing the real challenges</h2>
<div class="grid3">
  <div class="box"><h3>Regulation</h3><ul><li>Flexible compliance framework</li><li>Continuous monitoring</li></ul></div>
  <div class="box"><h3>Data quality</h3><ul><li>Redundant sources and SLAs</li><li>Real-time health monitoring</li></ul></div>
  <div class="box"><h3>Competition</h3><ul><li>Speed of execution</li><li>Integration depth</li><li>Early relationships</li></ul></div>
</div>`),

  '18': createSlide('ATLAS TERMINAL', '', `
<h1 style="font-size: 42pt;">ATLAS TERMINAL</h1>
<div class="box" style="max-width: 550pt; margin: 20pt auto; padding: 20pt; border: 3pt solid #fbbf24;">
  <h3 style="text-align: center; font-size: 18pt; margin-bottom: 10pt;">Raising $5M seed round</h3>
  <p style="text-align: center; margin-bottom: 15pt;"><b>Use of funds:</b> Product development • GTM execution • Compliance • Runway</p>
</div>
<div style="text-align: center;">
  <p><b style="color: #10b981;">Interested in investing?</b> investors@atlasterminal.io</p>
  <p><b style="color: #10b981;">Interested in piloting?</b> pilots@atlasterminal.io</p>
  <p><b style="color: #10b981;">Want to integrate?</b> partnerships@atlasterminal.io</p>
</div>
<p style="text-align: center; margin-top: 20pt; color: #fbbf24;">Atlas terminal becomes the default system institutions use to deploy capital on-chain.</p>`)
};

Object.entries(slides).forEach(([num, html]) => {
  fs.writeFileSync(`slides/slide${num}.html`, html);
  console.log(`Created slide ${num}`);
});

console.log('All 18 slides created!');
