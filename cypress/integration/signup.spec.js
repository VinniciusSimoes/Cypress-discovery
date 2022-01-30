import signup from '../pages/SignupPage'

describe('Signup', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {    // d eh a massa de testes , coloco um argumento
            this.deliver = d    // uso o this para acessar a informação para os casos , ela é uma palavra reservada para criar uma variavel de contexto
        })
    });

    it('User should be deliver', function () {
        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    });

    it('Incorrect document', function () {
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    });

    it('Incorrect email', function () {
        signup.go()
        signup.fillForm(this.deliver.email_inv)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    });
});