import CheckoutscreenObjs from "../Screen-Objects/CheckoutscreenObjects.ts";
import LoginScreenobjs from "../Screen-Objects/LoginScreen.ts";
import MyAccountScreenobjs from "../Screen-Objects/MyAccountScreen.ts";
import PDPScreenobjs from "../Screen-Objects/PDPScreen.ts";
import PLPScreenobjs from "../Screen-Objects/PLPScreen.ts";
import SubCategoryScreenobjs from "../Screen-Objects/SubCategoryScreen.ts";
import homeScreenobjs from "../Screen-Objects/homeScreen.ts";
import genericActions from "../Common-Helpers/Generic-functions/genericActions.ts"

//  for(let p=0;p< product;p++){
        //     const productName=await PLPScreenobjs.VegetablesProducts[p].getText();
        //     console.log("received category name >>>>>> ", productName);
        //     if(productName==="Potato")
        //     {
        //         await PLPScreenobjs.VegetablesProducts[p].click();
        //     }
        //  }
         
         



        // console.log("agni .................",cat);
        // for (let c = 0; c < cat; c ++) {
        //     const categoryName = await homeScreenobjs.categoryInHomepage[c].getText();
        //     console.log("received category name >>>>>> ", categoryName);
        //     await driver.pause(5000);
        //     if (categoryName == category) {
        //         await homeScreenobjs.categoryInHomepage[c].click();
        //         await driver.pause(5000);
        //     }
        // }
class HomeScreen{
    public async SelectGroceryCategory(){
        await genericActions.ClickOperation(await homeScreenobjs.GroceriescategoryInHomepage)
        await genericActions.ClickOperation(await SubCategoryScreenobjs.FruitsNVegetables)
        await genericActions.ClickOperation(await SubCategoryScreenobjs.Vegetables)
        await genericActions.ClickOperation(await PLPScreenobjs.VegetablesProducts)

        // await (await homeScreenobjs.GroceriescategoryInHomepage).click();
        // await (await SubCategoryScreenobjs.FruitsNVegetables).click();
        // await (await SubCategoryScreenobjs.Vegetables).click();
        // await (await PLPScreenobjs.VegetablesProducts).click();
        

    }
    public async selectProductQuantity(){
        // await (await PDPScreenobjs.colourSelection).click();
        await genericActions.ClickOperation(await PDPScreenobjs.sizeSelectButton)
        // await (await PDPScreenobjs.sizeSelectButton).click();
        for(let i=0;i<=3;i++){
            await genericActions.ClickOperation(await PDPScreenobjs.quantityButton)
                // await (await PDPScreenobjs.quantityButton).click();
        }

        
    }
    public async clcikoperationOnWriteReViewButton(){
        await genericActions.ClickOperation(await PDPScreenobjs.writeReviewButton)
        // await (await PDPScreenobjs.writeReviewButton).click();
    }
    public async clickOperationonLoginButtonInSanckBar(){
        await genericActions.ClickOperation(await CheckoutscreenObjs.LoginButtonSanckBar)
    //    await (await CheckoutscreenObjs.LoginButtonSanckBar).click();
    }
    public async LoginfromthePDPPage(Email:string, password:string ){
        await genericActions.EnterValueTOTextFiled(await LoginScreenobjs.EmailTextFiled,Email)
        await genericActions.EnterValueTOTextFiled(await LoginScreenobjs.PasswordTesxtFiled,password)
        // await (await LoginScreenobjs.EmailTextFiled).setValue(Email);
        // await (await LoginScreenobjs.PasswordTesxtFiled).setValue(password)
    }
    public async loginOpreration(){
        await genericActions.ClickOperation(await LoginScreenobjs.LoginButton)
    //    await (await LoginScreenobjs.LoginButton).click();
    }
    public async VerifyTheMyAccountScreen(Text:string){
        await genericActions.VerifyTextValue(await MyAccountScreenobjs.myAccountScreenVerifyText,Text)
    //    await expect(await MyAccountScreenobjs.myAccountScreenVerifyText).toHaveText(Text)
    }
    public async logoutOpreration(){
        await genericActions.ClickOperation(await MyAccountScreenobjs.logOutButton);
        // await (await MyAccountScreenobjs.logOutButton).click();
    }
    public async ClickOnBuyNowButtonOpreation(){
        await genericActions.ClickOperation( PDPScreenobjs.buyNowButton);
        // await  (await PDPScreenobjs.buyNowButton).click();
    }
    


}
export default new HomeScreen();