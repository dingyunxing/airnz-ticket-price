const constants = require('./constants');

async function searchPage(page) {
    await page.goto(constants.WEB_ADDRESS);

    // wait page load and select oneway journey
    await page.waitForSelector('#depart-from');
    await page.waitForSelector('#field-search-journey-type-oneway');
    await page.waitForNetworkIdle();
    await page.click('#field-search-journey-type-oneway');

    //fill the required fields
    await page.focus('#depart-from')
    await page.keyboard.type(constants.DEPART)

    await page.focus('#depart-to')
    await page.keyboard.type(constants.DEST)

    await page.focus('#leaveDate')
    await page.keyboard.type(constants.LEAVE_DATE)

    // submit
    await page.waitForNetworkIdle();
    await page.click(constants.submitSelector);
};

async function getPrice(page) {
    await page.waitForSelector(constants.ecoPriceSelector)
    let ecoPriceElement = await page.$(constants.ecoPriceSelector)
    let ecoPrice = await page.evaluate(el => el.textContent, ecoPriceElement)
    console.log(ecoPrice)
};

module.exports = { searchPage, getPrice };
