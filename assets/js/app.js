window.addEventListener("load", function(){
    var loader = document.getElementById("loader");
    setTimeout(function(){
      loader.style.display = "none";
    }, 4000);
  });

const btnMenu = document.querySelector('.menu_icon');
const menuMobile = document.querySelector('.header__container');
const closeMenu = document.querySelector('.close_menu');

btnMenu.addEventListener('click', function showMenu () {
    menuMobile.classList.remove('hidden');
})

closeMenu.addEventListener('click', function closeMenu() {
    menuMobile.classList.add('hidden');
})





const images = document.querySelector('.carousel-images');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let imageIndex = 0;
let timer;

function moveNext() {
  if (imageIndex === 2) {
    imageIndex = 0;
  } else {
    imageIndex++;
  }
  images.style.transform = `translateX(-${imageIndex * 33.333}%)`;
}

prevButton.addEventListener('click', () => {
  if (imageIndex === 0) {
    imageIndex = 2;
  } else {
    imageIndex--;
  }
  images.style.transform = `translateX(-${imageIndex * 33.333}%)`;
  clearInterval(timer); 
});

nextButton.addEventListener('click', () => {
  moveNext();
  clearInterval(timer);
});

timer = setInterval(moveNext, 5000);