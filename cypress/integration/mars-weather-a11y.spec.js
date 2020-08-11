describe('A11y passes', () => {
    beforeEach(() => {
      cy.visit('https://api.mars.spacexcompanion.app/')
    })
  
    it('accessibility check', () => {
      cy.checkAcessibility()
    })
  })