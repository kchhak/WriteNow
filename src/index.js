const TextEditor = require("./text_editor.js");
window.TextEditor = TextEditor;

let settings, editor;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("settings").addEventListener("submit", e => {
    e.preventDefault();
    settings = $("#settings").serializeArray();
    editor = new TextEditor(settings);
    editor.startEditor();
  })

  document.getElementById("restart").addEventListener("click", () => {
    if (confirm("This will erase your work and return you to the settings. If you want to save your work, press cancel and copy-paste it before going back.")) {
      editor.closeEditor();
    }
  })
});