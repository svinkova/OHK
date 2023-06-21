const burger = document.querySelector('.burger');
const contentNav = document.querySelector('.content-nav');


// Přidání události kliknutí na dokument
document.addEventListener('click', function(event) {
  const target = event.target;

  // Pokud kliknutý prvek není burger ikona ani její potomek a není contentNav
  if (!target.closest('.burger') && !contentNav.contains(target)) {
    // Zavření menu
    burger.classList.remove('open');
    contentNav.classList.remove('display');
  }
});

burger.addEventListener('click', function() {
  this.classList.toggle('open');
  contentNav.classList.toggle('display');
});

contentNav.addEventListener('click', function() {
  burger.classList.remove('open');
  contentNav.classList.remove('display');
});











let arrow = document.getElementById('arrow');
let maxClicks = 1;
let clickCount = 0;

arrow.addEventListener('click', function() {
  if (clickCount < maxClicks) {
    window.scrollBy(0, window.innerHeight);
    clickCount++;
    if (clickCount === maxClicks) {
      arrow.style.display = 'none';
    }
  }
});




let image = document.getElementById('logo-img');
let mobileImage = 'images/titulka50.jpg';
let tabletImage = 'images/titulka.jpg';

function updateImage() {
  if (window.innerWidth <= 767) {
    image.src = mobileImage;
  } else {
    image.src = tabletImage;
  }
}

updateImage(); // Zavolání funkce pro inicializaci při načtení stránky

window.addEventListener('resize', updateImage); // Zavolání funkce při změně velikosti okna







  
  
  
  