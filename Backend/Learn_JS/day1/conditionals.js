// var num =20
// if(num%2==0){
//     console.log("Even")
// }else{
//     console.log("odd")
// }

// console.log("after if")

//ternary operator
// num%2==0 ? console.log("Even") : console.log("Odd")

var a=1
// if(a>0){
//     if(a>5){
//         console.log('a is greater than 0 and 5')
//     }else{
//         console.log('a is greater than 0 but less than 5')
//     }
    
// }else{
//     console.log('a is less than 0')
// }

a>=0 ? a>5 ? console.log('a is greater than 0 and 5') : console.log('a is greater than 0 but less than 5') : console.log('a is less than 0')

// Switch Statement
var fruit="Apple"
switch(fruit){
    case "apple":
        console.log("It's an apple")
        break
    case "Mango":
        console.log("It's an mango")
        break
    default:
        console.log("Not a valid fruit")
}