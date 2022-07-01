import dayjs from 'dayjs'
import HomePage from "../Interface/Home";
import FindPage from "../Interface/Find";
import ResultPage from "../Interface/REsult";

const today = dayjs().format('MMM D')
const cities = require('../fixtures/city.json')

describe('Verify city temperature display correctly', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('.owm-loader').should('not.exist')
  })

  cities.forEach(([keyword, result]) => {
    it(`Verify ${keyword} temperature display correctly`, () => {
      cy.searchFromHeader(keyword)
      debugger
      cy.get(FindPage.lstForcast).find('a').eq(0).click()
      cy.get(ResultPage.lblCity).should('have.text', result)
      cy.get(ResultPage.lblTemperature).invoke('text').should('match', /\d{2}°(C|F)/)
      cy.get(ResultPage.lblDate).invoke('text')
        .should('match', new RegExp(`^${today}, \\d{2}:\\d{2}(am|pm)`))
    })
  })
})
