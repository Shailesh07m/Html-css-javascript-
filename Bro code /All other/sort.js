//sort()= method used to sort element of an array in place 
//          sorrt element as strings in lexicographic order, not aplphabetical
//          lexicographic =(alphabet+numbers+ symbols ) as string


// let colors = ['red', 'green', 'blue', 'yellow', 'purple'];
let colors = [78,9,8,65,53,90,766];//sorting lexicographically

console.log(colors)
// colors.sort((a,b)=>a-b) straight
colors.sort((a,b)=> b-a) // reverse order
console.log(colors)

console.log("--------------------------------------------------")

const pep=[
    {name:"aandu",age:56,gpa:3.5},
    {name:"gandu",age:65,gpa:4.5},
    {name:"pandu",age:90,gpa:2.5}
]
pep.sort((a,b)=> b.age - a.age)
pep.forEach(pe=> console.log(pe.age))
pep.sort((a,b)=> a.name.localeCompare(b.name))
console.log(pep)

