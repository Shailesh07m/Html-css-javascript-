// ES6 Module = an external file that contains reusable code
//             that can be exported into other Javascript files
//             Write reusable code for many different apps 
//              cna contain variables, functions, classes, etc.
////             Inroduced as part of ECMA Script 2015 (ES6)

import {PI,area,volume,circumference} from './ES6-2.js'

console.log("Value of PI is: " + PI);

const  c= circumference(10);
console.log("Circumference of circle is: " + c);    
const a= area(10);
console.log("Area of circle is:"+ a)
const v=volume(10)
console.log("Volume is "+v)