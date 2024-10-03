import { weblaunch, Login,Logout} from "../support/Commonpage";
describe('Leads', () => {


  //const min = 1;
     // const max = 100;
      //const randomInt = Math.floor(Math.random() * (max - min + 6)) + min;

      const randomTenDigitNumber = Math.floor(1000000000 + Math.random() * 9000000000);


      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
      for (var i = 0; i < 7; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));


    it('CRM_Leads', () => {
      weblaunch()
      Login()
      cy.wait(1000);

     cy.get('span').contains('Leads').should('be.visible').click();
     cy.wait(1000);
     cy.get('h6').contains('Not Started').should('be.visible');
     cy.get('h6').contains('Cancelled').should('be.visible');
     cy.get('h6').contains('Completed').should('be.visible');
     cy.get('th').contains('Email Address').should('be.visible');
     cy.get('th').contains('Action').should('be.visible');
     cy.get('a').contains('Export Report').should('be.visible').click();
     cy.wait(1000);

     //Dropdowm to check leads
     cy.get('div').contains('All Lead').should('be.visible').click();
     cy.wait(1000);
     cy.get('a').contains('Upcoming Follow-ups').should('be.visible').click();
     cy.wait(1000)
     cy.get('div').contains('Upcoming Follow-ups').should('be.visible').click();
     cy.wait(1000);
     cy.get('a').contains('Old Pending Follow-ups').should('be.visible').click();
     cy.wait(1000);
     cy.get('div').contains('Old Pending Follow-ups').should('be.visible').click();
     cy.wait(1000)
     cy.get('a').contains('All Leads').should('be.visible').click();
     cy.wait(1000);


     //Leads
     cy.get('img[src="/static/media/qpng02.1824c2e460d9ce631bae.png"]').eq(0).click();
     cy.wait(1000)
     //cy.get('button').contains('Close').should('be.visible').scrollIntoView();
     cy.get('button[type = "button"]').eq(0).click();
     cy.wait(1000);
     cy.get('i[class = "fas fa-eye"]').eq(0).click();
     cy.wait(1000);
     cy.get('h4').contains('Update Lead').should('be.visible');
     cy.get('span').contains('Leads').should('be.visible').click();

     Logout();

    });
    
     it('Add lead with new customer', () => {

      weblaunch()
      Login()
      cy.wait(1000);
    
      cy.get('span').contains('Leads').should('be.visible').click();
     cy.wait(1000);

     //Add new leads
     cy.get('div').contains('Add Lead').should('be.visible').click();
     cy.wait(1000);

     //Add lead with new customer
     cy.get('i[class = "fa-solid fa-plus me-2"]').eq(1).click();
     cy.wait(1000);
     cy.get('h4').contains('Add Lead').click();
     cy.get('label').contains('Status');
     cy.get('svg[class = "css-8mmkcg"]').eq(0).click();
     cy.wait(1000);
     cy.get('div').contains('Ms.').click();
     cy.wait(1000);
     cy.get('input[placeholder = "First Name"]').clear();
     cy.get('input[placeholder = "First Name"]').type(text);
     cy.wait(1000);
     cy.get('input[placeholder = "Last Name"]').clear();
     cy.get('input[placeholder = "Last Name"]').type(text);
     cy.get('input[placeholder = "Company Name"]').clear();
     cy.get('input[placeholder = "Company Name"]').type(text);
     cy.get('svg[class = "css-8mmkcg"]').eq(2).click();
     cy.wait(1000);
     cy.get('div').contains('Accepted').click();
     cy.wait(1000);
     cy.get('svg[class = "css-8mmkcg"]').eq(3).click();
     cy.get('div').contains('Twitter').click();
     cy.wait(1000);
     cy.get('svg[class = "css-8mmkcg"]').eq(4).click();
     cy.get('div').contains('Covered Parking').click();
     cy.wait(1000);
     cy.get('svg[class = "css-8mmkcg"]').eq(5).click();
     cy.get('div').contains('Commercial Property').click();
     cy.wait(1000);
     cy.get('svg[class = "css-8mmkcg"]').eq(6).click();
     cy.get('div').contains('General Items').click();
     cy.wait(1000);
     cy.get('svg[class = "css-8mmkcg"]').eq(8).click();
     cy.get('div').contains('robo jhhh').click();
     cy.wait(1000);
     cy.get('svg[class = "css-8mmkcg"]').eq(9).click();
     cy.get('div').contains('sania mirza').click();
     cy.wait(1000);
     //Additional Information
     cy.get('input[placeholder = "Email"]').should('be.visible').scrollIntoView().type('test'+text+"@email.com");
     cy.wait(1000);
     //cy.get('input[placeholder = "Phone"]').should('be.visible').scrollIntoView().type(randomInt);
     cy.get('input[placeholder = "Phone"]').should('be.visible').scrollIntoView().type(randomTenDigitNumber.toString());
     cy.get('input[placeholder = "website"]').should('be.visible').scrollIntoView().type('test'+text+"abc.com");
     cy.get('input[placeholder = "Lead Notes"]').should('be.visible').scrollIntoView().type('test lead notes'+text+"");

     //Address Information
     cy.get('strong').contains('Address Information')
     cy.wait(1000);
     cy.get('textarea[placeholder = "Address"]').should('be.visible').scrollIntoView().type('test adress'+text+"");
     cy.get('input[placeholder = "City"]').should('be.visible').scrollIntoView().type('city'+text+"");
     cy.get('input[placeholder = "State/Province"]').should('be.visible').scrollIntoView().type('state'+text+"");
     cy.get('svg[class = "css-8mmkcg"]').eq(11).click();
     cy.get('div').contains('Al Aweer').click();
     cy.wait(1000);
     cy.get('input[placeholder = "Customer TRN"]').should('be.visible').scrollIntoView().type(randomTenDigitNumber.toString());
     cy.wait(1000);
     cy.get('button[type = "submit"]').contains('Save').scrollIntoView().click();
     cy.wait(3000);
     cy.get('td').contains(text);
     //cy.get('img[src="/static/media/qpng02.1824c2e460d9ce631bae.png"]').eq(0).click();
     //cy.get('button[type = "button"]').eq(0).click();
     cy.wait(1000);
     Logout();






    });
});