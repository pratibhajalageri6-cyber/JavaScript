// console.log("Hello Array");
// let data=[1,2,3,4,5]
// console.log(data);

// let data1=["somu",80,true]
// // console.log(data1);
// // console.log(typeof data1);


// data1[1]="90"
// console.log(data1);
// console.log(data1.length);

// let data=["somu",90,true,function(){console.log("hello I am inside array as item of array")}]
// data[3]();

// let array=new Array(10,20,30,40,50)
// console.log(array);

// let array=new Array(10)
// console.log(array);
// console.log(array.length);

//!Array.from

// let data=12345678
// console.log(Array.from(data));

// let data1="Javascript"
// console.log(Array.from(data1));

// let data2=true
// console.log(Array.from(data2));

// let data=[1,2,3,4,5]
// console.log(Array.from(data,(num)=>num*5));
// console.log(Array.from(data));

// let data1="javascript"
// console.log(Array.from(data1,(String)=>String+0).toString().replaceAll(" ," ," "));


//!Array.isArray()
// let data=[1,2,3,4,5,6]
// // console.log(Array.isArray(data));
// if(Array.isArray(data))
// {
//     console.log("Data recived in the form of Array");
// }
// else{
//     console.log("Data not recived in the form of Array");
    
// }

//!Array.of()

// console.log(Array.of(1,2,3,4,5,6));
// console.log(Array.of(10));

//!instance Metod

//!Push()
// let array=[1,2,3,4,5]
// array.push("somu")
// console.log(array);

// //!Pop()
// array.pop()
// console.log(array);
// //!push() and Pop() performs operation on end

// //!Shift()
// array.shift()
// console.log(array);

// //!unshift()
// array.unshift("Shree")
// console.log(array);
// //!shift() and unshift() performs operation on bigin

//! slice()
// let array=[10,20,30,40,50]
// console.log(array.slice(2));
// console.log(array.slice(2,5));
// console.log(array.slice(-2));
// console.log(array.slice(-2,-4));
// console.log(array.slice(-5,2));

//!splice()
// let array=[10,20,30,40,50]
// let DeletedData=array.splice(1,2)

// let DeletedData=array.splice(1,0,"rani","somu","raju")
// let DeletedData=array.splice(1,2,"rani","somu","raju")
// console.log("DeletedData"+DeletedData);
// console.log(array);

//!concat()
// let arr1=[23]
// let arr2=[29,93,77,36]
// console.log(arr1.concat(arr2));


//!reverse()
// let arr=[1,2,3,4,5,6,7,8]
// console.log(arr.reverse());

//!join()
// let arr=[10,20,30,40,50]
// console.log(arr.join());
// console.log(arr.join("%"));

// console.log(arr.join(""));

//!indexof()
// let arr=[1,2,3,4,5,4]
// console.log(arr.indexOf(4));

// //!lastindexof()
// let arr1=[1,2,3,4,5,4]
// console.log(arr1.lastIndexOf(5));


//!includes
// let arr=[1,2,3];
// console.log(arr.includes(2));
// console.log(arr.includes(4));

//!entries
// let arr=[10,20,30,40,50]
// for(let x of arr.entries()){
//     console.log(x);
    
// }

//!keys()
// let arr=[10,20,30,40,50]
// for(let x of arr.keys()){
//     console.log(x);
// }

//!values()
// let arr=[10,20,30,40,50]
// for(let x of arr.values()){
//     console.log(x); 
// }

//!every
let arr=[2,4,6,9]
let data=['red','white','green']
console.log(arr.every((num)=>num%2 === 0));
console.log(arr.every((data)=>data !== undefined));


