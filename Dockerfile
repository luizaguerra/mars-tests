FROM cypress/browsers:node12.14.1-chrome83-ff77

WORKDIR /app

LABEL maintainer = "Luiza Guerra"

COPY . .
RUN npm install cypress

RUN npm run cypress:run
