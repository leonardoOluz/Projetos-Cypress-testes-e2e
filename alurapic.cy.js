describe('Usabilidade da tela inicial', () => {

    // Chamada da tela inicial a cada vez que solicitamos um novo teste
    beforeEach(() => {
        cy.visit('/cypress.config.js') // cy.cypress.config.js, arquivo onde está a baseUrl para abrir a pagina inicial.
    })

    /* Novos casos de teste */
    it('Verificar mensagens tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');

    })

    /*Verificar botão habilitado na tela inicial */
    it('Verificar botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('jacqueline');
        cy.get('input[formcontrolname="password"]').type('123');
        cy.get('button[type="submit"]').should('be.enabled');
    })

    /*Verificar nome da aplicação n tela inicial */
    it('verificar nome da aplicação na tela inicial', () => {
        cy.contains('a', 'ALURAPIC').should('be.visible');
    })

    it('Verificar menu clicavel tela inicial', () => {
        cy.get('.navbar-brand > .fa').click();
        cy.get('.menu-bar > .fa').should('be.visible');
    })

})