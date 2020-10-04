describe('WalletsAfrica', () => {
    it('Should Visit and Verify', () => {
      
        cy.visit('https://app.wallets.africa')
        cy.contains('Welcome back.')
        .should('be.visible')
        cy.get('[type=text]').click()
            .type('jacob.olajide@yahoo.com')
        cy.get('[type=password]').click()
            .type('Jacnificient@123')
        cy.get('.login-form > .btn').click().wait(4000)
        cy.url().should('include','/dashboard')
        //cy.get('.logout').dblclick({force: true})
        cy.get('.nav > .logout > a').click()


    })
        
    });