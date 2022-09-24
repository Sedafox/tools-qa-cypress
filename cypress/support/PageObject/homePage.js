import Base from "./base";

class HomePage extends Base {
    getBanner(){
        return cy.get('img[src="/images/Toolsqa.jpg"]')
    }
}
export default HomePage