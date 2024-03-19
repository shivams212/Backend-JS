/**
//  Define a function
**/

function helloStudent(){
    console.log("Hello Students !")
}

helloStudent()

/**
 * I want to ger a sum of two numbers
 */

function sum(a,b){
    return a+b
}

let b=sum(5,6);
console.log(b);


function func(){
    console.log(arguments)
}

func(1,2,3,4,5,6)