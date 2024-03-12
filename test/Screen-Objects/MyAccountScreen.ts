class MyAccountScreenObjs{
    public get logOutButton(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/btn_logout']")
    }
}
export default new MyAccountScreenObjs();