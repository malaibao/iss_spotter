const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
} = require('./iss_promised');

fetchMyIP()
  .then(fetchMyIP)
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((flyOVerArray) => {
    console.log(flyOVerArray);
  });
