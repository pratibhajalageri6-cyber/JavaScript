// let array=[1,2,3,4,5]
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
    
// }

// function multiply(x){
//     return x*5
// }
// let newArray=array.map(multiply)

// console.log("New Array:"+newArray);
// console.log("Org Array:"+array);

//!Map syntax
// array.map((items,index,orgarray) => {
//     console.log(items,index,orgarray);
    
// })

//!cube

// let result=array.map((items,index,orgarray) =>items*items*items )
//     console.log(result);
    
//!filter
let Data=[1,2,3,4,5,6,7,8,9,10]

// let newData=Data.map((item)=>{
//     if(item%2==0)return item
// })
// console.log(newData);

// let result=Data.filter((item,index,org)=> item%2 ===0)
// console.log(result);
// let result1=Data.filter((item,index,org)=> item%2 )
// console.log(result1);

// let data=['a','b','c','d','e']
// let result=data.filter((item)=>item.length>5)
// console.log(result);

// let data=['Ravi','Rohan','Pratibha','Sneha','Kavya']
// let result=data.filter(str=>str.startstwith('R') )
// console.log(result);wrong

// let data1=['Abi',' ','Adi']
// let result1=data1.filter(str=>str!=' ')
// console.log(result1);


// let data1=['abi','Pratibha','bgf','adi','hgt',]
// let result1=data1.filter(str=>str.includes('a'))
// console.log(result1);

// let Array=[55,65,70,67,5]
// let result=Array.filter(Array=>Array.toString.includes('5'))
// console.log(result);wrong

//!reduce
let data=[1,2,3,4,5,6,7,8,9,10]
// let sum=0
// for(let i=1;i<data.length;i++){
//     sum=sum+data[i]
// }
// console.log(sum);

// let result=data.reduce((sum,curnum)=>sum+curnum)
// let result=data.reduce((acc,curv)=>acc+curv,0)

// let result=data.reduce(()=>{

// },initalvalue)
// console.log(result);

// let newdata=data.reduce((acc,x)=>{
//     return acc+x
// },100)
// console.log(newdata);

// let result=data.filter(item=> item%2 ==0).reduce((acc,cur)=>acc+cur);
// console.log(result);

// let a = [10, 15, 20, 25, 30, 35];

// let odd = a.filter(num => num % 2 != 0);

// console.log(odd.length);

let a = [2, 3, 4, 5];

let square = a.map(num => num * num);

let sum = square.reduce((total, num) => total + num, 0);

console.log(square);
console.log("Sum of squares:", sum);

let c = [6, 10, 12, 15, 18, 20, 24];

let result = c.filter(num => num % 2 == 0 && num % 3 == 0);

console.log(result);
console.log("Count:", result.length);


let b = ["Java", "Python", "HTML", "CSS"];

let count = b.reduce((total, str) => total + str.length, 0);

console.log("Total characters:", count);