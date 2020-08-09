describe('A11y passes', () => {
    
    function terminalLog(violations) {
        cy.task(
          'log',
          `${violations.length} accessibility violation${
            violations.length === 1 ? '' : 's'
          } ${violations.length === 1 ? 'was' : 'were'} detected`
        )
        const violationData = violations.map(
          ({ id, impact, description, nodes }) => ({
            id,
            impact,
            description,
            nodes: nodes.length
          })
        )
      
        cy.task('table', violationData)
      }

    beforeEach(() => {
      cy.visit('https://api.mars.spacexcompanion.app/')
    })
  
    it('accessibility check', () => {
      cy.contains('Mars Weather API 1.0.1')
      cy.injectAxe()
      cy.checkA11y(null, null, terminalLog, true)
    })
  })