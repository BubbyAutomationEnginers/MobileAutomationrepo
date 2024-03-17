Feature: Login Functionality
    Scenario Outline: Verify the user able to login on PDP page clicking on writing the reviews button.
        Given Open the app and Click on the Skip button in the ASM page.
        When Select any category and go to any PDP page <CategoryName>.
        And Select the Quantity what you want.
        And Click on the write the Review button.
        And Click on the Login Link on the SnackBar.
        And Enter the <Email> address and <password>.
        And Click on the Login button.
        Then Verify the user is able to see My account Page.
        And Click on the Logout button.

Examples:
    | CategoryName | Email | password |
    | "Clothing"  | "Vg@yopmail.com"  |"Test@123" |