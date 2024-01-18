import Calendar from "./calendar";

Hooks.on("ready", function () {
  console.log("Re-cal | data layer loaded");
});

export default class ReCalData {


  // READ
  static getUserCalendar(userId) {
    return game.users.get(userId)?.getFlag(Calendar.ID, Calendar.FLAGS.RECAL)
  }

  // CREATE
  static createCalendar(userId, reCalData) {

    // generate a random id and populate userId
    const newCal = {
      isDone: false,
      ...reCalData,
      id: foundry.utils.randomID(16),
      userId,
    }

    // construct the update to insert the new Cal
    const newCals = {
      [newCal.id]: newCal
    }

    // update database with the new Cal
    return game.users.get(userId)?.setFlag(Calendar.ID, Calendar.FLAGS.RECAL, newCals)
  }

  // GET ALL FOR A USER
  static get allCalendars() {
    const allCalendars = game.users.reduce((accumulator, user) => {
      const userCalendars = this.getUserCalendar(user.id);

      return {
        ...accumulator,
        ...userCalendars
      }
    }, {});

    return allCalendars;
  }

  // UPDATE
  static updateCalendar(calId, updateData) {
    const relevantCalendar = this.allCalendars[calId];

    // construct the update to send
    const update = {
      [calId]: updateData
    }

    // update the database with the updated data
    return game.users.get(relevantCalendar.userId)?.setFlag(Calendar.ID, Calendar.FLAGS.RECAL, update);
  }

  // DELETE
  static deleteCalendar(calId) {
    const relevantCalendar = this.allCalendars[calId];

    // Foundry specific syntax required to delete a key from a persisted object in the database
    const keyDeletion = {
      [`-=${calId}`]: null
    }

    // update the database with the updated calendar
    return game.users.get(relevantCalendar.userId)?.setFlag(Calendar.ID, Calendar.FLAGS.RECAL, keyDeletion)
  }

  // BULK UPDATE
  static updateUserCalendars(userId, updateData) {
    return game.users.get(userId)?.setFlag(Calendar.ID, Calendar.FLAGS.RECAL, updateData)
  }
}
