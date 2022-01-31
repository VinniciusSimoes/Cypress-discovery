import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    // beforeEach(function () {
    //     cy.fixture('deliver').then((d) => {    // d eh a massa de testes , coloco um argumento
    //         this.deliver = d    // uso o this para acessar a informação para os casos , ela é uma palavra reservada para criar uma variavel de contexto
    //     })
    // });

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMessage)
    });

    it('Incorrect document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000000AA'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    });

    it('Incorrect email', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'user.com.br'

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    });
});