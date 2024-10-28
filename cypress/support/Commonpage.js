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

    export function randomvariablestring(){

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 7; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));

    }

    export function randomitegir(){

        const randomTenDigitNumber = Math.floor(1000000000 + Math.random() * 9000000000);

    }



