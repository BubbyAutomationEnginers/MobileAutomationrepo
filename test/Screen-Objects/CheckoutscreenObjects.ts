class CheckoutScreenobjs{
    public get checkoutText(){
        return $("//*[@text='eCommerce App']")
    }
    public get qauntityValueatCheckOutpage(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/shopingcart_productquantity']")
    }
    public get chekOutBUtton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/sc_btn_checkout']")
    }
    public get LoginButtonSanckBar(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/snackbar_action']")
    }
   

}
export default new CheckoutScreenobjs();