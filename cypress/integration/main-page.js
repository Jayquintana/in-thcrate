describe('Art View User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/artists')
  })

  it('should have a page title', () => {
    cy.get('.nav-title').should('have.text', 'In The Crate')
  })

  it('should display an image', () => {
    cy.get('.cover').should('exist')
  })

  it('should display a artist card', () => {
    cy.get('.card').should('exist')
  })

  it('should generate new artists', () => {
      cy.get('.enter-site').click()
  })

  it('should be able to click on an artist', () => {
    cy.get('.card').eq(0).click()
  })



})