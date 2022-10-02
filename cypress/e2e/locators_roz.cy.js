/// <reference types = "cypress"/>

it("Locators ", () => {
    cy.visit('https://automationteststore.com/');
    
    // поиск по 2 атрибутам
    //cy.get('div[class="tile_inner"][data-goods-id="333692440"]');

    // пошук за дочірніми елементами
    //cy.get('rz-sidebar-fat-menu > div > ul > li');

    // пошук за дочірніми елементами
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12');

    //пошук першого елементу серед інших такого ж типу
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:first-of-type');
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:last-of-type');
    cy.get('#featured div.col-md-3.col-sm-6.col-xs-12:nth-child(3)');

    //cy.get('href="https://automationteststore.com/index.php?rt=product/product&product_id^50"');

    
    cy.get('a[title^="BeneFit"]');
    cy.get('a[title*="Girl"]');

    //пошук картинок а- батьківський тег
    cy.get('a img[src$=".jpg"]');

    //поиск по тексту 
    // : - псевдо класс
    cy.get('a:contains("skinsheen")');

    // дз написать локаторы. новый файл и описать локаторы


})