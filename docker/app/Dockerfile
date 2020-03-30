FROM node:12-alpine

WORKDIR /opt/app

# Installe les dépendances npm.
COPY package*.json ./
RUN npm install

# Copie les sources.
COPY *.js ./
COPY static/ ./static/

ENTRYPOINT ["node", "/opt/app/server.js"]
