export default class accessories {
	static goToAccessoriesSection() {
		cy.get(`[href="/accesorii-tv/c?ref=search_menu_category"]`).click()
		cy.get('.title-phrasing.title-phrasing-xl').should(
			'contain',
			'Accesorii TV'
		)
	}
	static filterAccessory() {
		cy.get(
			`.js-filter-item.filter-item[href='https://www.emag.ro/accesorii-tv/brand/samsung/c?ref=lst_leftbar_6415_42']`
		)
			.should('contain', 'Samsung')
			.click()
		cy.get(
			`.js-filter-item.filter-item[href='https://www.emag.ro/accesorii-tv/brand/samsung/rating,star-3/c?ref=lst_leftbar_6419_3-5']`
		).click()
	}
	static orderAfterPriceAscending() {
		cy.get(`:nth-child(2) > .sort-control-btn-dropdown > .btn`)
			.should('contain', 'Cele mai populare')
			.click()
		cy.get(
			`.js-sort-option[href='/accesorii-tv/brand/samsung/rating,star-3/sort-priceasc/c']`
		)
			.invoke('css', 'visibility', 'visible')
			.click()
	}
	static addToCart() {
		cy.get(
			`.btn.btn-sm.btn-primary.btn-emag.btn-block.yeahIWantThisProduct[data-pnk='DWYWRNMBM']`
		)
			.should('be.visible')
			.click({ force: true })
		cy.get(`h4[class='mrg-sep-none']`).should(
			'contain',
			'Produsul a fost adaugat in cos'
		)
		cy.get(`span[class='small']`).should(
			'contain',
			'Conector Card Slot CI CI+ compatibil cu Samsung 3709-001791'
		)
	}
}
