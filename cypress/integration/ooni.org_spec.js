describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

describe('The Posts', function() {
  const allPosts = JSON.parse(Cypress.env('allPosts'))
  allPosts.map(uri => {
    it(`${uri} successfully loads`, () => {
      cy.visit(uri)
    })
  })
})
