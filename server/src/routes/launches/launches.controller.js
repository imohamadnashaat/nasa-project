const {
  existsLaunchWithId,
  getAllLaunches,
  addNewLaunch,
  aboartLaunchById,
} = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  if (
    !launch.launchDate ||
    !launch.mission ||
    !launch.rocket ||
    !launch.target
  ) {
    return res.status(400).json({
      error: 'Missing reqired launch property',
    });
  }

  launch.launchDate = new Date(launch.launchDate);
  // if (launch.launchDate.toString() === 'Invalid Date') {
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid launch date',
    });
  }

  addNewLaunch(launch);
  return res.status(201).json(launch);
}

function httpAboartLaunch(req, res) {
  const launchId = Number(req.params.id);

  if (!existsLaunchWithId(launchId)) {
    return res.status(404).json({ error: 'Launch not found' });
  }

  const aboarted = aboartLaunchById(launchId);
  return res.status(200).json(aboarted);
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAboartLaunch,
};
