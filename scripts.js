let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  mybutton.style.opacity = document.documentElement.scrollTop > 40 ? 1 : 0;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
