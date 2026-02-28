// setTimeout()= function in javascript that allows 
// the execution of a functon after an amount of time (milliseconds)
// times are apprpximate (varies based on the workload of the browser)

// syntax setTimeout(callback,delay)

function greet(){
    window.alert("Hello, welcome to Js Bro Code!");

}
// setTimeout(greet,10000);  works// after 2 seconds greet function will be called

const time=setTimeout(function(){window.alert(`hello`)},3000)

clearTimeout(time);

let timeid;

function user(){

 console.log("Timeout started")
    timeid= setTimeout(()=> window.alert("Hello My Nigga"),3000)
}

function clearT(){
   document.write("Timeout cleared")
    clearTimeout(timeid)
    
}

