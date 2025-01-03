// CAC-TAT.spec.js created with Cypress
/// <reference types="Cypress" />
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test




describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o titulo da aplicação', function(){
         cy.title().should('be.equal','Central de Atendimento ao Cliente TAT') 

        })

    it.only('preenche os campos obrigatorios e envia o formulario', function() {
    const longtextarea = 'TestandoTestando Testando TestandoTestandoTestandoTestando Testando TestandoTestandoTestandoTestando '
    cy.get('#firstName').type('Wellington')
    cy.get('#lastName').type('Zeferino')
    cy.get('#email').type('wellington.zeferino.ti@gmail.com')
    cy.get('#open-text-area').type(longtextarea, { dalay: 0 })
    cy.contains('button','Enviar').click()

    cy.get('.success').should('be.visible')
    })

    it(' Exibe mendagem de erro ao submeter o formulario com email formato errado', function(){
        const longtextarea = 'TestandoTestando Testando TestandoTestandoTestandoTestando Testando TestandoTestandoTestandoTestando '
        cy.get('#firstName').type('Wellington')
        cy.get('#lastName').type('Zeferino')
        cy.get('#email').type('wellington.zeferino.tigmail.com')
        cy.get('#open-text-area').type(longtextarea, { dalay: 0 })
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
    })

    it(' Campo telefone vazio quando preenchido com valor não numerico', function(){
        cy.get('#phone')
        .type('foobarbaz')
        .should('have.value', '')

    })


    it(' exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        const longtextarea = 'TestandoTestando Testando TestandoTestandoTestandoTestando Testando TestandoTestandoTestandoTestando '
        cy.get('#firstName').type('Wellington')
        cy.get('#lastName').type('Zeferino')
        cy.get('#email').type('wellington.zeferino.ti@gmail.com')
        cy.get('#open-text-area').type(longtextarea, { dalay: 0 })
        cy.get('#phone-checkbox').click()

        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')
        .contains('Valide os campos obrigatórios!')
    })

   

    it(' preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')
        .type('Wellington')
        .should('have.value', 'Wellington')
        .clear()
        .should('have.value', '')
         cy.get('#lastName')
        .type('Zeferino')
        .should('have.value', 'Zeferino')
        .clear()
        .should('have.value', '')
        cy.get('#email')
        .type('wellington.zeferino.ti@gmail.com')
        .should('have.value', 'wellington.zeferino.ti@gmail.com')
        .clear()
        .should('have.value', '')
        cy.get('#phone')
        .type('43988294385')
        .should('have.value', '43988294385')
        .clear()
        .should('have.value', '')
    })

    it('Exibe mensagem de erro ao submeter o formulario sem preencher campos obrigatorios',function() {
        cy.get('button[type="submit"]').click()
        cy.get('.error')
        .should('be.visible')
        .contains('Valide os campos obrigatórios!')

    })

    it('envia o formulario com sucesso usando o comando custominazado', function() {
        cy.fillMandatoryFirldsAndSubmit()
        cy.get('.success').should('be.visible')
    })

    it('selecione um produto Youtube  por seu texto', function() {
        cy.get('#product')
            .select('YouTube')
            .should('have.value','youtube')
    })
    it('selecione um produto Mentoria por seu valor', function() {
        cy.get('#product')
            .select('mentoria')
            .should('have.value','mentoria')
    })

    it('selecione um produto Blog por seu indice', function() {
        cy.get('#product')
            .select(1)
            .should('have.value','blog')
    })

    it('marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]')
            .check()
            .should('have.value','feedback')
    })

    it('marca  cada tipo de atendimento',function() {
        cy.get('input[type="radio"]')
            .should('have.length', 3)
            .each(function($radio) {
                cy.wrap($radio).check()
                cy.wrap($radio).should('be.checked')


            })
    it('marca marca ambos checkboxes, depois desmarca o último',function() {
        
    
    })



    })






})