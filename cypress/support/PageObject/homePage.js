import Base from "./base";

class HomePage extends Base {
    getBanner(){
        return cy.get('img[src="/images/Toolsqa.jpg"]')
    }
    getSeleniumBanner(){
        return cy.get('img[src="/images/WB.svg"]')
    }
    getAllCards(){
        return cy.get('div[class="card mt-4 top-card"')
    }
    getFirstCard(){
        return this.getAllCards().eq(0)
    }
    getSecondCard(){
        return this.getAllCards().eq(1)
    }
    getThirdCard(){
        return this.getAllCards().eq(2)
    }
}
export default HomePage