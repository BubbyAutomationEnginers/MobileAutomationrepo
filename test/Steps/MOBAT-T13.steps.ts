import { Given, Then, When } from "@wdio/cucumber-framework";
import ASM from "../pageHelpers/ASM.page.helpers.ts";

Given(`Open the APP` ,async () => {
    console.log("<<<<<<<<<<<<<<<appis open>>>>>>>>>>>>>>>>>>>>>>>>")
})
Then(`Verify the ECOMMAPP Text is visible  to Customer{string}.`, async (Text1) =>{
    await ASM.VerifyTextInEcomm(Text1);
})
When(`Click on the Next button`, async () =>{
    await ASM.ASMNextOperation();
})
Then(`Verify the {string} Text is visible to Customer`, async (Text2) =>{
    await ASM.VerifyTextInNewaravalScreen(Text2);
})
When(`Click on the next button`, async () => {
    await ASM.ASMNextOperation();
})
Then(`Verify user is able to see the Sales text on the Screen {string}`, async  (Text3) => {
    await ASM.VerifyTextInSalesScreen(Text3);
})
When(`Click on the Gotit Button`, async () => {
    await ASM.ASMGotItButton();
})