# E-commerce REST api

This API was created for small scale e-commerce companies.

## Tech Stack

**Client:** React

**Server:** Node, Express , MongoDB

## Run Locally

1. Clone the repository.
   `git clone https://github.com/irfanalamt/node-ecom-restapi.git`
2. In your terminal, navigate to the project root directory.
   `cd node-ecom-restapi `
3. Run `npm install` to install all dependencies.
4. Input environment variables in the .env file. (Mongo DB URL, Secrets)
5. Run `node app.js` to start the app.
6. Open your local browser and navigate to `http://localhost:5000`

## Routes

user/

| Route          | Method | Description                                | Returns                                   | Requires admin access |
| -------------- | ------ | ------------------------------------------ | ----------------------------------------- | --------------------- |
| /user/find/:id | GET    | Get user details with id, JWT in header    | JSON data of user details except password | YES                   |
| /user/:id      | PUT    | Update user details with id, JWT in header | JSON data of updated user details         | NO                    |
| /user/:id      | Delete | Remove user details with id, JWT in header | JSON data of success message              | NO                    |
| /user/all      | GET    | Get all user's details, JWT in header      | JSON data of all users                    | YES                   |

auth/

| Route          | Method | Description                                           | Returns                                            | Requires admin access |
| -------------- | ------ | ----------------------------------------------------- | -------------------------------------------------- | --------------------- |
| /auth/resister | POST   | Create a new user, encrypt password, save to database | JSON data new user                                 | NO                    |
| /auth/login    | POST   | Checks credential match, return JWT if success        | JSON data of login details except password and JWT | NO                    |
