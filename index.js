// index.js
const { fetchMyIP, fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

fetchCoordsByIP('198.90.88.144', (err, geoLocation) => {
  if (err) {
    console.error("It didn't work", err);
    return;
  }

  console.log('It worked! Returned geoLocation:', geoLocation);
});
