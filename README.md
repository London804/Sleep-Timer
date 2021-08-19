# SleepTimer

This repo fulfilles the requirements below. 

## The Task
Create Frontend to be used with a JSON API. The API can be mocked (or created) in any way you see fit

Requirements
Frontend initial state:

1 x Dropdown
    Label: "Duration in bed"
    Items: 0-24 hours, in 30-minute increments
1 x Dropdown
    Label: "Duration asleep"
    Items: 0-24 hours, in 30-minute increments
1 x button
    Disabled
    text: "Calculate"
    1 x output text

When the User selects a value for both time inputs, then the button is enabled.
When the User clicks the button:
    The text displays “Loading”
    The frontend calculates a score (100 * duration_asleep/duration_in_bed)
    The frontend sends the score to some ”save” endpoint on some API via AJAX (you do not need to build a real API, but you might find it useful to create mock of endpoints for success and failure)
    When the browser receives a successful API response, then the score is displayed in the output text


## Dev
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
