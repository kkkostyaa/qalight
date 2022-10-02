
/// <reference types = "cypress"/>



before(() => {
    //делает что-то перед тестом 1 раз
})

beforeEach(() => {
    //делает что-то перед тестом
})

after(() => {
    //делает что-то после последнего теста
})

afterEach(() => {
    //делает что-то после теста
})


describe('positive scen', () => {
    //красиво организовать тесты
    it("Google Search 1", () => {
        cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').type('Cypress');
        cy.get('div.wM6W7d').first().click();

    })


    it("Google Search 2", {retries: 2}, () => {                //povtor esli ne rabotaet
        cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').type('Cypress');
        cy.get('div.wM6W7d').first().click();
    
    })


    it.only("Google Search 3", () => {
        //запустить только этот тест 
        cy.visit('https://google.com');
        this.retries(2);                //povtor esli ne rabotaet
        cy.get('input.gLFyf.gsfi').type('Cypress');
        cy.get('div.wM6W7d').first().click();
    
    })
})

describe('negative scen', () => {
    //красиво организовать тесты
    it("Google Search 1", () => {
        cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').type('Cypress');
        cy.get('div.wM6W7d').first().click();

    })


    it("Google Search 2", () => {
        cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').type('Cypress');
        cy.get('div.wM6W7d').first().click();
    
    })


    it.skip("Google Search 3", () => {
        //пропустить этот тест 
        cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').type('Cypress');
        cy.get('div.wM6W7d').first().click();
    
    })
})








