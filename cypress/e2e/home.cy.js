import HomePage from "../support/PageObject/homePage";

const homePage = new HomePage()

describe('Tests the Home Page', () => {
    beforeEach('Visit the home page', () => {
        homePage.visitHome()
    })
    it('Should have a Tools QA banner', () => {
        homePage.getBanner().should('be.visible')
    })
})
