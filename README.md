# react-calendar

This projects features a simple calendar created totally from scratch using:

- [Axios](https://github.com/axios/axios#example)
- [BulmaCSS](https://bulma.io/documentation/overview/start/)
- [RamdaJS](https://ramdajs.com/docs/)
- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [React/Redux](https://react-redux.js.org/introduction/quick-start)
- [MomentJS](https://momentjs.com/docs/#/use-it/node-js/)

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

This projects aims for **production**, so you could also bring the application up with `npm run start`, _but you will also need to provide a backend application!_

## Records

### Create and update reminder

![](./docs/records/create-and-update-reminder.gif)

### Month navigation

![](./docs/records/month-navigation.gif)

### Remove reminder

![](./docs/records/remove-reminder.gif)

## Documentation

- [Considerations](./docs/CONSIDERATIONS.md)
- [Specifications](./docs/SPECIFICATIONS.md)

## To Do

- [x] Application initial setup with `create-react-app` and `react`
- [x] Setup CSS framework with `bulma`
- [x] Setup SASS with `node-sass`
- [x] Setup lint with `eslint`, `eslint-config-standard` and `eslint-watch`
- [x] Setup code format with `editorconfig` and `prettier`
- [x] Setup git hooks with `husky` and `lint-staged`
- [x] Setup redux with `react-redux`, `redux-actions`, `redux-thunk` and `reselect`
- [x] Setup redux for development with `redux-logger` and `redux-devtools-extension`
- [x] Setup immutability with `seamless-immutable`
- [x] Setup functional programming with `ramda`
- [x] Setup HTTP requests with `axios`
- [x] Setup API mock server backend with `json-server`
- [x] Setup date operations with `moment`
- [x] Setup date picker with `react-date-picker`
- [x] Setup time picker with `react-time-picker`
- [ ] Page routing and navigation with `react-router`
- [ ] Tests with `jest` and `enzyme`
- [ ] Setup CI
- [ ] Setup project CI badge

---

romajs - 2020
