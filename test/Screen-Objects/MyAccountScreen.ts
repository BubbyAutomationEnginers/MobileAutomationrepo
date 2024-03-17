class MyAccountScreenObjs{
    public get logOutButton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/btn_logout']")
    }
    public get myAccountScreenVerifyText(){
        return $("//android.widget.TextView[@text='My Account']")
    }
}
export default new MyAccountScreenObjs();