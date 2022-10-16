class AutorizationPage {
    visit() {
        cy.log('open login page');
        cy.visit('/index.php?rt=account/login');
    }

    getLoginField() {
        return cy.get('#loginFRM_loginname');
    }

    getPasswordField() {
        return cy.get('#loginFRM_password');
    }

    getLoginButton() {
        return cy.get('button[title="Login"]');
    }

    typeTextInLogin(username) {
        cy.log('type username ' + username);
        this.getLoginField().type(username);
    }

}


export default new AutorizationPage;