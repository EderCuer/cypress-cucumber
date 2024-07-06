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

____________________

# Cypress Project with Cucumber + App Actions

Project using Cypress (version 12.17.3) with the [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) plugin and App Actions.
The idea is to provide an example of how to implement tests with Cypress using Gherkin and moving away from page objects.

And why is that? The Cypress developers themselves recommend this approach and explain it here: https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions

## Prerequisites

You need to have Node.js and NPM installed to run the project.

> I used versions `v19.1.0` and `8.19.3` of Node.js and NPM, respectively. I suggest you use the same versions.

## Installation
1. Clone the project
2. In the project directory, run `npm install` (or `npm i`) to install the dev dependencies.

## Running the tests

Run `npx cypress open` to open Cypress in interactive mode.

Or, run `npx run cypress` to run the tests in headless mode.
