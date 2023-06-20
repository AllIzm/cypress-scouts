describe('Purchasing', () => {
  beforeEach(() => {
    // Request declaration
    cy.intercept('POST', '/bycat').as('category')
    cy.intercept('POST', '/viewcart').as('viewcart')

    // Go to the homepage
    cy.visit('/')
  })

  // Test1
  it('Ordering Phones', () => {

    // Open product menu "Phones"
    cy.get('.list-group-item').contains('Phones').click()

    cy.wait('@category')
      
    // Go to the item description
    cy.contains('.card-title', 'Iphone 6 32gb').click()
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
    cy.contains('Delete').should('have.length', 1)

    // Make an order with cy.commands
    cy.placeOrder()

    // Check notification for success order
    cy.findByText('Thank you for your purchase!').should('be.visible') 

    // Click "OK" button      
    cy.wait(1000)
    cy.contains('.confirm', 'OK').click();

    // Check if main page open after purchase
    cy.url().should('include', 'index.html')

    // Check if the Cart is empty
    cy.get('#cartur').click()
    cy.contains('Delete').should('not.exist') 

  })

  // Test2
  it('Ordering Laptops', () => {

    // Open product menu "Laptops"
    cy.get('.list-group-item').contains('Laptops').click()
  
    cy.wait('@category')
        
    // Go to the item description
    cy.contains('.card-title', 'Dell i7 8gb').click()
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
    cy.contains('Delete').should('have.length', 1)
  
    // Make an order with cy.commands
    cy.placeOrder()
  
    // Check notification for success order
    cy.findByText('Thank you for your purchase!').should('be.visible') 
  
    // Click "OK" button      
    cy.wait(1000)
    cy.contains('.confirm', 'OK').click();
  
    // Check if main page open after purchase
    cy.url().should('include', 'index.html')
  
    // Check if the Cart is empty
    cy.get('#cartur').click()
    cy.contains('Delete').should('not.exist') 
  
    })

  // Test3
  it('Ordering Monitors', () => {

    // Open product menu "Monitors"
    cy.get('.list-group-item').contains('Monitors').click()
  
    cy.wait('@category')
        
    // Go to the item description
    cy.contains('.card-title', 'ASUS Full HD').click()
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
    cy.contains('Delete').should('have.length', 1)
  
    // Make an order with cy.commands
    cy.placeOrder()
  
    // Check notification for success order
    cy.findByText('Thank you for your purchase!').should('be.visible') 
  
    // Click "OK" button      
    cy.wait(1000)
    cy.contains('.confirm', 'OK').click();
  
    // Check if main page open after purchase
    cy.url().should('include', 'index.html')
  
    // Check if the Cart is empty
    cy.get('#cartur').click()
    cy.contains('Delete').should('not.exist') 
  
    })

})
