describe('Purchasing', () => {
  beforeEach(() => {
    // Requests
    cy.intercept('POST', '/bycat').as('category')
    cy.intercept('POST', '/viewcart').as('viewcart')

    // Go to the homepage
    cy.visit('/')
  })

  const subjects = [
    { product: 'Iphone 6 32gb', category: 'Phones' },
    { product: 'Dell i7 8gb', category: 'Laptops' },
    { product: 'ASUS Full HD', category: 'Monitors' }
  ]

  subjects.forEach(subject => {
    it(`Successfully purchases ${subject.product}`, () => {
      // Open product menu
      cy.get('.list-group-item').contains(subject.category).click()

      // Waiting for response
      cy.wait('@category')

      // Go to the item description
      cy.get('.card-title').contains(subject.product).click()
      cy.url().should('include', '/prod.htm')

      // Check alert for adding an item to the cart
      cy.window().then((win) => {
        cy.stub(win, 'alert').as('winAlert')
        // Add an item to the cart
        cy.findByText('Add to cart').click()
        cy.get('@winAlert').should('be.calledWith', 'Product added')
      })

      // Go to the Cart
      cy.get('#cartur').click()
      cy.wait('@viewcart')

      // Check if there is one item in the cart at least
      cy.expect('.success').to.have.length.at.least(1)

      // Make an order
      cy.placeOrder()

      // Check notification for success order
      cy.findByText('Thank you for your purchase!').should('be.visible')

      // Click "OK" button      
      cy.wait(1000) // no anchor use another waiting
      cy.contains('.confirm', 'OK').click()

      // Check if main page open after purchase
      cy.url().should('include', 'index.html')

      // Check if the Cart is empty
      cy.get('#cartur').click()
      cy.url().should('include', '/cart')
      cy.wait('@viewcart')
      cy.contains('Total').should('exist')
      cy.contains('Delete').should('not.exist')
    })
  })
})
