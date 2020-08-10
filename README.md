# Mars Weather Cypress Tests
[![Build Status](https://travis-ci.com/luizaguerra/mars-tests.svg?branch=master)](https://travis-ci.com/luizaguerra/mars-tests) 
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)


This is a project that uses Cypress to perform automated tests using the website, the public API and the NASA GitHub repository that collects the weather data on Mars.

[MARS WEATHER API 1.0.1](https://api.mars.spacexcompanion.app/)

## Getting started
- To run Cypress you will need `Node.js 8 and above`.

- To install dependencies, run the command:
```
npm install
```
- To run tests opening Cypress GUI:
```
npm run cypress:open
```
- To run tests silently, from the CLI:
```
npm run cypress:run
```

## Types of tests
### API tests
**File:** `mars-weather-api.spec.js`

For API testing, I chose to access two different endpoints and make assertions about them.

`https://api.mars.spacexcompanion.app/v1/weather/first`

On the first endpoint, I chose to check if the 14 different wind directions were returned.

`https://api.mars.spacexcompanion.app/v1/weather/latest`

In the second endpoint, I checked the specific keys (average, minimum, maximum) for wind speeds.

Because it is an open government API, authentication is not required.

### UI Test
**File:** `mars-weather-ui.spec.js`

For UI testing, I considered the following user story:
```
As a user,
I would like to search the Mars Weather official website
So that I can find the link to the official API repository
```
This flow presents a common challenge for Cypress, dealing with multi-tabs (when the GItHub repository is opened). 

To resolve the situation, I chose to make a request for the URL contained in the `SOURCE CODE` button and make assertions about the returned body.

To simulate the interaction on different devices, I have included some screen size settings for mobile, tablet and desktop and this test runs on each of the settings.

### Accessibility verification
File: `mars-weather-a11y.spec`

The accessibility check is performed by [`cypress-axe`](https://github.com/avanslaars/cypress-axe) integration. This verification has no assertions because the purpose is to generate a report with the non-conformities found.

As the project is integrated with TravisCI, the absence of assertions aims to allow the build to be completed. The report's transparency allows accessibility issues to be addressed in parallel.