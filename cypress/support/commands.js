

Cypress.Commands.add('wordplayRequest',({status=200,message='',delaySeconds=0})=>{
    cy.intercept('POST', '/api', {
       delayMs:1000*delaySeconds,
       statusCode: status
    },).as('api')
    cy.get('input[id*="search-input"]').type('שָׁם')
    if(message.length>0){
      cy.contains(message).should('not.exist')
    }
    cy.get('button[class*="search-btn"]').click()
    if(delaySeconds>0){
      cy.get('[class*="spinner"').should('exist')
    }
    if(message.length>0){
      cy.contains(message,{timeout:'@api'}).should('exist')
    }
  })  