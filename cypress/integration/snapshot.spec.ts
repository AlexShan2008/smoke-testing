describe("Test All Pages", () => {
  it("toMatchImageSnapshot - whole page", () => {
    cy.visit("/about").then(() => {
      cy.matchImageSnapshot({
        capture: "viewport",
      });
    });
  });
});
