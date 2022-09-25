import ElementsPage from "../support/PageObject/elementsPage"
const elementsPage = new ElementsPage()
describe('Tests the Elements on the Elements page', () => {
    beforeEach('', () => {
        elementsPage.visitHome()
        elementsPage.clickOnElmntButtonFromHome()
    })

    it('Clicks the Text Box option from the Elements Menu, enters all info and clicks submit', () => {
        elementsPage.textBoxMenuOption().click()
        elementsPage.fullNameField().type('Henry Ford')
        elementsPage.emailField().type('HFord1887@aol.com')
        elementsPage.currentAddressField().type('1947 E Test Drive, KS')
        elementsPage.permanentAddressField().type('13000 N No Bugs Pls Lane, NJ')
        elementsPage.textBoxSubmitButton().click()
        elementsPage.textBoxOutput().should('be.visible')
    })
    it.only('Clicks the Check Box Option from the Elements Menu, and select the Home Check Box', () => {
        elementsPage.checkBoxOptionMenu().click()
        elementsPage.homeCheckBoxUnchecked().click()
        elementsPage.checkBoxDisplayResults().should('contain.text','You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    })
})