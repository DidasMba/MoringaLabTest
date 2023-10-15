/*function addFive(someNumber) {
    //Everything I want my function to do I put inside these curly braces
    //In this example, let's say I want my function, addFive, to add 5 to
    //any number I pass in (someNumber), but only IF the number is greater
    //than zero:
    let result
    if (someNumber > 0) {
      result = someNumber + 5;
    }
    //at the end, if I want my function to return something, I need to state it:
    return result
  }
  
  //once our function is declared, we can call addFive, passing in values 
  //as arguments:
  
  addFive(10);
  //=> 15
  
  addFive(20);
  //=> 25
  
  addFive(-5);
  //=> undefined
  
  addFive(addFive(5));
  //=> 15!! In this case, the return value of addFive(5), 10, is passed in 
  //as the argument to the outer addFive, returning 15

const { count } = require("console");

 let b = 2;
  b--;

  console.log(b);

  let counter = 0;
  counter += 10;
  counter -= 2;
  counter *= 4;
  counter **=3;

  Number.isInteger(42);
  Number.isInteger(0.42);
  console.log(counter);
  

const age = 6;
const isAdult = age >= 18;
isAdult;

console.log(isAdult);

function sayHi(name){
   console.log('Hello' + name)
}
sayHi('Didas');

const hiRose = function(){
  console.log('hi Rose')
}
hiRose();

const doMath = function(number, number2){

      console.log(number * number2)
      return number * number2;
}

 let fivByFIve = doMath(4,5)


function add(a,b){
  return a + b;
 }
  const result = add(3,4);
  console.log(result);





let a =3;
let b = 6;
let c = a + b;
console.log(c);


function exerciseByronThePoodle(){
  
  const dogName = "Byron";
  const dogBreed  "poodle";
  console.log("Wake Byron the poodle");
  console.log("Leash Byron the poodle");
  console.log("Walk to the park Byron the poodle");
  console.log("Throw the frisbee for Byron the poodle");
  console.log("Walk home with Byron the poodle");
  console.log("Unleash Byron the poodle");
}

exerciseByronThePoodle(34,45);

function exerciseByronThePoodle() {
  const dogName = "Byron";
  const dogBreed = "poodle";
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
}
exerciseByronThePoodle();
razzle();
function razzle(){
  console.log("You've been razzled!");
}
razzle();

function razzle(lawyer = "Billy", target = "em"){
  console.log(`${lawyer} razzler-dazzles ${target}`);
}
razzle();
razzle("Methuselah", "Viennes");

1 + 1;
"Razzle" + "dazzle";

function(){
  console.log("Yet more razzling");
}

const square = function(x){
  return x * x;

};
const result = square(5);
console.log(result);

const add = (a,b) => {
  return a + b;
};
const sum = add(3,4);
console.log(sum);

const button = document.getElementById("button");
button.addEventListener("click", function(){
  console.log("Yet more razzling");
});

function outer 

let func = (arg1, arg2){
  return XPathExpression;
};cd ..


let sim = (a, b) => a+b;

function printBook(book){
  console.log(book);
}

const printBookArrow = book =>{
  console.log(book)
}

printBook('Eloquent');
printBookArrow('viens');

function printBook(book){
  console.log(book);
}

const printBookArrow = book =>{
  console.log(book)
}

printBook('Eloquent');
printBookArrow('viens');

function foo(){
  return 'bar';
}
foo();
console(foo);

const add = (pa1, pa2) => pa1 + pa2;
add(2,3);

const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
}
sum(2,4)


const  fruits = [];
fruits.push("banana", "apple", "god");
console.log(fruits.length);

fruits[5];
console.log



const cards = ['queen', 'jack', 'ten ', 'ice'];
cards.indexOf('jack');
cards.indexOf('jack');




console.log(cards.indexOf());

function isOdd(element, index, array){
  return (element % 2 === 1);
}

[4,6,8,10].find(isOdd);
[2,3,5,6,7].find(isOdd);


const obj = Object.create(null);
const obj = {};

function find();


const products = [
  { name: 'Shampoo', price: 4.99 },
  { name: 'Donuts', price: 7.99 },
  { name: 'Cookies', price: 6.49 },
  { name: 'Bath Gel', price: 13.99 }
];


function getTotalAmountForProducts(products){
       let totaPrice = 0;

       for (const product of products){
        totaPrice += product.price;
       }
       return totaPrice
}
console.log(getTotalAmountForProducts(products));

const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];

function ourReduce(arr, reducer, init){
  let accum = init;
  for (const element of arr){
    accum = reducer(accum, element);
  };
  return accum;
}
function couponCounter(totalAmount,location){
  return totalAmount + location.amount;
}
console.log(ourReduce(couponLocations, couponCounter, 3));

oppressedWorkers = [
  "Dopey",
  "Sneezy",
  "Happy",
  "Angry",
  "Doc",
  "Lemonjello",
  "Sleepy"
];


const Arithmetics = {
	add: (a, b) => {
		return `${a} + ${b} = ${a + b}`;
	},
	subtract: (a, b) => {
		return `${a} - ${b} = ${a - b}`
	},
	multiply: (a, b) => {
		return `${a} * ${b} = ${a * b}`
	},
	division: (a, b) => {
		if (b != 0) return `${a} / ${b} = ${a / b}`;
		return `Cannot Divide by Zero!!!`;
	}

}

console.log(Arithmetics.add(100, 100));
console.log(Arithmetics.subtract(100, 7))
console.log(Arithmetics.multiply(5, 5))
console.log(Arithmetics.division(100, 5));

let artists = [
  "Smash Mouth",
  "Janelle Monae",
  "SZA",
  "Thunder Cat",
  "Frank Ocean",
  "Solange",
];

let filterdArtistes = artists.filter(function (artist) {
  return artist.startsWith("S");
});

console.log(filterdArtistes);

function Hello(){
  console.log("Hello Javascript");
}
Hello()



let st4 = st1 + st2 + st3
console.log(st4);

function Agent(){
  let st1 = 30
  let st2 = 16
  let st3 = 20

  let st4 = st1 + st2 +st3

  return st4
}

Agent()*


 // Add a click event listener to the button with ID "myButton"
 
 const buttonElement = document.getElementById('myButton');
 const paragraphElement = document.getElementById('myParagraph');

 function buttonClickHandler(){
     alert('Button Clicked');

 }
 function paragraphMouseOverHandler(){
       paragraphElement.style.color = 'red';
 }

 buttonElement.addEventListener('click', buttonClickHandler);
 paragraphElement.addEventListener('mouseover', paragraphMouseOverHandler);


const byronPoodle = {
  name : "Byron",
  ageinYears: 2,
  level : "Good";
  warn: function(){
    console.log(`bark bark bark`);
    console.log(this);
  }
}; 

byronPoodle.warn();

const blakeDoodle = {
  name: "Blake",
  breed: "Labradoodle",
  sonicAttack: "ear-rupturing atomic bark",
  mostHatedThing: "noises in the apartment hallway",
  warn : function(){
    console.log(`${this.name} the ${this.breed} issues`);
  }
};

blakeDoodle.warn();

const frog = {name : "kermit"};
const pig = { name: "Miss Piggy"};
const speak = function() { return `It ain't easy being ${this.name}`};*

const cat = 'reco'
let 
const 
// 'myFunc' is declared in the global scope and available everywhere in your code:
function myFunc() {
  return 42;
}
// => undefined

// 'myVar' is able to reference and invoke 'myFunc' because both are declared in the same scope (the global execution context):
const myVar = myFunc() * 2;
// => undefined

myVar;
// => 84


function() 

const globalVar = 1;
function firstFunc(){
  const firstVar = 2;
  return firstVar + globalVar;
} 




const  primeNumver = [2,34,5,6,7,78,8,9,9,7,5,4];
const flowers = ["Rose", "Tulip", "ornge"];

flowers.length;

console.log(flowers);

const WinningNumber = [3,5,8,8,9,7,6];

function longWinnNumber(number){
  console.log("Winning number:", number); 
}




const superheros = ["Catwoman", "Storm", "Jessica Jones"];
superheros.unshift("best", "me");

console.log(superheros);


const obj = {
  
  key : value1,
  key2: {
    innerKey1: innerKey1,
    innerKey2: innerKey2,
  },
};


const adress = {
  street: {
    line1: "sdghds",
    line2: "bjsfbjskf",
  },

  city:"New York",
  state: "ner",

};


const meals = {
  breakfast :"Avocado",
  lunch : "Ahkgdf",
  diner : "sdb",
};

meals.breakfast;
meals.diner;
console.log(meals.breakfast);*/


class cat{
  constructor(name, breed,age){
    this.name =name
    this.breed =breed
    this.age = age
    introduce = function(){
      return `hi my nam isn ${name}`
    }
  }
}
new cat('rose', 'domestic', 9)
new cat('luke', 'domestic', 3)




