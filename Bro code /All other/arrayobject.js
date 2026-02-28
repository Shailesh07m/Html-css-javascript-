const fruits =[
    {name:"apple",color:"red",cal:95},
            {name:"orange",color:"orange",cal:80},
            {name:"banana",color:"yellow",cal:65},
            {name:"grape",color:"green",cal:34},
            {name:"jamun",color:"purple",cal:88}]

           
             console.log(fruits[0].name)
              console.log(fruits[1].name)
               console.log(fruits[2].name)
                console.log(fruits[3].name)
                 console.log(fruits[4].name)
                  console.log(fruits[0].cal)
                   console.log(fruits[0].color)

                   console.log("       ********************************")

                   fruits.push({name:"Nariyal",color:'brown',cal:68})
                   console.log(fruits[5])
                   fruits.pop();
                   console.log(fruits)
                   ///fruits.splice(1,2)
    //               console.log(fruits) removed 1 and 2nd element
                   console.log("       ********************************")
//----------------forEach()-----------------------------

//fruits.forEach(fruit=> console.log(fruit))
fruits.forEach(fruit=> console.log(fruit.name))
fruits.forEach(fruit=> console.log(fruit.color))
fruits.forEach(fruit=> console.log(fruit.cal))


//------------------map()-----------------------
//run each element through a function and create new array


const fruitsn=fruits.map(frui=>frui.name)
console.log(fruitsn)
const colour=fruits.map(fuit=>fuit.color)
console.log(colour)
const colr=fruits.map(fuit=>fuit.cal)
console.log(colr)



//------------------------filter()----------------------
const ye=fruits.filter(fruit=>fruit.color==="yellow")
console.log(ye);
const calo=fruits.filter(fruit=> fruit.cal < 70)
console.log(calo)
const cali=fruits.filter(fruit=> fruit.cal > 70)
console.log(cali)

//--------------------reduce()------------------------
const max=fruits.reduce((maxi,Element)=>
        Element.cal > maxi.cal ? Element:maxi )
console.log(max)

const low=fruits.reduce((lowe,Element)=>
        Element.cal < lowe.cal ? Element: lowe )
console.log(low)