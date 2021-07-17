/// <reference types="Cypress" />
describe('test new product types form', () => {
  beforeEach(() => {
    cy.visit('/products/type/new');
  });
  it('assert that user can add product types', () => {
    cy.intercept('POST', '/product_types', {
      statusCode: 201,
      body: { 
        success :true,
        message:"Product type was saved",
      }
    }).as('newProdType');
    cy.intercept('GET', '/product_types', {
      statusCode: 200,
      body: [{
        productList: [],
        _id: '60dd25b316e1db4338008b14',
        name: 'Limpieza y aseo',
        __v: 0
      }, {
        productList: [],
        _id: '60dd25b316e1db4338008b14',
        name: 'New product type jajaja',
        __v: 0
      }]
    }).as('prodTypesList');
    cy.get('input').type('New product type jajaja');
    cy.get('button.new-product-type-content-form-submit').click();
    cy.wait('@newProdType');
    cy.wait('@prodTypesList');
    
    cy.get('.new-product-type-content-list')
      .children()
      .last()
      .children()
      .first()
      .should('contain.text', 'New product type jajaja');
  }); 
});