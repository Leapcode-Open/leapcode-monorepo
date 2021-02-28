# Leapcode core backend

##Pre
- Create an app on Firebase to initate authentication
- Add service account as environment -- https://firebase.google.com/docs/admin/setup#initialize-sdk
- Create an account on https://getstream.io/ for timeline
- Create Auth token from Github and a test application -- https://developer.github.com/apps/building-oauth-apps/creating-an-oauth-app/

## Installation

- Install NodeJS, MongoDB
- Install `npm` or `yarn`
- Rename `env.example` to `.env`
- Fulfill `.env` data
- Start MongoDB
- Run `yarn run dev` or `npm run dev`

## TODO

- Split users and admins to two collections:
  - Rename auth.controller.js to user.controller.js
  - create user.route.js and refactor auth.route.js to contain only this demonstration "/secret" routes
- Integrate Swagger UI documentation
- Write unit tests
