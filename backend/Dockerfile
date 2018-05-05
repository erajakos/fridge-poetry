FROM node:9.11.1-alpine 

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json ./

RUN npm install

EXPOSE 9000
CMD [ "npm", "run", "dev"]