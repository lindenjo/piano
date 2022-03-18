// String argument, that will decide what note to play.
function makeSound(note) {
  let noteAudio = new Audio("sounds/" + note + ".mp3");
  noteAudio.play();
}

// Create event listener for when button is clicked.
let buttons = document.querySelectorAll('button');
for (let i = 0; i < buttons.length; i++) {
  let note =  buttons[i].classList[0];
  buttons[i].addEventListener("click", function() {
    makeSound(note)
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
    makeSound(keyBindings[event.key])
  }
})
