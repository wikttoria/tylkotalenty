const lang = document.querySelector(".lang");
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

lang.addEventListener("click", () => {
  optionsContainer.classList.toggle("open");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("a").innerHTML;
    optionsContainer.classList.remove("open");
  });
});

window.onscroll = function() {myFunction()};

var navbar = document.querySelector(".main-nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

$('.menu-bar').on('click', function() {
  $(this).toggleClass('active');
  $('.menu').toggleClass('menu-open');
  $('.main-nav').toggleClass('menu-open');
});

$(window).resize(function(){
  if($(window).width() > 770){
      $('.menu').removeClass('menu-open');
      $('.main-nav').removeClass('menu-open');
  }
});

$('ul li').click(function(){
  $(this).find('ul').slideToggle();
});

$(document).ready(function(){
  if($(window).width() < 770){
      $('.sub-menu1').rmoveClass('sub-menu');
      $('.sub-menu2').rmoveClass('sub-menu');
  }
  else{
      $('.sub-menu1').addClass('sub-menu');
      $('.sub-menu2').addClass('sub-menu');
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        
      $('#return-to-top').fadeIn(200);    
  } else {
      $('#return-to-top').fadeOut(200);  
  }
});

$('#return-to-top').click(function() {     
  $('body,html').animate({
      scrollTop : 0                       
  }, 500);
});