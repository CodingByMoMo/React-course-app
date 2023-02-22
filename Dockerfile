FROM node

WORKDIR /the/workdir/path

COPY package.json ./

RUN npm install

COPY ./ ./

ENV PORT=8080

CMD ["npm", "start"]