/// <reference types="cypress"/>

//run basic tests on word play

let sizes = [[1000, 660]]//'iphone-x',

sizes.forEach((size) => {

    describe('basicTests',()=>{

        beforeEach(() => {
            cy.screenSize({size:size})
            cy.visitpage({url:'/'})
        })
        
        it('Word play nakdan',()=>{
            cy.wordplayRun()
            cy.get('#common-results',{timeout:60000}).should('contain','נַפְשָׁם')
        })
    
    })

})

