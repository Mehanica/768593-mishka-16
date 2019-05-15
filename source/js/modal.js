var links = document.querySelectorAll(".js-btn");
var popup = document.querySelector(".pop-up");
var overlay = document.querySelector(".overlay");

for(var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    popup.classList.add("pop-up--show");
    overlay.classList.add("overlay--show");
  });
}

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  overlay.classList.remove("overlay--show");
  popup.classList.remove("pop-up--show");
});

window.addEventListener("keydown", function (evt) {
 if (evt.keyCode === 27) {
   evt.preventDefault();
   if(popup.classList.contains("pop-up--show")) {
     overlay.classList.remove("overlay--show")
     popup.classList.remove("pop-up--show");
   }
 }
});
