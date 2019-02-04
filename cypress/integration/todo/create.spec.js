/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://todomvc.com/examples/react/#/');
  });

  it('creates a doodle', () => {
    cy.get('.new-todo').type('1st!{enter}');
    cy.get('.new-todo').type('2nd{enter}');
    cy.get('.new-todo').type('3rd{enter}');
    cy.get('.toggle')
      .eq(2)
      .click();
    cy.get('.clear-completed').click();
    cy.get('.todo-list')
      .children()
      .should('have.length', 2);
  });
});
