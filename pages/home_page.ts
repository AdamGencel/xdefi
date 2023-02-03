import { By, WebElement, until,} from "selenium-webdriver";
import { driver } from "../config";

/**
 * Page for Locators and Methods on the Home Page of XDEFI.io
 */

class HomePage {

    /**
     *LOCATORS
     */
    private bitcoinButtonLocator: By = By.xpath("//div[@class='blockchain-carousel__canvas']//div[1]//a[1]//img[1]");
    private ethereumButtonLocator: By = By.xpath("//*[@id=\"section-1\"]/div/div[2]/div/div/div[2]/a/img");
    private arbitrumButtonLocator: By = By.xpath("//*[@id=\"section-1\"]/div/div[2]/div/div/div[3]/a/img");
    private avalncheButtonLocator: By = By.xpath("//*[@id=\"section-1\"]/div/div[2]/div/div/div[5]/a/img");
    private installWalletButtonLocator: By = By.xpath("//*[@id=\"section-0\"]/div/div/div[1]/div/a");

    /**
     * METHODS
     */
    public async clickBitcoinButton(): Promise<void> {
            const bitcoinButton: WebElement = await driver.findElement(this.bitcoinButtonLocator);
            await bitcoinButton.click();
    }

    public async clickEthereumButton(): Promise<void> {
        const ethereumButton: WebElement = await driver.findElement(this.ethereumButtonLocator);
        await ethereumButton.click();
    }

    public async clickArbitrumButton(): Promise<void> {
        const arbitrumButton: WebElement = await driver.findElement(this.arbitrumButtonLocator);
        await arbitrumButton.click();
    }

    public async clickAvalncheButton(): Promise<void> {
        const avalncheButton: WebElement = await driver.findElement(this.avalncheButtonLocator);
        await avalncheButton.click();
    }

    public async clickInstallWalletButton(): Promise<void> {
        const installWalletButton: WebElement = await driver.findElement(this.installWalletButtonLocator);
        await installWalletButton.click();
    }

}

export default new HomePage();