///<reference types="Cypress"/>

import HomePage from "../Interface/Home";
import FindPage from "../Interface/Find";
import ResultPage from "../Interface/Result";

Cypress.Commands.add('searchFromHeader', (location) => {
    cy.get(HomePage.txtHeaderSearch).click().type(location).type('{enter}')
})

Cypress.Commands.add('search', (location) => {
    cy.get(HomePage.txtBodySearch).click().type(location)
    cy.get(HomePage.btnSearch).click()
})

