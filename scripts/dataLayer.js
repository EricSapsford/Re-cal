class ReCalData {


  // READ
  static getUserCalendar(userId) {
    return game.users.get(userId)?.getFlag(Calendar.ID, Calendar.FLAGS.RECAL)
  }

  // CREATE


}
