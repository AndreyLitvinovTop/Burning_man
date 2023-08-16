// Главный экран
var header_menu = document.querySelector('.header-menu');
var header_content = document.querySelector('.header-content');

if(window.scrollY >= 0){
  header_menu.classList.add('scroll-left');
  header_content.classList.add('scroll-right');
}

// Информация о сайте контент
var section_content = document.querySelector('.section-content');
var rebuilding = document.querySelector('.rebuilding');
var drives = document.querySelector('.drives');

// Секция с изображениями
var section_image = document.querySelector('.section-image');
var image1 = document.querySelector('.image1');
var image2 = document.querySelector('.image2');
var image3 = document.querySelector('.image3');

// Анимации скролла 
window.addEventListener('scroll', function(){
  // Скроллинг информации о сайте 
  if(window.scrollY >= section_content.getBoundingClientRect().y){
     rebuilding.classList.add('scroll-top');
     drives.classList.add('scroll-bottom');
  }

  if(window.scrollY >= section_image.getBoundingClientRect().y){
    image1.classList.add('scroll-bottom');
    image2.classList.add('scroll-top');
    image3.classList.add('scroll-bottom');
  }
});

