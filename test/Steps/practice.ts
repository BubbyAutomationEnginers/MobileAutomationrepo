import { Given } from "@wdio/cucumber-framework";
import ASMScreenobjs from "../Screen-Objects/ASMScreen.ts";
import { ScrollBackwordHorizontaly,scrollVerticalTOElementandClick,ScrollForwordHorizontaly } from "../Common-Helpers/Gestures/ScrollGesture.ts";
Given(`start`,async() =>{
    await (await ASMScreenobjs.SkipButton).click();
    driver.pause(3000)
    await driver.startActivity("com.studiobluelime.ecommerceapp","com.studiobluelime.ecommerceapp.SubcategoriesActivity");
   
})