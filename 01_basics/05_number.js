const score=500
console.log( score )
const balance=new Number(590)
console.log( balance )

console.log(balance.toString())//convert the balance into string

console.log(balance.toFixed(2));// it is use to add zeros after the decimal.
const newNumber=154.689
console.log(newNumber.toPrecision(3));// it is used to Roundoff till -----------------|^|this value

const number=100000000
console.log(number.toLocaleString('en-IN')); // use to add commas between to make good to appear and (en-IN) is used to convert it to indian style of showing number


//---------------MATH------------------------------

// very important function that is "random" which is use to generate the random values


console.log(Math.random()); // this function will generate new number after every refresh

// To get one digit number we just multiply it by 10 and create any range with it

// For example

console.log(Math.random()*10);// here we will get value after one decimal point 
//------- but in the above case there is a catch,      if the number is like  0.05544112 then after multiply by 10 it wouldn't give one digit number so to avoid it we -------------------------------------do-->

console.log((Math.random())+1);//it will avoid the accurance of zero
 

// To get integer value we just do
console.log(Math.floor(Math.random()*10)+1);


//------->To get Random values in the range we use this--------<
const min=20
const max=30
console.log(Math.floor(Math.random()*(max-min+1))+min);
//Here min-max are the ranges
 

