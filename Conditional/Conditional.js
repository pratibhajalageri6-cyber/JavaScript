//!If Statement

// let age=2
// if(age>=18){
//     console.log("You can vote for xyz");
// }

//!If else Statement

// let age=29
// if(age>=18){
//     console.log("You can vote for xyz");
// }
// else{
//     console.log("Get lost");
    
// }

//!If else-if Statement

// let marks=40

// if(marks>=90){
//     console.log("Grade A+");
// }
// else if(marks>=80){
//     console.log("Grade A");
// }
// else if(marks>=70){
//     console.log("Grade B+");
// }
// else if(marks>=60){
//     console.log("Grade B");
// }
// else if(marks>=50){
//     console.log("Grade C+");
// }
// else if(marks>=40){
//     console.log("Grade C");
// }
// else if(marks>=30){
//     console.log("Pass");
// }
// else(marks>=20)
// {
//     console.log("Fail");
// }

// let num=0
// if(num>0){
//     console.log("positive");
    
// }
// else if(num<0){
//     console.log("negetive");
// }
// else{
//     console.log("zero");
    
// }


// let a=10
// let b=25

// if(a>b){
//     console.log("b is smaller");
// }
// else{
//     console.log("b is greater");
    
// }

// let a=10
// let b=2
// let c=3

// if(a>b && a>c){
//     console.log("a is greater");
// }
// else if(b>c){
//     console.log("b is greater");
// }
// else{
//     console.log("c is greater");
// }

//! Switch

// let days=5

// switch(days){
//     case 1:console.log("Monday");
//     break;
//     case 2:console.log("Tuesday");
//     break;
//     case 3:console.log("wednesday");
//     break;
//     case 4:console.log("Thrusday");
//     break;
//     case 5:console.log("Friday");
//     break;
//     case 6:console.log("Saturday");
//     break;
//     case 7:console.log("Sunday");
//     break;
//     default:
//         console.log("Invalid");
        
// }

//!Ternary Operator

// let flag=true
// let result=flag ? "login" : "logout"
// console.log(result);

// let age=23
// console.log(age>21 ? "Welcome to party" : "Get lost");


// let marks=60
// console.log(marks>90 ? "grade A": 
//              marks>80 ?"Grade B":
//             marks>70 ? "Grade C":
//             "Fail"
//             );

let num=7
let result=num % 2==0 ? "Even" : "Odd";
console.log(result);

let Password="12345678"
let result1=Password.length >=8 ? "Valid" : "Invalid";
console.log(result1);

let tem=35
let res=tem >=30 ? "Hot" : "Cold";
console.log(res);

let money=5000;
let res1=money >= 10000 ? "Rich" : "Poor";
console.log(res1);

let hour=10
let res2=hour < 12 ? "Morning" : "Evening" ;
console.log(res2);


//!Right Shift
let a=10
console.log(a >> 3);


//!Left Shift
let b=10
console.log(b << 3);
