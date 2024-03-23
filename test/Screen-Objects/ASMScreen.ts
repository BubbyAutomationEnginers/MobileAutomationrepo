class ASMobjs {
    public get SkipButton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/btn_skip']");
    }
    public get NextButton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/btn_next']");
    }
    public get  ASMEcommVerifyText(){
        return $("//*[@text='E Commerce App']")
    }
    public get  ASMNewArrivalsVerifyText(){
        return $(`//*[@text='New Arrivals']`)
    }
    public get  ASMSaleVerifyText(){
        return $(`//*[@text='Sale']`)
    }
    public get ASMGotItButton(){
        return $(`//*[@resource-id='com.studiobluelime.ecommerceapp:id/btn_next']`);
    }


    
}
export default new ASMobjs();

