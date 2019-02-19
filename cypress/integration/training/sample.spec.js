import { getNewLibraryCopy } from "bluebird";

  describe('Training test', function() {
    it('Command children', function() {
      //visit page
      cy.visit('https://example.cypress.io')
      //search and click some element with name type
      cy.get('.caret')
        .click()
      cy.contains('Querying')
        .click()
      cy.get('.banner')
        .children('.container')
        .should('contain', 'Querying')
    })
    it('Command eq', function() {
      //visit page
      cy.visit('https://example.cypress.io')
      //search and click some element with name type
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul')
        .eq(0).should('contain','get')
    })
    it('Command closest', function() {
      //visit page
      cy.visit('https://example.cypress.io')
      //search and click some element with name type
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')
        .closest('ul').should('have.class','home-list')
    })
    it('Command filter', function() {
      //visit page
      cy.visit('https://example.cypress.io')
      //search and click some element with name type
      cy.get('.banner>div')
        .filter('.container')
        .should('contain','Kitchen Sink')
    })
    it('Command find', function() {
      //visit page
      cy.visit('https://example.cypress.io')
      //search and click some element with name type
      cy.get('.home-list > :nth-child(2) > ul')
        .find('li')
        .find('a')
        .should('contain', 'nextUntil')
        .and('have.attr', 'href')
        .and('include', '/commands/traversal')
 
    })
    it('Command mix', function() {
      //visit page
      cy.visit('https://example.cypress.io')
        .get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) ')
        .siblings()
        .should('have.length',16)
        .get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')
        .click()
        .get('#query-btn')
        .should('contain', 'Button')
    })
  })

  
  