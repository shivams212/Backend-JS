/**arr = [1,2,3]

console.log(typeof arr)
console.log(arr)

arr1 = new Array()
console.log(typeof arr1)
console.log(arr1) **/

/** 
arr = [1,2,3,4,9,8,7,19,21,29,20]

console.log(arr[0])
console.log(arr[7])
console.log(arr[21])

console.log(arr[-1])
*/

// Array are mutable, we can modify the arrays
// arr[1]=300
// console.log(arr)

// insert items in the arrays

/** 
arr = [5,7,1,9,8,16]
console.log(arr)

arr.push(11)
console.log(arr)

arr.push(99,100,101)
console.log(arr)

arr.unshift(999)
console.log(arr)

arr.unshift(9,99,999)
console.log(arr)
*/

/** 
// Pop Method
let arr=[5,7,1,9,8,16]

console.log(arr.pop())
console.log(arr)

// shift
console.log(arr.shift())
console.log(arr)

// Add one array to another array
// Concat method
let a1=[1,2,3]
let a2=[5,6]
let r=a1.concat(a2)
console.log(r)

// Find length of array
 console.log(arr.length)

//  Convert array into strings

chr_arr = ['S','h','i','v','a','m',' ','S','i','n','g','h']

// join
console.log(chr_arr.join())
console.log(chr_arr.join(""))
console.log(chr_arr.join("$"))
console.log(typeof chr_arr.toString())

*/
/**
// Slicing of the array
let num =[3,4,5,5,6,7,9,11,13,12,10]

console.log(num.slice(2))
console.log(num.slice(2,7))
console.log(num.slice(5,-1))
console.log(num.slice(-9,-2))
console.log(num.slice(2,-1))

console.log(num)
*/

/** 
// Spicing , which modify the given array
let numbers = [1,2,3,4,5]
let removed = numbers.splice(2,2,11,12,13)
console.log(removed)
console.log(numbers)
*/

/**
// Reverse a given array
let nums = [4,1,5,7,19,2]
nums.reverse()
console.log(nums)
*/

// let nums = [4,1,5,7,19,2]
// console.log(nums.indexOf(2))

// Sorting the array
let my_arr = [1,13,15,2,40]
// my_arr.sort((a,b)=> a-b)
my_arr.sort((a,b)=> b-a)

console.log(my_arr)


