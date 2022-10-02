/// <reference types = "cypress"/>



it("Google Search 1", () => {
    cy.visit('https://google.com');
    cy.get('input.gLFyf.gsfi').type('Cypress');
    cy.get('div.wM6W7d').first().click();

})

