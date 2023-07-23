export default class tvSection {
	static filterTv() {
		cy.get(
			`.js-filter-item.filter-item[href='https://www.emag.ro/televizoare/brand/samsung/c?ref=lst_leftbar_6415_42']`
		).click()
		cy.get(
			`.js-filter-item.filter-item[href='https://www.emag.ro/televizoare/brand/samsung/filter/tehnologie-display-f8914,led-v-4670591/c?ref=lst_leftbar_8914_-4670591']`
		).click()
		cy.get(
			`.js-filter-item.filter-item[href='https://www.emag.ro/televizoare/brand/samsung/filter/tehnologie-display-f8914,led-v-4670591/rating,star-3/c?ref=lst_leftbar_6419_3-5']`
		).click()
	}
	static orderAfterPriceDescending() {
		cy.get(`button[class='btn btn-sm btn-alt sort-control-btn gtm_ejaugtrtnc']`)
			.should('contain', 'Cele mai populare')
			.click()
		cy.get(
			`.js-sort-option[href='/televizoare/brand/samsung/filter/tehnologie-display-f8914,led-v-4670591/rating,star-3/sort-pricedesc/c']`
		)
			.invoke('css', 'visibility', 'visible')
			.click()
	}
	static addToCart() {
		cy.get(
			'[data-name="Televizor Samsung Neo QLED 98QN90A, 248 cm, Smart, 4K Ultra HD, Clasa G"] > .card-v2 > .card-v2-wrapper > .card-v2-content > .card-v2-atc > form > .btn'
		)
			.should('be.visible')
			.click({ force: true })
		cy.get('.modal-header').should('contain', 'Produsul a fost adaugat in cos')
		cy.get(`div[class='row table-layout']`).should(
			'contain',
			'Televizor Samsung Neo QLED 98QN90A, 248 cm, Smart, 4K Ultra HD, Clasa G'
		)
	}
}
