# Projeto Cypress com Cucumber + App actions

Projeto utilizando o Cypress (versão 12.17.3) com o plugin [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) e App Actions.
A ideia é trazer um exemplo de como seria a implementação de testes com o Cypress utilizando o Gherkin e fugindo um pouco do page objects. 

E porque isso? Os próprios dev's do Cypress indicam essa abordagem e explicam isso aqui: https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions

## Pré-requisitos

É necessário tem o Node.js e o NPM instalados para executar o projeto.

> Usei as versões `v19.1.0` e `8.19.3` do Node.js e NPM, respectivamente. Sugiro que você use as mesmas versões.

## Instalação
1. Clone o projeto
2. Na página do projeto execute `npm install` (ou `npm i`) para instalar as dependências dev.

## Executando os testes

Execute `npx cypress open` para abrir o Cypress no modo interativo.

Ou, execute `npx run cypress` para rodar os testes em modo headless.
