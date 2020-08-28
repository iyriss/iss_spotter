const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work! Error:" , error);
//     return;
//   } console.log('It worked! Returned IP:' , ip);
// });
//COMMENTED OUT AFTER VERIFICATION ^^^

fetchCoordsByIP('162.245.144.188', (error, coords) => {
  if (error) {
    console.log("It didn't work! Error:", error);
    return;
  }

  console.log('It worked! Returned Coords:' , coords);
});