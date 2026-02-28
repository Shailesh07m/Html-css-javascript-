// time 6:40:16
// date object=object that conatains values such as dates and time
//  these date object can be changed and formated

const date=new Date()
console.log(date);

//Date(year, month, day, hours, minutes, seconds, milliseconds)

const year= date.getFullYear();
console.log(year)
const month=date.getMonth()
console.log(month+1 ); 
console.log(month.toString())//month start from 0 to 11
const hour=date.getHours()
console.log(hour)
const day=date.getDate()
console.log(day)
const min=date.getMinutes()
console.log(min)
const sec=date.getSeconds()
console.log(sec)
const ms=date.getMilliseconds()
console.log(ms)





console.log(date)
date.setFullYear(2069)
date.setMonth(2)
date.setHours(12)
console.log(date)


const date1=new Date('2034-09-28')
const date2=new Date('2089-10-18')

date2 > date1 ? console.log("Bhadwa Aaya") : console.log("Nigga")
