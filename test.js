var body = document.getElementsByTagName("body");
var menuButton = document.querySelector(".menuButtonBox");
var slideMenu = document.querySelector(".slideMenu");
var closeMenu = document.querySelector(".closeMenu");


menuButton.addEventListener("click", function(event) {
    slideMenu.style.transform = "translate(-300px, 0)";
});

closeMenu.addEventListener("click", function(event) {
    slideMenu.style.transform = "translate(300px, 0)";
});


