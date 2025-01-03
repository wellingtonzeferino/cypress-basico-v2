Cypress.Commands.add('fillMandatoryFirldsAndSubmit', function() {
    cy.get('#firstName').type('Wellington')
    cy.get('#lastName').type('Zeferino')
    cy.get('#email').type('wellington.zeferino.ti@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()
      
})