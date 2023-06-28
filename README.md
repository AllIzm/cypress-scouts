# Cypress-Scouts


[![E2E Tests](https://github.com/AllIzm/cypress-scouts/actions/workflows/cy.yaml/badge.svg)](https://github.com/AllIzm/cypress-scouts/actions/workflows/cy.yaml)

## Description
Cypress-Scouts is the training project that show to how to write and execute E2E tests in Cypress.

## Demo Site 
[Demoblaze](https://www.demoblaze.com/) website is a demo e-commerce website where user can purchase electronics products from [BlazeMeter](https://www.blazemeter.com/).

## Content
**1.**	Test cases for various functionalities of Demoblaze website like [sign up](https://github.com/AllIzm/cypress-scouts/blob/main/cypress/e2e/ordering.cy.js), [purchasing](https://github.com/AllIzm/cypress-scouts/blob/main/cypress/e2e/signup.cy.js) (include how to add to cart and place an order).

**2.**	Deploying on GitHub and building a [CI workflow](https://github.com/AllIzm/cypress-scouts/tree/main/.github/workflows) with GitHub Actions so that the tests themselves run on the necessary triggers (manually, when new code is pushed to your repository, on a set schedule).

## Deploy and run
* Clone __*cypress-scouts*__ repository.

  **`git clone git@github.com:AllIzm/cypress-scouts.git`**
  
* Install Cypress using the npm locally as a dev dependency *from your project root*
  
  **`npm install cypress`**
   
* Open the Cypress for running and debugging tests in headed mode *from your project root*
 
  **`npx cypress open`**

   * Choose E2E Testing *(Note! Using Cypress for the first time add and set up configuration files)*
   * Choose one of compatible browsers Cypress found on your system and click on "Start E2E testing in ..."
   * To run any test click on them.

* Open the Cypress for running and debugging tests in headless mode *from your project root*

  **`npx cypress run`**



