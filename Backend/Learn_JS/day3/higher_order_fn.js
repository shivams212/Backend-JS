function getGrretMethod() {
    return function() {
        console.log("Hello Students")
    }
}

let greetFn =getGrretMethod()
console.log(typeof getGrretMethod)

greetFn()