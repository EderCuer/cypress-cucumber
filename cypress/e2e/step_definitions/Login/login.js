import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import el from '../../../support/pages/login/elements'
import inventoryEl from '../../../support/pages/inventory/elements'

Given('que o usuário está na página de login', () => {
  cy.visit('/')
})

When('o usuário insere o nome de usuário e senha corretos', () => {
  cy.get(el.userName).clear().type('standard_user')
  cy.get(el.password).clear().type(Cypress.env('password'), { log: false })
})

When('o usuário insere o nome de usuário ou senha incorretos', () => {
  cy.get(el.userName).clear().type('standard_user')
  cy.get(el.password).clear().type('123456', { log: false })
})

When('o usuário clica no botão para fazer o login', () => {
  cy.contains('Login').click()
})

Then('o usuário deve ser redirecionado para a página inicial', () => {
  cy.get(inventoryEl.cart).should('be.visible')
  cy.url().should('include', '/inventory.html')
})

Then('o usuário deve ver uma mensagem de erro', () => {
  cy.get(el.errorMessage).should('be.visible')
})