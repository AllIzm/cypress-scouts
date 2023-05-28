describe('Purchasing', () => {
    it('Ordering without authorization', () => {

// Go to the homepage
      cy.visit('https://www.demoblaze.com')

// Open product menu "Phones"
      cy.get('.list-group-item').contains('Phones').click()

// Add an item to the cart
      cy.xpath('//a[@href="prod.html?idp_=5" and @class="hrefch"]').click()
      cy.xpath('//a[@class="btn btn-success btn-lg"]').click()

// Go to the Cart
      cy.get('#cartur').click()

// Make an order
      cy.xpath('//button[contains(@class, "btn-success")]').click()

// Fill out fields
      cy.get('#name').invoke('val', 'TestName')
      cy.get('#country').type('TestCountry')
      cy.get('#city').type('TestCity')
      cy.get('#card').invoke('val','1234567887654321')
      cy.get('#month').type('May')
      cy.get('#year').type('2023')

// Click "Purchase" button
      cy.get ('.btn-primary').contains('Purchase').click()
      cy.contains('.confirm', 'OK').click();
    })
    
  })
