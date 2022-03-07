describe('landing page user flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display a page title', () => {
    cy.get('.landing-page-title').should('have.text', 'In The Crate')
  })

  it('should display a summary', () => {
    cy.get('.page-summary').should('exist')
  })

  it('should be able to enter the site', () => {
    cy.get('.enter-site').click()
  })

  it('should have vinly background', () => {
    cy.get('.main-page').should('have.css', 'background-image')
  })
})
