import { After, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import el from '../../../support/pages/checkout/elements'
import inventoryEl from '../../../support/pages/inventory/elements'
const { faker } = require('@faker-js/faker');

Given('que o usuário está na página de checkout', () => {
  cy.login()
  cy.addItemCart()
  cy.get(inventoryEl.cart).click()
  cy.contains('Checkout').click()
})

When('o usuário fornece as informações necessárias', () => {
  cy.get(el.checkoutFirstName).clear().type(faker.name.firstName('male'))
  cy.get(el.checkoutLastName).clear().type(faker.name.lastName())
  cy.get(el.checkoutPostalCode).clear().type('17527350')
  cy.get(el.continueBtn).click()
  cy.get(el.finishBtn).click()
})

When('o usuário não fornece as informações necessárias', () => {
  cy.get(el.checkoutFirstName).clear().type(faker.name.firstName('male'))
  cy.get(el.checkoutLastName).clear().type(faker.name.lastName())
  cy.get(el.continueBtn).click()
})

Then('o pedido deve ser realizado com sucesso', () => {
  cy.get(el.headerSecondary).should('contain', 'Checkout: Complete!')
  cy.get(el.completeMessage).should('contain', 'Thank you for your order!')
})

Then('apresenta um erro impedindo a compra', () => {
  cy.get(el.errorMessage).should('be.visible')
})