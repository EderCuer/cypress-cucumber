Feature: Adicionar produto ao carrinho de compras

Scenario: Adicionar produto no carrinho
  Given que o usuário está na página inicial
  When o usuário clica no botão "Add to cart" para um produto
    And o usuário clica no carrinho
  Then o produto deve estar no carrinho de compras

Scenario: Remover produto do carrinho
  Given que o usuário está na página inicial
    And possui um produto no carrinho
  When o usuário clica no carrinho
    And o usuário clica no botão "Remove"
  Then o produto deve ser removido do carrinho de compras
