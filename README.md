### Leapcode monorepo

This repo is a work in progress
#### TODO
- [X] Add scripts to run both projects together in local
- [ ] Setup github actions to deploy each repo individually
- [ ] Create docker build for backend code
- [ ] Add docs to setup this project in local

### Setup Project

This project is a monorepo consisting of code that runs our backend api server and frontend nextjs client. Setting up both projects are necessary to test any of your changes. 

1. Ensure you have nodejs and npm installed in your machine.

2. Clone the repo
```
git clone https://github.com/Leapcode-Open/leapcode-monorepo
```

2. Copy and paste following commands to your terminal to install all dependencies
```
cd leapcode-monorepo/
npm install
npm run setup
```

3. Start the project using the command
```
npm run start
```

### Cleanup

Copy/paste the following command to cleanup all dependencies and libraries
```
npm run clean
```