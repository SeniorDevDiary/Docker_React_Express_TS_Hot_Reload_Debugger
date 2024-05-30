FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 5000
EXPOSE 9229

# CMD ["npm", "start"]
CMD ["npm", "debug"]