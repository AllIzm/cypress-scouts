describe('Purchasing', () => {
    it('Ordering without authorization', () => {
// Go to the homepage
      cy.visit('https://www.demoblaze.com')
// Open product menu
      cy.get('#itemc').click()
// Add an item to the cart
      cy.get('#tbodyid > div:nth-child(5) > div > div > h4 > a').click()
      cy.get('#tbodyid > div.row > div > a').click()
// Go to the Cart
      cy.get('#cartur').click()
// Make an order
      cy.get('#page-wrapper > div > div.col-lg-1 > button').click()  
// Fill out fields
      cy.get('#name').invoke('val', 'TestName')
      cy.get('#country').type('TestCountry')
      cy.get('#city').type('TestCity')
      cy.get('#card').invoke('val','1234567887654321')
      cy.get('#month').type('May')
      cy.get('#year').type('2023')
// Click Purchase button
      cy.get ('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      cy.get('.confirm').click()
    })
  })
