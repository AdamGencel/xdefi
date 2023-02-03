import CommonPage from "../pages/common_page";
import  HomePage  from "../pages/home_page";
import MainUtils from "../utils/main"
import {allure} from "allure-mocha/runtime";

/**
 * Test that checks is the XDEFI wallet is available for download in the Google Web Store.
 */

describe("Check extension installation", () => {

    it("Confirm XDEFI extension can be installed", async () => {
        allure.logStep("Clicking on install wallet button")
        await HomePage.clickInstallWalletButton();
        allure.logStep("Switching focus on Tabs and closing previous tab")
        await MainUtils.switchTabs()
        allure.logStep("Checking if the Add to Chrome button is displayed")
        await CommonPage.checkAddToChromeBtnIsVisible()
        allure.logStep("Confirming page title")
        await CommonPage.checkTitle("XDEFI Wallet - Chrome Web Store");
    });

});