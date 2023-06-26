# Cypress-Scouts


[![E2E Tests](https://github.com/AllIzm/cypress-scouts/actions/workflows/cy.yaml/badge.svg)](https://github.com/AllIzm/cypress-scouts/actions/workflows/cy.yaml)

## About
Cypress-Scouts is the training project that show to how to write and execute E2E tests in Cypress from scratch.

## Demo Site 
[Demoblaze](https://www.demoblaze.com/) website is a demo e-commerce website where user can purchase electronics products from [BlazeMeter](https://www.blazemeter.com/).

## Content
**1.**	Test cases for various functionalities of Demoblaze website like [sign up](https://github.com/AllIzm/cypress-scouts/blob/main/cypress/e2e/ordering.cy.js), [purchasing](https://github.com/AllIzm/cypress-scouts/blob/main/cypress/e2e/signup.cy.js) (include how to add to cart and place an order).

**2.**	Deploying on GitHub and building a [CI workflow](https://github.com/AllIzm/cypress-scouts/tree/main/.github/workflows) with GitHub Actions so that the tests themselves run on the necessary triggers (manually, when new code is pushed to your repository, on a set schedule).

## Deploying 
* Clone __*cypress-scouts*__ repository.
* Install Cypress using the npm locally as a dev dependency *(the project root directory)*
  
  `npm install cypress`
   
* Open the Cypress for running and debugging tests in headed mode *(the project root directory)*
 
  `npx cypress open`

   * *Note!* Using Cypress for the first time choose E2E Testing Type configuration.

* Open the Cypress for running and debugging tests in headless mode *(the project root directory)*

  `npx cypress run`



