

import { weblaunch, Login,Logout } from "../support/Commonpage";
describe('weblaunch', () => {


    it('Dashboard', () => {
      weblaunch()
      Login()
      cy.wait(10000);


      // Check Darkmodea
      cy.xpath('//li[@class="nav-item dropdown notification_dropdown dropdown"]/descendant::a').should('be.visible').click();
      cy.wait(1000);
      cy.xpath('//li[@class="nav-item dropdown notification_dropdown show dropdown"]/descendant::a[1]').should('be.visible').click();
       // To check the alert notification
      cy.xpath('//li[@class="nav-item dropdown notification_dropdown"]/descendant :: a[1]').should('be.visible').click();
      cy.wait(1000)
      cy.xpath('//li[@class="nav-item dropdown notification_dropdown"]/descendant :: a[1]').should('be.visible').click();


      // To check the Card on the Dashbaord
      cy.get('span').contains('Revenue').should('be.visible');
      cy.get('span').contains('Expenses').should('be.visible');
      cy.get('h4').contains('Your Finances, safe and Secure').should('be.visible');
      cy.get('h4').contains('My Progress').should('be.visible');
      cy.get('h4').contains('Leads Overview').should('be.visible');
      cy.wait(1000);
      cy.get('a').contains('Week').should('be.visible').click();
      cy.wait(1000);
      cy.get('a').contains('Month').should('be.visible').click();
      cy.wait(1000);
      cy.get('a').contains('Year').should('be.visible').click();
      cy.wait(1000);
      //cy.get('a').contains('All').should('be.visible').click();
      cy.wait(1000);
      cy.get('span').contains('Number of Projects').should('be.visible');
      cy.get('span').contains('Working Hours').should('be.visible');
      cy.wait(1000);
      cy.get('h4').contains('Today To Do Items').should('be.visible');
      cy.get('input[type="checkbox"]').eq(0).check();
      cy.wait(1000)
      cy.get('input[type="checkbox"]').eq(0).uncheck();
      //cy.get('#customCheckBox input1').check();
     cy.wait(1000);
     cy.get('input[type="checkbox"]').eq(2).check();
      cy.wait(1000)
      cy.get('input[type="checkbox"]').eq(2).uncheck();
      cy.get('h6').contains('All Projects').should('be.visible');
      cy.get('svg').contains('Compete').should('be.visible');
      //cy.get('svg').contains('Pending').should('be.visible');
      cy.get('h4').contains('Active Projects').should('be.visible');
        cy.get('.paginate_button  ').eq(2).click()
        cy.get('p').contains('Elijah James').should('be.visible');
        cy.get('a').contains('Export Report').should('be.visible').click();
        cy.wait(1000);
        cy.get('h4').contains('Running Projects').should('be.visible');
        cy.get('a').contains('Development planning').should('be.visible');
        cy.get('a').contains('Frontend Designing').should('be.visible');
        cy.get('a').contains('Designing planning').should('be.visible');
        

     Logout();
    

    });
  });



