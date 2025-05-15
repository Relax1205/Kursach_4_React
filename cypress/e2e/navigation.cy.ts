describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to main pages', () => {
    cy.get('nav').contains('О наших рецептах').click();
    cy.url().should('include', '/about');

    cy.get('nav').contains('Избранное').click();
    cy.url().should('include', '/favorites');

    cy.get('nav').contains('Главная').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('starts recipe selection flow', () => {
    cy.contains('Начать').click();
    cy.url().should('include', '/categories');
  });
});