document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("settings").addEventListener("submit", e => {
    e.preventDefault();

    let settings = $('form').serializeArray();
    let difficulty = settings[0]
  })
});