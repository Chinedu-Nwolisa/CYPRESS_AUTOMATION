import { faker } from '@faker-js/faker';
import * as locators from '../pageobject/locators.js';
const firstName = faker.name.firstName()
console.log()
const lastName = faker.name.lastName()
console.log()
const email = faker.internet.email()
console.log()
const password = faker.internet.password()
console.log()



describe("Login functionalit", () => {
    beforeEach(() => {
      cy.visit(locators.URL);
      cy.get(locators.homepageSignin).click();
    });
  
  
    it("User should be able to create an account", () => {
      cy.get(locators.NewUseremail).type(email)
      cy.get(locators.RegisterBtn).click()
      cy.get(locators.SelectGender).click()
      cy.get(locators.firstNameField).type(firstName)
      cy.get(locators.lastNameField).type(lastName)
      cy.get(locators.PasswordField).type(password)
      cy.get(locators.DOBdays).select(6)
      cy.get(locators.DOBmonths).select("July")
      cy.get(locators.DOByears).select("1996")
      cy.get(locators.NewsLetter).click()
      cy.get(locators.Option).click()
      cy.get(locators.NewUserAddrerss).type("Relundinkatu 8")
      cy.get(locators.City).type("Kokkola")
      cy.get(locators.State).select("Oregon")
      cy.get(locators.Postcode).type("33311")
      cy.get(locators.PhoneNumber).type("0457683645")
      cy.get(locators.Alias).clear()
      cy.get(locators.Alias).type("Vidnasinkatu isi aki")
      cy.get(locators.SubmitBtn).click()
      cy.get(locators.Assert).should('be.visible')


        
      });

      it.only("Registered User should be able to add product to cart and proceed to check out", () => {
        cy.get(locators.Useremail).type("nwolisachinedu2015@yahoo.com")
        cy.get(locators.Userpassword).type("Godson2015")
        cy.get(locators.SigninBtn).click()
        cy.get(locators.TSHIRTS).click()
        cy.get(locators.SizeM).click()
        cy.get(locators.AddToCartBtn).click()
        cy.get(locators.ProceedToCheckOut).click()
        cy.get(locators.ProceedToCheckOutConfirm).click()
        cy.get(locators.ProceedToCheckOutConfirm).click()
        cy.get(locators.TermsOfService).click()
        cy.get(locators.ProceedToCheckOutConfirm).click()
        cy.get(locators.BankWirePayment).click()
        cy.get(locators.ConfirmMyOrder).click()
        cy.get(locators.OrderConfirmation).should('be.visible')


      });

    })