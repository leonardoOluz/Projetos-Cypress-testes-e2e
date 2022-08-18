// Requisições em APIs REST
describe('Buscar fotos do flavio', () => {
    it('Buscar fotos do flavio', () => {

        /* const tempoEsperado = Math.random() * 3000; 
           criando uma variavel com random para verificar um flaky test
        */
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('Farol iluminado')
            //expect(res.duration).to.be.lte(tempoEsperado); // * testando um flaky tests
        })
    })

    // Testando dados sensiveis 
    it('Fazer login do flavio', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env() // utilizando o cypress.env.json para adicionar os dados de login do usuario.
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
            expect(res.body).to.have.property('name')
            expect(res.body.name).to.be.equal('flavio')
        })
    })
})