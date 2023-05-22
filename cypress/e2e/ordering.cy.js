describe('Purchasing', () => {
    it('Ordering without authorization', () => {
// Go to the homepage
      cy.visit('https://www.demoblaze.com')
// Open product menu
      cy.get('#itemc').click()
// Add an item to the cart
      cy.get(':nth-child(10) > [data-layer="Content"]').click()
      cy.get('[data-top="447.578125"]').click()
// Go to the Cart
      cy.get('#cartur').click()
// Make an order
      cy.get('[data-top="134.1875"]').click()
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
