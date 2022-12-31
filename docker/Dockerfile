##### base #####
FROM node:16

RUN mkdir /src && chown node:node /src
WORKDIR /src

USER root
USER node

CMD ["yarn", "dev"]
