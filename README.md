# nasa-project

Node.js NASA Mission Control Project

## Getting Started

1. Ensure you have Node.js and Docker installed.
2. Create a free [Mongo Atlas](https://www.mongodb.com/atlas/database) database online or start a local MongoDB database.
3. Create a `server/.env` file with a `MONGO_URL` property set to your MongoDB connection string.
4. In the terminal, run: `npm install`

## Running the Project with Docker Compose

1. Ensure you have the latest version of Docker and Docker Compose installed.
2. In the terminal, run: `docker-compose up`
3. Browse to the mission control frontend at [localhost:8000](http://localhost:8000) and schedule an interstellar launch!

## Running the Project without Docker

1. In the terminal, run: `npm run deploy`
2. Browse to the mission control frontend at [localhost:8000](http://localhost:8000) and schedule an interstellar launch!

## Running the Tests

To run any automated tests, run `npm test`. This will:

- Run all the client-side tests: `npm test --prefix client`
- Run all the server-side tests: `npm test --prefix server`
