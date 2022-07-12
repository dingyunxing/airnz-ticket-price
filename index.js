const puppeteer = require('puppeteer');
const constants = require('./constants');
const ticket = require('./ticket');

(async () => {
    const browser = await puppeteer.launch(constants.BROWSER_ATTR);
    const page = await browser.newPage();
    await ticket.searchPage(page);

    await page.waitForTimeout(1000);

    await ticket.getPrice(page);

    await page.screenshot({ path: 'screenshot.png' });

    // TODO: send to message channels such as email

    await browser.close();
})();