// Get the navbar
var nv = document.getElementsByClassName("nv");

// Get the offset position of the navbar
var sticky = nv.offsetTop;

window.onscroll = function() {myFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    nv.classList.add("sticky")
  } 
  else {
    nv.classList.remove("sticky");
  }
}