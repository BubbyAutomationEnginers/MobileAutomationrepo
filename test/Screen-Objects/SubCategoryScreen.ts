class subCategoryobjs{
    // public get mobilecategory(){
    //     return $("//*[@text='Mobiles']")
    // }
    // public get barndcategory(){
    //     return $('').click()
    // }
    // public get plpProduct(){
    //     return $("//*[@text='Note 9 Pro']")
    // }
    public get Beverages(){
        return $("//*[@text='Beverages']")
    }
    public get FruitsNVegetables(){
        return $("//*[@text='Fruits N Vegetables']")
    }
    public get BakeryItems(){
        return $("//*[@text='Bakery Items']")
    }
    public get Vegetables(){
        return $("//*[@text='Vegetables']")
    }
    public get Fruits(){
        return $("//*[@text='Fruits']")
    }
    public get Seasonal(){
        return $("//*[@text='Seasonal']")
    }





}
export default new subCategoryobjs();