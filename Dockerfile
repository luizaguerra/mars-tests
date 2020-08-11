FROM cypress/browsers:node12.14.1-chrome83-ff77

WORKDIR /app

LABEL maintainer = "Luiza Guerra"
LABEL version="0.1"
LABEL description="This is custom Docker Image for Cypress tests."

COPY . .
RUN npm install cypress

RUN npm run cypress:run
