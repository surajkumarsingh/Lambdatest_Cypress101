/// <reference types="cypress-xpath" />
/// <reference types="cypress" />
/// <reference types="cypress-axe" />
/// <reference types="cypress-real-events" />


describe('LambdaTest Cypress 101 Scenarios', ()=>{
it('Test Scenario 1:', ()=>{

   cy.visit('https://www.lambdatest.com/selenium-playground')
   cy.xpath("//a[text()='Drag & Drop Sliders']").click({force:true})
   cy.log("Clicked on Slider section")
   cy.get("input[type='range'][value='15']").invoke('val', 95).trigger('change').click({ force: true }).siblings('output').invoke('val', 95).trigger('change').should('have.text', 95);
});

it('Test Scenario 2:', ()=>{
    cy.visit('https://www.lambdatest.com/selenium-playground')
    cy.viewport('samsung-note9');
    cy.xpath("//*", { timeout: 10000 }).should('be.visible')
    cy.xpath("//a[text()='Input Form Submit']").click();
    
cy.injectAxe();
cy.checkA11y(null, {
    rules:{
        "duplicate-id" :{enabled:false},
        "list" :{enabled:false},
        "landmark-one-main" :{enabled:false},
        "region" :{enabled:false},
        "color-contrast" :{enabled:false},
        "select-name" :{enabled:false},    
    }
});
 cy.get('input#name').type('suraj')
.get('input#inputEmail4').type('suraj@test.com')
.get('input#inputPassword4').type('SurajKumar')
.get('input#company').type('ABC')
.get('input#websitename').type('ABC.com')
.get("select[name='country']").select('India')
.get('input#inputCity').type('City')
.get('input#inputAddress1').type('Address1')
.get('input#inputAddress2').type('Address2')
.get('input#inputState').type('state')
.get('input#inputZip').type('90003')
.get("button[type='submit']").click({force:true})
.get("button[type='submit']").should('not.be.visible');
const thresholds = {
    "performance": 10,
    "accessibility": 50,
    "best-practices": 50,
    "seo": 50,
    "pwa": 0
};
const lighthouseConfig = {
    formFactor: 'desktop',
    screenEmulation: {
        disabled: true
    },
};
cy.lighthouse(thresholds, lighthouseConfig)
cy.get(".success-msg").should('have.text', "Thanks for contacting us, we will get back to you shortly.")

});

});