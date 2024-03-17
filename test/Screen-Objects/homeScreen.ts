class homeScreenobjs{
    public get phoneProductTile(){
        return $("(//*[@resource-id='com.studiobluelime.ecommerceapp:id/npr_imgview'])[2]")
    }
    public get hambergerMenu(){
        return $("~App")
    }
    public get hambergerMenuVerifyText(){
        return $("//*[@text='eCommerce App']")
    }
    public get hambergerMenuMyAccountButton(){
        return $("//*[@text='My Account']")
    }
    public get hambergerMenuNewArravelButton(){
        return $("//*[@text='New Arrivals']")
    }
    public get hambergerMenuSalesButton(){
        return $("//*[@text='Sale']")
    }
    public get hambergerMenuFiltersButton(){
        return $("//*[@text='Filter']")
    }
    public get hambergerMenuCartButton(){
        return $("//*[@text='Cart']")
    }
    public get hambergerMenuNavigateButton(){
        return $("//*[@text='Notifications']")
    }
    public get hambergerMenuShareAppButton(){
        return $("//*[@text='Share App']")
    }
    public get hambergerMenuInfoButton(){
        return $("//*[@text='Info']")
    }
    public get hambergerMenuSocialButton(){
        return $("//*[@text='Social']")
    }
    public get hambergerMenuContactUsButton(){
        return $("//*[@text='Contact Us']")
    }
    public get ClothingcategoryInHomepage(){
        return $(`//*[@text='Clothing']`)
    }
    // public get subCategory(){
    //     return $(`//*[@text='Mobiles']`)
    // }
    // public get Brand(){
    //     return $("//*[@text='One Plus']")
    // }

    
    
    public get ElectroniccategoryInHomepage(){
        return $("//*[@text='Electronics']")
    }
    public get GroceriescategoryInHomepage(){
        return $("//*[@text='Groceries']")
    }
   

    
    

}
export default new homeScreenobjs()