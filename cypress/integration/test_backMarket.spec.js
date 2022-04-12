import { faker } from '@faker-js/faker';
/// <reference types = "cypress"/> 
  let firstName= faker.name.firstName();
  let lastName= faker.name.lastName();
  let email= faker.internet.email();
  let password= faker.internet.password()

describe('Tests backmarket', () => {
   beforeEach(() => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get('[data-qa="accept-cta"]').click({force: true})
  });
  it('formulaire valide', () => {
    cy.get('#firstName').click({force: true})
      .type(firstName)
    cy.get('#lastName').click({force: true})
      .type(lastName)
    cy.get('#signup-email').click({force: true})
      .type(email)
    cy.get('#signup-password').click({force: true})
      .type(password)
    cy.contains('Enchantés').click({force: true})
    cy.url().should('eq', 'https://preprod.backmarket.fr/dashboard/orders')
    cy.contains('Chef, oui Chef !!').should('be.visible')
  })
    it('formulaire invalide', ()=>{
     cy.get('#firstName').click({force: true})
      .type(firstName)
    cy.get('#lastName').click({force: true})
      .type(lastName)
    cy.get('#signup-email').click({force: true})
      .type(email)
    cy.get('#signup-password').click({force: true})
    cy.contains('Enchantés').click({force: true})
      cy.contains('Le champ mot de passe est obligatoire').should('be.visible')
     
    }) 
    it('formulaire connexion valide', ()=>{
    cy.get('#signin-email').click({force: true})
      .type(email)
    cy.get('#signin-password').click({force: true})
      .type(password)
    cy.contains('Welcome Back').click({force: true})
    cy.url().should('eq', 'https://preprod.backmarket.fr/dashboard/orders')
    cy.contains('Chef, oui Chef !!').should('be.visible')
    }) 
    it('formulaire connexion invalide', ()=>{
    cy.get('#signin-email').click({force: true})
      .type(email)
    cy.get('#signin-password').click({force: true})
    cy.contains('Welcome Back').click({force: true})
    cy.contains('Le champ mot de passe est obligatoire').should('be.visible')
    }) 

     it('formulaire connexion valide', ()=>{
    cy.get('#signin-email').click({force: true})
      .type(email)
    cy.get('#signin-password').click({force: true})
      .type(password)
    cy.contains('Welcome Back').click({force: true})
    cy.url().should('eq', 'https://preprod.backmarket.fr/dashboard/orders')
    cy.contains('Chef, oui Chef !!').should('be.visible')
    }) 

        it('formulaire connexion invalide', ()=>{
    cy.get('#signin-email').click({force: true})
      .type(email)
    cy.get('#signin-password').click({force: true})
    cy.contains('Welcome Back').click({force: true})
    cy.contains('Le champ mot de passe est obligatoire').should('be.visible')
    })
})
