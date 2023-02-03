import { Builder, WebDriver } from "selenium-webdriver";

/**
 * Main config file for setting a browser, url and hooks.
 */

export const config = {
    browser: "chrome",
    baseUrl: "https://www.xdefi.io",
    timeout: 10000,
};
export let driver: WebDriver;

//opens up a browser and maximizes the window
before(async function() {
    driver = await new Builder().forBrowser(config.browser).build();
    await driver.manage().window().maximize();
});

//before each test navigates to baseURL
beforeEach(async function () {
    await driver.get(config.baseUrl);
});

//after all tests closes the browser
after(async function() {
    await driver.quit();

});