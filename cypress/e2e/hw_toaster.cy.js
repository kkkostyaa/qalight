/// <reference types = "cypress"/>



let toasterConfig = [{
    position: 'top-right',
    title: 'Magenta toaster',
    content: 'that show in top-right corner',
    time: '5000',
    type: 'primary'
},
{
    position: 'top-left',
    title: 'Green toaster',
    content: 'that show in top-left corner',
    time: '5000',
    type: 'success'
},
{
    position: 'bottom-left',
    title: 'Blue toaster',
    content: 'that show in bottom-left corner',
    time: '5000',
    type: 'info'
},
{
    position: 'bottom-right',
    title: 'Orange toaster',
    content: 'that show in bottom-right corner',
    time: '5000',
    type: 'warning'
}
];

let toasterExpect =  [{
      icon: '',
      title: 'Magenta toaster',
      content: 'that show in top-right corner',
      color: '',
      position: {
          posX: 0,
          posY: 0, 
      }
},
{
      icon: '',
      title: 'Green toaster',
      content: 'that show in top-left corner',
      color: '',
      position: {
          posX: 0,
          posY: 0, 
      }
    },
{
      icon: '',
      title: 'Blue toaster',
      content: 'that show in bottom-left corner',
      color: '',
      position: {
          posX: 0,
          posY: 0, 
      }
    },
{
      icon: '',
      title: 'Orange toaster',
      content: 'that show in bottom-right corner',
      color: '',
      position: {
          posX: 0,
          posY: 0, 
      }
}
]
    

function generateToast(randToastConfig) {
   
    cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button').click();
    cy.get('[ng-reflect-value="' + randToastConfig.position + '"]').click();

    cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button').click();
    cy.get('[ng-reflect-value="' + randToastConfig.type + '"]').click();
    
    cy.get('.row > :nth-child(1) > :nth-child(2) > .size-medium').clear().type(randToastConfig.title);
    cy.get('.row > :nth-child(1) > :nth-child(3) > :nth-child(1)  > :nth-child(2) ').clear().type(randToastConfig.content);
    cy.get('.row > :nth-child(1) > :nth-child(4) > .size-medium').clear().type(randToastConfig.time);

    cy.get('nb-card-footer > .status-basic').click();


}



it("toaster HW", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('nb-card-header').contains('Material Dark').click();
    cy.get('.ng-tns-c141-19 > .menu-title').click();
    cy.get('.menu-item.ng-tns-c141-23 > .ng-star-inserted').click();
    cy.wait(2000);

    for (let i = 0; i < 1; i++) {
         generateToast(toasterConfig[i]);


        if (cy.get('.ng-tns-c209-54').children().should('exist')) { cy.log('exist') };
        
        
        
        //cy.log(cy.get('.ng-tns-c209-55').should('exist'));
        
        
        
        
        //if (cy.get('.ng-tns-c209-54').find('.ng-reflect-toast').lenght > 0) { cy.log('exist') };


        //if (cy.get('.ng-tns-c209-55').children().should('exist')) {cy.log('not exist')}
        //.cdk-overlay-container > :nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1)

        //title
        //.cdk-overlay-container > :nth-child(1) > :nth-child(1) > :nth-child(1)  > :nth-child(1)  > :nth-child(2)  > :nth-child(1) 

        //content
        //.cdk-overlay-container > :nth-child(1) > :nth-child(1) > :nth-child(1)  > :nth-child(1)  > :nth-child(2)  > :nth-child(2) 

        //icon
        //.cdk - overlay - container > : nth - child(1) > : nth - child(1) > : nth - child(1) > : nth - child(1) > : nth - child(1) > : nth - child(1) > : nth - child(1) > : nth - child(1) > : nth - child(1) 
        
        //color
        //.cdk-overlay-container > :nth-child(1) > :nth-child(1) > :nth-child(1)  > :nth-child(1) 
        
        
        
        
        
        cy.wait(7000);
    }




/*
    cy.get('.row > :nth-child(1) > :nth-child(1) > .mat-ripple > .select-button').click();
    cy.get('[ng-reflect-value="bottom-left"]').click();

    cy.get(':nth-child(2) > .form-group > .mat-ripple > .select-button').click();
    cy.get('[ng-reflect-value="success"]').click();
    
    cy.get('.row > :nth-child(1) > :nth-child(2) > .size-medium').clear().type('locator detected');
    cy.get('form.ng-untouched > .form-group > .size-medium').clear().type('locator detected');
    cy.get('.row > :nth-child(1) > :nth-child(4) > .size-medium').clear().type('5000');

    cy.get('nb-card-footer > .status-basic').click();

    function get_rand(max_value) {
        return Cypress._.random(0, max_value)
    } 

    cy.log(get_rand(4));
    cy.log(get_rand(3));
   */


})
