// let h1 = document.querySelector('h1');

// function changeColor(color , delay , nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor('red', 1000, () => { 
//     changeColor('orange', 1000, () => {
//         changeColor('yellow', 1000, () => {
//             changeColor('blue', 1000);
//         });
//     }  );
// });






// changeColor('red', 1000);

// changeColor('orange', 2000);

// changeColor('green', 3000);




// setTimeout(() => {
//     h1.style.color ='red';
// },1000);

// setTimeout(() => {
//     h1.style.color ='orange';
// },2000);

// setTimeout(() => {
//     h1.style.color ='green';
// },3000);





// promises


// function saveToDB(data, success, failure) {
//     let InternetSpeed = Math.floor(Math.random() * 10) + 1 ;
//     if(InternetSpeed > 4){
//        success();
//     }else {
//        failure();
//     }

// }

// saveToDB("Sai Harshtih", () => { 
//     console.log("Data Saved"); 
//     saveToDB("Sai Harshtih", () => { 
//         console.log("1:Data Saved");
//         saveToDB("Sai Harshtih", () => { 
//             console.log("2:Data Saved");}, 
//             () => {
//                  console.log("2:Waeak connection"); });}, 
//         () => {
//              console.log("1:Waeak connection"); });}, 
//     () => {
//          console.log("Waeak connection"); });


function saveToDB(data) {
    
    return new Promise((resolve, reject) => { 
        let InternetSpeed = Math.floor(Math.random() * 10) + 1 ;
        if(InternetSpeed > 4){
            resolve("Data Saved");
         }else {
            reject("weeak connection");
         }
    })

}


saveToDB("Sai Harshith").then((message) => {
    console.log(message);
    return saveToDB("Sai Harshith");
}).then((message) => {
    console.log(1 + message);
    return saveToDB("Sai Harshith");
}).then((message) => {
    console.log( 2 + message);
}).catch((error) => {
    console.log("Error: waek connection :", error);
});



// async functions


// async function greet(){
//     return "Hello";
// }

// greet().then((message) => {
//     console.log(message);
// }).catch((error) => {
//     console.log("Error: ", error);
// });



// async - await function

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 2000);
    });
}


async function demo(){
    await getNum();
    await getNum();
    await getNum();

}


DB example;
async function saveToDBAsync(data) {
    let result = await saveToDB(data);
    console.log(result);
    let result2 = await saveToDB(data);
    console.log(1 + result2);
    let result3 = await saveToDB(data);
    console.log(2 + result3);
}

// try catch block to hadle await errors 





// promisification


var promisify = require('util').promisify;

function slow(cb){
    setTimeout(function() {
        console.log("Running slow function");
        cb(null, "Slow Function Finished");
    }, 1000);
}

var slowAsync = promisify(slow);

promiseHooks().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});

