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
    homeCheckBoxUnchecked(){
        return cy.get('path[d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"]').parent()
        //This path is the only unique identifier for the checkboxes, and it changes when you check the check box. So annoying!
    }
    checkBoxDisplayResults(){
        return cy.get('#result')
    }
}
export default ElementsPage