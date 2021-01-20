/// <reference types="cypress"/>



////run tests on requests from word play run 

describe('DevelopmentVersionRequestsTests',()=>{
    
    beforeEach(() => {
        cy.visit('https://dev--silly-brown-3b035d.netlify.app/')
    })
    
  

    it('Error message for tipsoundplay response with status code 500 when clicking the run button of wordplay page'
    ,()=>{
       cy.wordplayRequest({
           url:'tipsoundplay',
           status:500,
           message: 'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
       })
    })

    
    it('Error message for tipsoundplay response with a delay of 3 minutes when clicking the run button'+
    ' of wordplay page',()=>{
        cy.wordplayRequest({
            url:'tipsoundplay',
            message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
            delaySeconds: 60*3
        })
    })

    it('Error message for api response with status code 500 when clicking the run button of wordplay page'
    ,()=>{
       cy.wordplayRequest({
            url:'api',
            status:500,
            message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר'
       })
    })

    
    it('Error message for api response with a delay of 3 minutes when clicking the run button'+
    ' of wordplay page',()=>{
        cy.wordplayRequest({
            url:'api',
            message:'אופס יש לנו בעיה נסו שנית, או בקרו באתר מאוחר יותר',
            delaySeconds: 60*3
        })
    })


    

    
})