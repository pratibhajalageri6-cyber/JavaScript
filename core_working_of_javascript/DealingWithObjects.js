// let userInfo ={
//     name:"Shree",
//     age:23,
//     flag:false,

//     working:function () {
//         console.log("Shree is Working");
        
//     }
// }
// console.log(userInfo);

// function add(a,b){
//     console.log(a+b);
    
// }
// // add(10,20)

// console.log(add.name);
// console.log(add.length);

//!pass data as value

// let data1=10
// let data2=data1

// console.log(data1);
// console.log(data2);

// console.log("After Updating>>");

// data1=100
// data2=100
// console.log("data1 "+data1);
// console.log("data2 "+data2);

//!Passing data is Reference

// let obj1={
//     name:"Shree",
//     age:23
// }
// obj2= obj1
// console.log(obj1);
// console.log(obj2);

// console.log("After Upadating >>>>");

// obj2.age=100

// console.log(obj1.age);
// console.log(obj2);

//!outer and inner Function

function outerFunction(){
    console.log("OuterFunction exe Started");
    let impData=10
    function innerFunction(){
        console.log("InnerFunction exe Started");

        console.log("Accessing outerfunction value:"+impData);
        console.log("InnerFunction exe ended");
    }
    console.log("OuterFunction exe ended");
    return innerFunction
}
let result=outerFunction()
result()





