import { getNewLibraryCopy } from "bluebird";
import saucePage  from "../../page/sauce.page";
import users from "../../fixtures/users" 

describe('www.saucedemo.com test', function() {
    it('Login', function() {
      saucePage.login(users.standardUser.username, users.standardUser.password);
      cy.should('contain','Products')
    })
    it('add to car', function(){
      saucePage.login(users.standardUser.username, users.standardUser.password);
      saucePage.addToCar(2,1);
      saucePage.addToCar(1,2);
      saucePage.removeFromCar(2,1);
      saucePage.removeFromCar(1,0);
    })
    it('select filter', function(){
      //login
      saucePage.login(users.standardUser.username, users.standardUser.password);
      //select
      saucePage.filterSelect(`Name (Z to A)`,1,`Test.allTheThings() T-Shirt (Red)`);
      saucePage.filterSelect(`Name (A to Z)`,1,`Sauce Labs Backpack`);
      saucePage.filterSelect(`Price (low to high)`,1,`Sauce Labs Onesie`);
      saucePage.filterSelect(`Price (high to low)`,1,`Sauce Labs Fleece Jacket`);
    })
    it('buy items', function(){
      saucePage.login(users.standardUser.username, users.standardUser.password);
      saucePage.addToCar(2,1);
      saucePage.addToCar(1,2);
      saucePage.buyFunctions.buyItems(2,`Santiago`,`Restrepo`,'100005')
    })
})





































