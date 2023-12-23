FROM node:18

ENV PORT=3030

WORKDIR /var

COPY . .

RUN npm i

EXPOSE $PORT

CMD npm run server