import { weblaunch, Login,Logout} from "../support/Commonpage";

describe('AMC', () => {



  const min = 1;
     const max = 100;
      const randomInt = Math.floor(Math.random() * (max - min + 6)) + min;

    const randomTenDigitNumber = Math.floor(1000000000 + Math.random() * 9000000000);

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    it('AMC view page', () => {
      weblaunch();
      Login();
      cy.wait(1000);
     //View AMC page
      cy.get('span').contains('AMC').click();
      cy.wait(1000);
      cy.get('h4').should('have.text', 'AMC');
      cy.wait(1000);
      //download export report
      cy.get('i[class = "fa-solid fa-file-excel"]').should('be.visible').click();
      cy.wait(1000);
      //cy.get('th').should('have.text', 'Customer Name');
      // view amc customer
      cy.get('i[class = "fas fa-eye"]').eq(0).click();
      cy.wait(1000);
      cy.get('label').eq(0).should('have.text', 'Customer');
      cy.get('span').contains('AMC').click();
      cy.wait(1000);
      cy.get('h4').should('have.text', 'AMC');
      cy.wait(1000);
      //updated amc customer
      cy.get('i[class = "fas fa-edit"]').eq(0).click();
      cy.wait(1000);
      cy.get('label').eq(0).should('have.text', 'Customer');
      cy.get('input[placeholder = "Number of Services"]').scrollIntoView().clear();
      cy.wait(1000);
      cy.get('input[placeholder = "Number of Services"]').scrollIntoView().type(randomInt);
      cy.wait(1000);
      cy.get('button[type = "submit"]').should('have.text', 'Update').click();
      cy.wait(1000)
      cy.get('td').contains(randomInt);
      //cy.get('div').should('have.text', 'AMC updated successfully');
      cy.wait(1000);
      //delete amc customer
      cy.get('i[class = "fas fa-trash"]').eq(1).click();
      cy.wait(1000);
      cy.get('button[class = "swal-button swal-button--confirm swal-button--danger"]').click();
      cy.wait(3000)
      Logout();
      cy.wait(1000);







    });

});
