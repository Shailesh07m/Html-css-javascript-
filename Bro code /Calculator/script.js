const display=document.getElementById('display');
function append(value){
    display.value+=value;

}
function cleard(){
    display.value='';
}
function calculate(){
try{
    display.value=eval(display.value)
}
catch(error){
    display.value='Error';
}
}