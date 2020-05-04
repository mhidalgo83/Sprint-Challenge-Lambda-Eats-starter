///<reference types="Cypress"/>

describe("Testing form inputs", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/");
  });
  it("tests form functionality", function () {
    cy.get('[data-cy="name"]').type("Matt").should("have.value", "Matt");
    cy.get('[data-cy="size"]')
      .select("Extra Large")
      .should("have.value", "Extra Large");
    cy.get('[data-cy="garlic"]')
      .check("Garlic Ranch")
      .should("have.value", "Garlic Ranch");
    cy.get('[data-cy="sausage"]')
      .check("Sausage")
      .should("have.value", "Sausage");
    cy.get('[data-cy="pepperoni"]')
      .check("Pepperoni")
      .should("have.value", "Pepperoni");
    cy.get('[data-cy="textarea"]').type("Please knock twice");
    cy.contains("Submit").click();
  });
});
