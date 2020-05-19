# jobsity-front-end-challenge-calendar

## Contact information

- Name: José Romualdo dos Santos Neto
- Personal E-mail: joseromualdoneto@gmail.com
- Github E-mail: romajslit@gmail.com
- Github: https://github.com/romajs/

## Requirements

- Node v12+
- Npm v6.12+

This projects suports `nvm`, please consider using it to install `node` and `npm` correct versions:

```sh
nvm install v12
nvm use
```

_This projects include a versioned `.env`, with all configuration that you may need._

## Installation

Run `npm install`

## Usage

Run `npm run start:dev`

This will bring up `json-server` running on port `4000` and the application running on port `3000`.
Your browser should automatically open at http://localhost:3000.

## Challenge specification

Here is the features list from the challenge that had be implemented:

### Mandatory Features

- [x] Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.
- [x] Display reminders on the calendar view in the correct time order.
- [x] Allow the user to select color when creating a reminder and display it appropriately.
- [x] Ability to edit reminders – including changing text, city, day, time and color.
- [x] Add a weather service call from a free API such as ​ Open Weather Map​ , and get theweather forecast (ex. Rain) for the date of the calendar reminder based on the city.
- [ ] Unit test the functionality: ​ Ability to add a new "reminder" (max 30 chars) for a user entered day and time. Also, include a city.

### Bonus (Optional)

- [x] Expand the calendar to support more than the current month.
- [ ] Properly handle overflow when multiple reminders appear on the same date.
- [x] Functionality to delete one or ALL the reminders for a specific day

## Considerations

## Architecture

This application was created using [React](https://reactjs.org/) and [Redux](https://redux.js.org/), which are common technologies used in frontend software development, the [create-react-app](https://www.npmjs.com/create-react-app) tool facilitate the project initial setup.

No extra configuration was made into webpack, neither in babel, making the code as simple as possible, and focus on developing the requirements.

There was no need to setup [react-router](https://reacttraining.com/react-router/web/guides/quick-start), this application contains only a calendar rendering page, where reminders can be created, edited and deleted using one mode.

Application code is inside the `src/` folder, organized by features: **calendar**, **reminder** and **weather**, where each one has it own components, redux actions, reducers, selectors, an other files related, like API and services.

Application state control is within redux, there is no state control within the components. React hooks are used on most components.

The Container vs UI Components standart was used, with Functional Components to create most of the components.

### Layout

[Sass](https://sass-lang.com/) and the [bulma.io](https://bulma.io/) CSS framework was used, as both are very simple. The only ready-made components that were used were: [react-date-picker](https://www.npmjs.com/package/react-date-picker) as a form input for **date**, and [react-time-picker](https://www.npmjs.com/package/react-time-picker) as a form input for **time**, both used in the reminder form.

### Thirdy-part libraries

[Moment.js](https://momentjs.com/) was choosed to work with date and time manipulation, which is a well-known library, easy to use, and has good documentation.

[json-server](https://github.com/typicode/json-server) was choosed to create a behavior similar to a real application, this will bring up a mock server to be used by the frontend application.

I also chose to use some functional programming techniques and concepts, using the [ramdajs](https://ramdajs.com/) library, where I can do more efficient operations, without having to create error handling everywhere. **Although this makes the code difficult to understand, for those who are not used to it.**

### Requirements

I was able to complete all the mandatory requirements, with the exception of the unit test for the functionality to create a new reminder, i would need more time for this.

I performed the integration with the weather service, [Open Weather Map](https://openweathermap.org/), but it was not clear when and where it should be done, besides where this information should be displayed. I chose to do this integration when creating or editing a reminder, when the city, date and time fields are filled in the form, displaying the information in the reminder form itself.

In addition, I was able to extend the functionality of the calendar, to support the creation of reminders beyond the current month, using a navigation between the months, through navigators, going from the previous to the next month.

I was also able to create the functionality to delete a particular reminder.

I didn't have time to deal with the accumulation of reminders for the same date, it was not implemented.

### Open Wheater API

As for the integration with the Open Weather Map weather service, I created the account and generated the **APPID** integration key, and followed all the steps in the documentation, but I was not successful in performing the integration, all requests with my **APPID** were unauthorized, I believe it is a problem with the API.

To get around this problem, I create a mock into [mocky.io](http://mock.io/) from an example response, which will always returns the same response for all requests. You will see a _FIXME_ in the **WeatherAPI.js**

In addition, the current implementation for this integration is far from correct, I would need more time to understand the documentation, and pass the correct parameters to obtain the weather daily forecast, for a given date, time and city.

### Form control/validation

An important point to note, is that there is no form control for creating and / or editing a reminder, there is no mandatory field validation or anything like that, as it is a point that has not been touched at the requirements, and furthermore it would take more time to do it.

The only existing validation is the one mentioned in the requirements, for the maximum character limit of the reminder name, which can be easily done through the html input itself.

### Quality

As for the code standard, I made the setup using [editorconfig](https://editorconfig.org/), [prettier](https://prettier.io/) and [eslint](https://eslint.org/), using the [standard](https://github.com/standard/eslint-config-standard) and [standart-react](https://github.com/standard/eslint-config-standard-react) configuration, in addition to some custom rules of my preference.

[Husky](https://www.npmjs.com/package/husky) and [lint-staged](https://www.npmjs.com/package/lint-staged) were also used to set up script execution on [git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks), running the _lint_ on _pre-commit_, and _test_ on _pre-push_.

Obviously much is yet to be done, first to increase code coverage, by creating unit tests for component behavior, and rendering, using the [enzyme](https://github.com/enzymejs/enzyme) library. Also create unit tests for the API and service layers, as well as for redux actions and reducers, as well as for selectors. And for last but not less important, create functional tests of the app, using a tool like [Cypress](https://www.cypress.io/), [WDIO](https://webdriver.io/docs/clioptions.html) or [puppeteer](https://github.com/puppeteer/puppeteer).

[Sonarqube-scanner](https://www.npmjs.com/package/sonarqube-scanner) could also be configurated, and sent coverage data to [SonarQube](https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/) quality gate.

In addition, much of the code can be refactored, there is a lot of instantiation of _moment_ objects everywhere, many pieces of code can be analyzed and optimized for performance.

Obviously, all of this could be done with more time for development. =)

---

romajs - 2020
