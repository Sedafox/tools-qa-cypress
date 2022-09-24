import HomePage from "../support/PageObject/homePage";

const homePage = new HomePage()

describe('Tests the Home Page', () => {
    beforeEach('Visit the home page', () => {
        homePage.visitHome()
    })
    it('Should have a Tools QA banner', () => {
        homePage.getBanner().should('be.visible')
    })
    it('should have a Selenium Online Training banner', () => {
        homePage.getSeleniumBanner().should('be.visible')
    })
    it('should have five card buttons to choose from', () => {
        homePage.getAllCards().eq(5).should('be.visible')
        homePage.getAllCards().eq(6).should('not.exist')
    })
    it('first card should be Elements', () => {
        homePage.getFirstCard().should('contain.text','Elements')
    })
    it('second card should be Forms' ,() => {
        homePage.getSecondCard().should('contain.text','Forms')
    })
    it('third card should be Alerts, Frame & Windows', () => {
        homePage.getThirdCard().should('contain.text', 'Alerts, Frame & Windows')
    })
})
