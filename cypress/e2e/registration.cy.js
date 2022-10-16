it('Registration', () => {
  cy.visit('https://automationteststore.com');

  cy.get('#customer_menu_top').click();
  cy.get('#accountFrm button').click();

  cy.get('#AccountFrm_firstname').type('FirstName');
  cy.get('#AccountFrm_lastname').type('LastName');
  cy.get('#AccountFrm_email').type('qwe11@qwe.com');
  cy.get('#AccountFrm_address_1').type('address 1');
  cy.get('#AccountFrm_city').type('SomeCity');
  cy.get('#AccountFrm_zone_id').select(1);
  cy.get('#AccountFrm_postcode').type('36589');
  cy.get('#AccountFrm_country_id').select('United Kingdom');
  cy.get('#AccountFrm_loginname').type('username1');
  cy.get('#AccountFrm_password').type('qweqweq!@#!#');
  cy.get('#AccountFrm_confirm').type('qweqweq!@#!#');
  cy.get('#AccountFrm_newsletter0').click();
  cy.get('#AccountFrm_agree').check();
  cy.get('button[title="Continue"]').click();