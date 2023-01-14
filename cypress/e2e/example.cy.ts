// https://docs.cypress.io/api/introduction/api.html

describe("my  first  test", () => {
  it("visits the app root url", () => {
    cy.visit("/");

    cy.contains(/at home/i);
  });

  it("counter works", () => {
    cy.visit("/");

    cy.get("button")
      .contains(/increase/i)
      .click();

    cy.contains(/1/i);
  });
});
