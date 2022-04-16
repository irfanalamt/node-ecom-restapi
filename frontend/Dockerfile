FROM node
LABEL version="1.0"
LABEL description="Base docker image for the e-commerce frontend react app."
LABEL maintainer = ["irfanalamt@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]