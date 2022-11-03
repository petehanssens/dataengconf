describe("Navigation", () => {
  it("should navigate meetup forms", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    //cy.get('.hidden > :nth-child(1)').click()

    cy.get('a[href*="/forms/meetup-talk"]').click();
    // // The new url should include "/about"
    cy.url().should("include", "/forms/meetup-talk");

    // The new page should contain an h1 with "About page"
  });
});
