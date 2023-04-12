const http = require('http');
const mongoose = require('mongoose');

const { loadPlanetsData } = require('./models/planets.model');

const app = require('./app');
const { start } = require('repl');

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  'mongodb+srv://nasa-api:kOcQVp6t57ey981t@nasacluster.bzswcbe.mongodb.net/nasa?retryWrites=true&w=majority';

const server = http.createServer(app);

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (error) => {
  console.error(error);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanetsData();

  server.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
}

startServer();
