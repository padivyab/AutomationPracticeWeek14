package com.automation.pages;

import com.automation.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import javax.annotation.CheckForNull;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Blouse')]")
    WebElement ClickProductBlouse;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='product_list grid row']/li[1]/div[1]/div[1]/div[1]/a[1]")
    WebElement clickItem;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement womantab;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='product_list grid row']/li[1]/div[1]/div[2]/h5[1]/a[1]")
    WebElement productFadded;

    public void ClickProductFadded()
    {
        clickOnElement(productFadded);
    }
    @CacheLookup
    @FindBy(xpath = "//div[@class='box-cart-bottom']/div[1]/p[1]/button[1]/span[1]")
    WebElement addbutton;

    public void ClickAddButton()
    {
        clickOnElement(addbutton);
    }

    /* @FindBy(xpath = "//button[@name='Submit']")   //p[@id='add_to_cart']
    @CacheLookup
    @FindBy(xpath = "//p[@id='add_to_cart']")   //div[@class='box-cart-bottom']/div[1]/p[1]/button[1]  //div[@class='box-cart-bottom']/div[1]/p[1]/button[1]
    WebElement clickAddtoCart;*/

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Add to cart')]")
    WebElement AddCart;
    @CacheLookup
    @FindBy(xpath = "//div[@class='shopping_cart']/a[1]")  ////p[@id='add_to_cart']
    WebElement clickshoppingCart;

    @CacheLookup
    @FindBy(xpath = "//a[@class='login']")
    WebElement signin;

    @CacheLookup
    @FindBy(xpath = "//a[@class='btn btn-default button button-medium']")
    WebElement proceed;

    @CacheLookup
    @FindBy(xpath = "//a[@class='cart_quantity_delete']")
    WebElement delete;

    @CacheLookup
    @FindBy(xpath = "//div[@id='center_column']/p[1]") ////div[@id='center_column']/p[1] //p[@class='alert alert-warning']
    WebElement verifyMsg;

    public void ClickWomanTab()
    {
        clickOnElement(womantab);

    }
    /*public void ClickOnItem()
    {
        //mouseHoverToElementAndClick(ClickProductBlouse);
        clickOnElement(ClickProductBlouse);
    }*/
    public void ClickOnItemP()
    {
        clickOnElement(clickItem);
    }
    /*public void ClickOnAddToCart()
    {
        clickOnElement(clickAddtoCart);
    }*/
    //public void ClickToShoppingCart()
    /*{
        clickOnElement(clickshoppingCart);
    }*/
    public void SignInClick()
    {
        clickOnElement(signin);

    }
    public void ClickCart()
    {
        clickOnElement(AddCart);
    }
    public void ClickOnProceed()
    {
        clickOnElement(proceed);
    }
    public void ClickOnDelete()
    {
        clickOnElement(delete);
    }
    public String VerifyToMsg()
    {
        return getTextFromElement(verifyMsg);
    }

}
