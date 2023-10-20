Feature: Finalizar pedido

Scenario: Finalizar pedido com sucesso
  Given que o usuário está na página de checkout
  When o usuário fornece as informações necessárias
  Then o pedido deve ser realizado com sucesso

Scenario: Finalizar pedido com falha
  Given que o usuário está na página de checkout
  When o usuário não fornece as informações necessárias
  Then apresenta um erro impedindo a compra