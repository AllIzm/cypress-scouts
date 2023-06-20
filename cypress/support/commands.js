// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands'

Cypress.Commands.add('mySuperRegistration', (username, password) => {
    
    // Fill out fields
    cy.get('#sign-username').invoke('val', username)
    cy.get('#sign-password').invoke('val', password)

    // Click Sign up button
    cy.get('.btn-primary').contains('Sign up').click()      

})

Cypress.Commands.add('placeOrder', function () {

        // Make an order
        cy.findByRole('button', { name: /Place Order/i }).click()

        // Fill out fields
        cy.get('#name').invoke('val', 'TestName')
        cy.get('#country').invoke('val', 'TestCountry')
        cy.get('#city').invoke('val', 'TestCity')
        cy.get('#card').invoke('val', '1234567887654321')
        cy.get('#month').invoke('val', 'May')
        cy.get('#year').invoke('val', '2023')

        // Click "Purchase" button
        cy.get('.btn-primary').contains('Purchase').click()
        
    })