describe('Testcase1',() => {

  it('Visit a page',() => {
	cy.visit('https://insider.in')
	cy.clearCookies()
	cy.wait(500)
	cy.visit('https://insider.in')
	cy.get('.city-list > :nth-child(7) > a').click()
	cy.get('.carousel-item-1 > .featured-card > a > .featured-card-details > .featured-card-details-top > .featured-card-name').click()
	cy.get('.header-detail > .action-button-wrapper > .action-button-btns-row > .action-button-main').click()
	cy.get(':nth-child(1) > .show-partial > .show-partial-content > .buyflow-action > .buyflow-buy > .marionette-spa-btn > .base-button').click()
	cy.get('select').eq(0).select('1').should('have.value', '1')
	cy.get(':nth-child(1) > .show-partial > .show-partial-content > .buyflow-action > .buyflow-buy > .base-button > span').click()
	cy.wait(500).end()
	cy.url().should('include', '/buy/checkout')
	
  })
   
})