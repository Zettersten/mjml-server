FROM node:latest

RUN mkdir /app
WORKDIR /app

COPY package.json package-lock.json index.js /app/

RUN npm install

ARG DEFAULT_PORT=28102
ENV HOST=0.0.0.0
ENV PORT=${DEFAULT_PORT}

EXPOSE ${DEFAULT_PORT}

ENTRYPOINT ["node", "index.js"]