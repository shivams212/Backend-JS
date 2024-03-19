/**
// Destructing in arrray
const num =[1,2,3]

// const [a,b,c] = [1,2,3]
// console.log(a,b,c)

// Not defining c and what output value will be coming in code
const [a,b] = [1,2,3]
console.log(a,b)
// console.log(c)

// Defining one extra variable without giving value of d
// const [a,b,c,d]=[1,2,3]
// console.log(a,b,c,d)

const [p,q,r]= [1,2,[4,5,6]]
console.log(p,q,r)

// destructing in object
const per ={
    age:21,
    name:"SHivam",
    city:"Chennai"
}

const {name,age,hobby}=per

console.log(name,age,hobby)

*/

// Nested example
const per1 ={
    age1:21,
    name1:"SHivam",
    city:"Chennai",
    address :{
        city1:"Chennai",
        state1:"TamilNadu"
    }
}

const { name1,age1,address: {city1,state1}}=per1

console.log(name1,age1,city1)
