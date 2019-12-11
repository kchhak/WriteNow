const TextEditor = require("./text_editor.js");
window.TextEditor = TextEditor;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("settings").addEventListener("submit", e => {
    e.preventDefault();
    console.log("pressed");
    const settings = $("#settings").serializeArray();
    const editor = new TextEditor(settings);
    editor.startEditor();

  })
});