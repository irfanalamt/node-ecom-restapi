# Full stack e-com

This project utilizes the MERN stack to create a full stack e-commerce application. The front-end is a React app, and the backend is a REST API.

![Alt text](https://user-images.githubusercontent.com/64161258/164353605-652ba305-2606-4dae-af87-0dbf67fba067.png "Screenshot-home")
![Alt text](https://user-images.githubusercontent.com/64161258/164353609-21967ea9-0477-4476-8b24-193c325cd881.png "Screenshot-products")
![Alt text](https://user-images.githubusercontent.com/64161258/164353611-907b425c-992e-4e95-86bc-21710ba3857b.png "Screenshot-cart")


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
   Access the application on browser. `http://localhost:3000`

```sh
$ cd node-ecom-restapi
$ docker-compose up
```

5.  When done, stop and remove all containers. `docker-compose down`

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
