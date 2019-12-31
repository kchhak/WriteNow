const Consequences = require("./consequences.js");
window.Consequences = Consequences;

class TextEditor {
  constructor(options) {
    this.difficulty = options[0].value;
    this.consequences = new Consequences(this.difficulty);
    this.time = options[1].value * 60;
    this.grace = options[2].value;
    this.countdown = this.grace;
    this.running = false;
  }

  startEditor() {
    document.getElementById("settings-page").classList.add("hidden");
    document.getElementById("writing-box").classList.remove("hidden");
    this.running = true;
    
    setInterval(() => {
      this.tick();
    }, 1000)
  }

  closeEditor(){
    clearInterval();
    this.running = false;
    this.consequences.stopSound();

    document.getElementById("textbox").value = "";
    document.getElementById("timer").innerHTML = "";
    document.getElementById("wordcount").innerHTML = 0;

    document.getElementById("writing-box").classList.add("hidden");
    document.getElementById("settings-page").classList.remove("hidden");
  }

  tick() {
    if (this.running){
      this.time--;
      this.countdown--;

      if (this.time <= 0) {
        alert("You survived!")
      }
  
      this.timeSinceType();
      this.setTime();
      this.setWordCount();
    }
  }

  countWords(input) {
    let words = input.split(" ");
    if (words[0] === "") return 0;

    return words.length;
  }

  setWordCount() {
    let count = this.countWords(document.getElementById("textbox").value);
    document.getElementById("wordcount").innerHTML = count;
  }

  setTime() {
    document.getElementById("timer").innerHTML = this.formatTime(this.time);
  }

  formatTime(time) {
    let min = String(Math.floor(this.time / 60));
    let sec = String(this.time % 60);

    if (min.length < 2) min = "0" + min;
    if (sec.length < 2) sec = "0" + sec;

    return min + ":" + sec;
  }
  
  timeSinceType() {
    document.getElementById("textbox").addEventListener("keyup", () => {
      this.countdown = this.grace;
      this.consequences.stopSound();
    })

    if (this.countdown === 0){
      this.consequences.runConsequences();
      this.countdown = this.grace;
    }
  }

}


module.exports = TextEditor;