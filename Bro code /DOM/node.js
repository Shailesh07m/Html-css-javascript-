//NodeList= Static collection of Html Element By (id,class,element)
//          Can be created by using querySelectorAll()
//      SIMILAR to anarray , but no (map,filter,reduce)
//          Nodelist won't update to automatically reflect changes

const nbtn=document.createElement("button")
nbtn.id="05";
nbtn.classList="btn"
nbtn.textContent="button 5"
document.body.append(nbtn)

let buttons=document.querySelectorAll(".btn")
console.log(buttons)
// buttons.forEach(bot=>{
//     bot.style.backgroundColor="lightgreen"
//     bot.textContent="HO gaya"
// })


// add element to Nodelist


// buttons.forEach(button=>{
//     button.addEventListener("click", event=>{
//         event.target.style.backgroundColor="tomato"
//     })
// })
// buttons.forEach(button=>{
//     button.addEventListener("mouseover", event=>{
//         event.target.style.backgroundColor="#eab676"
//     })
// })
// buttons.forEach(button=>{
//     button.addEventListener("mouseout", event=>{
//         setTimeout(event.target.style.backgroundColor=" #49ff18",5000)
//     })
// })
// console.log(buttons)


buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.remove();
        console.log(buttons)
        buttons=document.querySelectorAll("btn")
        console.log(buttons)
    })
})