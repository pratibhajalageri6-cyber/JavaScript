//! Using single quote
// let name='Pratibha'
// console.log(name);
// console.log(typeof name);

// //! Using Double quote
// let name1="Pratibha B J"
// console.log(name1);
// console.log(typeof name1);


// //!Using templete literal
// let name2=`Pratibha B`
// console.log(name2);
// console.log(typeof name2);

// let first_name="Pratibha"
// let last_name="Jalageri"
// console.log("My first name is " + first_name+" My last name is" +last_name);
// console.log("My full name is "+(first_name+last_name));

// //!By Template
// //! ${}--String interpolation
// console.log(`My first name is ${first_name} My last name is ${last_name}`);
// console.log(` My full name is ${first_name+last_name}`);

//!&

// let str=new String("JavaScript")
// console.log(str);
// console.log(typeof str);

// //! length
// let data="Pratibha"
// console.log(data.length);
// console.log(data[0]);
// console.log(data[data.length-1]);

//! String static Methods

//! &1.String.fromCharCode

// let str=String.fromCharCode(80,114,97,116,105,98,104,97)
// console.log(str);


// //! &3.String.fromCodePoint
// let str1=String.fromCodePoint(128540)
// console.log(str1);

//! & raw

// let str=String.raw`hello/-\n"@5663783hskjeh`
// console.log(str);

//! String Instance Methods
// //! 1.At()

// let str='JavaScript'
// console.log(str.at(0));
// console.log(str.at(-1));

// //! 2.charAt()

// let str1='JavaScript'
// console.log(str1.charAt(0));
// console.log(str1.charAt(-1));

// //! 3.charCodeAt()
// let str2='JavaScript'
// console.log(str2.charCodeAt(1));

// //! 4.concat

// let str3="Java"
// let str4="Script"
// let newstr=str3.concat(" ",str4, " is"," Wonderful"," Language")
// console.log(newstr);

// //! 5.includes

// let str5="Javascript is wonderful language"
// console.log(str5.includes('is',14));
// console.log(str5.includes('is'));

// //! 6.indexof()
// console.log(str5.indexOf("a",5));

//! 7.lastIndexof()
// let data="Pratibha B Jalageri"
// console.log(data.lastIndexOf(" B"));

//! 8.split()
// let str="Pratibha B Jalageri"
// console.log(str.split("a"));

// let str1="Pratibha B Jalageri"
// console.log(str.split(" "));

// let str2="Pratibha B Jalageri"
// console.log(str.split(""));

// //! 9.split(space,limit)
// let str3="Pratibha B Jalageri"
// console.log(str.split("",7));

// //! 10.toUppaerCase()
// let str="Pratibha B Jalageri"
// console.log(str.toUpperCase());

// //! 11.toLowerCase()
// let str1="Pratibha B Jalageri"
// console.log(str1.toLowerCase());

//! 12. trim()

// let str="    Jvascript is wonderful language     "
// console.log(str.trim());
// console.log(str);
// console.log(str.length);
// console.log(str.trim().length);
// console.log(str.trimStart());//!14.trimStart()
// console.log(str.trimEnd());//! 15.trimEnd()


//! 16.Startwidth()
// let link="http.//www.google.com"
// console.log(link.startsWith("http"));
// console.log(link.startsWith("https"));

// //! 17.endtwidth()
// console.log(link.endsWith(".com"));
// console.log(link.endsWith("abc"));

//!18.repeat()
// let data=" Pratibha "
// console.log(data.repeat(5));

// //!19.padstart()
// let data="pratibha"
// console.log(data.padStart(16,"b"));


// //!20.padend()
// let data1="pratibha"
// console.log(data.padEnd(15,"b"));

//!21.replace()
// let data1="pratibha "
// console.log(data1.replace("bha","pra"));

// //!22.replaceAll()
// let data="pratibha "
// console.log(data.replaceAll("pratibha","Jalageri"));

//!23.toString()
// let data=new String("hello")
// console.log(data);
// console.log(typeof data)
// console.log(typeof data.toString());

//! Slice()
let str="Javascript is Wonderful language"
console.log(str.slice(4));
console.log(str.slice(-19));
console.log(str.slice(11,22));
console.log(str.slice(22,11));
console.log(str.slice(-7,-15));

//!Substring()
console.log(str.substring(4));
console.log(str.substring(-19));
console.log(str.substring(11,22));
console.log(str.substring(22,11));
console.log(str.substring(-7,-15));




