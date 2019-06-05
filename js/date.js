/* jshint esversion: 6 */
// The date parameter is actually the day of month, if absent then 1 is assumed.
// Same for days.

const todaysDate = Date.now();
const lastScandalDate   = '2019-06-05';   // year month day

const timeDiff  = (new Date(todaysDate)) - (new Date(lastScandalDate));
const days      = timeDiff / (1000 * 60 * 60 * 24)

let outputDate = Math.floor(days);
