describe('Signing up', () => {
    it('Create New User', () => {
// Goes to the homepage
      cy.visit('https://www.demoblaze.com')
// Open Sign up pop-up
      cy.get('#signin2').click()
// Fill out fields
const testUsername = ('TestUser' + Date.now().toString())

cy.get('#sign-username').invoke('val', testUsername)
cy.get('#sign-password').invoke('val', 'TestPassword')

// Click Sign up button
cy.get ('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    })
})
