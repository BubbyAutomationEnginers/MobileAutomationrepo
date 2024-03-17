import { Given, Then, When } from "@wdio/cucumber-framework";
import ASMScreenobjs from "../Screen-Objects/ASMScreen.ts";
import homeScreenobjs from "../Screen-Objects/homeScreen.ts";
import LoginScreenobjs from "../Screen-Objects/LoginScreen.ts";
import MyAccountScreenobjs from "../Screen-Objects/MyAccountScreen.ts";

Given(`Open the app and Click on the Skip Button`,async () =>{
    await (await ASMScreenobjs.SkipButton).click();
})
When(`Click on the Hamberger Menu`, async () =>{
    await (await homeScreenobjs.hambergerMenu).click();
})
When(`Click on the My account Button`,async () => {
    await (await homeScreenobjs.hambergerMenuMyAccountButton).click();
})
When(`Enter the Email and Password as per precondition`, async () => {
    await (await LoginScreenobjs.EmailTextFiled).setValue("vg@yopmail.com");
    await (await LoginScreenobjs.PasswordTesxtFiled).setValue("Test@123");
    await (await LoginScreenobjs.LoginButton).click();
})
