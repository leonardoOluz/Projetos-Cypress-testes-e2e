describe('Login de usuarios alura pic', () => {
    // Chamada da tela inicial a cada vez que solicitamos um novo teste
    beforeEach(() => {
        cy.visit('/cypress.config.js') // cy.cypress.config.js, arquivo onde está a baseUrl para abrir a pagina inicial.
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400 // modificando o codigo enviando pelo statusCode de 200 para 400 (Mucks / stubs)
        }).as('stubPost')
    })

    // Comandos personalizados
    it('Fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'));
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('Fazer login de usuario invalido', () => {
        cy.login('jacqueline', '1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    })
})