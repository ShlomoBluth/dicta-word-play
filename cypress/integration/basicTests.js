/// <reference types="cypress"/>

//run basic tests on word play

describe('basicTests',()=>{

    beforeEach(() => {
        cy.visit('https://wordplay.dicta.org.il/')
      })
    
    it('Word play nakdan',()=>{
        cy.wordplayRun()
        cy.get('#common-results').should('contain','נַפְשָׁם')
    })

})