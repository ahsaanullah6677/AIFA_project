import { weblaunch, Login,Logout} from "../support/Commonpage";

describe('Agreement', () => {

    const min = 1;
    const max = 100;
    const randomInt = Math.floor(Math.random() * (max - min + 6)) + min;
    const randomTenDigitNumber = Math.floor(1000000000 + Math.random() * 9000000000);

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    it('Agreement View Page', () => {
      weblaunch();
      Login();
      cy.wait(1000);
      cy.get('span').contains('Agreement').click();
      cy.wait(1000);
      cy.get('h4').should('have.text', "Agreement");
      cy.wait(1000);
      //view customer
      cy.get('i[class = "fas fa-eye"]').eq(0).click();
      cy.wait(3000);
      cy.get('h4').contains('View Agreement');
      cy.wait(1000);
      cy.get('span').contains('Agreement').click();
      cy.wait(1000);
      cy.get('h4').should('have.text', "Agreement");
      cy.wait(1000);
      //edit the customer
      cy.get('i[class = "fas fa-edit"]').eq(0).click();
      cy.wait(3000);
      cy.get('button[type = "submit"]').scrollIntoView().should('have.text', 'Submit').click();
      cy.wait(1000);
      cy.get('h4').should('have.text', "Agreement");
      cy.wait(1000);
      //export to excel
      cy.get('i[class = "fa-solid fa-file-excel"]').should('be.visible').click();
      cy.wait(1000);
      Logout();

    });

      //Check callout function
      it('Agreement View Page (Callout)', () => {
        weblaunch();
        Login();
        cy.wait(1000);
        cy.get('span').contains('Agreement').click();
        cy.wait(1000);
        cy.get('h4').should('have.text', "Agreement");
        cy.wait(1000);

        //call out hit
        cy.get('i[class = "bi bi-telephone"]').eq(0).click();
        cy.wait(3000);
        //cy.get('div[class = "Pending dropdown-toggle"]').should('be.visible').click();
       // cy.wait(1000);
       // cy.get('a[class = "dropdown-item"]').eq(0).click();
       // cy.wait(3000);
        //cy.get('div').contains('In Progress').click();
        //cy.wait(1000);
        //cy.get('a[class = "dropdown-item"]').eq(0).click();
       // cy.wait(3000);
        //check details of customer
        cy.get('span').contains('Detail').click();
        cy.wait(1000);
        cy.get('span').contains('Customer');
        cy.wait(3000);
        cy.get('span').contains('Agreement').click();
      cy.wait(1000);
      cy.get('h4').should('have.text', "Agreement");
      cy.wait(1000);
      cy.get('i[class = "bi bi-telephone"]').eq(0).click();
      cy.wait(3000);

      // to download the invoice of customer
      cy.get('span').contains('Invoice').eq(0).click();
      cy.wait(3000);
      cy.get('button[class = "btn btn-danger"]').should('be.visible').click();
      cy.wait(3000);
      Logout();


    });

    it('Agreement View Page (Callout -> Add callout task)', () => {
      weblaunch();
      Login();
      cy.wait(1000);
      cy.get('span').contains('Agreement').click();
      cy.wait(1000);
      cy.get('h4').should('have.text', "Agreement");
      cy.wait(1000);
      cy.get('i[class = "bi bi-telephone"]').eq(0).click();
      cy.wait(3000);
      // add call out test
      cy.get('i[class = "fa-solid fa-plus me-2"]').should('be.visible').click();
      cy.wait(1000);
      cy.get('input[type = "time"]').should('be.visible').type('09:10');
      cy.wait(1000);
      cy.get('input[type = "date"]').should('be.visible').type('2024-05-09');
      cy.wait(1000);
      cy.get('input[type = "number"]').should('be.visible').type(randomInt);
      cy.wait(1000);
      cy.get('svg[class = "css-8mmkcg"]').eq(1).click();
      cy.wait(1000);
      cy.get('div').contains('robo jhhh').click();
      cy.wait(1000);
      cy.get('svg[class = "css-8mmkcg"]').eq(2).click();
      cy.wait(1000);
      cy.get('div').contains('zain ali').click();
      cy.wait(1000);
      cy.get('svg[class = "css-8mmkcg"]').eq(4).click();
      cy.wait(1000);
      cy.get('div').contains('AC Repair & Maintenance').click();
      cy.wait(1000);
      cy.get('input[name = "callOutNotes"]').should('be.visible').type(text);
      cy.wait(1000);
      cy.get('button[type = "submit"]').click();
      cy.wait(3000);
      cy.get('button[class = "swal-button swal-button--confirm swal-button--danger"]').click();
      cy.wait(3000);
      cy.get('div[class = "Pending dropdown-toggle"]').eq(0).should('be.visible').click();
      cy.wait(1000);
     cy.get('div').contains('Complete').click();
      cy.wait(1000);
      //to complete the invoice
      cy.get('span').contains('Invoice').click();
      cy.wait(1000);
      cy.get('input[type = "date"]').eq(1).type('2024-05-09');
      cy.wait(1000);
      cy.get('input[name = "invoiceDate"]').type('2024-06-09');
      cy.wait(1000);
      cy.get('input[placeholder = "Enter TRN No"]').should('be.visible').type(randomTenDigitNumber);
      cy.wait(1000);
      cy.get('button[type = "submit"]').scrollIntoView().click();
      cy.wait(3000);
      //to download invoice
      cy.get('i[class = "fas fa-eye"]').eq(0).click();
      cy.wait(1000);
      cy.get('button').contains('Download').click();
      cy.wait(3000);
      Logout();


    });

});