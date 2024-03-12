
export function scrollVerticalTOElementandClick (){
      $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Note 9 Pro")').click()
}
export function ScrollForwordHorizontaly(){
   $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
}
export function ScrollBackwordHorizontaly(){
    $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
}
