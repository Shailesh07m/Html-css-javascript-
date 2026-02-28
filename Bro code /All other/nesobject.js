// 🔹 Nested Object Summary

// A nested object is an object that contains another object as a property.
// This allows representing structured or hierarchical data clearly and efficiently.

// ✅ Purpose:
// - Organize related data together
// - Represent complex structures (e.g., users with addresses, orders with items)

const person={
    fname:"John",
    age:30,
    isalive:true,
    hobbies:["bakchodi","gaming"],
    address:{
        flat:302,
        wing:"a",
        city:"pune",
    }
}
console.log(person.address.city)

console.log(person)
console.log(person.address)

for(const property in person.address){
    console.log("Address is "+person.address[property])
}



class add{
    constructor(street,city,pincode){
        this.street=street;
        this.city=city
        this.pincode=pincode

    }
}

class per{
    constructor(fname,age,job,...address){
this.fname=fname
this.age=age
this.job=job
this.address= new add(...address)
    }
}

const per1=new per("gandu",69,"bakchodi","Mathade wasti Road ","Pune",411047);
const per2=new per("aandu",59,"pkmkb","Mathade wasti Road ","Pune",411013);
const per3=new per("pandu",49,"baki","Mathade wasti Road ","Pune",411034);

console.log(per1.fname)
console.log(per1)
console.log(per2)
console.log(per3)

console.log("pushpa padari")