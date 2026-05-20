it('Deve exibir mensagem de erro ao usar senha incorreta', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauc'); // Senha sem a última letra
    cy.get('[data-test="login-button"]').click();

    // Valida se a mensagem de erro apareceu na tela
    cy.get('[data-test="error"]').should('contain.text', 'Epic sadface: Username and password do not match');
  });