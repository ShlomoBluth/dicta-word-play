
Cypress.Commands.add('testMessage',({message='',delaySeconds=0})=>{
  if(delaySeconds>0){
    // The site may show a spinner while it waits, or not; either is fine, only the error message matters
    if(message.length>0){
      cy.contains(message,{timeout:1000*delaySeconds+30000}).should('exist')
    }
  }else{
    //Wait for spinner to not exist
    cy.get('.v-clip').should('not.exist')
    if(message.length>0){
      cy.contains(message).should('exist')
    }
  }
})

Cypress.Commands.add('tipsoundplayUrl',({message='',delaySeconds=0})=>{
  cy.get('input[id*="search-input"]').type('שם')
  cy.get('.v-clip').should('not.exist')
  cy.get('.is-active').click({force:true})
  cy.testMessage({
    message:message,
    delaySeconds:delaySeconds
  })
})

Cypress.Commands.add('wordplayRun',()=>{
  cy.get('input[id*="search-input"]').type('שם')
  cy.get('.v-clip').should('not.exist')
  cy.get('.is-active').click({force:true})
})

Cypress.Commands.add('wordplayRequest',({url,status=200,message='',delaySeconds=0})=>{
  cy.intercept('POST', url, {
    delay:1000*delaySeconds,
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