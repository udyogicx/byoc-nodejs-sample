FROM node:alpine

WORKDIR /usr
USER 10014

COPY package.json ./
COPY tsconfig.json ./
RUN npm install

COPY src ./src
RUN npm run build

ENV PORT 8081
EXPOSE ${PORT}

CMD ["node","dist/app.js"]
