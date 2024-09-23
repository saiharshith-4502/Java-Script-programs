// let  a = "Sai Harshith";

// console.log(typeof a);


// let a = {
//     name : "Sai Harshith",
//     age : function() { return this.name; },
// }

// setTimeout(() => {
//     console.log('setTimeout running');
//     setInterval(() => {
//         console.log('Interval running');
//     }, 1000);
// }, 5000);


// setInterval(() => {
//     console.log('Interval running');
//     setTimeout(() => {
//         console.log('Timeout within Interval');
//     }, 1000);
// }, 2000);


// setTimeout(() => {
//     console.log('Timeout triggered');
// }, 3000);

// setInterval(() => {
//     console.log('Interval triggered');
// }, 1000);


// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);

//   // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable);
//   }

//   for (let vegetable of recipeMap.values()) {
//     console.log(vegetable);
//   }



// const weakMap = new WeakMap();
// let obj = { key: 'value' };
// weakMap.set(obj, 'some data');
// // obj = null; // The object is eligible for garbage collection

// console.log(weakMap.get(obj)); // Output: undefined



// let sum = ([1, 2, 3] => );

// let user = {
//     name: "sruja",
//     age: 21,
//   };
//   function sayHi() {
//     console.log(this.name);
//   }
//   let sayhello = () => {
//     console.log(this.name);
//   };
//   let saybye = function () {
//     console.log(this.name);
//   };
//   user.f = sayHi;
//   user.f1 = sayhello;
//   user.f2 = saybye;
//   user.f();
//   user.f1();
//   user.f2();


// name = "jagan";
// let user = {
//   name: "sruja",
//   age: 21,
// };
// function sayHi() {
//   console.log(this.name);
// }
// let sayhello = () => {
//   console.log(this.name);
// };
// let saybye = function () {
//   console.log(this.name);
// };
// user.f = sayHi;
// user.f1 = sayhello;
// user.f2 = saybye;
// user.f(); 
// user.f1();
// user.f2();
// console.log(name);


// for (let i = 0; i < 3 ; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// function SmallUser(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// let user = new SmallUser("Dave", 35); 
// console.log(user);

// function SmallUser(name, age) {
//   this.name = name;
//   this.age = age;
// }

// user = new SmallUser("Dave", 35); 
// console.log(user);

// SmallUser = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// user = new SmallUser("Dave", 35); 
// console.log(user);

// const SmallUser = (name, age) => {
//   this.name = name;
//   this.age = age;
// };


// user = new SmallUser("Dave", 35); 
// console.log(user);


// function SmallUser(name, age) {
//   this.name = name;
//   this.age = age;
//   return 42;
// }
// const user = new SmallUser("Dave", 35);


// globalThis.a =10;

// console.log(a);

// class User {
//   constructor(name, age, address) {
//     this.name = name;
//     this.age = age;
//     this.address = {
//       street: '123 Main St',
//       city: 'Anytown',
//       state: 'CA',
//     };
//   }
// }
// console.log(User.address);

// const user = {
//   profile: {
//     address: {
//       city: 'New York'
//     }
//   }
// };
// console.log(user.profile?.address?.city); // Output: New York
// console.log(user.profile.contact?.email); // Output: undefined


// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
// console.log(User?.age);


// let value1 = null;
// let value2 = "default";
// console.log(value1 ?? value2); // "default"

// let value3 = NaN;
// console.log(value3 ?? 10); // 0 (because 0 is neither null nor undefined)


// for(var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }


// let a = 10;

// {
//   // let a = 20;
//   console.log(a); // Output: 20
// }


// function x() {
//   for (var i = 0; i < 3; i++) {
//     function a(i) {
//       setTimeout(() => {
//         console.log(i);
//       }, i * 1000);
//     }
//     a(i);
//   }
// }

// x();


// function outer() {
//   var a = 10;
//   function inner() {
//     console.log(a); 
//   }
//   return inner;
// }

// outer()();

// function sum(a, a) {
//   return a + a;
// }

// console.log(sum(2, 3)); 

// let a = 18;
// console.log(a > 18 || " conformed with parents");


// function count (a) {
//   var b;
//   ( a === 3 ) ? b = 1 : b = b;

//   return b;
// }

// let counter = count;

// console.log(count(3));

// console.log(counter()); 

// str = "Sai";

// console.log(str.at(-1));

// let weakMap = new WeakMap();
// let obj = {};
// weakMap.set(obj, 'value');
// console.log(weakMap.get(obj)); // 'value'
// obj = null; // The key object can be garbage collected
// console.log(weakMap.get(obj)); 


// let room = {
//   number: 23,
// }

// let meetup = {
//   title: "Conference",
//   room : 234,
// };

// console.log(meetup.room)

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {
//   // john: 100,
//   ben: 150,
//   [john]: 200, // Using square brackets to define the key dynamically
// }; // try to use an object

// visitsCountObj[ben] = 234; // try to use ben object as the key
// visitsCountObj[john] = 123;
// console.log(visitsCountObj.john); //


// function sum(a, b){

//   return a + b;

// }


// let join = sum.bind(this , 2);

// console.log(join(3)); 



function name () {
  fname = "John";
  lname = "Smith";

  get() {
    return this.fname + " " + this.lname;
  }
  set(fname, lname) {
    fname = fname;
    lname = lname;
  }

  
}