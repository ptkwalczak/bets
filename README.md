# Bets app

This is a boilerplate of a bettting app.

# Running app

- npm install
- npm run start

- then open the browser with http://localhost:4200

# testing

- npm run test

# e2e tests

- npm run e2e // no tests so far

# NOTES
- more tests needed (nomrally I would add 80% coverage gate in CI/CI)
- I realized I would use Jest instead of Jasmine just for the sake of parallel execution (this should be changed)
- add e2e (I would consider cypres.io instead of protractor)
- add proper logging, introduce log levels, configurable logging
- add better error handling
- localize the app (app is prepared for that, but I did not localize all the strings, just one in pl language) 
- add ngrx (I havent used it in my previous projects, but I get the idea and would like to introduce store management here)
- use worker api for processing events received on web socket for performance increase
- introduce some api testing
- for the sake of lack of time I just tested the ws connection, no proper presentation of the data, also I would consider adding paging or infinite scroll in bets lists view
- I should get rid of all any typings, there are few left
- I should remove move exports to seperate files I left some