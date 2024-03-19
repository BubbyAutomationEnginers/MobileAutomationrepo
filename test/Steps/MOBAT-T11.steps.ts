import { Given, When } from "@wdio/cucumber-framework";
import ASM from "../pageHelpers/ASM.page.helpers.ts";
import HomeScreen from "../pageHelpers/HomeScreen.page.helpers.ts";


Given(`Open the app and the click on the Skip button in ASM page`, async () => {
       await  ASM.ASMSkipOperation();
})
When(`Select any category and go the any PDP page`, async () => {
    await HomeScreen.SelectGroceryCategory();
})
When(`Select the required quantity and increases the how many products you want by + button`, async () => {
    await HomeScreen.selectProductQuantity();
})
When(`Click on the Buy now button in PDP page.`, async () => {
    await HomeScreen.ClickOnBuyNowButtonOpreation();
})
When(`Click on the Login link in the Snack bar.`, async () => {
   await HomeScreen.clickOperationonLoginButtonInSanckBar();
})
When(`Enter the email address and password into the Text fields`, async () => {
    await HomeScreen.LoginfromthePDPPage("vg@yopmail.com","Test@123");
})
When(`Click on the login button`, async () => {
    await HomeScreen.loginOpreration();
})
When(`Click on the Logout button`, async () => {
await HomeScreen.logoutOpreration();
})


