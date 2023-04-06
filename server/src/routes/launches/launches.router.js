const express = require('express');
const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAboartLaunch,
} = require('./launches.controller');

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpAddNewLaunch);
launchesRouter.delete('/:id', httpAboartLaunch);

module.exports = launchesRouter;
