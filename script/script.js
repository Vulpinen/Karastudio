
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    topbutton.style.display = "block";
  }
  
  else{
    topbutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}

/* navbar */
var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

/* Attempt 5000 */
let slidePosition=0;
const sliders=document.querySelectorAll('.slide');
const totalSlider=document.querySelector('.carousel').length;
const btnPrev=document.querySelector('.prev');
const btnNext=document.querySelector('.next');


btnPrev.addEventListener('click',function(){
  PrevSlide();
});
btnNext.addEventListener('click',function(){
  NextSlide();
});

function updatePosition(){
  sliders.forEach(slide=>{
    slide.classList.remove('active');
    slide.classList.add('hidden');
  });

  sliders[slidePosition].classList.add('active');

  dots.forEach(dot=>{
    dot.classList.remove('dot-active');
  });

  dots[slidePosition].classList.add('dot-active');
}

function PrevSlide(){
  if(slidePosition==0){
    slidePosition=totalSlider-1;
  }else{
    slidePosition--;
  }
  updatePosition();
}
function NextSlide(){
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
}


const dotContainer=document.querySelector('.dots');
carousel.forEach(slide=>{
 const dot=document.createElement('div');
 dot.classList.add('dot');
 dotContainer.appendChild(dot);
});

const dots=document.querySelectorAll('.dot');
dots[slidePosition].classList.add('dot-active');


dots.forEach((dot,index)=>{
  dot.addEventListener('click',function(){
    slidePosition=index;
    updatePosition();
  });
});


setInterval(()=>{
  if(slidePosition==totalSlider-1){
    slidePosition=0;
  }else{
    slidePosition++;
  }
  updatePosition();
},5000);