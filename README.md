# Betty Blocks test assginment
## Project 
Project contatins testing coverage of 3 user stories on https://ui-test-app.betty.app/ web page.
* As a new customer I want to register a new account, so that I can use the application
* As a new customer I want my account to be protected with a password, so that only people who know the password can access my account
* As a user I want to change my avatar, so that I can personalize my account

---

## Table of contents
* [Installation and Usage](#installation-and-usage)
* [Test Cases](#test-cases)

---

## Installation and Usage
### Prerequisites
Node.js installed (https://nodejs.org/)
### How-to-run
- Clone this repo locally
- Change directory to cloned repo root
- Run 'npm i' command
- Run 'npm run test' command

---

## Test cases
### Story 1 - As a new customer I want to register a new account, so that I can use the application

Preconditions:
    * Supported browser is installed
    * https://ui-test-app.betty.app/login is accessible

- *Step 1*
  - Open link https://ui-test-app.betty.app/login in supported browser
- *Expected result*
  - Login page is displayed
- *Step 2*
  -  Click "REGISTER NEW ACCOUNT" button on "Login flow" form
- *Expected Result*
  -  Create new account page is displayed (https://ui-test-app.betty.app/new-account)
- *Expected result*
- *Step 3*
  - Enter <valid value> into First Name field
  - Enter <valid value> into Last Name field
  - Enter Proper E-mail address in format abc@example.com into Email Address field
  - Enter Proper password that meets following requirements - contain 8 characters, 1 lowercase character, 1 upper case character, and 1 digit and into Password field
  - Click CREATE ACCOUNT button
- *Expected result*
  - “Account created Your account has been created, you can now login here” message is shown
  - Login flow form is displayed
- Step 4
  - Enter email and password from step 3 into corresponding fields on Login flow form
  - Click LOGIN button
- *Expected Result*
  - Account Home page is displayed (https://ui-test-app.betty.app)
  - Headed with message 'Welcome <User Name>' present on page




