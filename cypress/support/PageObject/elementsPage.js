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
}
export default ElementsPage