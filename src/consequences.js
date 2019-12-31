const sounds = {
  dog: new Audio("http://soundbible.com/2215-Labrador-Barking-Dog.html"),
  bell: new Audio("http://soundbible.com/2206-Tolling-Bell.html"),
  alarm: new Audio("http://soundbible.com/2197-Analog-Watch-Alarm.html"),
  seagulls: new Audio("http://soundbible.com/2193-Flock-Seagulls.html"),
  whistle: new Audio("http://soundbible.com/2184-Police-Whistle.html")
}

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
    let sound = sounds[keys[Math.floor(Math.random() * keys.length)]];
    sound.play();
  }

  deleteWords() {
    let textbox = document.getElementById("textbox")
    let words = textbox.value.split(" ");
    words.pop();
    
    textbox.value = words.join(" ");
  }
}

module.exports = Consequences;