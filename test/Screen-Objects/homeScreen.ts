class homeScreenobjs{
    public get phoneProductTile(){
        return $("(//*[@resource-id='com.studiobluelime.ecommerceapp:id/npr_imgview'])[2]")
    }
    public get hambergerMenu(){
        return $("~App")
    }
    public get hambergerMenuMyAccountButton(){
        return $("//*[@text='My Account']")
    }
    
    

}
export default new homeScreenobjs()