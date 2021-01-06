/// <reference types="cypress"/>



////run tests on requests from word play run 

describe('RequestsTests',()=>{
    
    beforeEach(() => {
        cy.visit('https://wordplay.dicta.org.il/')
    })
  

    it('Error message for response with status code 500 when clicking the run button of wordplay page'
    ,()=>{
       cy.wordplayRequest({
           status:500,
           message:'הופס יש לנו בעיה'
       })
    })

    
    it('Error message for response with a delay of 3 minutes when clicking the run button'+
    ' of wordplay page',()=>{
        cy.wordplayRequest({
            message:'הופס יש לנו בעיה',
            delaySeconds: 60*3
        })
    })

    

    
})