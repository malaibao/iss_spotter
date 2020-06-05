const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function (callback) {
  // use request to fetch IP address from JSON API
  request(`https://api.ipify.org/?format=json`, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }
    // if non-200 status, assume server error
    if (res.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data.ip);
    return;
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request(`https://ipvigilante.com/${ip}`, (err, res, body) => {
    if (err) {
      callback(err, null);
      return;
    }

    if (res.statusCode !== 200) {
      const msg = `Status Code ${res.statusCode} when fetching coordinates for IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body).data;
    const geoLocation = {
      latitude: data.latitude,
      longitude: data.longitude,
    };
    callback(null, geoLocation);
  });
};

const coords = { latitude: '44.66200', longitude: '-63.60170' };

const fetchISSFlyOverTimes = (coords, callback) => {
  request(
    `http://api.open-notify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`,
    (err, res, body) => {
      if (err) {
        callback(err, null);
        return;
      }

      if (res.statusCode !== 200) {
        const msg = `Status Code ${res.statusCode} when fetching ISS data. Response: ${body}`;
        callback(Error(msg), null);
        return;
      }

      const data = JSON.parse(body).response;
      // console.log(data);
      callback(null, data);
    }
  );
};

const nextISSTimesForMyLocation = (callback) => {
  fetchMyIP((error, IP) => {
    if (error) {
      return callback(error, null);
    }

    fetchCoordsByIP(IP, (error, location) => {
      if (error) {
        return callback(error, null);
      }

      fetchISSFlyOverTimes(location, (err, ISSData) => {
        if (error) {
          return callback(error, null);
        }
        callback(null, ISSData);
      });
    });
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation,
};
