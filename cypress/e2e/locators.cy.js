/// <reference types = "cypress"/>

it("Locators ", () => {
    cy.visit('https://sanitarskyi-cypress-g2.herokuapp.com/commands/querying');
    
    // CSS locator by tag name
    cy.get('nav');

    // CSS locator by attribute name
    cy.get('[placeholder]');

    // CSS locator by attribute name and value
    cy.get('[placeholder="Email"]');

    //  search element by ID
    cy.get('#query-btn');
    cy.get('[id="query-btn"]');

    //  search element by class (. is class)
    cy.get('.btn-default');
    cy.get('[class="btn btn-default"]');
    cy.get('.btn-default.btn');  //элементы перечисляем через точку

    cy.get('.nav.navbar-nav.pull-right');

    //  поиск по тегу и атрибуту
    cy.get('input[placeholder]');

    //  поиск по тегу и атрибуту и значению
    cy.get('input[placeholder="Password"]');

    // дз написать локаторы. новый файл и описать локаторы


})