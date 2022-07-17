# Open weather map cypress tests

![Tests](https://github.com/huyhua/openweathermap-test/actions/workflows/run-tests.yml/badge.svg)

Cypress test for open weather map.

Test approach document [here](test-approach.md)
Manual test cases and defects [here](manual-testcases.xlsx)

## Prerequisites
- Node is installed [Guide](https://nodejs.org/en/download/package-manager/)
- All packages installed using `npm i`
- Cup of coffee ☕

## Commands
- `npx cypress open` to launch the GUI
- `npm run cy:browser:chrome` to run test in chrome headlessly
- `npm run cy:browser:firefox` to run test in firefox headlessly

## Project Structure

```
├── cypress
│   ├── fixtures        -- Mock json files and test data
│   ├── integration     -- This is where the test is
│   ├── pages           -- Page objects
│   ├── plugins
│   └── support
```
## Notes

- For the best coding experience and correct style check please use `Visual Studio Code` to review.
- The project is written in javascript using page object pattern. While cypress discourages the use of pageobject in favor of app actions, the use of pageobject is simply for demonstration purpose.
- Repo is run using github CI on every commit.
- While multiple locator types were suggested, it's far more efficient and clean to just use css locator because cypress is built upon jquery. However, different query techniques were used.
- `prettier` and `eslint` is used to keep code neat.
