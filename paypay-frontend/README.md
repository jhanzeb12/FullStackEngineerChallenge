# PaypayFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build Project
- Make sure backend is running
- Install Node (should be the latest one)
- Install Angular CLI using `node i -g @angular/cli`
- Clone the repo
- Switch to `paypay-frontend` folder in cmd (running with Administrator rights)
- run `npm install` to install dependencies
- run `ng serve` to build and run the front end

## Functionality
- Interceptors are in place to extend the functionality quickly
- Loader service is implemented (You will see a loader working on every http call)
- Add/ Edit/ Delete Employee is implemented (under Manage Employees in Admin View);
- Provided the complete folder structure so anybody can use it to extend the application
- Created the SCSS architecture too.

## Assumptions
- User is always authenticated (as authorization/ authentication is not implemented)
- User will always land in admin panel so created only admin panel
- Logout functionality is not working
- MySQL will be running on 3306