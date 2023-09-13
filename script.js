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
// like fibonacci of 8 is fib(7) and fib(6) and we go down until fib(1) or fib(0)
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

// merging sort
const merge = (arr1, arr2) => {
    let result = [];

    let l = 0;
    let h = 0;
    /* our pointer */

    while(l < arr1.length && h < arr2.length) {
        if(arr1[l] <= arr2[h]) {
            result.push(arr1[l]);
            l++;
            /* we move our pointer */
        } else {
            result.push(arr2[h]);
            h++;
        }
    }

    while(l < arr1.length) {
        result.push(arr1[l]);
        l++;
    }
    while(h < arr2.length) {
        result.push(arr2[h]);
        h++;
    }
    /* push the leftover */
    return result;
}

const sortArray = (array) => {
    /* base case */
    if(array.length <= 1) {
        return array;
    }
    /* round num */
    let mid = Math.floor(array.length / 2);

    /* not inclusive */
    const left = sortArray(array.slice(0,mid));
    /* start at mid inclusive and go to the end */
    const right = sortArray(array.slice(mid))

    return merge(left, right);
}
sortArray([9,3,7,5,6])
// Work!

// other try
const array = [9,3,7,5,6,4,8,2];

let l = array[0];
let h = array.at(-1);
// let h = array[array.length-1];
console.log(l,h);

let lIndex = array.indexOf(l);
let hIndex = array.indexOf(h) + 1;

let mid = ((array.indexOf(l) + 1) + array.indexOf(h)) / 2;
console.log(mid);
//array.splice(lIndex,mid);
//array.splice(mid ,hIndex);

let sub1 = array.splice(lIndex,mid);
let sub2 = array.splice(mid ,hIndex);
console.log(sub1, sub2)
// (4) [9, 3, 7, 5] (4) [6, 4, 8, 2]

// work but i want several arrays

const merge = (left, right) => {
    let arr = []
    // break if empty
    while (left.lenght && right.lenght) {
        if(left[0] > right[0]) {
            arr.push(right.shift())
        } 
            arr.push(left.shift())
    }
}
//
const array = [9,3,7,5,6,4,8,2];
const sort = (array) => {
    
    if ( array.length === 1) {
        return array;
    } else {
        sort()
    }
}
sort()

const mergingSort = () => {
    const mergeSortLeft = () => {
        return mergingSort
    }

    if (array.length >= 2) {
        let mid = ((array.indexOf(l) + 1) + array.indexOf(h)) / 2;
        console.log(mid);
        mergeSortLeft(l,mid)
        mergeSortRight(mid + 1, h)
    } else {
        console.log("deeeeeeé")
    }
}
mergingSort(l,h)
/*  Divide the unsorted list into n sub-lists
        a list of one element is considered sorted
    Repeatedly merge sub-lists to produce new sorted sub-lists
*/

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

// function that takes in a base and an exponent
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
// nested object, return true if the object contains that value
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

let contain = contains(nestedObject, 44); // true
let noContain = contains(nestedObject, "foo"); // false
console.log(contain, noContain);
