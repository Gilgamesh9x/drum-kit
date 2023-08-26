// Detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (counter=0; counter < numberOfDrumButtons; counter++) {
    document.querySelectorAll("button")[counter].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
 
// Detecting keyboard press

document.addEventListener("keydown", function(event) { // here the event is considered an object to the keyboard listener

    var keyValue = event.key.toLocaleLowerCase();

    makeSound(keyValue);
    buttonAnimation(keyValue)
});

// Helper function

function makeSound(key) {

    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        default: console.log('Cannot be found.')
    } 
}


function buttonAnimation(key) {
    var activeButton = document.querySelector('.' + key);

    activeButton.classList.add('pressed');

    function removePressed() { // we set a time for the function to run. So it will wait 100 ms to run (we added a delay)
        document.querySelector('.' + key).classList.remove('pressed');
    }

    setTimeout(removePressed, 100);

}