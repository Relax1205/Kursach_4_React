describe('Recipe Selection Flow', () => {
  beforeEach(() => {
    cy.visit('/categories');
  });

  it('selects a category and navigates through the flow', () => {
    // Select a category
    cy.get('.category__card').first().click();
    cy.get('.category__card--selected').should('exist');

    // Navigate to next page
    cy.get('.nav-arrow--right').click();
    cy.url().should('include', '/meat');

    // Select a product
    cy.get('.product__card').first().click();
    cy.get('.product__card--selected').should('exist');

    // Check recipe list
    cy.get('#recipe-list-ul').should('exist');
  });

  it('shows warning when trying to proceed without selecting category', () => {
    cy.get('.nav-arrow--right').click();
    cy.get('#category-warning').should('be.visible');
  });
});