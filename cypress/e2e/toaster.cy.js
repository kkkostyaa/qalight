/// <reference types = "cypress"/>



let toasterConfig = [{
    position: 'top-right',
    title: 'Blue toaster',
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
    title: 'Light-blue toaster',
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
      icon: 'email',
      title: 'Blue toaster',
      content: 'that show in top-right corner',
      color: 'rgb(98, 0, 238)',
      position: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',  
      }
},
{
      icon: 'checkmark',
      title: 'Green toaster',
      content: 'that show in top-left corner',
      color: 'rgb(96, 175, 32)',
      position: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',  
      }
    },
{
      icon: 'question-mark',
      title: 'Light-blue toaster',
      content: 'that show in bottom-left corner',
      color: 'rgb(4, 149, 238)',
      position: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start', 
      }
    },
{
      icon: 'alert-triangle',
      title: 'Orange toaster',
      content: 'that show in bottom-right corner',
      color: 'rgb(255, 159, 5)',
      position: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
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

function checkToast(toastExpected) {
    cy.get('nb-toast[ng-reflect-toast]').then(toast => {
        cy.wrap(toast).should('contain', toastExpected.title)
            .and('contain', toastExpected.content)
            .and('have.css', 'background-color')
            .and('eq', toastExpected.color);
        
        cy.wrap(toast).find(`g[data-name="${toastExpected.icon}"]`).should('exist');

        cy.get('div[dir="ltr"]').should('have.css', 'justify-content').and('eq', toastExpected.position.justifyContent);
        cy.get('div[dir="ltr"]').should('have.css', 'align-items').and('eq', toastExpected.position.alignItems);
        
    })


}



before('Open page', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('nb-card-header').contains('Material Light').click();
    cy.get('.ng-tns-c141-19 > .menu-title').click();
    cy.get('.menu-item.ng-tns-c141-23 > .ng-star-inserted').click();
    cy.get('[ng-reflect-icon="menu-outline"]').click();
    cy.wait(2000);
});



it("toaster HW", () => {
   

    for (let i = 0; i < 4; i++) {
        generateToast(toasterConfig[i]);
        
        checkToast(toasterExpect[i]);      
        
        cy.wait(7000);
    }



})
