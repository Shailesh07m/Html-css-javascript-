
// example 1 <h1>

// const newH1=document.createElement("h1");
// newH1.textContent="Tu Bhadwa Hai"
// newH1.id="01"

//  document.body.prepend(newH1)
// newH1.style.color="orange"
// newH1.style.textAlign="center"
// // document.getElementById('box1').append(newH1);


// // const box2= document.getElementById('box2');
// // document.body.insertBefore(newH1,box2)

// // const all=document.querySelectorAll("box")
// // document.body.insertBefore(newH1,all[2])

// document.body.removeChild(newH1)

// example 2
const li= document.createElement("li")
li.textContent="LAsan"
li.id="05"
li.style.fontWeight="800"
li.style.backgroundColor="green"
// document.getElementById('shit').prepend(li)
// const item=document.getElementById('03')
// document.getElementById('shit').insertBefore(li,item)

const all=document.querySelectorAll("#shit li")
document.getElementById('shit').insertBefore(li,all[3])
document.getElementById('shit').removeChild(li)