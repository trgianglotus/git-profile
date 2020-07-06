# Run project

Live demo: https://git-profile.herokuapp.com/

Run locally:

```sh
# Clone project
$ git clone https://github.com/trgianglotus/git-profile.git
$ cd git-profile

# Start project
$ yarn
$ yarn start

# Run tests
yarn test
```

# Project plan

1. Objectives
2. Scope
3. Technologies
4. Tests
5. Deployment

## 1. Objectives

https://github.com/PerxTech/react-interview

## 2. Scope

Prototype

> Git Profile only shows public info, accessing private info will require authentication which is assumed to be irrelevant.

## 3. Technologies

React, Redux, Ant Design, Mocha, Chai

## 4. Testing

### 4.1 Integration test

1. Organizations
   - Get name of all public organizations belongs to an user
   - Compare structure of local dummy data and data from server
   - Create promises from name of the organizations and run promises
   - Dispatch action and modify state

### 4.2 Unit tests

1. Date time formatter
   - return a date time object with valid input
   - return null on a bad date and time
2. Reducers
   - should return initial state
   - should handle GET_REPOS

## 5. Deployment

Github workflow for heroku application

Add `HEROKU_API_KEY` and `HEROKU_APP_NAME` to github secrets

New build is triggered for every new push to `master`
