$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/createnewaccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Page Test",
  "description": "",
  "id": "create-account-page-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter last name \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter register password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter city \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select state \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter postal code \"\u003cpostalcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter phone number \"\u003cphonenumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify account name \"diva patel\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;",
  "rows": [
    {
      "cells": [
        "email",
        "firstname",
        "lastname",
        "password",
        "address",
        "city",
        "state",
        "postalcode",
        "country",
        "phonenumber"
      ],
      "line": 20,
      "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;1"
    },
    {
      "cells": [
        "padiv123457890@gmail.com",
        "diva",
        "patel",
        "Divo123456",
        "213 sukhesha avenue",
        "oshawa",
        "Arizona",
        "34568",
        "United States",
        "9898046734"
      ],
      "line": 21,
      "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 23093394100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verifyThatUserShouldCreateAccountSuccessfully",
  "description": "",
  "id": "create-account-page-test;verifythatusershouldcreateaccountsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on sign in link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I Enter email \"padiv123457890@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter first name \"diva\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter last name \"patel\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter register password \"Divo123456\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter address \"213 sukhesha avenue\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter city \"oshawa\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select state \"Arizona\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter postal code \"34568\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select country \"United States\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I enter phone number \"9898046734\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I verify account name \"diva patel\"",
  "keyword": "Then "
});
formatter.match({
  "location": "createnewaccountsteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 684700200,
  "status": "passed"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 15894135600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "padiv123457890@gmail.com",
      "offset": 15
    }
  ],
  "location": "createnewaccountsteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 868437200,
  "status": "passed"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 304659800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diva",
      "offset": 20
    }
  ],
  "location": "createnewaccountsteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 7256708000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "patel",
      "offset": 19
    }
  ],
  "location": "createnewaccountsteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 444141800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Divo123456",
      "offset": 27
    }
  ],
  "location": "createnewaccountsteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 391679800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "213 sukhesha avenue",
      "offset": 17
    }
  ],
  "location": "createnewaccountsteps.iEnterAddress(String)"
});
formatter.result({
  "duration": 1278164800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oshawa",
      "offset": 14
    }
  ],
  "location": "createnewaccountsteps.iEnterCity(String)"
});
formatter.result({
  "duration": 1503086900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Arizona",
      "offset": 16
    }
  ],
  "location": "createnewaccountsteps.iSelectState(String)"
});
formatter.result({
  "duration": 595933000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34568",
      "offset": 21
    }
  ],
  "location": "createnewaccountsteps.iEnterPostalCode(String)"
});
formatter.result({
  "duration": 735312000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 18
    }
  ],
  "location": "createnewaccountsteps.iSelectCountry(String)"
});
formatter.result({
  "duration": 496258100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9898046734",
      "offset": 22
    }
  ],
  "location": "createnewaccountsteps.iEnterPhoneNumber(String)"
});
formatter.result({
  "duration": 547299200,
  "status": "passed"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 9776641100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diva patel",
      "offset": 23
    }
  ],
  "location": "createnewaccountsteps.iVerifyAccountName(String)"
});
formatter.result({
  "duration": 159227200,
  "status": "passed"
});
formatter.after({
  "duration": 205800,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefile/shoppingcart.feature");
formatter.feature({
  "line": 1,
  "name": "Shopping Cart Functionality",
  "description": "As user I want to add and delete the item",
  "id": "shopping-cart-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13281755600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "As a user if there is an item already inside my basket",
  "description": "",
  "id": "shopping-cart-functionality;as-a-user-if-there-is-an-item-already-inside-my-basket",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on delete button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see shopping cart is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "shoppincartsteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 96800,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnWomanTab()"
});
formatter.result({
  "duration": 6000172700,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnProduct()"
});
formatter.result({
  "duration": 4991748600,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 480037500,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iProceedToCheckout()"
});
formatter.result({
  "duration": 9590798900,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnDeleteButton()"
});
formatter.result({
  "duration": 277212200,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iCanSeeShoppingCartIsEmpty()"
});
formatter.result({
  "duration": 149355700,
  "error_message": "java.lang.AssertionError: expected [Your shopping cart is empty.] but found []\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat org.testng.Assert.assertEquals(Assert.java:463)\r\n\tat com.automation.steps.shoppincartsteps.iCanSeeShoppingCartIsEmpty(shoppincartsteps.java:47)\r\n\tat ✽.Then I can see shopping cart is empty(src/test/java/resources/featurefile/shoppingcart.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 537893700,
  "status": "passed"
});
formatter.before({
  "duration": 19934452700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "As a user I want to select the summer Dresses option from the navigation menu",
  "description": "",
  "id": "shopping-cart-functionality;as-a-user-i-want-to-select-the-summer-dresses-option-from-the-navigation-menu",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I mousehover on woman tab",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I click on summer dresses",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I price change",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I verify summer dresses page",
  "keyword": "Then "
});
formatter.match({
  "location": "shoppincartsteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 54000,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iMousehoverOnWomanTab()"
});
formatter.result({
  "duration": 2807228800,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iClickOnSummerDresses()"
});
formatter.result({
  "duration": 11671398300,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iPriceChange()"
});
formatter.result({
  "duration": 930320200,
  "error_message": "org.openqa.selenium.interactions.MoveTargetOutOfBoundsException: move target out of bounds\n  (Session info: chrome\u003d105.0.5195.126)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ELH5PJN7\u0027, ip: \u002710.0.0.144\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [cc9bdc1012673ab7c394d878f62b60fc, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@574a89e2]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.126, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\DIVYAP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52713}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:52713/devtoo..., se:cdpVersion: 105.0.5195.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cc9bdc1012673ab7c394d878f62b60fc\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.automation.pages.WomenSummerDresses.changePrice(WomenSummerDresses.java:46)\r\n\tat com.automation.steps.summerdressessteps.iPriceChange(summerdressessteps.java:26)\r\n\tat ✽.And I price change(src/test/java/resources/featurefile/shoppingcart.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "summerdressessteps.iVerifySummerDressesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 956098400,
  "status": "passed"
});
});