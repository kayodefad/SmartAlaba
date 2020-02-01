// Smooth Scrolling
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    )
  }
})

// Hamburger-menu
const ham = document.getElementById('hamburger-menu')
const navLinks = document.querySelector('.navbar ul')

ham.addEventListener('click', () => {
  navLinks.classList.toggle('show-navlinks')
  ham.classList.toggle('toggle')
})

// Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}