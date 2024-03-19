/**
 * Read from an external file
 */

const fs = require('fs')
// console.log(typeof fs)

/**
 * Read in sync way
 */

// console.log("Before starting to write")

// const content = fs.readFileSync("input.txt")

// Reading in async way
/**
fs.readFile('input.txt',(err,content)=>{
    if(err){
        return console.log(err)
    }
    console.log("Content of the file is :"+ content)
})
// console.log("Output content is: "+ content)

console.log("Last Line")
*/

/**
 * Write the code to write an external file
 */

