
export function scrollVerticalTOElementandClick (textToScroll:string){
      $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView(${textToScroll})`).click()
}
export function ScrollForwordHorizontaly(){
   $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
}
export function ScrollBackwordHorizontaly(){
    $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
}
export function Scrolltocategory(){
    $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Electronics")').click()
}

// Note 9 Pro