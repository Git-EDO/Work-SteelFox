// Burger 

let burger = document.querySelector('.nav-burger');
let menu = document.querySelector('.nav-menu-list');
let body = document.querySelector('body');

burger.addEventListener('click', function(){
  burger.classList.toggle('active');
  menu.classList.toggle('active');
  body.classList.toggle('lock');
});

// STANDARDS 

let buttons = document.querySelectorAll('.standard-button');
let standardLogos = document.querySelectorAll('.standard-logo');
let standardDescriptions = document.querySelectorAll('.standard-description');

buttons.forEach(function(e,i) {
  e.addEventListener('mouseover', function(){
    standardLogos[i].classList.add('active');
    standardDescriptions[i].classList.add('active');
  });
  e.addEventListener('mouseout', function(){
    standardLogos[i].classList.remove('active');
    standardDescriptions[i].classList.remove('active');
  });
});

// Quality certificates

$('.quality-cover').magnificPopup({
  delegate: "div",
  type: "image",
});

// Spoilers

let spoilersTitle = document.querySelectorAll('.spoiler-title');


if(spoilersTitle.length>0) {
  for(i=0;i<spoilersTitle.length;i++) {
    spoilerTitle = spoilersTitle[i];
    spoilerTitle.addEventListener('click',function(e) {
      e.target.classList.toggle('active');
    })
  }
}

// Popups


let personalBtn = document.querySelector('.footer-personal a');
let feedbackBtn = document.querySelector('.contacts-manager a')
let personalPopup = document.querySelector('.personal-popup');
let feedbackPopup = document.querySelector('.form-popup');
let popups = document.querySelectorAll('.popup');

personalBtn.addEventListener('click', function(e) {
  e.preventDefault();
  body.classList.add('lock');
  personalPopup.classList.add('open');
});

feedbackBtn.addEventListener('click', function(e) {
  e.preventDefault();
  body.classList.add('lock');
  feedbackPopup.classList.add('open');
});

let closePopups = document.querySelectorAll('.close-popup-icon');

for(i=0;i<closePopups.length;i++){
  closePopup = closePopups[i];
  closePopup.addEventListener('click', function(e) {
    body.classList.remove('lock');
    e.target.closest('.popup').classList.remove('open');
  })
};

// QUIZ 

let quiz = document.querySelector('.quiz-wrapper');
let q1Btn = document.getElementById('q1-btn');
let q2Btn = document.getElementById('q2-btn');
let q3Btn = document.getElementById('q3-btn');
let q4Btn = document.getElementById('q4-btn');
let q5Btn = document.querySelector('.q5-btn');
let thanksPopup = document.querySelector('.thanks-popup')

q1Btn.addEventListener('click', function(){
  quiz.style.transform = 'translateX(-100%)';
});
q2Btn.addEventListener('click', function(){
  quiz.style.transform = 'translateX(-200%)';
});
q3Btn.addEventListener('click', function(){
  quiz.style.transform = 'translateX(-300%)';
});
q4Btn.addEventListener('click', function(){
  quiz.style.transform = 'translateX(-400%)';
});
q5Btn.addEventListener('click', function(e) {
  e.preventDefault();
  body.classList.add('lock');
  thanksPopup.classList.add('open');
});

// Управление скроллом страницы

let oilScroll = document.getElementById('oil');
let workScroll = document.getElementById('work');
let priceScroll = document.getElementById('price');
let faqScroll = document.getElementById('faq');

oilScroll.addEventListener ('click', function(e) {
  e.preventDefault();
  body.classList.remove('lock');
  menu.classList.remove('active');
  const catalogue = document.querySelector('.catalogue');
  catalogue.scrollIntoView({block: "start", behavior: "smooth"});
});
workScroll.addEventListener ('click', function(e) {
  e.preventDefault();
  body.classList.remove('lock');
  menu.classList.remove('active');
  const standards = document.querySelector('.standards');
  standards.scrollIntoView({block: "start", behavior: "smooth"});
});
priceScroll.addEventListener ('click', function(e) {
  e.preventDefault();
  body.classList.remove('lock');
  menu.classList.remove('active');
  const quality = document.querySelector('.quality');
  quality.scrollIntoView({block: "start", behavior: "smooth"});
});
faqScroll.addEventListener ('click', function(e) {
  e.preventDefault();
  body.classList.remove('lock');
  menu.classList.remove('active');
  const faq = document.querySelector('.faq');
  faq.scrollIntoView({block: "start", behavior: "smooth"});
});