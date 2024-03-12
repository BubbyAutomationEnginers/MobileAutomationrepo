class ASMobjs {
    public get SkipButton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/btn_skip']");
    }
    public get NextButton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/btn_next']");
    }
    
}
export default new ASMobjs();

