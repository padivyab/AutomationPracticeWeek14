Feature: Create Account Page Test

  Scenario Outline: verifyThatUserShouldCreateAccountSuccessfully
    Given I am on Home Page
    When  I click on sign in link
    And   I Enter email "<email>"
    And   I click on create an account button
    And   I enter first name "<firstname>"
    And   I enter last name "<lastname>"
    And   I enter register password "<password>"
    And   I enter address "<address>"
    And   I enter city "<city>"
    And   I select state "<state>"
    And   I enter postal code "<postalcode>"
    And   I select country "<country>"
    And   I enter phone number "<phonenumber>"
    Then  I click on register button
    Then  I verify account name "diva patel"
    Examples:
      | email                 | firstname | lastname | password   | address             | city   | state   | postalcode | country       | phonenumber |
      | padiv1234578@gmail.com | diva      | patel    | Divo123456 | 213 sukhesha avenue | oshawa | Arizona | 34568      | United States | 9898046734  |




