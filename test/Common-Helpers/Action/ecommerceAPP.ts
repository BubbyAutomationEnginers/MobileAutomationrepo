import ASMScreenobjs from "../../Screen-Objects/ASMScreen.ts";
import homeScreenobjs from "../../Screen-Objects/homeScreen.ts";

class clcikoperations{
    public async ASMClickOperation() {
        await (await ASMScreenobjs.SkipButton).click();
    }
    // public async categorySelection(){
    //     homeScreenobjs.category.cl
    //     // for(let i=0;i<cat.length;i++){
    //     //     const value= await cat[i].getAttribute("text")
    //     //     if(value==="Electronics"){
                    
    //     //     }
    //     // }
    // }
}
export default new clcikoperations();