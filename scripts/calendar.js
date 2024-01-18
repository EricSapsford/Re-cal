Hooks.on("ready", function () {
  console.log("Re-cal | base class loaded");
});

export default class Calendar {

  static ID = "recalDev";

  static FLAGS = {
    RECAL: "recal"
  }

  static TEMPLATES = {
    RECALENDAR: `modules/${this.ID}/templates/re-cal.hbs`
  }
}
