import accessoriesElements from '../../fixtures/accessories.json'
import tvSectionElements from '../../fixtures/tvSection.json'

export default class accessories {
	static goToAccessoriesSection() {
		cy.get(accessoriesElements.closeCartWindow).click()
		cy.get(accessoriesElements.clickFirstTv).click()
		cy.get(accessoriesElements.clickBrandName).click()
		cy.get(accessoriesElements.moreCategoriesButton).click()
		cy.get(accessoriesElements.searchAccesories).type('Accesorii TV')
		cy.get(accessoriesElements.clickTvAccesories).click()
	}

	static filter() {
		cy.wait(2000)
		cy.get(tvSectionElements.starRating).click()
	}
	static orderAfterPriceAscending() {
		cy.get(tvSectionElements.orderButton)
			.should('contain', 'Cele mai populare')
			.invoke('addClass', 'active')
			.click()
		cy.wait(2000)
		cy.get(accessoriesElements.asscendingPrice)
			.invoke('css', 'visibility', 'visible')
			.click()
	}
	static addToCart() {
		cy.get(accessoriesElements.addAccesoryToCart).click({ force: true })
		cy.get(tvSectionElements.checkProductWasAdded).should(
			'contain',
			'Produsul a fost adaugat in cos'
		)
	}
}
