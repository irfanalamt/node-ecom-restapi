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
4. Input environment variables in the .env file. (Mongo DB URL,Secrets)
5. Run `node app.js` to start the app.
6. Open your local browser and navigate to `http://localhost:5000`

## Routes

| Route          | Method | Description                                              | Returns                   | Requires admin access |
| -------------- | ------ | -------------------------------------------------------- | ------------------------- | --------------------- |
| /user/find/:id | GET    | Get user details with id as path parameter,JWT in header | JSON data of user details | YES                   |
