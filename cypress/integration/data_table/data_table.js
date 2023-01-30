
/// <reference types="cypress"/>
import { Given,And,Then,When } from "cypress-cucumber-preprocessor/steps";
Given('url git',()=>{
cy.visit('https://qa-environment.koalaresorthotels.com/')
cy.get('#navLogon > .nav-link').click()
})

When('datalari kullanarak sayfaya gir',(dataTable)=>{
   cy.get('#UserName').type(dataTable.rawTable[1][0])
   cy.get('#Password').type(dataTable.rawTable[1][1])

    })
    And('login butonuna tikla',()=>{
        cy.get('#btnSubmit').click({force:true});
     })
   
     Then('sayfaya girildigini onayla',()=>{
        cy.get('.username').should('contain.text','manager')
     })

  

