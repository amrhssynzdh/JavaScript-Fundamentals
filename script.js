// null vs undefined
var var1;
console.log(var1);
console.log(typeof var1);
// ...................................................
var var2 = null;
console.log(var2);
console.log(typeof var2);
// null is an object while undefined is a type itself
console.log(null == undefined);
console.log(null === undefined); // === also checks "type equality"

// what is the type of Nan?
console.log(typeof NaN);
// a number which isn't a number!

var var3 = {
  name: "Amirreza",
  age: 25,
};
console.log(var3);
console.log(var3["name"]);
console.log(var3.age);
console.log(typeof var3);

// Dynamic Typing: Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.
var var1 = 5;
console.log(typeof var1);

var1 = "10";
console.log(typeof var1);

// Hoisting: the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.
x = 10;
console.log(x);
var x;

//function creating and calling
function calc() {
  //creating function
  console.log("inside function");
}

calc(); //calling(Invoking)

ab(); //again...hoisting
function ab() {
  console.log("ab");
}

console.log(typeof calc); //function type

// other way to create a function
var func1 = function () {
  console.log("inside func1");
};
func1();

//look! isn'n it interesting?
var anotherFn = func1;
anotherFn();
console.log(typeof anotherFn);

// using return:
function calc2() {
  return "inside calc2";
}

var anotherFn2 = calc2();
console.log(typeof anotherFn2);
// .........................................................

// control structures: if statement
var condition = 0;
var condition2 = 1;
if (condition) {
  console.log("executed");
} else if (condition2) {
  console.log("still Executed");
} else {
  console.log("Not Executed");
}

// control structures: switch

var luckyNumber = 8;

switch (luckyNumber) {
  case 1:
    console.log("Is 1");
    break;
  case 8:
    console.log("Is 8");
    break;
  default:
    console.log("Default!");
    break;
}

// for loops: The for loop is an iterative statement which you use to check for certain conditions and then repeatedly execute a block of code as long as those conditions are met.
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 2; j++) {
    console.log(i * j);
  }
}

// for and arrays
var array1 = [1, 2, 3];
console.log(array1.length);

for (i = 0; i < array1.length; i++) {
  console.log(array1[i]);
}

// do-while loop:The do...while statements combo defines a code block to be executed once, and repeated as long as a condition is true.The do...while is used when you want to run a code block at least one time.

let text = "";
let b = 0;
do {
  text += b;
  b++;
} while (b < 5);
console.log(text);

//.......................................................
var condition = false;

do {
  console.log("Executed!");
} while (condition);

// boolean operators: chain conditions
console.log(1 == 1 && 2 == 3);
console.log(1 == 1 || 2 == 3);
console.log(1 == 1 || (2 == 3 && 4 == 5));
console.log(1 == 1 && 2 == 3 && 4 == 5);

// Ternary operators

a = 5;
b = 9;
// if (a == b) {
//   console.log("Equal");
// } else {
//   console.log("Not Equal");
// }
console.log(a == b ? "Equal" : "Not Equal");

// Operators Precedence:Operator precedence describes the order in which operations are performed in an arithmetic expression. Multiplication ( * ) and division ( / ) have higher precedence than addition ( + ) and subtraction ( - ).

// Types and Scope
// primitive types - refrence types : From the programmer's perspective, a primitive variable's information is stored as the value of that variable, whereas a reference variable holds a reference to information related to that variable.

var aNumber = 5;
console.log(aNumber);

var anotherNumber = aNumber;
console.log(anotherNumber);

aNumber = 12;
console.log(aNumber);
console.log(anotherNumber);
// ----------------------------------
var array = [1, 2, 3];
var anotherArray = array;
console.log(array);
console.log(anotherArray);

array.push(4);
console.log(array);
console.log(anotherArray);
// ----------------------------------
array = ["a", "9"];
console.log(array);
console.log(anotherArray);
// ----------------------------------
// Global vs Local Scope
var test = "global";

function localScope() {
  var test = "local";
  console.log(test);
}
localScope();
console.log(test);

// arrays

var arr = [1, 2, 3];
arr[4] = 100;
console.log(arr);

// forEach method
var arr = [1, 2, 3];
arr.forEach(function (element) {
  console.log(element);
});

// push method
var arr = [1, 2, 3, ,];
arr.push(4);
console.log(arr);

// pop method
console.log(arr);
arr.pop();
console.log(arr);

// shift method
arr.shift();
console.log(arr);

// unShift method
arr.unshift("new");
console.log(arr);

// where a specific element is inside an array?: indexOf() method
console.log(arr.indexOf("new"));
console.log(arr.indexOf(2));

arr[arr.indexOf("new")] = "old";
console.log(arr);

// splice method: stating index and number of elements
var newArr = arr.splice(1, 2); //stating index and number of elements
console.log(newArr);
console.log(arr); //it really got spliced!

// slice method: starting index and ending index
var arr2 = [1, 2, 3, 5, 6, "n32", 12, true];
var newArr2 = arr2.slice(1, 4); //starting index and ending index
console.log(newArr2);
console.log(arr2);

// filtering array
var arr3 = ["old", 1, 2, 3, 4];
console.log(
  arr3.filter(function (value) {
    return value == "old" || value > 2;
  })
);
console.log(arr3);

// mapping array
var arr3 = ["old", 1, 2, 3, 4];
console.log(
  arr3.map(function (value) {
    return value + true;
  })
);

console.log(arr3);

// reverse method
console.log(arr3.reverse());
console.log(arr3); //it's doing reverse on array itself! unlike map and filter!

// concat
var newArr4 = ["join", "me"];
console.log(newArr4.concat(arr3));
var arr5 = newArr4.concat(arr3);

console.log(arr5);
console.log(arr3);
console.log(newArr4);

// join
var arr6 = ["amirreza", "shervin", "moein", "mehdi"];

console.log(arr6.join(" and ")); //wow!

// reduce array
var arr7 = [1, 2, 3, 4];
console.log(
  arr7.reduce(function (total, value) {
    return total + value;
  })
);
console.log(arr7);

// objects
var person = {
  name: "amirreza",
  age: 24,
  details: {
    hobbies: ["coding", "cooking"],
    location: "Iran",
  },
  greet: function () {
    console.log("hello, my name is " + this.name);
  },
};

var field = "name";

person.greet();
// console.log(person["first-name"]);
console.log(person.details.location);
console.log(person[field]);
console.log(person["age"]);
console.log(person.details.hobbies[0]);

console.log(typeof person.details.hobbies);

// change the property of an object
person.name = "Amir";
console.log(person);
person.greet();

//alternative way of making an object

var person2 = {
  name: "max",
  age: 27,
};

var anotherPerson = new Object();
anotherPerson.name = "max";
anotherPerson.age = 27;

console.log(anotherPerson);
console.log(anotherPerson == person2);

// and another way = Object Prototype

var person3 = {
  name: "sara",
  age: 21,
};

var anotherPerson1 = Object.create(person3);
// anotherPerson1.name = "Anna";
console.log(anotherPerson1);
console.log(person3 == anotherPerson1);

// Prototype Chain : blueprints!

var obj1 = {
  name: "Saeed",
  age: 13,
};

Object.prototype.greet = function () {
  console.log("hello there, I am " + this.name);
};

var max1 = Object.create(obj1);
// max1.name = "max1";
console.log(max1.name);
max1.greet();

console.log(Object.getPrototypeOf(max1) == obj1);

// constructor function ~ Class
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hello, I am " + this.name);
  };
}

var personX = new Person("Amir", 30); //instance of Person Class

personX.greet();

console.log(personX instanceof Person);

// This keyword
function fn() {
  console.log(this); //refers to window object
}

var obj = {
  obfn: fn,
};
obj.obfn();
