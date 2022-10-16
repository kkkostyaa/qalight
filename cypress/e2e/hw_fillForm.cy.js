/// <reference types = "cypress"/>



let formData = [
    { fName: 'Ivan', lName: 'Petrov', email: 'ivanpet@ukr.net', password: '123qwe', website: 'ivanpet.com', subject: 'test', message: 'test text' },
    { fName: 'Sergey', lName: 'Ivanov', email: 'sergius@gmail.com', password: '4567rty', website: 'sergius.com', subject: 'privet', message: 'test text 2' },
    { fName: 'Vasiliy', lName: 'Rebrov', email: 'vasia123@ukr.net', password: '789uio', website: 'vasia.net', subject: 'poka', message: 'test text 3' } ]


let formExpected = [
    { fName: 'Ivan', lName: 'Petrov', email: 'ivanpet@ukr.net', password: '123qwe', website: 'ivanpet.com', subject: 'test', message: 'test text' },
    { fName: 'Sergey', lName: 'Ivanov', email: 'sergius@gmail.com', password: '4567rty', website: 'sergius.com', subject: 'privet', message: 'test text 2' },
    { fName: 'Vasiliy', lName: 'Rebrov', email: 'vasia123@ukr.net', password: '789uio', website: 'vasia.net', subject: 'poka', message: 'test text 3' } ]
    

function fillForm ( input, expected ) {

    cy.get('[placeholder="Jane Doe"]').clear().type(input.fName + ' ' + input.lName);
    cy.get('[placeholder="Jane Doe"]').should('contain.value', expected.fName + ' ' + expected.lName);
    cy.get('.form-inline > [placeholder="Email"]').clear().type(input.email);
    cy.get('.form-inline > [placeholder="Email"]').should('contain.value', expected.email);
    cy.get('.form-inline > nb-checkbox > .label > .custom-checkbox').click();

    cy.get('#inputEmail1').clear().type(input.email);
    cy.get('#inputEmail1').should('contain.value', expected.email);
    cy.get('#inputPassword2').clear().type(input.password);
    cy.get('#inputPassword2').should('contain.value', expected.password);
    cy.get('nb-radio-group > :nth-child(1) > label').click();

    cy.get('#exampleInputEmail1').clear().type(input.email);
    cy.get('#exampleInputEmail1').should('contain.value', expected.email);
    cy.get('#exampleInputPassword1').clear().type(input.password);
    cy.get('#exampleInputPassword1').should('contain.value', expected.password);
    cy.get(':nth-child(3) > .status-basic > .label > .custom-checkbox').click();

    cy.get('[placeholder="Recipients"]').clear().type(`${input.fName} ${input.lName}`);
    cy.get('[placeholder="Recipients"]').should('contain.value', `${input.fName} ${input.lName}`);
    cy.get('[placeholder="Subject"]').clear().type(input.subject);
    cy.get('[placeholder="Subject"]').should('contain.value', expected.subject);
    cy.get('[placeholder="Message"]').clear().type(input.message);;
    cy.get('[placeholder="Message"]').should('contain.value', expected.message);

    cy.get('#inputFirstName').clear().type(input.fName);
    cy.get('#inputFirstName').should('contain.value', expected.fName);
    cy.get('#inputLastName').clear().type(input.lName);
    cy.get('#inputLastName').should('contain.value', expected.lName);
    cy.get('#inputEmail').clear().type(input.email);
    cy.get('#inputEmail').should('contain.value', expected.email);
    cy.get('#inputWebsite').clear().type(input.website);
    cy.get('#inputWebsite').should('contain.value', expected.website);

    cy.get('#inputEmail3').clear().type(input.email);
    cy.get('#inputEmail3').should('contain.value', expected.email);
    cy.get('#inputPassword3').clear().type(input.password);
    cy.get('#inputPassword3').should('contain.value', expected.password);
    cy.get('.checkbox > .status-basic > .label > .custom-checkbox').click();

    cy.log(`${input.fName} ${input.lName} ${input.email} ${input.password} ${input.website} `);
    cy.wait(2000);

}

it("fill form HW", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('nb-card-header').contains('Material Dark').click();
    cy.get('.ng-tns-c141-9 > .menu-title').click();
    cy.get('.menu-item.ng-tns-c141-11 > .ng-star-inserted').click();

    let elem = formData.length;
    for (let i = 0; i < formData.length; i++) {
        fillForm(formData[i], formExpected[i]);
    }

    
    


})

