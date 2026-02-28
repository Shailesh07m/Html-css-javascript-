// synchoronous = Executes line by line consecutively in a sequential manner Code that waits for operation to complete 
// asynchoronous= Allows multiple opertaions to be perfomred concurently without waiting Doesn't block the execution flow and and LLOWS THE PROGRAM TO CONTINUE (I/O operatiobns ,network requests, fetching data)
// handeled with : Callbacks, Promises , async/await    




function fun1(callback){
    setTimeout(() => {console.log("beating enemy");
         callback()},3000);
}
function fun2(){
console.log("beating friend")
console.log("playing game")

}

fun1(fun2);
