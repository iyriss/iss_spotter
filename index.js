// const { fetchMyIP } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work! Error:" , error);
//     return;
//   } console.log('It worked! Returned IP:' , ip);
// });
//COMMENTED OUT AFTER VERIFICATION ^^^

// fetchCoordsByIP('162.245.144.188', (error, coords) => {
//   if (error) {
//     console.log("It didn't work! Error:", error);
//     return;
//   }

//   console.log('It worked! Returned Coords:' , coords);
// });
// });
//COMMENTED OUT AFTER VERIFICATION ^^^

// const myCoord = { latitude: '49.26200', longitude: '-123.09230' };
// fetchISSFlyOverTimes(myCoord, (error, times) => {
//   if (error) {
//     console.log("It didn't work! Error:" , error);
//     return;
//   } console.log(`Wahoooo! ISS will fly over:`, times);
// });
//COMMENTED OUT AFTER VERIFICATION ^^^

const printPassTimes = function(passTimes) {
  // for (const pass of passTimes) {
  //   const datetime = new Date(0);
  //   datetime.setUTCSeconds(pass.risetime);
  //   const duration = pass.duration;
  //   console.log(`Next pass at ${datetime} for ${duration} seconds!`);

  for (let i = 0; i < passTimes.length; i++) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(passTimes[i].risetime);
    const duration = passTimes[i].duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
}
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
