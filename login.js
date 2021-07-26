const puppeteer = require('puppeteer-extra');
const delay = require('delay');
const fs = require('fs');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const nameId = process.argv.slice(2);
const read =fs.readFileSync(`./count/${nameId[0]}.txt`);
const countJson= JSON.parse(read.toString());
puppeteer.launch({
    headless: false,
    ignoreDefaultArgs: ['--enable-automation'],
    args:[`--proxy-server=${countJson.npm}`,
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-blink-features=AutomationControlled'
    ]}).then(async browser => {
    const page = await browser.newPage();
    await page.goto('https://twitter.com');
    // await browser.close();
});
