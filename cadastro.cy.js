describe('Cadastro de usuario alura pic', () => {
    // Chamada da tela inicial a cada vez que solicitamos um novo teste
    beforeEach(() => {
        cy.visit('/cypress.config.js') // cy.cypress.config.js, arquivo onde está a baseUrl para abrir a pagina inicial.
    })
    // Verificando mensagens de email invalido 
    it('verificar mensagens de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.get('input[formcontrolname="email"]').type('leoluz');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })
    // Verificando mensagens na de validação 
    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.wait(10000);
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    })
    // Verificando mensagens de senha abaixo de 8 caracteres tipo teste de limite
    it('verificar mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })
    // Verificando usuario com letras maiuscula 
    it('Digitar usuario com letra maiuscula', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('LEONARDO');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');

    })
    // Utilizando massa de dados.
    const usuarios = require('../../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it(`Registra novo usuário ${usuario.userName}`, () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname="userName"]').type(usuario.userName);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })

    })

})