import { By, WebElement, until,} from "selenium-webdriver";
import { driver } from "../config";
import {expect} from "chai";


/**
 * Page for locators and methods that are shared between pages or are not a part of the XDEFI web app.
 */


export class CommonPage {

    /**
     LOCATORS
     */
    private addToChromeButtonLocator: By = By.className("dd-Va g-c-wb g-eg-ua-Uc-c-za g-c-Oc-td-jb-oa g-c");


    /**
     METHODS
     */

    //checks the tile of the web page against provided string
    public async checkTitle(expectedTitle: string): Promise<void> {
        const actualTitle = await driver.getTitle();
        expect(actualTitle).to.equal(expectedTitle);
    }

    //checks if the body contains text
    public async checkBodyText(expectedText: string): Promise<void> {
        const body: WebElement = await driver.findElement(By.tagName("body"));
        const actualText: string = await body.getText();
        expect(actualText).to.include(expectedText);
    }

    //checks if the XDEFI Google web store page has add to chrome button
    public async checkAddToChromeBtnIsVisible(): Promise<void> {
        const addToChromeButton: WebElement = await driver.wait(until.elementLocated(this.addToChromeButtonLocator));
        await addToChromeButton.isDisplayed()
    }
}

export default new CommonPage();