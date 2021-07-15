/// <reference types="Cypress" />
describe('test new product types form', () => {
  beforeEach(() => {
    cy.visit('/products/type/new')
  });
  it('my first test', () => {
    cy.get('input').type('New product type');
    cy.get('button.new-product-type-content-form-submit').click();
  });
});