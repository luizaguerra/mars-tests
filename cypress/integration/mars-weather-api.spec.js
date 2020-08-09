/// <reference types="cypress" />

describe('tests Mars weater api', () =>{
    it('should return data of the first measure', () => {
        cy.request('https://api.mars.spacexcompanion.app/v1/weather/first').should((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.season).to.equal('spring')
            expect(response.body.wind.directions).to.have.length(14)
        })
    })

    it('should return data of the latest measure', () => {
        cy.request('https://api.mars.spacexcompanion.app/v1/weather/latest').should((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.season).to.equal('summer')
            expect(response.body.wind.speed).have.all.keys('average', 'minimum', 'maximum')
        })
    })
})