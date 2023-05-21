describe('Signing up', () => {
    it('Create New User', () => {
// Goes to the homepage
      cy.visit('https://www.demoblaze.com')
// Open Sign up pop-up
      cy.get('#signin2').click()
// Fill out fields
cy.get('#sign-username').type('TestUser' + Date.now())
cy.get('#sign-password').type('TestPassword')
// Click Sign up button
cy.get ('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click
    })
  })
