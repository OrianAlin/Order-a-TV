import mainPageElements from '../../fixtures/mainPage.json'
export default class mainPage {
	static goToTvSection() {
		cy.url().should('include', 'https://www.emag.ro/')
		cy.get(mainPageElements.productList).click()
		cy.get(mainPageElements.tvSection).should('contain', 'Televizoare').click()
	}
}
