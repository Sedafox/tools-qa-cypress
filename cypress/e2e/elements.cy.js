import ElementsPage from "../support/PageObject/elementsPage"
const elementsPage = new ElementsPage()
describe('Tests the Elements on the Elements page', () => {
    beforeEach('', () => {
        elementsPage.visitHome()
        elementsPage.clickOnElmntButtonFromHome()
    })

    //TextBox
    it('Clicks the Text Box option from the Elements Menu, enters all info and clicks submit', () => {
        elementsPage.textBoxMenuOption().click()
        elementsPage.fullNameField().type('Henry Ford')
        elementsPage.emailField().type('HFord1887@aol.com')
        elementsPage.currentAddressField().type('1947 E Test Drive, KS')
        elementsPage.permanentAddressField().type('13000 N No Bugs Pls Lane, NJ')
        elementsPage.textBoxSubmitButton().click()
        elementsPage.textBoxOutput().should('be.visible')
    })
    //End of Text Box

    //CheckBox
    it('Clicks the Check Box Option from the Elements Menu, and select the Home Check Box', () => {
        elementsPage.checkBoxOptionMenu().click()
        elementsPage.homeCheckBoxUnchecked().click()
        elementsPage.checkBoxDisplayResults().should('contain.text','You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    })
    it('Unfolds the Check Box Menu and selects Desktop, Documents, and Downloads manually', () => {
        elementsPage.checkBoxOptionMenu().click()
        elementsPage.homeCheckBoxDropDownUnfolded().click()
        elementsPage.desktopCheckBoxUnchecked().click()
        elementsPage.documentsCheckBoxUnchecked().click()
        elementsPage.downloadsCheckBoxUnchecked().click()
        elementsPage.checkBoxDisplayResults().should('contain.text','You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    })
    it('Unfolds all check boxes and selects the base file checkboxes', () => {
        elementsPage.checkBoxOptionMenu().click()
        elementsPage.homeCheckBoxDropDownUnfolded().click()
        elementsPage.desktopDropDownUnfolded().click()
        elementsPage.documentsDropDownUnfolded().click()
        elementsPage.downloadsDropDownUnfolded().click()
        elementsPage.notesCheckBoxUnchecked().click()
        elementsPage.commandsCheckBoxUnchecked().click()
        elementsPage.workspaceCheckBoxUnchecked().click()
        elementsPage.officeCheckBoxUnchecked().click()
        elementsPage.wordFileCheckBoxUnchecked().click()
        elementsPage.excelFileCheckBoxUnchecked().click()
        elementsPage.checkBoxDisplayResults().should('contain.text','You have selected :homedesktopnotescommandsdocumentsworkspacereactangularveuofficepublicprivateclassifiedgeneraldownloadswordFileexcelFile')
    })
    //End of Checkbox
})