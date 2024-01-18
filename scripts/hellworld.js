import "./calendar.js";
import "./dataLayer.js"

console.log("Re-cal | Hello World! This code runs immediately when the file is loaded.");

Hooks.on("init", function () {
  console.log("Re-cal | This code runs once the Foundry VTT software begins its initialization workflow.");
});

Hooks.on("ready", function () {
  console.log("Re-cal | This code runs once core initialization is ready and game data is available.");
});
