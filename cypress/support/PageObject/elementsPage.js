import Base from "./base";

class ElementsPage extends Base {
    // TEXT BOX FUNCTIONS
    textBoxMenuOption(){
        return cy.get('ul[class="menu-list"] > li[id="item-0"]').contains('Text Box')
    }
    fullNameField(){
        return cy.get('input[id="userName"]')
    }
    emailField(){
        return cy.get('input[id="userEmail"]')
    }
    currentAddressField(){
        return cy.get('textarea[id="currentAddress"]')
    }
    permanentAddressField(){
        return cy.get('textarea[id="permanentAddress"]')
    }
    textBoxSubmitButton(){
        return cy.get('button[id="submit"]')
    }
    textBoxOutput(){
        return cy.get('div[id="output"]')
    }
    // END OF TEXT BOX FUNCTIONS

    //CHECK BOX FUNCTIONS
    checkBoxOptionMenu(){
        return cy.get('ul[class="menu-list"] > li[id="item-1"]').contains('Check Box')
    }
    homeCheckBoxDropDownUnfolded(){
        return cy.get('.rct-collapse')
    }
    desktopDropDownUnfolded(){
        return cy.get('.rct-node-expanded > ol > :nth-child(1) > .rct-text > .rct-collapse > .rct-icon')
    }
    documentsDropDownUnfolded(){
        return cy.get('#tree-node > :nth-child(2) > :nth-child(1) > :nth-child(2) > :nth-child(2) > .rct-text > .rct-collapse > .rct-icon')
    }
    downloadsDropDownUnfolded(){
        return cy.get(':nth-child(3) > .rct-text > .rct-collapse > .rct-icon')
    }
    homeCheckBoxUnchecked(){
        return cy.get('span').contains('Home')
                 .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    desktopCheckBoxUnchecked(){
        return cy.get('span').contains('Desktop')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    documentsCheckBoxUnchecked(){
        return cy.get('span').contains('Documents')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    downloadsCheckBoxUnchecked(){
        return cy.get('span').contains('Downloads')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    notesCheckBoxUnchecked(){
        return cy.get('span').contains('Notes')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    commandsCheckBoxUnchecked(){
        return cy.get('span').contains('Commands')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    workspaceCheckBoxUnchecked(){
        return cy.get('span').contains('WorkSpace')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    officeCheckBoxUnchecked(){
        return cy.get('span').contains('Office')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    wordFileCheckBoxUnchecked(){
        return cy.get('span').contains('Word File.doc')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    excelFileCheckBoxUnchecked(){
        return cy.get('span').contains('Excel File.doc')
            .find('svg[class="rct-icon rct-icon-uncheck"]')
    }
    checkBoxDisplayResults(){
        return cy.get('#result')
    }
    //END OF CHECK BOX FUNCTIONS

    //RADIO BUTTON FUNCTIONS
<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======
>>>>>>> Stashed changes
    radioButtonOptionMenu(){
        return cy.get('ul[class="menu-list"] > li[id="item-2"]').contains('Radio Button')
    }
    yesRadioButton(){
        return cy.get('#yesRadio')
    }
    impressiveRadioButton(){
        return cy.get('#impressiveRadio')
    }
    noRadioButton(){
        return cy.get('#noRadio')
    }
    youHaveSelected(){
        return cy.get('.mt-3')
    }
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

}
export default ElementsPage