function upgate(){
const now=new Date();
let h=now.getHours().toString().padStart(2,0);
const meridiem=h>=12?"PM":"AM";
h=h%12||12
const m=now.getMinutes().toString().padStart(2,0)
const s= now.getSeconds().toString().padStart(2,0);

const time=`${h}:${m}:${s}:${meridiem}`;
document.getElementById("clock").textContent=time;


}

upgate();
setInterval(upgate,1000)
