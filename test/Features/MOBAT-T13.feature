Feature: ASM functionality
    @MOBAT-T13
    Scenario Outline: Verify the user able to see the ASM pages text is visible on page are not.
        Given Open the APP
        Then Verify the ECOMMAPP Text is visible  to Customer<Text1>.
        And Click on the Next button
        Then Verify the <Text2> Text is visible to Customer
        And Click on the next button
        Then Verify user is able to see the Sales text on the Screen <Text3>
        And Click on the Gotit Button

        Examples:
            | Text2           | Text1 | Text3 |
            | "New Arrivals" | "E Commerce App"  | "Sale" |