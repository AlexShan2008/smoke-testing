describe("Test All Pages", () => {
  it("The home page", () => {
    cy.visit("/").get("h2").contains("Home");
  });

  it("The about page", () => {
    cy.visit("/about").get("h2").contains("About");

    cy.get("button").contains("Click").click();
    cy.screenshot();
  });

  it("The users page", () => {
    cy.visit("/users").get("h2").contains("Users");
  });
});
