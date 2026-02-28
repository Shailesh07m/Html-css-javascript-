const btn=document.getElementById('btn')
const imgo=document.getElementById('Shin')

btn.addEventListener("click", event=>{
    if(imgo.style.visibility==="hidden"){
        imgo.style.visibility="visible";
        btn.textContent="hide"
    }
    else{ imgo.style.visibility="hidden"
    btn.textContent="Show"}
   
})