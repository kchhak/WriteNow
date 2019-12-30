class TextEditor {
  constructor(options) {
    this.difficulty = options[0].value;
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
    document.getElementById("writing-box").classList.add("hidden");
    document.getElementById("settings-page").classList.remove("hidden");
  }

  tick() {
    if (this.running){
      this.time--;
      this.countdown--;
    }

    if (this.time <= 0) {
      alert("You survived!")
    }

    this.timeSinceType();
    this.setTime();
    this.setWordCount();
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
    this.setGraceTime();

    document.getElementById("textbox").addEventListener("keyup", () => {
      this.countdown = this.grace;
    })

    // if (this.countdown === -1){
    //   alert("Start typing!")
    //   this.countdown = this.grace;
    // }
  }

  setGraceTime() {
    document.getElementById("grace-timer").innerHTML = this.countdown;
  }
}


module.exports = TextEditor;