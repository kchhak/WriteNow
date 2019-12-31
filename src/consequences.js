const sounds = {
  dog: new Audio('../dist/assets/dog.mp3'),
  bell: new Audio('../dist/assets/bell.mp3'),
  alarm: new Audio('../dist/assets/alarm.mp3'),
  seagulls: new Audio('../dist/assets/seagulls.mp3'),
  whistle: new Audio('../dist/assets/whistle.mp3')
}

let sound;

class Consequences {
  constructor(difficulty) {
    this.difficulty = difficulty;
  }

  runConsequences() { 
    switch (this.difficulty) {
      case "easy":
        alert("Get back to typing!");
        break;
      case "medium":
        this.soundAlert();
        break;
      case "hard":
        this.deleteWords();
        break;
    }
  }

  soundAlert() {
    let keys = Object.keys(sounds);
    sound = sounds[keys[Math.floor(Math.random() * keys.length)]];
    sound.loop = true;
    sound.play();
  }

  stopSound() {
    sound.pause();
  }

  deleteWords() {
    let textbox = document.getElementById("textbox")
    let words = textbox.value.split(" ");
    words.pop();
    
    textbox.value = words.join(" ");
  }
}

module.exports = Consequences;