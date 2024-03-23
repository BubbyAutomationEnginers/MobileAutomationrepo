 import ASMScreenobjs from "../Screen-Objects/ASMScreen.ts";
 import genericActions from "../Common-Helpers/Generic-functions/genericActions.ts"

class ASM{

        public async ASMSkipOperation() {
            await genericActions.ClickOperation(await ASMScreenobjs.SkipButton);
            //await (await ASMScreenobjs.SkipButton).click();
        }
        public async VerifyTextInASMPScreen(ElementText:string){
            await genericActions.VerifyTextValue(await ASMScreenobjs.ASMEcommVerifyText,ElementText)
        //    await expect(await ASMScreenobjs.ASMEcommVerifyText).toHaveText(ElementText);
        }
        public async VerifyTextInEcomm(Text:string){
            await genericActions.VerifyTextValue(await ASMScreenobjs.ASMEcommVerifyText,Text)
        }
        public async VerifyTextInNewaravalScreen(Text1:string){
            await genericActions.VerifyTextValue(await ASMScreenobjs.ASMNewArrivalsVerifyText,Text1)
        }
        public async ASMNextOperation() {
            await genericActions.ClickOperation(await ASMScreenobjs.NextButton);
            //await (await ASMScreenobjs.SkipButton).click();
        }
        public async VerifyTextInSalesScreen(Text3:string){
            await genericActions.VerifyTextValue(await ASMScreenobjs.ASMSaleVerifyText,Text3)
        }
        public async ASMGotItButton(){
            await genericActions.ClickOperation(await ASMScreenobjs.ASMGotItButton)
        }

        

}
export default new ASM();