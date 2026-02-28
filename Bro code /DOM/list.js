// const btn=document.getElementById('btn')
// btn.classList="enabled"
// // btn.classList.remove("enabled")
// // btn.addEventListener("mouseover",event=>{
// // event.target.classList.add("hover")
// // })
// // btn.addEventListener("mouseout",event=>{
// // event.target.classList.remove("hover")
// // })

// // toggle(remove if present , add if not)
// btn.addEventListener("click",event=>{
//     if(event.target.classList.contains("enabled")){
//         event.target.textContent="🍆"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled")
//     }
// })
// const h1=document.getElementById('h1')
// h1.classList.add("enabled")

// h1.addEventListener("click",event=>{
//     if(event.target.classList.contains("enabled")){
//         event.target.textContent="🍆"
//     }
//     else{
//         event.target.classList.replace("enabled","disabled")
//     }
// })


let buttons=document.querySelectorAll("btn")
buttons.forEach(button=>{
button.classList.add("enabled")
})
buttons.forEach(button=>{
button.addEventListener("mouseover",event=>{
  event.target.classList.add("hover")  
})
})