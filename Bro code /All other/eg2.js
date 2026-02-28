const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// swap posiotions of 'green' and 'yellow'

[colors[0],colors[4]]=[colors[4],colors[1]]
console.log(colors[0])
console.log(colors[2])

const [fcolor,scolor,tcolor,...other]=colors;


console.log("----------------"+"---------------------");
console.log(fcolor);
console.log(scolor);
console.log(tcolor);
console.log(other);




// example 3

const per1={
    Oname:"gandu",
    age:90,
    job:"berozgar",
}
const per2={
   Oname:"pandu",
    age:80,
    job:"scammer",  
}

const {Oname,age,job}=per2;
console.log(Oname);
console.log(age)
console.log(job)

//example 4

function disp({Oname,age,job}){

    console.log(`name:${Oname} `)
    console.log(`name:${age} `)
    console.log(`name:${job} `)
}
console.log("---------------------------------------")
disp(per1);
console.log("---------------------------------------")
disp(per2);


