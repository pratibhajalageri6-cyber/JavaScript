// function print()
// {
//     console.log("Hello Javascript");
//     console.log("How are you?");
// }
// print()

// function Greeting()
// {
//     console.log("Good Morning");
// }
// Greeting()

// function Afternoon()
// {
//     console.log("Good Afternoon");
// }
// Afternoon()


// function Greeting(anything)
// {
//     console.log("Good Morning" +anything);
// }
// Greeting(" Sir")


// function greet(a)
// {
//     if(a >= 9 && a < 12)
//         {
//         console.log("Good Morning");
//         }
//     else if(a >= 12 && a < 17)
//     {
//         console.log("Good Afternoon");
//     }
//     else if(a >= 17 && a < 18)
//     {
//         console.log("Good Evening");
//     }
//     else{
//         console.log("invalid");
//     }
// }
// greet(17)

// function TotalMarks(m,c,p,e,k)
// {
//     return m+c+p+e+k
// }
// let result=TotalMarks(60,40,80,35,99)

// console.log(result +5);

// //!Annonymous Function

// let Booth=function()
// {
//     console.log("Hello I am Bhoot");
    
// }
// Booth()


// //! Arrow Function
// //!1
// let add=(a,b)=> a+b
// console.log(add(10,20));

// //!2
// let add1=a =>a+20
// console.log(add1(10));

// //!3
// let add2=_ => 20+20
// console.log(add2());

// //!Implicit
// let add=(a,b)=> a+b
// console.log(add(10,20));

// //!Explicit
// let add1=(a,b)=>
//     { return a+b }
// console.log(add(10,20));


// //!4 function Expression

// let addition = function printAdd()
// {
//     console.log(10 +70);
// }
// addition()

//!Callback Function

// function add(){
//     console.log(10+30);
// }

// function task(Function){
//     Function()
// }

// task(add)

// function task(Function)
// {
//     Function()
// }
// task(
//     function(){
//         console.log(40+50)
//     }
// )

//! HOF

// function Task(){
//     return function(){
//         console.log("Thank You");
        
//     }
// }
// let result=Task()
// result()

//! Calculator

// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function mulp(a,b){
//     return a*b
// }
// function div(a,b){
//     return a/b
// }
// function calci(Callback,a,b)
// {
//     console.log(Callback(a,b));
    
// }
// calci(div,30,40)

//!Exp for HOF and callback

// function Greeting(callback)
// function Greeting()

// {
//     console.log("Welcome to xyz cafe");
//     console.log("You can Order here");
//     // callback()
//     chickenBiriyani()
//     VegBiriyani()
// }

// function chickenBiriyani()
// {
//     console.log("Thank you for your order...");
//     console.log("Your order Biriyani is getting ready");
//     console.log("Here is your order....");
    
// }

// function VegBiriyani()
// {
//     console.log("Thank you for your order...");
//     console.log("Your order Biriyani is getting ready");
//     console.log("Here is your order....");
    
// }
// // Greeting(chickenBiriyani)
// Greeting()

function Greeting(callback,takeaway)

{
    console.log("Welcome to xyz cafe");
    console.log("You can Order here");
    callback(takeaway)
}

function chickenBiriyani(takeaway)
{
    setTimeout(() =>{
    console.log("Thank you for your order...");
    console.log("Your order Biriyani is getting ready");
    console.log("Here is your order....");
    takeaway()
    },5000)
}

function VegBiriyani(takeaway)
{
    setTimeout(() =>{
    console.log("Thank you for your order...");
    console.log("Your order Biriyani is getting ready");
    console.log("Here is your order....");
    takeaway()
    },5000)
    
}

function takeaway()
{
    console.log("Your order is ready");
    
}
// Greeting(chickenBiriyani)
Greeting(VegBiriyani,takeaway)