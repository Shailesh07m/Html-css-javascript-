//event Listner
//
//
// Listen for specific events to create interactive
//web pages 
// events : click,mouseover, moudeoput 
/// .addEventListner(event,callback)

const btn=document.getElementById('btn')
const box=document.getElementById('box')

// box.addEventListener("click",function(event){event.target.style.backgroundColor="tomato"
// event.target.textContent="Bhadwa🥸"})
btn.addEventListener("click",event=>
    {box.style.backgroundColor="yellow"
box.textContent="Karu teri gudi laal 💪"})

box.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="yellow"
event.target.textContent="Bhadwa🥸"
})

box.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="lightgreen"
event.target.textContent="Click me😊"
})

btn.addEventListener("mouseover",event=>{
event.target.style.backgroundColor="lightgreen"
event.target.textContent="Naughty Hora ke 💪"
})