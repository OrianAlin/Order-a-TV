import tvSectionElements from '../../fixtures/tvSection.json'

export default class tvSection {
	static filterTv() {
		cy.get(tvSectionElements.inStock).click()
		cy.wait(2000)
		cy.get(tvSectionElements.starRating).click()
	}
	static orderAfterPriceDescending() {
		cy.get(tvSectionElements.orderButton)
			.should('contain', 'Cele mai populare')
			.invoke('addClass', 'active')
			.click()
		cy.wait(2000)
		cy.get(tvSectionElements.descendingPrice)
			.invoke('css', 'visibility', 'visible')
			.click()
	}
	static addToCart() {
		cy.wait(2000)
		cy.get(tvSectionElements.addToCartButton)
			.should('be.visible')
			.click({ force: true })
		cy.get(tvSectionElements.checkProductWasAdded).should(
			'contain',
			'Produsul a fost adaugat in cos'
		)
	}
}
