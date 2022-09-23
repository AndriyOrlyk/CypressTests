describe('Check system behavior when valid email id and password is entered. ', () => {
  it('clicks the link "type"', () => {
    cy.visit('https://22bet-demo.impact-betegy.com/')

    cy.get('#inputEmail')
      .type('demo-22bet@betegy.com')
    cy.get('#inputPassword')
      .type('Nfi3dL3oijId5')
    cy.get('.sign-in-btn').click()
  })
})
