class Base {
    visitHome(){
        cy.visit('https://demoqa.com/')
    }
    clickOnElmntButtonFromHome(){
        cy.get('div[class="card mt-4 top-card"]').eq(0).click()
    }
}
export default Base