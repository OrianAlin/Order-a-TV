import accessoriesElements from '../../fixtures/accessories.json'
import tvSectionElements from '../../fixtures/tvSection.json'

export default class accessories {
	static goToAccessoriesSection() {
		cy.get(accessoriesElements.closeCartWindow).click()
		cy.get(
			'#card_grid > div:nth-child(1) > div > div > div.card-v2-info > a > div > img'
		).click()
		cy.get(
			'#main-container > section:nth-child(4) > div > div.row.product-main-area.mrg-btm-xs > div.col-sm-7.col-md-4.col-lg-4.mrg-btm-xs.stuck-box-sm.gallery-wrapper > div.title-and-brand.hidden-xs > a'
		).click()
		cy.get(
			'#main-container > section.page-section.page-listing-v2 > div > div.clearfix.pad-btm-md > div.menu-container > div.sidebar-container.sidebar-tree-container.relative.js-mobile-menu-tree-sidebar > div.sidebar-container-body > div > div.font-semi-bold.text-center.mrg-top-xs.pad-top-xs.more-categories-link-container.hidden-xs'
		).click()
		cy.get(
			'body > div.ph-widget.ph-popup.filter-more-rupture-categories.ph-visible.ph-popup-n.ph-popup-w.ph-popup-top.ph-visible-done > div > div.filter-head > div > div > input'
		).type('Accesorii TV')
		cy.get(
			'body > div.ph-widget.ph-popup.filter-more-rupture-categories.ph-visible.ph-popup-n.ph-popup-w.ph-popup-top.ph-visible-done > div > div.filter-body-extra > div:nth-child(4) > div > div:nth-child(2) > a > div.category-item.vcenter.font-regular.hidden-xs'
		).click()
	}
	static filterTv() {
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
		cy.get(
			'#card_grid > div:nth-child(1) > div > div > div.card-v2-content > div.card-v2-atc.mrg-top-xxs > form > button'
		).click({ force: true })
		cy.get(tvSectionElements.checkProductWasAdded).should(
			'contain',
			'Produsul a fost adaugat in cos'
		)
	}
}
