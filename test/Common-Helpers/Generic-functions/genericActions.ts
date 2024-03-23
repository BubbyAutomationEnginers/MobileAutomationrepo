
class genericActions{
    public async ClickOperation(selector:WebdriverIO.CucumberOpts){
        await selector.click();
    }
    public async doubleClick(selector:WebdriverIO.CucumberOpts){

    }
    public async EnterValueTOTextFiled(selector:WebdriverIO.CucumberOpts,Text:string){
            await selector.setValue(Text)
    }
    public async hoverToElement(selector:WebdriverIO.CucumberOpts){

    }
    public async dropDown(selector:WebdriverIO.CucumberOpts){

    }
    public async alertHandeling(){

    }
    public async VerifyTextValue(selector:WebdriverIO.CucumberOpts,VerifyText:string){
        await expect(selector).toHaveText(VerifyText)
    }

}
export default new genericActions();