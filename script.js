var numberOfButtons = document.querySelectorAll("button").length;
for (var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        makeSound();
        alert("Message has been relayed");
    });
}
function makeSound() {
    var sound = new Audio ("sounds/snare.mp3");
    sound.play();
}