/// <reference types="cypress" />

describe('tests Mars api site', () => {
    const viewports = [
        { device: 'mobile', height: 640, width: 400 },
        { device: 'tablet', height: 1024, width: 1000 },
        { device: 'desktop', height: 768, width: 1366 }
    ];
    
    viewports.forEach((viewport) => {
        it(`${viewport.device} - should search for mars weather api site and github repository`, () => {
            cy.viewport(viewport.width, viewport.height)
            cy.visit('http://www.google.com');
            cy.get('[name="q"]').type('mars weather api 1.0.1 {enter}');
            cy.get('.r > a[href="https://api.mars.spacexcompanion.app/"]').click();
            cy.contains('Mars Weather API 1.0.1').should('be.visible');
            cy.contains('Source code').should('exist').and('be.be.visible')
            cy.get('.uk-container > .uk-button').click()
            cy.get('.uk-container > .uk-button').then(function ($a) {
                const href = $a.prop('href')
                cy.request(href)
                .its('body')   
                .should('include', '<title>GitHub - jeroenboumans/Mars-Weather: Microservice for providing Mars weather gathered from InSight data.</title>')
            })
        })
    })
})