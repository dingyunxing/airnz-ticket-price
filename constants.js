module.exports = Object.freeze({
    BROWSER_ATTR: {
        headless: true,
        defaultViewport: {
            width: 1920,
            height: 1080
        },
        executablePath: process.env.E2E_EXECUTABLE_PATH,
        args: [
            '--disable-web-security',
            '--disable-features=IsolateOrigins,site-per-process',
            '--start-maximized',
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ]
    },
    WEB_ADDRESS: "https://flightbookings.airnewzealand.co.nz/vbook/actions/search",
    DEPART: "Christchurch",
    DEST: "Shanghai",
    LEAVE_DATE: "17/09",

    submitSelector: '#search-panel-container > div > div > form > div.vui-submission.vui-submission-actions > button',
    ecoPriceSelector: '#viewpoint-LONGHAUL-1 > div:nth-child(3) > fieldset > div > div > div > div > div > div.vui-si-cost.col-xs-12.col-md-4.vui-si-cost-available.vui-si-leg-option-cost-le > label > div.vui-si-cost-label-value > div:nth-child(2) > span',
});
