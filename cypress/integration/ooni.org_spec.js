describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
  })
})

describe('The Posts', function() {
  const allPosts = JSON.parse(Cypress.env('allPosts'))
  allPosts.map(uri => {
    it(`${uri} successfully loads`, () => {
       cy.visit(uri, {
        onLoad: (win) => {
          win.onerror = cy.onUncaughtException
        }
      })
      // cy.waitForResource('.png')
      cy.get('img')
        .should('be.visible')
        .each(($img) => {
            expect(
              $img[0].naturalWidth,
              `${$img[0].src} is big enough`
            ).to.be.greaterThan(0)
        })

    })
  })
})
