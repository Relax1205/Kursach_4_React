describe('Recipe Modal', () => {
  beforeEach(() => {
    cy.visit('/categories');
    cy.get('.category__card').first().click();
    cy.get('.nav-arrow--right').click();
    cy.get('.product__card').first().click();
  });

  it('opens and closes recipe modal', () => {
    // Open modal
    cy.get('#recipe-list-ul li').first().click();
    cy.get('.modal').should('be.visible');
    
    // Check modal content
    cy.get('#modal-recipe-title').should('be.visible');
    cy.get('#modal-recipe-content').should('be.visible');
    
    // Close modal
    cy.get('.modal-close-button').click();
    cy.get('.modal').should('not.exist');
  });

  it('toggles favorite status from modal', () => {
    cy.get('#recipe-list-ul li').first().click();
    cy.get('.modal .favorite-icon').click();
    cy.get('.modal .favorite-icon.favorited').should('exist');
    
    // Toggle off
    cy.get('.modal .favorite-icon.favorited').click();
    cy.get('.modal .favorite-icon.favorited').should('not.exist');
  });
});