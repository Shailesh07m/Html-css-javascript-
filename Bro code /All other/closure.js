// clousre()= a function defined inside in another function 
//        the linear function has access tomotheer variables 
//         and scope of other function  
//          Allow for provate variables and state maintains 
//          used frquentilnly in JS framework

function outer(){
    let messge="hello Nigga"
    function inner(){
        console.log(messge)
    }
    inner();
}

outer();
// inner()


function counter(){
     let count=0;
function iter(){
   
    count++
    console.log(count)

}
function getc(){
    return count;
}
return {iter,getc}
}
const c=counter()
c.iter()
c.iter()
c.iter()
c.iter()
c.iter()

console.log("current count is ",c.getc());

function game(){
    let score=0

function increaseScore(points){
score += points;
console.log(`${points}`);

}
function decreaseScore(points){
score -= points;
console.log(`${points}`);

}
function getScore(){
return score;

}
return {increaseScore,decreaseScore,getScore}
}

const g=game()
g.increaseScore(5)
g.increaseScore(10)
g.decreaseScore(3)
console.log("current score is ",g.getScore());

//stopped at 6:59:13