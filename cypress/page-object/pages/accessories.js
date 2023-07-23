import accessoriesElements from '../../fixtures/accessories.json'

export default class accessories {
	static goToAccessoriesSection() {
		cy.get(accessoriesElements.closeCartWindow).click()
		cy.get(accessoriesElements.accessoriesCategory).click()
		cy.get(accessoriesElements.accessoriesPage).should(
			'contain',
			'Accesorii TV'
		)
	}
	static filterAccessory() {
		cy.get(accessoriesElements.brandName).should('contain', 'Samsung').click()
		cy.get(accessoriesElements.starRating).click()
	}
	static orderAfterPriceAscending() {
		cy.get(accessoriesElements.orderList)
			.should('contain', 'Cele mai populare')
			.click()
		cy.get(accessoriesElements.asscendingPrice)
			.invoke('css', 'visibility', 'visible')
			.click()
	}
	static addToCart() {
		cy.get(accessoriesElements.addToCartButton)
			.should('be.visible')
			.click({ force: true })
		cy.get(accessoriesElements.validateProductWasAdded).should(
			'contain',
			'Produsul a fost adaugat in cos'
		)
		cy.get(accessoriesElements.checkProductName).should(
			'contain',
			'Conector Card Slot CI CI+ compatibil cu Samsung 3709-001791'
		)
	}
}
