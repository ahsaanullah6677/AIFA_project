import { weblaunch, Login,Logout, randomvariablestring, randomitegir} from "../support/Commonpage";


describe('HRM_Employee', () => {



    it('Add new Employee', () => {
        weblaunch();
        Login();
        cy.wait(1000);
    cy.get('span').contains('Employee').scrollIntoView().click();
    cy.get('a[class = "btn btn-primary light btn-sm me-2"]').contains('Add Employee').click();
    cy.wait(1000);
    cy.get('h4').should('have.text', 'Add Employee');




})

});