FROM node

RUN npm install -g mjml-server

ARG DEFAULT_PORT=28102
ENV HOST=0.0.0.0
ENV PORT=${DEFAULT_PORT}

EXPOSE ${DEFAULT_PORT}
ENTRYPOINT mjml-server --hostname ${HOST} --port ${PORT}