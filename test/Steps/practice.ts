import { Given } from "@wdio/cucumber-framework";
import ASMScreenobjs from "../Screen-Objects/ASMScreen.ts";
import homeScreenobjs from "../Screen-Objects/homeScreen.ts";
Given(`start`, async () =>{
    await (await ASMScreenobjs.SkipButton).click();
// //verticalswipe
// async function scrollVertically() {
//     // Get the screen size
//     const windowSize = await driver.getWindowSize();

//     // Define start and end coordinates for vertical scroll
//     const startX = windowSize.width / 2;
//     const startY = windowSize.height * 0.8; // 80% from the bottom of the screen
//     const endY = windowSize.height * 0.2; // 20% from the top of the screen

//     // Perform vertical scrolling
//     await driver.touchAction([
//         { action: 'press', x: startX, y: startY },
//         { action: 'wait', ms: 1000 }, // You can adjust the wait time as needed
//         { action: 'moveTo', x: startX, y: endY },
//         { action: 'release' }
//     ]);
// }

// await scrollVertically();

// const cat=await homeScreenobjs.categoryInHomepage

// for(let i=0;i<await cat.length;i++){
//     await driver.pause(3000)
//     const value= await cat[i].getElementText("resource-id")
//     if(value==="clothing")
//     {
//         await cat[i].click();
//     }
// }

})