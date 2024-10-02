import { weblaunch, Login,Logout} from "../support/Commonpage";

describe('AMC', () => {

    const randomTenDigitNumber = Math.floor(1000000000 + Math.random() * 9000000000);

    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 7; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    it('AMC view page', () => {
      weblaunch();
      Login();
      cy.wait(1000);

      cy.get('span').contains('AMC').click();
      cy.wait(1000);
      cy.get('h4').should('have.text', 'AMC');
      cy.wait(1000);



    });
});
