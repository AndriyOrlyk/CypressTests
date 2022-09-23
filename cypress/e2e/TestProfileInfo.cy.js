describe('Check system behavior when user enter something in url', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://22bet-demo.impact-betegy.com/')
    
    cy.get('#inputEmail')
      .type('demo-22bet@betegy.com')
    cy.get('#inputPassword')
      .type('Nfi3dL3oijId5')
    cy.get('.sign-in-btn').click()
    cy.get('.fa-cog').click()
    cy.get('#edit-aff-url').click()
    cy.get('#aff-url').type('2943498379473')
    cy.get('.man-user').click()
    cy.get('#user-menu').click()
  })
})