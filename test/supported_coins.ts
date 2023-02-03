import CommonPage from "../pages/common_page";
import HomePage  from "../pages/home_page";
import {allure} from "allure-mocha/runtime";

/**
 * Test scenarios that confirm XDEFI supported coins
 */

describe("Check supported coins", () => {

    it("Confirm XDEFI supports Bitcoin", async () => {
        allure.logStep("Clicking on a Bitcoin button.")
        await HomePage.clickBitcoinButton();
        allure.logStep("Confirming the page title")
        await CommonPage.checkTitle("XDEFI Wallet supports Bitcoin (BTC)");
        allure.logStep("Confirming page loads with appropriate text")
        await CommonPage.checkBodyText("Download XDEFI Wallet: the best Bitcoin (BTC) wallet.");
    });

    it("Confirm XDEFI supports Ethereum", async () => {
        allure.logStep("Clicking on an Ethereum button.");
        await HomePage.clickEthereumButton();
        allure.logStep("Confirming the page title");
        await CommonPage.checkTitle("XDEFI Wallet supports Ethereum (ETH)");
        allure.logStep("Confirming page loads with appropriate text");
        await CommonPage.checkBodyText("Download XDEFI Wallet: the best Ethereum (ETH) wallet.");
    });

    it("Confirm XDEFI supports Arbitrum", async () => {
        allure.logStep("Clicking on an Arbitrum button.");
        await HomePage.clickArbitrumButton();
        allure.logStep("Confirming the page title");
        await CommonPage.checkTitle("XDEFI Wallet supports Arbitrum");
        allure.logStep("Confirming page loads with appropriate text");
        await CommonPage.checkBodyText("Download XDEFI Wallet: the best Arbitrum (AETH) wallet.");
    });

    it("Confirm XDEFI supports Avalanche", async () => {
        allure.logStep("Clicking on an Avalanche button.");
        await HomePage.clickAvalncheButton();
        allure.logStep("Confirming the page title");
        await CommonPage.checkTitle("XDEFI Wallet supports Avalanche (AVAX)");
        allure.logStep("Confirming page loads with appropriate text");
        await CommonPage.checkBodyText("Download XDEFI Wallet: the best Avalanche (AVAX) wallet.");
    });
});