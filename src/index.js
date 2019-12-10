document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("settings").addEventListener("submit", e => {
    e.preventDefault();

    let settings = $('form').serializeArray();

    let difficulty = settings[0].value;
    let time = settings[1].value;
    let grace = settings[2].value;

    document.getElementById("settings-page").classList.add("hidden");
    document.getElementById("writing-box").classList.remove("hidden");
  })
});