// Burger 

let burger = document.querySelector('.nav-burger');
let menu = document.querySelector('.nav-menu-list');
let body = document.querySelector('body');

burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});