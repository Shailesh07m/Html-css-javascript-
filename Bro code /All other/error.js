//Error= An Object that is  created to represent a problem that occurs often with user input or establishing connections

console.log("hello")
// network issue
// promise rejection
// Security Errors

console.log("end")

try{
    console.log(z)
}
catch(error){
    console.log("error occured")
}
finally{
    // close connections
    // close files 
    // release resources
    console.log("cleaning up")
}
try{
const dividend= Number(window.prompt("Enter dividend " ));
const divisor= Number(window.prompt("Enter divisor"));
if(isNaN(dividend) || isNaN(divisor)){
throw new Error("Number Value Requireds")
}

if(divisor ==0){
    throw new Error("Divide by zero error");
}
const result= dividend/divisor;
console.log("Result is "+ result) 
  }
  catch(error){
    console.error("Error ")
  }

console.log("End");