// var person = {
//   name: 'Andrew',
//   age: 21
// };
//
// function updatePerson(obj){
//   // obj ={
//   //   name: 'Andrew',
//   //   age:24
//   // };
//   obj.age=24;
// }
//
// console.log(typeof person);
// updatePerson(person);
// console.log(person);

//array example
var grades =[15,37];

function tempgrade(obj){
  obj=[15,37,100];
  console.log(obj);
};


function addgrade(obj){
    obj.push(20);
    debugger;
};

console.log(typeof grades);
addgrade(grades);
// tempgrade(grades);

console.log(grades);
