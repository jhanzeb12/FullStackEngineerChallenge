# Paypay Backend

## Build Project
- Make sure MySQL is running on 3306
- Install Node (should be the latest one)
- Clone the repo
- Switch to `paypay-backend` folder in cmd (running with Administrator rights)
- run 'npm install' to install dependencies
- run 'ng serve' to build and run the front end

## Functionality
- Used sequelize ORM to have a better approach to use MySQL
- Application structure is in place and can be extended easily
- Routes are placed in separate folder and in separate files
- DB Models are placed in separate folder and in separate files (Thoug they can be place in separate project and then include that project as git submodule).
- Each router file will have its own middlewares (we can add as many middlewares as we want to secure)
- Since It is assumed that User is logged in and project is only for testing purpose so not much validation is put in place.

## Assumptions
- User is always authenticated (as authorization/ authentication is not implemented)
- MySQL will be running on 3306