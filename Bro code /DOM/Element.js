// Element selectors are method used to target and manipulate HTML elemennts THey allow you to select one or multiple HTML elements 
// from the DOM

//1. getElementById() - Selects a single element by its unique ID
//2. getElementsByClassName() - Selects multiple elements by their class name
//3. getElementsByTagName() - Selects multiple elements by their tag name
//4. querySelector() - Selects the first element that matches a CSS selector
//5. querySelectorAll() - Selects all elements that match a CSS selector

const info= document.getElementById('info')
info.style.backgroundColor='yellow'
info.style.textAlign='center'


const f= document.getElementsByClassName('fruit')
console.log(f)
f[0].style.backgroundColor="red"
f[1].style.backgroundColor=" yellow"

for(let fr of f){
   fr.style.textAlign="center" 
}

Array.from(f).forEach(fr=>
{
  fr.style.textAlign="right"
  fr.style.textAlign="center"
}
)

const a = document.getElementsByTagName('h4');
    a[0].style.backgroundColor = "red";

    const li=document.getElementsByTagName('li')
    for(let l of li){
        l.style.backgroundColor="lightgreen"
    }

    Array.from(li).forEach(lo=>{
       lo.style.backgroundColor="orange" 
    })

    const ele=document.querySelector('li')
    ele.style.backgroundColor="lightred"
    ele.style.textAlign="center"


    const tryN=document.querySelectorAll(".fruit")
    tryN[0].style.backgroundColor="pink"
    tryN.forEach(ko=>{
        ko.style.border="2px solid"
    })