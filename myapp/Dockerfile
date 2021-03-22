FROM node:10-alpine

WORKDIR /app

COPY . .

RUN npm config set registry http://registry.npmjs.org

RUN npm install

RUN  yarn build

EXPOSE 3000

CMD ["yarn", "run", "start:prod"]