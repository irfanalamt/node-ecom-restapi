# Full stack e-com

This project utilizes the MERN stack to create a full stack e-commerce application. The front-end is a React app, and the backend is a REST API.

![Alt text](https://user-images.githubusercontent.com/64161258/163041316-31e0ac37-961d-492c-aadd-55889f7a9f75.png "Screenshot-1")
![Alt text](https://user-images.githubusercontent.com/64161258/163042691-549ee921-c984-442a-a49c-ccf2792da398.png "Screenshot-2")

## Features

- User registration/login
- JWT verification
- Material UI design
- Developer mode
- CRUD operations on user, product, cart and order

## How to run the application

### a) Using Docker (easier way)

1. Install docker desktop. `https://www.docker.com/products/docker-desktop/`
2. Clone the repository.
   `git clone https://github.com/irfanalamt/node-ecom-restapi.git`
3. Check the proxy property in package.json of the React app. It should look like this. `"proxy": "http://api:5000"`
4. Navigate into the project directory, start and run all containers.

```sh
$ cd node-ecom-restapi
$ docker-compose up
```

5. When done, stop and remove all containers. `docker-compose down`

### b) Manual start

1. Clone the repository.
   `git clone https://github.com/irfanalamt/node-ecom-restapi.git`
2. In your terminal, navigate to the project root directory.
   `cd node-ecom-restapi
3. a)Install back-end dependencies and start.(http://localhost:5000)

```sh
$ cd backendend
$ npm install
$ npm start
```

b)Open new terminal, install front-end dependencies and start.(http://localhost:3000)

```sh
$ cd frontend
$ npm install
$ npm start
```

## Acknowledgements

- Zara,H&M - product image credits.

## ENJOY!
