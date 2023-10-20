import el from './pages/login/elements'
import inventoryEl from './pages/inventory/elements'

// Comando que faz o login
Cypress.Commands.add('login', (user = 'standard_user', password = Cypress.env('password')) => {
  cy.visit('/')
  cy.get(el.userName).clear().type(user)
  cy.get(el.password).clear().type(password, { log: false })
  cy.contains('Login').click()
})

// Comando que adiciona um produto aleatório ao carrinho
Cypress.Commands.add('addItemCart', () => {
  const products = [
    'Sauce Labs Backpack',
    'Sauce Labs Bike Light',
    'Sauce Labs Bolt T-Shirt',
    'Sauce Labs Fleece Jacket',
    'Sauce Labs Onesie',
    'Test.allTheThings() T-Shirt (Red)'
  ]

  cy.wrap(products[Math.floor(Math.random()*products.length)]).as('getProduct')
  cy.get('@getProduct').then((product) => {
    cy.contains(inventoryEl.descriptionItem, product).within(() => {
      cy.contains('Add to cart').click()
    })
  })
})