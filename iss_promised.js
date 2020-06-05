const request = require('request-promise-native');

const fetchMyIP = () => request(`https://api.ipify.org/?format=json`);

const fetchCoordsByIP = (ipString) => {
  const ip = JSON.parse(ipString).ip;
  const data = request(`https://ipvigilante.com/${ip}`);
  return data;
};

const fetchISSFlyOverTimes = (coordsData) => {
  const { latitude, longitude } = JSON.parse(coordsData).data;
  return request(
    `http://api.open-notify.org/iss-pass.json?lat=${latitude}&lon=${longitude}`
  );
};

module.exports = { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes };
