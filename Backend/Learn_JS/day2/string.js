let name= 'Shivam'

let city= "Chennai"

console.log(name, city)
console.log(typeof city)

console.log(name[0])
console.log(name[11])

name[2]="M"
console.log(name)

// length of the string
console.log(name.length)

let first_name="Shivam"
let last_name=" Singh"

let full_name=first_name.concat(last_name)
console.log(full_name)

console.log(full_name.toUpperCase())
console.log(full_name.toLowerCase())

console.log(full_name.slice(2))
console.log(full_name.slice(2,5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5,-1))

console.log(full_name.indexOf('h'))
console.log(full_name.indexOf('z'))

// Trim method
let word =" Shivam "
console.log(word)
console.log(word.trim())

name="Shivam Singh"
console.log(name.split(" "))
console.log(name.split(""))