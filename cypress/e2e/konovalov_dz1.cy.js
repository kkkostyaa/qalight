/// <reference types = "cypress"/>


it("DZ 1", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');


    cy.get('nb-card-header').contains('Material Dark').click();
    cy.get('.ng-tns-c141-9 > .menu-title').click();
    cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted').click();

    cy.get('.inline-form-card > nb-card-header')
    cy.get('[placeholder="Jane Doe"]');
    cy.get('.form-inline > [placeholder="Email"]');
    cy.get('.form-inline > nb-checkbox > .label > .custom-checkbox');
    cy.get('.form-inline > button');

    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-header')
    cy.get('#inputEmail1');
    cy.get('#inputPassword2');
    cy.get('nb-radio-group > :nth-child(1) > label');
    cy.get('nb-radio-group > :nth-child(2) > label');
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > nb-card-body > .ng-untouched > :nth-child(4) > .offset-sm-3 > .appearance-filled');
    // button
    cy.get(':nth-child(2) > :nth-child(1) > nb-card-header')
    cy.get('#exampleInputEmail1');
    cy.get('#exampleInputPassword1');
    cy.get(':nth-child(3) > .status-basic > .label > .custom-checkbox');
    cy.get(':nth-child(2) > :nth-child(1) > nb-card-body > .ng-untouched > .appearance-filled');
    //button
    cy.get(':nth-child(1) > :nth-child(2) > nb-card-header')
    cy.get('[placeholder="Recipients"]');
    cy.get('[placeholder="Subject"]');
    cy.get('[placeholder="Message"]');
    cy.get('.status-success');

    cy.get(':nth-child(2) > :nth-child(2) > nb-card-header')
    cy.get('#inputFirstName');
    cy.get('#inputLastName');
    cy.get('#inputEmail');
    cy.get('#inputWebsite');
    cy.get('nb-card-body > .appearance-filled');

    cy.get(':nth-child(3) > .col-md-6 > nb-card > nb-card-header')
    cy.get('#inputEmail3');
    cy.get('#inputPassword3');
    cy.get('.checkbox > .status-basic > .label > .custom-checkbox');
    cy.get('.form-horizontal > :nth-child(4) > .offset-sm-3 > .appearance-filled');



})