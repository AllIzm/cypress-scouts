describe('Signing up', () => {
    it('Create New User', () => {

// Goes to the homepage
      cy.visit('/')

// Open Sign up pop-up
      cy.get('#signin2').should('be.visible').click()

// Check Sign up title      
      cy.get('#signInModalLabel').should('have.text', 'Sign up')

// Fill out fields
const testUsername = ('TestUser' + Date.now())

cy.get('#sign-username').invoke('val', testUsername)
cy.get('#sign-password').invoke('val', 'TestPassword')

// Check alert 'Sign up successful.'
cy.window().then((win) => {
    cy.stub(win, 'alert').as('winAlert')
    // Click Sign up button
    cy.get('.btn-primary').contains('Sign up').click()      
    cy.get('@winAlert').should('be.calledWith', 'Sign up successful.')
    })
  })
  
})
