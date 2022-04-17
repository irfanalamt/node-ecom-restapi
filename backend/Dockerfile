FROM node:alpine

LABEL version="1.0"
LABEL description="Base docker image for the e-commerce API."
LABEL maintainer = ["irfanalamt@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN ls
RUN npm install
COPY . .

EXPOSE 5000

CMD ["npm", "start"]