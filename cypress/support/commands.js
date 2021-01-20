

Cypress.Commands.add('wordplayRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  cy.get('input[id*="search-input"]').type('שם')
  if(url=='tipsoundplay'){
    if(delaySeconds>0){
      cy.get('[class*="spinner"]',{timeout:1000*delaySeconds}).should('not.exist')
      cy.contains(message).should('exist')
    }else{
      cy.contains(message).should('exist')
    }
  }else{
    if(message.length>0){
      cy.contains(message).should('not.exist')
    }
    cy.get('button[class*="search-btn"]').click()
    if(message.length>0){
      cy.contains(message,{timeout:1000*delaySeconds+30000}).should('exist')
    }   
  } 
})  