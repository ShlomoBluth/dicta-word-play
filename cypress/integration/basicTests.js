/// <reference types="cypress"/>

//run basic tests on word play

let sizes = [[1000, 660]]//'iphone-x',

sizes.forEach((size) => {

    describe('basicTests',()=>{

        beforeEach(() => {
            if (Cypress._.isArray(size)) {
                Cypress.config({
                    viewportWidth: size[0],
                    viewportHeight: size[1]
                })
                cy.viewport(size[0], size[1])
            } else {
                Cypress.config({
                    viewportWidth: 375,
                    viewportHeight: 812
                })
                cy.viewport(size)
            }
            cy.visit('/')
        })
        
        it('Word play nakdan',()=>{
            cy.wordplayRun()
            cy.get('#common-results',{timeout:60000}).should('contain','נַפְשָׁם')
        })
    
    })

})

