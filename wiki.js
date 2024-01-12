/**

* a calendar with a custom year, months, and days
* @typedef {Object} calendar

* @property {string} id - a unique ID to identify this calendar

* @property {int} year - a user specified number to determine the year

* @property {Object} month - a user specified number to determine the month
  * @property {string} id - a unique ID to identify this month
  * @property {string} name - the name of the month
  * @property {int} numberOfDays - how many days are in this month
  *
* @property {Object} day - any day within a given month, initially set to empty
  * @property {string} id - a unique ID to identify this day
  * @property {boolean} isHoliday - determins whether this day is a repeting, yearly holiday
  * @property {string} eventDescription - text describing what is happening on that particular day

*/
