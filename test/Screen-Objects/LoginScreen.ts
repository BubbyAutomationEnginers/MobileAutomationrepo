class LoginScreenObjs{
    public get EmailTextFiled(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/et_login_username']")
    }
    public get PasswordTesxtFiled(){
        return $("//*[@resource-id='com.studiobluelime.ecommerceapp:id/et_login_password']")
    }
    public get LoginButton(){
        return $("//*[@text='LOGIN']")
    }
    
}
 export default new LoginScreenObjs();