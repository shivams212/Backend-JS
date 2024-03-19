/** async function getMessage(){
    return 'Hello Students'
}
// console.log(getMessage())

getMessage().then(result=>console.log(result))
output =>Hello Students
*/

/**
 * Print Hello after a wait
 */

/**
function printHelloAfterWait(){

    console.log('First Line')
    setTimeout(()=>{
        console.log("Hello Students")
    },10)
    console.log('Last Line')
}

printHelloAfterWait()

Output:-First line
Last line
Hello Students ,this is not printing because of settime of function

*/
console.log("hello form the begining")

async function printHelloAfterWait(){

    console.log('First Line')

    let data =new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Students")
        },3000)
    })

    let result = await data  //Store waiting for the data promises to be completed
    console.log(result)
    console.log('Last Line')
}

printHelloAfterWait()

console.log("Hello from the end")

