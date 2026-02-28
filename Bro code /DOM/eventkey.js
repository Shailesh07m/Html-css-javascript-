//key= 
// events= keydown,keyup
// document.addEventListner()

// document.addEventListener("keydown", event=>{
//     console.log(`Key Down${event.key}`)
// })
// document.addEventListener("keyup", event=>{
//     console.log(`Key Up=${event.key}`)
// })

const box=document.getElementById('box')
document.addEventListener("keydown", event=>{
    box.textContent="🐻"
    box.style.backgroundColor="yellow"
})
 document.addEventListener("keyup", event=>{
     box.textContent="  🐻‍❄️"
    box.style.backgroundColor=" lightgreen"
})

const move=18;
let x=0,y=0;
document.addEventListener("keydown", event=>{
    event.preventDefault();
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y-=move;
                break;
                case "ArrowDown":
                    y+=move;
                    break;
                    case "ArrowLeft":
                        x-=move;
                        break;
                        case "ArrowRight":
                        x+=move;
                        break;
                        
        }
        box.style.top=`${y}px`
          box.style.left=`${x}px`
           
    }

})
