import { getNewLibraryCopy } from "bluebird";


module.exports = {
    login: (username, password) => {
        cy.viewport(1440,900)
        cy.visit('https://www.saucedemo.com/')
        //search and click some element with name type
        cy.get('[data-test="username"]')
          .type(username)
          .get('[data-test=password]')
          .type(password)
          .get('.login-button')
          .click()
          .get('.product_label')
    },
    addToCar: (indexItem, expectedItems) => {
        cy.get(`:nth-child(${indexItem}) > .pricebar > .add-to-cart-button`)
          .click()
          .get('.shopping_cart_badge')
          .should('contain',`${expectedItems}`)
    },
    removeFromCar: (indexItem, expectedItems) => {
        cy.get(`:nth-child(${indexItem}) > .pricebar > .remove-from-cart-button`)
          .click()
        if(expectedItems > 1){
          cy.get('.shopping_cart_badge')
            .should('contain',`${expectedItems}`)
        }else if(expectedItems == 0) {
          cy.get('.shopping_cart_link')
            .should('not.have.class','shopping_cart_badge')
        }
    },
    filterSelect: (orderBy, indexItem, expectedItem) => {
        cy.get('.product_sort_container')
          .select(orderBy)
          .get(`.inventory_list > :nth-child(${indexItem})`)
          .children('.inventory_item_label')
          .should('contain', expectedItem)
    },
    buyFunctions: {
        clickShopingCart: () => cy.get('.shopping_cart_link').click(),
        verifyItemsAmount: (amount) => {
          cy.get('.cart_list > .cart_item')
            .should('have.lengthOf', amount)
        },
        clickNextStep: () => cy.get('.cart_checkout_link').click(),
        fillInformation: (name, lastname, postalCode) => {
          cy.get('[data-test="firstName"]').type(name)
            .get('[data-test="lastName"]').type(lastname)
            .get('[data-test="postalCode"]').type(postalCode)
        },
        verifyPurchase: () => {
          cy.get('.complete-header')
            .should('contain','THANK YOU FOR YOUR ORDER')
        },
        buyItems: function(amount ,name, lastname, postalCode) {
          this.clickShopingCart();
          this.verifyItemsAmount(amount);
          this.clickNextStep();
          this.fillInformation(name, lastname, postalCode);
          this.clickNextStep();
          this.verifyItemsAmount(amount);
          this.clickNextStep();
          this.verifyPurchase();
        }
    },
}

