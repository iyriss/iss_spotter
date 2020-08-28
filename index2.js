const { nextISSTimesForMyLocation } = require('./iss_promised');

// console.log(fetchMyIP().then(body => response.body));

// fetchMyIP()
//   .then(fetchCoordsByIP)
//   .then(fetchISSFlyOverTimes)
//   .then(body => console.log(body));

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
//OR:
  // for (let i = 0; i < passTimes.length; i++) {
  //   const datetime = new Date(0);
  //   datetime.setUTCSeconds(passTimes[i].risetime);
  //   const duration = passTimes[i].duration;
  //   console.log(`Next pass at ${datetime} for ${duration} seconds!`);
}
};

nextISSTimesForMyLocation()
.then((passTimes) => {
printPassTimes(passTimes);
})
.catch((error) => {
  console.log("It didn't work: ", error.message);
});