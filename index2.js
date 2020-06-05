const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((result) => console.log(result))
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
