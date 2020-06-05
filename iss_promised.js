const request = require('request-promise-native');

const fetchMyIP = () => request(`https://api.ipify.org/?format=json`);

const fetchCoordsByIP = (ipString) => {
  const ip = JSON.parse(ipString).ip;
  return request(`https://ipvigilante.com/${ip}`);
};

module.exports = { fetchMyIP, fetchCoordsByIP };
