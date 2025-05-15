describe('Favorites Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('nav').contains('Избранное').click();
  });

  it('shows empty favorites message', () => {
    cy.contains('Избранных рецептов не найдено').should('be.visible');
  });

  it('adds and removes recipes from favorites', () => {
    // Navigate to recipes
    cy.visit('/categories');
    cy.get('.category__card').first().click();
    cy.get('.nav-arrow--right').click();
    
    // Select a product to see recipes
    cy.get('.product__card').first().click();
    
    // Add recipe to favorites
    cy.get('#recipe-list-ul li').first().within(() => {
      cy.get('.favorite-icon').click();
    });
    
    // Check favorites page
    cy.get('nav').contains('Избранное').click();
    cy.get('#favorites-list-ul li').should('have.length.at.least', 1);
    
    // Remove from favorites
    cy.get('.favorite-icon').click();
    cy.contains('Избранных рецептов не найдено').should('be.visible');
  });
});