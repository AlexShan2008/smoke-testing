describe("The Home Page", () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.exec("yarn run lint");

    // seed a user in the DB that we can control from our tests
    // assuming it generates a random password for us
    cy.request("POST", "/test/seed/user", { username: "jane.lane" })
      .its("body")
      .as("currentUser");
  });

  it("successfully loads", () => {
    cy.visit("/");
  });

  it("sets auth cookie when logging in via form submission", function () {
    // destructuring assignment of the this.currentUser object
    const { username, password } = this.currentUser;

    cy.visit("/login");

    cy.get("input[name=username]").type(username);

    // {enter} causes the form to submit
    cy.get("input[name=password]").type(`${password}{enter}`);

    // we should be redirected to /dashboard
    cy.url().should("include", "/dashboard");

    // our auth cookie should be present
    cy.getCookie("your-session-cookie").should("exist");

    // UI should reflect this user being logged in
    cy.get("h1").should("contain", "jane.lane");
  });
});
