///<reference types="cypress"/>

  it('passes', () => {
    cy.visit('http://localhost:8080/commands/assertions');

    cy.location().then( location => {
     
      expect(location.href).to.eq('http://localhost:8080/commands/assertions');


      expect(location.pathname).to.not.contain('//');

    })
    
    cy.url().should('eq', 'http://localhost:8080/commands/assertions');

  })
