import { weblaunch, Login,Logout} from "../support/Commonpage";

describe('Agreement', () => {

    //const min = 1;
    //const max = 100;
    //const randomInt = Math.floor(Math.random() * (max - min + 6)) + min;
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
      


    });

});