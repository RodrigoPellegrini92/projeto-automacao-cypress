# 🤖 Projeto de Automação de Testes (UI) - Cypress

Este repositório contém o meu terceiro projeto prático de portfólio, focado em **Automação de Testes de Interface (Front-end / E2E)** utilizando o **Cypress**. 

O ambiente de testes escolhido foi o e-commerce fictício [SauceDemo](https://www.saucedemo.com/), o mesmo utilizado no meu primeiro projeto de mapeamento manual, fechando assim o ciclo completo de Qualidade de Software: do planejamento à automação.

## 🛠️ Ferramentas e Tecnologias Utilizadas
- **Framework de Automação:** Cypress
- **Linguagem:** JavaScript
- **Plataforma/Motor:** Node.js
- **Editor de Código:** Visual Studio Code (VS Code)

## 🧪 Cenários Automatizados
Foram criados scripts de automação cobrindo os fluxos críticos de autenticação do sistema:

1. **Caminho Feliz (Happy Path):** Login com sucesso utilizando credenciais válidas, validando o redirecionamento correto para a página de inventário e a presença dos elementos visuais (`Asserts` de URL e texto).
2. **Caminho Triste (Sad Path):** Tentativa de login com senha incorreta, validando o bloqueio do sistema e a exibição exata da mensagem de erro esperada para o usuário.

## 📂 Estrutura do Projeto
A automação foi estruturada seguindo o padrão padrão do Cypress:
- `cypress/e2e/login.cy.js`: Arquivo principal contendo a suíte de testes (blocos `describe` e `it`) e as interações com a interface (`cy.visit`, `cy.get`, `cy.type`, `cy.click`).
- `cypress.config.js`: Arquivo de configuração base do Cypress.
- `package.json`: Gerenciador de dependências do Node.js.

## 🚀 Como clonar e executar este projeto na sua máquina

**Pré-requisitos:** É necessário ter o [Node.js](https://nodejs.org/) instalado.

1. Clone o repositório:
```bash
git clone [https://github.com/RodrigoPellegrini92/projeto-automacao-cypress.git](https://github.com/RodrigoPellegrini92/projeto-automacao-cypress.git)
