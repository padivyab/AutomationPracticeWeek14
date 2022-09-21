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
        "padiv1234578@gmail.com",
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
  "duration": 34916553900,
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
  "name": "I Enter email \"padiv1234578@gmail.com\"",
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
  "duration": 825577900,
  "status": "passed"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 14808578600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "padiv1234578@gmail.com",
      "offset": 15
    }
  ],
  "location": "createnewaccountsteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 697402800,
  "status": "passed"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 235212600,
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
  "duration": 8367906500,
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
  "duration": 539951500,
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
  "duration": 245564100,
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
  "duration": 378234700,
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
  "duration": 255864400,
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
  "duration": 293110100,
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
  "duration": 281345300,
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
  "duration": 135044600,
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
  "duration": 253073700,
  "status": "passed"
});
formatter.match({
  "location": "createnewaccountsteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 10211688600,
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
  "duration": 16680076200,
  "status": "passed"
});
formatter.after({
  "duration": 143500,
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
  "duration": 20110115100,
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
  "name": "verify \"Your shopping cart is empty.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "shoppincartsteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 61100,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnWomanTab()"
});
formatter.result({
  "duration": 17194811100,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnProduct()"
});
formatter.result({
  "duration": 686382000,
  "status": "passed"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 20359887100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d105.0.5195.126)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ELH5PJN7\u0027, ip: \u0027192.168.0.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [6ef0994adb92ca58a774810d9dbdbe13, clickElement {id\u003d4517a01d-5c07-43d6-863d-1d7f7ace7eb8}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.126, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\DIVYAP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53664}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53664/devtoo..., se:cdpVersion: 105.0.5195.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (6ef0994adb92ca58a774810d9dbdbe13)] -\u003e xpath: //span[contains(text(),\u0027Add to cart\u0027)]]\nSession ID: 6ef0994adb92ca58a774810d9dbdbe13\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.automation.utilities.Utility.clickOnElement(Utility.java:53)\r\n\tat com.automation.pages.HomePage.ClickCart(HomePage.java:89)\r\n\tat com.automation.steps.shoppincartsteps.iClickOnAddToCart(shoppincartsteps.java:29)\r\n\tat ✽.And I click on add to cart(src/test/java/resources/featurefile/shoppingcart.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "shoppincartsteps.iProceedToCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "shoppincartsteps.iClickOnDeleteButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty.",
      "offset": 8
    }
  ],
  "location": "shoppincartsteps.verify(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 858379100,
  "status": "passed"
});
formatter.before({
  "duration": 14836708600,
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
  "duration": 30000,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iMousehoverOnWomanTab()"
});
formatter.result({
  "duration": 493544700,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iClickOnSummerDresses()"
});
formatter.result({
  "duration": 14758065800,
  "status": "passed"
});
formatter.match({
  "location": "summerdressessteps.iPriceChange()"
});
formatter.result({
  "duration": 520697900,
  "error_message": "org.openqa.selenium.interactions.MoveTargetOutOfBoundsException: move target out of bounds\n  (Session info: chrome\u003d105.0.5195.126)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-ELH5PJN7\u0027, ip: \u0027192.168.0.194\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e0f2f9f4660256875a71681600b6c500, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@64d4f7c7]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.126, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\DIVYAP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54041}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54041/devtoo..., se:cdpVersion: 105.0.5195.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e0f2f9f4660256875a71681600b6c500\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:627)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:617)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:573)\r\n\tat com.automation.pages.WomenSummerDresses.changePrice(WomenSummerDresses.java:46)\r\n\tat com.automation.steps.summerdressessteps.iPriceChange(summerdressessteps.java:26)\r\n\tat ✽.And I price change(src/test/java/resources/featurefile/shoppingcart.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "summerdressessteps.iVerifySummerDressesPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 698135800,
  "status": "passed"
});
});