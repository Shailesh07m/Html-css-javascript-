

// DOM Navigation

 //The process of navigating through the structure of an HTML document using DavaScript.

//.firstElementChild
//.lastElementChild
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children

// firstelemnt child
const ul = document.querySelectorAll('ul'); // Selects all <ul> elements
const game = document.getElementById("game"); // Selects <ul id="game">

// Loop through every <ul>
ul.forEach(ol => {
  const f = ol.firstElementChild; // Get the first <li> inside the <ul>
  f.style.backgroundColor = "yellow"; // Change its background color
});

// stoped at 8:36: 31
// continue

const xe = document.getElementById("bull");
const last = xe.lastElementChild;
last.style.backgroundColor="red";

const all = document.querySelectorAll("ul");
all.forEach(ul => {
  const lasti = ul.lastElementChild;
  lasti.style.backgroundColor = "violet";
});


//nextElementSibling

const li1=document.getElementById("game")//Selected BGMI
const ns=li1.nextElementSibling;
ns.style.backgroundColor="Green"


// previous element sibling

const li2=document.getElementById("02")
const pre=li2.previousElementSibling;
pre.textContent="This Worked No shit !";

// parent Element 

const parent=document.getElementById('01')
const po=parent.parentElement;
po.style.textAlign="center";

// children
const element=document.getElementById("clash")
const child= element.children;
console.log(child)
Array.from(child).forEach(op=>{
  console.log(op.li)
  op.style.button="hello"
})

console.log(child[0])