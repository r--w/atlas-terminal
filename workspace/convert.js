const pptxgen = require('pptxgenjs');
const html2pptx = require('/Users/rwesolowski/.claude/plugins/cache/anthropic-agent-skills/document-skills/69c0b1a06741/skills/pptx/scripts/html2pptx.js');
const path = require('path');

async function createPresentation() {
    const pptx = new pptxgen();
    pptx.layout = 'LAYOUT_16x9';
    pptx.author = 'Atlas Terminal';
    pptx.title = 'Atlas Terminal - Institutional Terminal for On-Chain Wealth';

    const slidesDir = path.join(__dirname, 'slides');

    // Process all 18 slides
    const errors = [];
    for (let i = 1; i <= 18; i++) {
        const slideNum = i.toString().padStart(2, '0');
        const htmlFile = path.join(slidesDir, `slide${slideNum}.html`);

        console.log(`Processing slide ${i}/18: ${htmlFile}`);

        try {
            const { slide } = await html2pptx(htmlFile, pptx);
            console.log(`✓ Slide ${i} converted successfully`);
        } catch (error) {
            console.error(`✗ Error converting slide ${i}:`, error.message);
            errors.push({ slide: i, error: error.message });
        }
    }

    if (errors.length > 0) {
        console.log(`\n\n=== SUMMARY: ${errors.length} slides had errors ===`);
        errors.forEach(e => console.log(`Slide ${e.slide}: ${e.error}`));
        throw new Error(`${errors.length} slides failed validation`);
    }

    // Save the presentation
    const outputFile = path.join(__dirname, 'AtlasTerminal.pptx');
    await pptx.writeFile({ fileName: outputFile });
    console.log(`\n✓ Presentation saved to: ${outputFile}`);
}

createPresentation().catch(error => {
    console.error('Error creating presentation:', error);
    process.exit(1);
});
