describe("Login functionality", () => {
  beforeEach(() => {
    cy.visit("http://automationpractice.com");
    cy.get(".login").click();
  });

  it("verify that user should be able to login with valid credentials", () => {
    cy.get("#email").type("nwolisachinedu2015@yahoo.com");
    cy.get("#passwd").type("Godson2015");
    cy.get("#SubmitLogin > span").click();
    cy.get(".account > span").should("contain", "Chinedu Nwolisa");
  });

  it("verify that incorrect username should return correct error message", () => {
    cy.get("#email").type("nwolisachinedu@yahoo.com");
    cy.get("#passwd").type("Godson2015");
    cy.get("#SubmitLogin > span").click();
    cy.get("ol > li").should("contain", "Authentication failed.");
  });

  it("verify that a user can add new address", () => {
    cy.get("#email").type("nwolisachinedu2015@yahoo.com");
    cy.get("#passwd").type("Godson2015");
    cy.get("#SubmitLogin > span").click();
    cy.get('.myaccount-link-list > :nth-child(3) > a > span').click()
    cy.get('.main-page-indent > .btn > span').click()
    cy.get('#address1').type("Prikkala")
    cy.get('#city').type("mussouri")
    cy.get('#id_state').select('Idaho')
    cy.get('#postcode').type("00000")
    cy.get('#phone_mobile').type('0453735223')
    cy.get('#alias').type("Tumppi 1")
    cy.get('#submitAddress').click()
  });

  it.only("verify that a user can delete address", () => {
    cy.get("#email").type("nwolisachinedu2015@yahoo.com");
    cy.get("#passwd").type("Godson2015");
    cy.get("#SubmitLogin > span").click();
    cy.get('.myaccount-link-list > :nth-child(3) > a > span').click()
    cy.xpath("//*[@id='center_column']/div[1]/div/div[2]/ul/li[9]/a[2]/span").click()
  });

});
