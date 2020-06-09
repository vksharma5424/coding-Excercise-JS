
/********************************************************************************************
 * 
 * Method 1 [ES5]
 * 
 *********************************************************************************************/

const p1 = new Promise(function(resolve) {
    resolve('hello');
});

var a = p1.then(function(sResult) {
       return sResult + " World";
    }).then(function(sResultFinal) {    //Use this code if console.log is inside here below this line
        return sResultFinal; //console.log here
    });

//seprate console.log
a.then(function(sResultFinal) {
    console.log(sResultFinal);
})
/********************************************************************************************
 * 
 * End Method 1
 * 
 *********************************************************************************************/

/********************************************************************************************
 * 
 * Method 2 [ES6]
 * 
 *********************************************************************************************/
const p2 = new Promise((resolve,reject) => {
    resolve('hello');
});

var b = p2
        .then(sResult => sResult + ' World');
b.then(sResultFinal => {
    console.log(sResultFinal);
})

/********************************************************************************************
 * 
 * End Method 2
 * 
*********************************************************************************************/

