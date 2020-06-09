// import fetch from 'node-fetch';
const fetch = require('node-fetch');
// Normal Promise example
fetch('https://jsonplaceholder.typicode.com/users')
.then(users=>users.json())
.then(console.log)

// Normal Promise example 2
fetch('https://jsonplaceholder.typicode.com/users')
.then(users=>users.json())
.then(res=>console.log(res))


//using async await
const functionFetch = async function() {
    const userData = await fetch('https://jsonplaceholder.typicode.com/users'); //fetch() returns promise hence await
    const resultData = await userData.json(); //.json() retruns promise use await
    console.log(resultData);
}
functionFetch()


// Example 2 Normal Promise using promise.all
const urls=[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
 ];

// for all the promises together
Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json());
})).then(results=>{
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}).catch(()=>console.log('error'))
 

//Using async-await

//for all the promises together
async function getUserData() {
    try {
        const[users, posts, albums] = await Promise.all(urls.map(url => 
            fetch(url).then(res => res.json())
         ))
         console.log(users);
         console.log(posts);
         console.log(albums);
    } catch(error) {
        console.log('Error ', error);
    }
}
getUserData();
