// const slide=document.querySelectorAll(".slides img ")
// let slideindex=0;
// let interValid=null;


// document.addEventListener("DOMContentLoaded",initialise())
// function initialise(){
    
//     if(slide.length > 0){
//         slide[slideindex].classList.add("displayslide")
// interValid =setInterval(next,5000)

//     }
// }
// function show(index){
//     if(index >= slide.length){
//         slideindex=0;
//     }
//     else if(index < 0){
//         slideindex=slide.length-1;
//     }
// slide.forEach(img=>{
//     img.classList.remove("displayslide")
// })
// slide[slideindex].classList.add("displayslide")
// }
// function prev(){
// clearInterval(interValid);
// slideindex--;
// show(slideindex)
// }
// function next(){
// slideindex++;
// show(slideindex)
// }
const slides = document.querySelectorAll(".slides img");
let index = 0;
let timer = null;

document.addEventListener("DOMContentLoaded", startSlider);

function startSlider() {
  if (slides.length > 0) {
    slides[index].classList.add("displayslide");
    timer = setInterval(next, 4000);
  }
}

function showSlide(i) {
  slides.forEach(img => img.classList.remove("displayslide"));

  if (i >= slides.length) index = 0;
  if (i < 0) index = slides.length - 1;

  slides[index].classList.add("displayslide");
}

function next() {
  index++;
  showSlide(index);
  resetTimer();
}

function prev() {
  index--;
  showSlide(index);
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(next, 4000);
}
