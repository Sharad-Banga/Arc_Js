
// // making an object
// let user = {
//   name : "jhon",
//   age : 30
// }
// //printing an object
// // console.log(user);

// //adding new pair to the object
// user.salary = 30000;

// // console.log(user);

// // updating the value in pair
// user.salary = 50000;

// // console.log(user);


// //deleting the pair in object
// delete user.age;
// // console.log(user);


// user["likes bird "] = true;
// // console.log(user);




// // let user = {

// //   name : "sharad",
// //   age : 21
// // }

// // let a = "hello"

// // console.log(  a in user);

// let username = " sha1223";
// let password = "sh123454566";
// let f_name = " sharad banga";

// let obj1 = {
//   username : username,
//   password : password,
//   full_name : f_name
// }

// let obj2 = {

//   username,
//   password,
//   full_name : f_name
// }




// let obj = {
//   name : "muskan",
//   age : 20,
//   class : "cse"
// }

// // for(let i in obj){
// //   console.log(i);
// // }

// for(let i in obj){
//   console.log(obj[i]);
// }


let obj = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  "+1": "USA"
};


for(let key in obj){
  console.log(+key);
}

