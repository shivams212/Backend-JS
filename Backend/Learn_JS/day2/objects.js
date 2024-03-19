const user ={
    name : "Shivam",
    age : 19,
    city : "Chennai"
}

// Accessing the data
console.log(user.name)
console.log(user['name'])


// Adding data to the object

user.country = "India"
user["continent"] ="Asia"
console.log(user)

// Deleting object keys and object itself
delete user.country
console.log(user)

delete user['continent']
console.log(user)

// Iterate 
let person = {
    name:"Shivam",
    age:19,
    address:{
        city:"Chennai",
        state:"Tamilnadu",
        country:"India"
    }
}
for(let key in person) {
    console.log(key)
}

// If we want to print keys and values
for(let key in person) {
    console.log(key,"=>",person[key])
}

// Keys printing
console.log(Object.keys(person))
// Values printing
console.log(Object.values(person))

// Both keys and values printing
console.log(Object.entries(person))


// Cloning an object using assign method
const new_person = Object.assign({}, person)
console.log(new_person)

// Additional features while cloning
const new_person1 = Object.assign({}, person, {role:"Developer"})
console.log(new_person1)