# Betty Blocks test assginment

## Project

Project contatins testing coverage of 3 user stories on https://ui-test-app.betty.app/ web page.

- As a new customer I want to register a new account, so that I can use the application
- As a new customer I want my account to be protected with a password, so that only people who know the password can access my account
- As a user I want to change my avatar, so that I can personalize my account

## Table of contents

- [Installation and Usage](#installation-and-usage)
- [Test Cases](#test-cases)
  - [Story 1](#story-1)
  - [Story 2](#story-2)
  - [Story 3](#story-3)

## Installation and Usage

### Prerequisites

Node.js installed (https://nodejs.org/)

### How-to-run

- Clone this repo locally
- Change directory to cloned repo root
- Run 'npm i' command
- Run 'npm run test' command if you want to kepp an eye on UI
- Run 'npm run test:headless if you want to run test in background

## Test cases

### Story 1

As a new customer I want to register a new account, so that I can use the application

#### Preconditions:

```
- Supported browser is installed
- https://ui-test-app.betty.app/login is accessible
- User from Test Data is not registered
```

#### Test Data:

```
First Name: Random
Last Name: Jack
E-mail: jack@abc.com
Password: MyPwd123
```

- _Step 1_
  - Open link https://ui-test-app.betty.app/login in supported browser
- _Expected result_
  - **Login page** is displayed

---

- _Step 2_
  - Click "REGISTER NEW ACCOUNT" button on **Login flow** form
- _Expected result_
  - Create new account page is displayed (https://ui-test-app.betty.app/new-account)

---

- _Step 3_
  - Enter First Name from _Test Data_ into **First Name** field
  - Enter Last Name Name from _Test Data_ into **Last Name** field
  - Enter E-mail from _Test Data_ which corresponds to format - abc@example.com into **Email Address** field
  - Enter Password from _Test Data_ which meets following requirements - contain 8 characters, 1 lowercase character, 1 upper case character, and 1 digit into **Password** field
  - Click "CREATE ACCOUNT" button
- _Expected result_
  - “Account created Your account has been created, you can now login here” message is shown
  - **Login flow** form is displayed

---

- Step 4
  - Enter E-mail and Password from _Test Data_ into corresponding fields on **Login flow** form
  - Click LOGIN button
- _Expected Result_
  - Account Home page is displayed (https://ui-test-app.betty.app)
  - Header with message 'Welcome Random Jack' present on page

---

### Story 2

As a new customer I want my account to be protected with a password, so that only people who know the password can access my account

#### Preconditions:

```
- Supported browser is installed
- https://ui-test-app.betty.app/login is accessible
- Registered account with settings from Test Data
```

#### Test data:

```
E-mail: jack@abc.com
Password: MyPwd123
```

- _Step 1_
  - Open link https://ui-test-app.betty.app/login in supported browser
- _Expected result_
  - **Login page** is displayed

---

- _Step 2_
  - Enter E-mail from _Test Data_ and password that is different from one in the _Test Data_ (e.g "MyPwd1231) into corresponding fields on **Login flow** form
  - Click LOGIN button
- _Expected result_
  - "Wrong Credentials. You've entered a wrong email address and/or password" message is shown
  - User is still on **Login flow** page

---

- _Step 3_
  - Enter E-mail and Password from _Test Data_ into corresponding fields on **Login flow** form
  - Click "LOGIN" button
- _Expected Result_
  - Account **Home page** is displayed (https://ui-test-app.betty.app)
  - Header with message 'Welcome Random Jack' present on page

---

### Story 3

As a user I want to change my avatar, so that I can personalize my account

#### Preconditions:

```
- Supported browser is installed
- https://ui-test-app.betty.app/login is accessible
- Registered account with settings from Test Data
```

#### Test data:

```
E-mail: jack@abc.com
Password: MyPwd123
Image: ../ryu_avatar.jpg
```

- _Step 1_
  - Open link https://ui-test-app.betty.app/login in supported browser
- _Expected result_
  - **Login page** is displayed

---

- _Step 2_
  - Enter E-mail and Password from _Test Data_ into corresponding fields on **Login flow** form
  - Click "LOGIN" button
- _Expected Result_
  - Account **Home page** is displayed (https://ui-test-app.betty.app)
  - Header with message 'Welcome Random Jack' present on page

---

- _Step 3_
  - Click "MY ACCOUNT" button on toolbar
- _Expected Result_
  - **My Account** page is displayed (https://ui-test-app.betty.app/my-account)

---

- _Step 4_
  - Click "UPLOAD" button on **Change profile image** form
  - On **File Open** dialog Select Image from _Test Data_ - ryu_avatar.jpg
  - Click **Open** button
- _Expected result_
  - Chosen file name, file size and file extension (ryu_avatar.jpg, 35KB, .jpeg) are displayed on **Change profile image** form

---

- _Step 5_
  - Click "SAVE CHANGES" button
- _Expected result_
  - "Success. Profile successfully updated" is shown

---

- _Step 6_
  - Refresh web page
- _Expected result_
  - Avatar is changed to _Test Data_ image

---
