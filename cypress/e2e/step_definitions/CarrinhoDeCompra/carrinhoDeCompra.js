import { After, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import el from '../../../support/pages/inventory/elements'

// array para selecionar o produto de forma aleatória
const products = [
  'Sauce Labs Backpack',
  'Sauce Labs Bike Light',
  'Sauce Labs Bolt T-Shirt',
  'Sauce Labs Fleece Jacket',
  'Sauce Labs Onesie',
  'Test.allTheThings() T-Shirt (Red)'
]

Given('que o usuário está na página inicial', () => {
  cy.login()
})

Given('possui um produto no carrinho', () => {
  // Randomicamente, seleciona um produto para realizar o teste
  cy.wrap(products[Math.floor(Math.random()*products.length)]).as('getProduct')
  // Adiciona um produto no carrinho
  cy.get('@getProduct').then((product) => {
    cy.contains(el.descriptionItem, product).within(() => {
      cy.contains('Add to cart').click()
    })
  })
})

When('o usuário clica no botão {string} para um produto', (addBtn) => {
  // Randomicamente, seleciona um produto para realizar o teste
  cy.wrap(products[Math.floor(Math.random()*products.length)]).as('getProduct')
  // Adiciona o produto no carrinho
  cy.get('@getProduct').then((product) => {
    cy.contains(el.descriptionItem, product).within(() => {
      cy.contains(addBtn).click()
    })
  })
})

When('o usuário clica no carrinho', () => {
  cy.get(el.cart).click()
})

When('o usuário clica no botão {string}', (btn) => {
  // Clica no botão do produto que foi escolhido anteriormente
  cy.get('@getProduct').then((product) => {
    cy.contains(el.cartItem, product).within(() => {
      cy.contains(btn).click()
    })
  })
})

Then('o produto deve estar no carrinho de compras', () => {
  cy.get('@getProduct').then((product) => {
    cy.get(el.cartList).should('contain', product)
  })
})

Then('o produto deve ser removido do carrinho de compras', () => {
  cy.get('@getProduct').then((product) => {
    cy.get(el.cartList).should('not.contain', product)
  })
})

After(() => {
  cy.clearAllCookies()
})