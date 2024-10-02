export function weblaunch(){


cy.visit ('https://staging.d31px19nsmiqd.amplifyapp.com');
    cy.wait(1000);
    cy.contains('Welcome Back').should('be.visible')

}

export function Login(){

        cy.contains('Welcome Back').should('be.visible')
    
        //Login
        cy.get(':nth-child(1) > .form-control').type('admin@amc.com')
        cy.get(':nth-child(2) > .form-control').type('admin@amc')
        cy.get('.btn').click()
    
    
    }


    export function Logout(){
    
       cy.xpath('//input[@placeholder="Search here..."]/parent::div/following-sibling::ul/child::li[5]').click();
       cy.get('span').contains('Logout ').click();
       cy.wait(1000);
       cy.get('h3').contains('Welcome Back');
    
    
    }



