/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://doodle.com/');
  });

  it('creates a doodle', () => {
    // https://on.cypress.io/type
    cy.get(':nth-child(5) > .d-createButton').click();
    cy.url().should('include', '/create');

    cy.get('#d-pollTitle').type('football game');
    cy.get('.d-actionButtons > .d-button').click();
    cy.get('.d-tabs > ul > :nth-child(3) > a').click();
    cy.get('#d-wizardChoicesView0').type('yes');
    cy.get('#d-wizardChoicesView1').type('no');
    cy.get(
      '#d-wizardOptionsNavigationView > .d-stickyContainer > .d-stickyElement > .d-actionButtons > .d-nextButton',
    ).click();
    cy.get(
      '#d-wizardOptionsNavigationView > .d-stickyContainer > .d-stickyElement > .d-actionButtons > .d-nextButton',
    ).click();
    cy.get(
      '#d-wizardSettingsNavigationView > .d-stickyContainer > .d-stickyElement > .d-actionButtons > .d-nextButton',
    ).click();
    cy.get(
      '#d-wizardSettingsNavigationView > .d-stickyContainer > .d-stickyElement > .d-actionButtons > .d-nextButton',
    ).click();
  });
});
