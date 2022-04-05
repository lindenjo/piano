// String argument, that will decide what note to play.
function makeSound(note) {
  let noteAudio = new Audio("sounds/" + note + ".mp3");
  noteAudio.play();
}
// Animates the piano press
function keyAnimation(note) {
  document.querySelector("." + note).classList.add("clicked");
  setTimeout(function() {
    document.querySelector("." + note).classList.remove("clicked")
  }, 250);
}

// Create event listener for when button is clicked.
let buttons = document.querySelectorAll('.piano-button');
for (let i = 0; i < buttons.length; i++) {
  let note =  buttons[i].classList[0];
  buttons[i].addEventListener("click", function() {
    makeSound(note)
    keyAnimation(note)
  })
}

// Creating object to bind keys to note
let keyBindElements = document.querySelectorAll('button p.key-bind')
let keyBindings = {}
for(let i = 0; i < keyBindElements.length; i++){
  keyBindings[keyBindElements[i].innerText.toLowerCase()] = buttons[i].classList[0];
}
document.addEventListener("keydown", function(event) {
  if(event.key in keyBindings) {
    makeSound(keyBindings[event.key]);
    keyAnimation(keyBindings[event.key]);
  }
})

// Listener for the automatic play
document.querySelector(".play-notes").addEventListener("click", function() {
  automaticPlay();
});

//Get value from input of delay and notes (found in html inputs)
function automaticPlay() {
  let notesEntered = document.querySelector(".notes-entered").value.replaceAll("#", "b");
  const notesToPlay = notesEntered.split(" ")
  let delay = document.querySelector(".delay-entered").value * 1000;
  console.log(notesToPlay)
  notesToPlay.forEach(function(item, index) {
    setTimeout(function() {
      makeSound(item);
      keyAnimation(item)
      console.log(item, index, delay*index)
    },delay * index)
  })
  }
