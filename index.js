// index.js
const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
} = require('./iss');
let IP;
let geoLocationObj;

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
//   let IP = ip;
// });

// fetchCoordsByIP(IP, (err, geoLocation) => {
//   if (err) {
//     console.error("It didn't work", err);
//     return;
//   }

//   console.log('It worked! Returned geoLocation:', geoLocation);
//   geoLocationObj = geoLocation;
// });

// geoLocationObj = { latitude: '44.66200', longitude: '-63.60170' };

// fetchISSFlyOverTimes(geoLocationObj, (err, ISSData) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(`It worked! Returned flyover times: \n`, ISSData);
// });

nextISSTimesForMyLocation((err, ISSData) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Successfully gettting ISSData');
  console.log(ISSData);
});
