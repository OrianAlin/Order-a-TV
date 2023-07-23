/// <reference types="cypress" />
import mainPage from '../page-object/pages/mainPage'
import tvSection from '../page-object/pages/tvSection'
import accessories from '../page-object/pages/accessories'
import { url } from '../../config'
describe('Order a TV and an accessory for it', () => {
	before(function () {
		cy.visit(url)
	})
	it('Should go to Tv Section and add it to cart', () => {
		mainPage.goToTvSection()
		tvSection.filterTv()
		tvSection.orderAfterPriceDescending()
		tvSection.addToCart()
		accessories.goToAccessoriesSection()
		accessories.filterTv()
		accessories.orderAfterPriceAscending()
		accessories.addToCart()
	})
})
