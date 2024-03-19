import { Given, Then, When } from "@wdio/cucumber-framework"
import ASM from "../pageHelpers/ASM.page.helpers.ts"
import HomeScreen from "../pageHelpers/HomeScreen.page.helpers.ts"
import LoginScreenobjs from "../Screen-Objects/LoginScreen.ts";




Given(`Open the app and Click on the Skip button in the ASM page.`, async () =>{
    await ASM.ASMSkipOperation();
})
When(`Select any category and go to any PDP page {string}.`, async (CategoryName) =>{
    await HomeScreen.SelectGroceryCategory()
})
When(`Select the Quantity what you want.`, async () => {
   await HomeScreen.selectProductQuantity();
})
When(`Click on the write the Review button.`, async() => {
await HomeScreen.clcikoperationOnWriteReViewButton();
})
When(`Click on the Login Link on the SnackBar.`, async () => {
    await HomeScreen.clickOperationonLoginButtonInSanckBar();
})
When(`Enter the {string} address and {string}.`, async (Email:string ,password: string) =>{
    await HomeScreen.LoginfromthePDPPage(Email,password);
    await  driver.pause(3000);
})
When(`Click on the Login button.`,async () => {

    await HomeScreen.loginOpreration();
})
Then(`Verify the user is able to see My account Page.`,async () => {
    await HomeScreen.VerifyTheMyAccountScreen("My Account")
})
When(`Click on the Logout button.`,async () =>{
    await HomeScreen.logoutOpreration();
}) 
