/**
 * Promise from simran
 */

/**
const simranPromise =  new Promise((resolve,reject)=>{
    let parentDecision=false

    if(parentDecision){
        resolve({msg:"Yeyy, ab shaadi ki tayari karo",dec:parentDecision})
    }else{
        reject({msg:"Papa ne IAS dhoond lia hai !, sorry.....",dec:parentDecision})
    }

});

// const obj={}

simranPromise.then((obj)=>{
    console.log("Simran message:",obj.msg)
    console.log("Parent decision was:",obj.dec)
    // console.log("*******************");
    console.log("Let's book the wedding venue")
})
.catch((obj)=>{
    console.log("Simran message:",obj.msg)
    console.log("Parent decision was:",obj.dec)
    console.log("Tinder kha ho yaar!")
}).finally(()=>console.log("Chalo life mein clarity mili "))

*/

/**
//  * Promise all
const f1Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        if(Math.random()>0.5){
            resolve("Friend1: Hey I am in for goa")
        }else{
            reject("Friend1: Sorry mere pet mei dard ho rha hai !")
        }
    },1000)
})

const f2Promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        
        if(Math.random()>0.5){
            resolve("Friend2: Hey I am in for goa")
        }else{
            reject("Friend2: Sorry mere bili bimar hai !")
        }
    },2000)
})

const f3Promise = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        
        if(Math.random()>0.5){
            resolve("Friend3: Hey I am in for goa")
        }else{
            reject("Friend3: Sorry muje PW SKills ke live session karne hai !")
        }
    },3000)
})

Promise.all([f1Promise,f2Promise,f3Promise]).then((msg)=>{   //then ke ander resolve function
    console.log(msg)
    console.log("Yey we are going goa !")
}).catch((msg)=>{  //catch ke ander reject wala function hai
    console.log(msg)
    console.log("Yaar band karo Goa ka plan banana")
})

*/

// Promise any
const gf1Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        if(Math.random()>0.5){
            resolve("GF1: Hey I'll come for dinner")
        }else{
            reject("GF1: Phone is  unreachable !")
        }
    },1000)
})

const gf2Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        if(Math.random()>0.5){
            resolve("GF2: Hey I'll come for dinner")
        }else{
            reject("GF2: I am on diet !")
        }
    },1000)
})

const gf3Promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{

        if(Math.random()>0.5){
            resolve("GF3: Hey I'll come for dinner")
        }else{
            reject("GF3: My friends are coming !")
        }
    },1000) //after 1 second it will be executed
})

Promise.any([gf1Promise,gf2Promise,gf3Promise]).then(result=>{
    console.log(result)
    console.log("My valentine day is sorted")
}).catch(msg=>{
    console.log(msg)
    console.log("How to be the part of Bajrangdal ?")
})
