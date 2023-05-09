// Smooth scrolling
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offset = document.querySelector(href).offsetTop;
  scroll({
    top: offset,
    behavior: 'smooth'
  });
}
