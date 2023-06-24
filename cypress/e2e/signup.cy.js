describe('Sign up', () => {
  beforeEach ( () => {
    // Request
    cy.intercept('POST', '/signup').as("signupUser")

    // Goes to the homepage
    cy.visit('/')

  }) 

  // Test 1 "Successful Registration"
  it('Success Reg via UI', () => {

    const username = ('TestUser' + Date.now())
    const password = 'TestPassword'      

    // Commands function
    cy.registerUser(username, password)

    // Check alert 'Sign up successful.'
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('winAlert')
      // Click Sign up button
      cy.get('.btn-primary').contains('Sign up').click()
      // Waiting for response
      cy.wait('@signupUser')  
      cy.get('@winAlert')
        .should('be.calledWith', 'Sign up successful.')
    })

  })

  
  // Test 2 "User-exist Registration"
  it('User-exist Reg', () => {

    const username = 'TestUser'
    const password = 'TestPassword'      

    // Commands function
    cy.registerUser(username, password)

    // Check alert 'This user already exist.'
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('winAlert')
      // Click Sign up button
      cy.get('.btn-primary').contains('Sign up').click()
      // Waiting for response
      cy.wait('@signupUser')      
      cy.get('@winAlert')
        .should('be.calledWith', 'This user already exist.')
    })

  })

  
  // Test 3 "Registration with blank form fields"
  it('User Reg - blank fields', () => {

    const username = ''
    const password = ''      
  
    // Commands function
    cy.registerUser(username, password)
  
    // Check alert 'Please fill out Username and Password.'
    cy.window().then((win) => {
      cy.stub(win, 'alert').as('winAlert')
      // Click Sign up button
      cy.get('.btn-primary').contains('Sign up').click()
      cy.get('@winAlert')
        .should('be.calledWith', 'Please fill out Username and Password.')
    })
        
  })    
  
})