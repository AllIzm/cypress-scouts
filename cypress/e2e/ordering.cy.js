describe('Purchasing', () => {
    it('Ordering without authorization', () => {

// Go to the homepage
      cy.visit('/')

// Open product menu "Phones"
      cy.get('.list-group-item').contains('Phones').click()
      
// Go to the item description
      cy.contains('.hrefch', 'Iphone 6 32gb').click()
            
// Check alert for adding an item to the cart
      cy.window().then((win) => {
            cy.stub(win, 'alert').as('winAlert')
            // Add an item to the cart
            cy.findByText('Add to cart').click() 
            cy.get('@winAlert').should('be.calledWith', 'Product added')
          })
      
// Go to the Cart
      cy.get('#cartur').click()

// Check if there is one item in the cart at least
      cy.contains('Delete').should('have.length', 1),

// Make an order
      cy.findByRole('button', {name: /Place Order/i}).click()

// Fill out fields
      cy.get('#name').invoke('val', 'TestName')
      cy.get('#country').invoke('val','TestCountry')
      cy.get('#city').invoke('val','TestCity')
      cy.get('#card').invoke('val','1234567887654321')
      cy.get('#month').invoke('val','May')
      cy.get('#year').invoke('val','2023')

// Click "Purchase" button
      cy.get ('.btn-primary').contains('Purchase').click()

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
