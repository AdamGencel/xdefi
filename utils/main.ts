import {driver} from "../config";

/**
 * THIS file contains main utilities
 */

export class MainUtils {

    //a method that switches focus from tab 0 to tab 1. This could be edited to take tab id as a variable if needed.
    public async switchTabs(): Promise<void> {
        const tabs = await driver.getAllWindowHandles();
        const currentTab = tabs[0];
        const newTab = tabs[1];
        await driver.switchTo().window(currentTab);
        await driver.close();
        await driver.switchTo().window(newTab);
    }
}

export default new MainUtils();