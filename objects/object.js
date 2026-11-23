// let userInformation ={
//     name:"somu",
//     IsLoggedIn:true,
//     age:23,

//     redaing:function(){
//         console.log("somu is reading");
//     },
//     sleeping:function(){
//         console.log("somu is sleeping");
//     }
// }
// console.log(userInformation);




// let student = {
//     name: "Pratibha",
//     age: 23,
//     isStudent: true,
//     marks: [80, 85, 90],
//     address: {city: "Belagavi"},
//     result: null
// };

// console.log(student);


// let employee = {
//     name: "Rahul",
//     salary: 25000,
//     permanent: true,
//     skills: ["Java", "HTML", "CSS"],
//     details: {city: "Bangalore"},
//     bonus: null
// };

// console.log(employee);


// let mobile = {
//     brand: "Redmi",
//     price: 12000,
//     available: true,
//     colors: ["Black", "Blue", "White"],
//     features: {ram: "6GB", storage: "128GB"},
//     offer: null
// };

// console.log(mobile);


// let car = {
//     brand: "Toyota",
//     price: 1500000,
//     available: true,
//     colors: ["Red", "Black"],
//     engine: {type: "Petrol", cc: 1500},
//     insurance: null
// };

// console.log(car);



// let book = {
//     title: "Java Programming",
//     pages: 250,
//     available: true,
//     topics: ["Java", "OOP", "Exception"],
//     author: {name: "James"},
//     rating: null
// };

// console.log(book);



// let student1= {
//     name: "Pratibha",       
//     age: 23,                
//     isStudent: true,        
//     marks: [80, 85, 90],     
//     address: {              
//         city: "Belagavi",
//         state: "Karnataka"
//     },
//     result: null            
// };

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.isStudent);
// console.log(student1.marks);
// console.log(student1.address);
// console.log(student1.result);


// let xyz={
//     name:'Pratibha',
//     age:23,
//     flag:true
// }
// console.log(Object);

// console.log(xyz.name);
// console.log(xyz.age);


// let userInformation ={
//     name:"somu",
//     IsLoggedIn:true,
//     age:23,

//     redaing:function(){
//         console.log("somu is reading");
//     },
//     sleeping:function(){
//         console.log("somu is sleeping");
//     },
//     FavColors:['red','green','black'],
//     address:{
//         city:"pune",
//         pincode:12345,
//     },
//     7:'Favnum'
// }

// userInformation.redaing()
// console.log(userInformation.FavColors);
// console.log(userInformation.FavColors[0]);
// console.log(userInformation.address.pincode);
// console.log(userInformation.address.city);

// //! 1.Dynamic Access

// console.log(userInformation["name"]);
// console.log(userInformation["key"]);
// console.log(userInformation["age"]);
// console.log(userInformation.key);


// //!2.Space in the Key
// console.log(userInformation.IsLoggedIn);

// console.log(userInformation["IsLoggedIn"]);

// //! 3.special keys
// // console.log(userInformation.name%*);
// console.log(userInformation["name%*"]);

// //! 4.numbers can be accessed
// console.log(userInformation["7"]);

// //! Creating
// let userData={
//     name:'somu',
//     age:80,
//     flag:true
// }

// //! Adding

// userData.luckyNo='8'
// console.log(userData);

// //!Upadating

// userData.age=81
// console.log(userData);

// //!Deleting

// delete userData.flag
// console.log(us);

//!Methods of objects
let userData={
    name:'somu',
    age:80,
    flag:true
}

//! 1.keys()
console.log(Object.keys(userData));

//! 2.values()
console.log(Object.values(userData));

//! 3.entries()
// console.log(Object.entries(userData));
let NewDataFormat=Object.entries(userData)
console.log(NewDataFormat);

//! 4.fromentries()
console.log(Object.fromEntries(NewDataFormat));
