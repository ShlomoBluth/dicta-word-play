
Cypress.Commands.add('testMessage',({message='',delaySeconds=0})=>{
  //Wait for spinner to not exist
  if(delaySeconds>0){
    cy.get('.v-clip').should('exist')
    cy.get('.v-clip',{timeout:1000*delaySeconds}).should('not.exist')
  }else{
    cy.get('.v-clip').should('not.exist')
  }

  if(message.length>0){
    cy.contains(message).should('exist')
  }
})

Cypress.Commands.add('tipsoundplayUrl',({message='',delaySeconds=0})=>{
  cy.get('input[id*="search-input"]').type('שם')
  cy.testMessage({
    message:message,
    delaySeconds:delaySeconds
  })
})

Cypress.Commands.add('wordplayRun',()=>{
  cy.get('input[id*="search-input"]').type('שם')
  cy.get('.v-clip').should('not.exist')
  cy.get('button[class*="search-btn"]').click()
})

Cypress.Commands.add('wordplayRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', url, {
    delayMs:1000*delaySeconds,
    statusCode: status
  },)
  if(url=='tipsoundplay'){
    cy.tipsoundplayUrl({
      message:message,
      delaySeconds:delaySeconds
    })
  }else{
    cy.wordplayRun()
    cy.testMessage({
      message:message,
      delaySeconds:delaySeconds
    })
  }
})  