describe('Signing up', () => {
      beforeEach ( () => {
// Goes to the homepage
    cy.visit('/')

// Open Sign up pop-up
    cy.get('#signin2').should('be.visible').click()

// Check Sign up title      
    cy.get('#signInModalLabel').should('have.text', 'Sign up')
}) 

// Test1 Successful Registration
    it('Success Reg via UI', () => {

    const username = ('TestUser' + Date.now())
    const password = 'TestPassword'      

// Commands function
    cy.mySuperRegistration(username, password)

// Check alert 'Sign up successful.'
    cy.window().then((win) => {
    cy.stub(win, 'alert').as('winAlert')
    cy.get('@winAlert').should('be.calledWith', 'Sign up successful.')
    })
  })
  
// Test2 User-exist Registration
    it('User-exist Reg', () => {

    const username = 'TestUser'
    const password = 'TestPassword'      

// Commands function
    cy.mySuperRegistration(username, password)

// Check alert 'This user already exist.'
    cy.window().then((win) => {
    cy.stub(win, 'alert').as('winAlert')
    cy.get('@winAlert').should('be.calledWith', 'This user already exist.')
    })
  })
  
})