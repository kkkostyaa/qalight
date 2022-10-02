
/// <reference types = "cypress"/>

/*
const testWithParams = ({ arg, expected }) => function () {
    cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').type(arg[0]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[0]);
    
}


//it('first', testWithParams({ arg: '1', expected: '1' }));
//it('second', testWithParams({ arg: '2', expected: '2' }));
it('third', testWithParams({ arg: ['1', '2', '3'], expected: ['1', '2', '3'] }));

*/


const params = [
    { arg: ['1', '2', '3'], expected: ['1', '2', '3'] },
    {arg: ['qw', 'er', 'ty'], expected: ['qw', 'er', 'ty']}
]

params.forEach(({ arg, expected }) => {
   /*
    it('array', () => {
        cy.visit('https://google.com');
        cy.get('input.gLFyf.gsfi').clear().type(arg[0]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[0]);
        cy.get('input.gLFyf.gsfi').clear().type(arg[1]);
        cy.get('input.gLFyf.gsfi').should('contain.value', expected[1]);
    })
    */
    console.log('arg ' + arg + ' expected ' + expected)
})

