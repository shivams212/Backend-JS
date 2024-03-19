function greet(name,callback) {
    const greeting ="Hello "+name
    callback(greeting)
}

function displayGreeting(message){
    console.log(message)
}

greet("Shivam", displayGreeting)

// Callback hell | Pyramid of doom
getUser(function(user) {
    getPosts(user.id,function(post){
        displayUserInfoAndPost(user,posts,function(){
            console.log("user info and posts sucessfully displayed")
        })
    })
})