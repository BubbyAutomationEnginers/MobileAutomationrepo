import { Given, Then, When } from "@wdio/cucumber-framework";
import ASMobjs from "../Screen-Objects/ASMScreen.ts"
import homeScreenobjs from "../Screen-Objects/homeScreen.ts";
import PDPScreenobjs from "../Screen-Objects/PDPScreen.ts";
import CheckoutScreenobjs from "../Screen-Objects/CheckoutscreenObjects.ts";
import LoginScreenobjs from "../Screen-Objects/LoginScreen.ts";
import MyAccountScreenObjs from "../Screen-Objects/MyAccountScreen.ts";
import { scrollVerticalTOElementandClick } from "../Common-Helpers/Gestures/ScrollGesture.ts";


Given(`Open the app and click on the skip button in ASM page.`,async () => {
    await (await ASMobjs.SkipButton).click();
})
When(`Click on the any category and goto PDP page.`,async () => {
    scrollVerticalTOElementandClick();
    driver.pause(2000)
   await (await homeScreenobjs.phoneProductTile).click();
})

Then(`Verify the PDP page is open are not.`,async () =>{
await expect(PDPScreenobjs.PDPVerifyTextElement).toHaveText("Product")
})
When(`Select the required quantity and increases the how many products you want.`, async () =>{
    await (await PDPScreenobjs.colourSelection).click();
    await (await PDPScreenobjs.sizeSelectButton).click();
    for(let i=1;i<=3;i++){
        await (await PDPScreenobjs.quantityButton).click();
    }
    
})
When(`Click on the Cart button in PDP page.`,async () =>{
    await (await PDPScreenobjs.cartButton).click();
})
Then(`Verify snack bar is open are not.`, async () =>{
    await expect(PDPScreenobjs.PDPSanckBarText).toBeDisplayed()
})
When(`Click on the cart icon at top right corner.`,async () => {
    await (await PDPScreenobjs.CartButtonatHeader).click();
})
Then(`Verify the checkout page is open are not.`,async() =>{
    expect(CheckoutScreenobjs.checkoutText).toHaveText("eCommerce App")
})
When(`Click on the checkout button.`,async () =>{
    await (await CheckoutScreenobjs.chekOutBUtton).click();
})
When(`Click on the login link in Sanckbar.`,async () =>{
    await (await CheckoutScreenobjs.LoginButtonSanckBar).click();
})
When(`Enter the email and password you created.`,async () =>{
    await (await LoginScreenobjs.EmailTextFiled).setValue("Vg@yopmail.com");
    await (await LoginScreenobjs.PasswordTesxtFiled).setValue("Test@123");
})
When(`Click on the Login button.`,async () => {
    await (await LoginScreenobjs.LoginButton).click();
})
When(`Click on the LogOut button.`, async () => {
    await (await MyAccountScreenObjs.logOutButton).click();
})



