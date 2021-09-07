/// <reference path="../support/index.d.ts" />

describe("Test custom command", () => {
  it("works", () => {
    cy.visit("/");
    // IntelliSense and TS compiler should
    // not complain about unknown method
    cy.dataCy("greeting");
  });
});
