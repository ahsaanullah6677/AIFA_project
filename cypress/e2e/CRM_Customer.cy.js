import { weblaunch, Login,Logout} from "../support/Commonpage";

describe('Leads', () => {

    //const min = 1;
    //const max = 100;
    //const randomInt = Math.floor(Math.random() * (max - min + 6)) + min;
    const randomTenDigitNumber = Math.floor(1000000000 + Math.random() * 9000000000);

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    it('Customer View Page', () => {
      weblaunch();
      Login();
      cy.wait(1000);
      // Go to customer sub tab
     cy.get('span').contains('Customers').should('be.visible').click();
     cy.wait(1000);
     cy.get('h4').contains('Customers');
     cy.get('th').contains('Full Name');
     //to check the active and inactive button
     cy.get('div').contains('Active').scrollIntoView().click();
     cy.wait(1000);
     cy.get('a').contains('Inactive').scrollIntoView().click();
     cy.wait(10000);
     cy.get('div').contains('Inactive').scrollIntoView().click();
     cy.wait(1000);
     cy.get('a').contains('Active').scrollIntoView().click();
     cy.wait(10000);
     //View the customer profile
     cy.get('i[class = "fas fa-eye"]').eq(0).click();
     cy.get('h4').contains('View Customer');
     cy.wait(1000);
     cy.get('span').contains('Customers').should('be.visible').click();
     cy.wait(1000);
     cy.get('h4').contains('Customers');
    // check customer ledger
    cy.get('span').contains('Customer Ledger').click();
    cy.wait(1000);
    cy.get('h4').contains('Customer Ledger');
    cy.get('a').contains('Transaction History').click();
    cy.wait(1000);
    cy.get('th').contains('Payment Date');
    cy.get('a').contains('Customer Ledger').click();
    cy.wait(1000);
    cy.get('th').contains('InvoiceId');
    cy.get('span').contains('Customers').should('be.visible').click();
     cy.wait(1000);
     cy.get('h4').contains('Customers');
     cy.get('button').contains('2').click();
     cy.wait(1000);
     Logout();


    });

     it.only('Add new Customer', () => {
      weblaunch();
      Login();
      cy.wait(1000);

      //Add new customer
      cy.get('span').contains('Customers').should('be.visible').click();
      cy.wait(1000);
      cy.get('h4').contains('Customers');
      cy.get('a').contains('Add Customer').click();
      cy.wait(1000);
      cy.get('h4').contains('Add Customer');
      cy.get('input[placeholder = "First Name"]').clear();
     cy.get('input[placeholder = "First Name"]').type(text);
     cy.wait(1000);
     cy.get('input[placeholder = "Last Name"]').clear();
     cy.get('input[placeholder = "Last Name"]').type(text);
     cy.wait(1000);
     cy.get('input[placeholder = "Email"]').should('be.visible').scrollIntoView().type('test'+text+"@email.com");
     cy.wait(1000);
     cy.get('input[placeholder = "Phone"]').should('be.visible').scrollIntoView().type(randomTenDigitNumber.toString());
     cy.get('svg[class = "css-8mmkcg"]').eq(1).click();
     cy.get('div').contains('Finance').click();
     cy.get('input[placeholder = "Title"]').clear();
     cy.get('input[placeholder = "Title"]').type(text);
     cy.get('input[placeholder = "Customer TRN"]').should('be.visible').scrollIntoView().type(randomTenDigitNumber.toString());
     cy.wait(1000);
     cy.get('input[placeholder = "City"]').should('be.visible').scrollIntoView().type('city'+text+"");
     cy.get('input[placeholder = "State/Province"]').should('be.visible').scrollIntoView().type('state'+text+"");
     cy.get('svg[class = "css-8mmkcg"]').eq(2).click();
     cy.get('div').contains('Al Baraha').click();
     cy.get('input[placeholder = "Country"]').scrollIntoView().type(+text+"country");
     cy.get('input[placeholder = "Address"]').should('be.visible').scrollIntoView().type('test adress'+text+"");
     cy.wait(1000);
     cy.get('button[type = "submit"]').contains('Save').scrollIntoView().click();
     cy.wait(3000);
     cy.get('td').contains(text);
     cy.get('i[class = "fas fa-eye"]').eq(0).click();
     cy.get('h4').contains('View Customer');
     cy.wait(1000);
     cy.get('span').contains('Customers').should('be.visible').click();
     cy.wait(1000);
     cy.get('h4').contains('Customers');
     Logout();









  

    });

});