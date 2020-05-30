
//ES6 Syntax simple promise
const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve('Worked');
    } else {
        reject('error');
    }
});

promise.then(result => result + " Hello")
    .then(result2 => result2 + " yesss Working")
    .catch(() => {    //promise chain error handling
        console.log('error');
    })
    .then(res3 => console.log(res3 + "?"))




//ES6 Syntax simple promise.all

const p1 = new Promise((resolve, reject) => {
   setTimeout(resolve, 100, 'Hii');
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Second');
 });

 const p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'Third');
 });

 Promise.all([p1, p2, p3]).then(results=>{
     console.log(results[0]);
     console.log(results[1]);
     console.log(results[2]);
 })


 //Real time Example
 const fetch = require('node-fetch');
 const urls=[
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
 ];
// fetch(urls[0]).then(res => console.log(res.json()))  status is pending operation not allowed

// single fetching example
fetch(urls[0]).then(res => res.json())
    .then(result => console.log(result)); 

//for all the promises together
Promise.all(urls.map(url => {
    return fetch(url).then(res => res.json());
})).then(results=>{
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
})

