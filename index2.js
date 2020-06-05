const { fetchMyIP, fetchCoordsByIP } = require('./iss_promised');

fetchMyIP()
  .then(fetchMyIP)
  .then(fetchCoordsByIP)
  .then((coords) => {
    console.log(coords);
  });
