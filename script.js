const fibonacciIteration = (x) => {
    if(x === 0) {
        return 0;
    } else if (x === 1) {
        return 1;
    } else {
        return fibonacciIteration(x - 2) + fibonacciIteration(x - 1);
    }
}
fibonacciIteration(4);

// non recursive solution to the fibonacci sequence
const myArray = [0,1];
const fibs = (x) => {
    if (x < 2) {
        return x;
    } else {
        for( let i = 2; i < x; i++) {
            myArray.push( myArray[myArray.length-2] + myArray[myArray.length-1])
        }
        return myArray;
    }
}
fibs(8)
//[0, 1, 1, 2, 3, 5, 8, 13]
// the answer is the result of the tree
// like fibonacci of 8 is fib(7) and fib(6) and we go down until fib(1)  or fib(0)
// as we know these value
// so we need to move our position with length

// recursive solution to the fibonacci sequence
const fibsRec = (x) => {
    if (x < 2) {
        return x;
    } else if (x === 2) {
        return [0,1];
    } else {
        return [...fibsRec(x - 1),
            fibsRec(x - 1)[x - 2] + fibsRec(x - 1)[x - 3]];
            // see table
            // F0 === 0
            // F1 === 1
            // F2 === 1
    }   
}
fibsRec(8)

// exo code quiz

// function that takes a number and return the sum
// of all numbers from 1 to the number passed
const sumRange = (n) => {
    if(n === 1) {
        return 1;
    } else {
        return n + sumRange(n - 1);
    }
}
sumRange(3)

// function that takes in a base and an exponent,
// if the exponent is 0 return 1
const power = (base, exponent) => {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base,exponent -1);
    }
}
power(2, 4)

// function that returns the factorial of a number
// factorial of a number is the result 
// of that number multiplied by the number before it
const factorial = (x) => {
    if (x === 1) {
        return 1;
    } else {
        return x * factorial( x - 1)
    }
}
factorial(5)

// didn't succeed
// function that takes an array and a callback
// and returns true if every value in the array returns true 
// passed as parameter
var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false
function all(array, callback){
	var copy = copy || array.slice(); // shallow copies array

	if(copy.length === 0) return true;

	if(callback(copy[0])){
		copy.shift(); // remove first element from array
		return all(copy, callback);
	} else {
		return false;
	}
}

// hard , function that takes an array of numbers
// and returns the product of them all
const productOfArray = (array) => {
    if(array.length === 0) {
        return 1
    } else {
        return array.shift() * productOfArray(array)
    }
}

var six = productOfArray([1,2,3])
var sixty = productOfArray([1,2,3,10]) 
console.log(six, sixty);

// hard function that searches for a value in a
// nested objectm return true if the object contains that value
var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
const contains = (obj,value) => {
    for(var key in obj){
		if(typeof obj[key] === 'object'){
			return contains(obj[key], value);
		}

		if (obj[key] === value){
			return true;
		}
	}
	return false;
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
console.log(hasIt, doesntHaveIt);
