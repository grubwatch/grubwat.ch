/* jshint esversion: 6 */
// The date parameter is actually the day of month, if absent then 1 is assumed.
// Same for days.

const lastScandalDate = new Date(2019, 5, 4);  // year month day
const currentDate = Date.now();

let outputDate = Math.floor((currentDate - lastScandalDate) / 24 / 3600 / 1000);