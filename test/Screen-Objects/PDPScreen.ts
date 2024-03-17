class PDPScreenObjs{
    public get colourSelection(){
        return $("(//*[@resource-id='com.studiobluelime.ecommerceapp:id/productimgs_imgview'])[3]")
    }
    public get quantityButton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/btn_qnt_increment']")
    }
    public get cartButton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/pv_fab_addtocart']")
    }
    public get PDPVerifyTextElement(){
        return $("//*[@text='Product']")
    }
    public get CartButtonatHeader(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/action_cart']")
    }
    public get sizeSelectButton(){
        return $("(//*[@resource-id='com.studiobluelime.ecommerceapp:id/ll_product_size'])[2]")
    }
    public get PDPSanckBarText(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/snackbar_text']")
    }
    public get writeReviewButton(){
        return $("//*[@text='WRITE REVIEW']")
    }
    public get seeReviewButton(){
        return $("//*[@text='SEE REVIEWS']")
    }
    public get buyNowButton(){
        return $("//*[@text='BUY NOW']")
    }
    

   
    




}
export default new PDPScreenObjs();