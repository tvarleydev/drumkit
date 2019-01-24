function playSound(input) {

    switch (input) {

        case "w":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        default:
            break;

    }
}
function buttonAnimation(input){

    var activeButton = document.querySelector("." + input);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed")

    }, 100);

}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerText);
        buttonAnimation(this.innerText);
    });
}


document.addEventListener("keydown", function (event) {
    playSound(event.key);
    buttonAnimation(event.key);
});
