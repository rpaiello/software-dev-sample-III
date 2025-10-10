//DICTIONARIES: Use '' as your keys in an object field
const hexLookupDictionary = {
    '0' : "0",
    '1' : "1",
    '2' : "2",
    '3' : "3",
    '4' : "4",
    '5' : "5",
    '6' : "6",
    '7' : "7",
    '8' : "8",
    '9' : "9",
    '10' : "A",
    '11' : "B",
    '12' : "C",
    '13' : "D",
    '14' : "E",
    '15' : "F",
}

console.log(hexLookupDictionary['15']); //"F"

//QUEUES N' STACKZ in JS
//E-Z stack implementation:
let thisStack = [];
thisStack.push('A');
thisStack.push('B');
thisStack.push('C');
for (let num of new Array(3)) {
    console.log(thisStack.pop());
}

//E-Z queue implementation:
let thisQueue = [];
thisQueue.push('A');
thisQueue.push('B');
thisQueue.push('C');
for (let num of new Array(3)) {
    console.log(thisQueue.shift());
}

function summation(input) {
    return input == 0 ? 0 : input + summation(input-1);
}

function factorial(input) {
    return [0, 1].includes(input) ? 1 : input * factorial(input-1);
}
console.log(summation(100));
console.log(factorial(20));

function sumO1(input) {
    return input / 2 * (input + 1);
}
console.log(sumO1(9));
console.log(sumO1(100));

let numKey = {
    9 : 0,
    0 : 2
}
console.log(numKey[9]);
numKey[0];
console.log(numKey[0]);

let testArray1 = ['hi'];
let testArray2 = [true, true, 'bool_true'];
let testArray3 = [5, 5, 10, 11, 10, 5];
let testArray4 = ['yes', true, 1, 'true', 'yes'];
let testArray5 = [true, false, 7, 7, 7, 77];

//STRATEGY: Iterate once through array and store array in a MAP with array elements as keys. Keep a running "largest count" variable that is overwritten with the leading value and its count when a value with a higher occurence count is found.
//Runs in O(n)
function mostCommonElement(stuff) {
    let mceMap = new Map();
    let largestCount = [null, 0]; //"largestCount" tuple keeps track of the item in the list with the most occurences as [thing, count]
    for (let thing of stuff) { //Iterate through all things in the array
        if (mceMap.get(thing) === undefined) {
            mceMap.set(thing, 1) //If this thing doesn't exist in the Map, put it in there
        } else {
            mceMap.set(thing, mceMap.get(thing) + 1); //Otherwise increase its occurence count
        }
        if (mceMap.get(thing) > largestCount[1]) {
            largestCount = [thing, mceMap.get(thing)]; //If the thing we just looked at has a higher occurence count than the current highest, overwrite current highest
        }
    }
    console.log(mceMap);
    return largestCount[0];
}

//STRATEGY: Version of MCE that uses a dictionary
//Runs in O(n)
function mostCommonElementDict(stuff) {
    let mceDict = {};
    let largestCount = [null, 0];
    let thiskey = "";
    for (let thing of stuff) {
        switch (typeof thing) {
            case "boolean":
                thiskey = `bool_${thing}`;
                break;
            case "number":
                thiskey = `numb_${thing}`;
                break;
            default:
                thiskey = `str_${thing}`
                break;
        }
        if (mceDict[thiskey] === undefined) {
            mceDict[thiskey] = 1;
        } else {
            mceDict[thiskey] += 1;
        }
        if (mceDict[thiskey] > largestCount[1]) {
            largestCount = [thing, mceDict[thiskey]];
        }
    }
    console.log(mceDict);
    return largestCount[0];
}

console.log(mostCommonElement(testArray1));
console.log(mostCommonElement(testArray2));
console.log(mostCommonElement(testArray3));
console.log(mostCommonElement(testArray4));
console.log(mostCommonElement(testArray5));
console.log(mostCommonElementDict(testArray1));
console.log(mostCommonElementDict(testArray2));
console.log(mostCommonElementDict(testArray3));
console.log(mostCommonElementDict(testArray4));
console.log(mostCommonElementDict(testArray5));

//Given an array of numbers, return the only number in the array that there are not two occurences of.
//Best case: O(1)
//Worst case: O(n)
function noPairs(stuff) {
    let npDict = {};
    for (let thing of stuff) {
        if (npDict[thing] == 2) return thing;
        if (npDict[thing] === undefined) {
            npDict[thing] = 1;
        } else {
            npDict[thing] += 1;
        }
    }
    for (const [key, value] of Object.entries(npDict)) {
        if (value == 1) return key;
    }
}

console.log(noPairs([1]))
console.log(noPairs([1, 1, 1]))
console.log(noPairs([1, 2, 1, 2, 1]))
console.log(noPairs([1, 1, 2]))

//Given a string, return whether or not the parentheses in the string are properly paired or not.
function parenthesesPairing(string) {
    let output = 0;
    for (const char of string) {
        if (char == '(') output++;
        if (char == ')') output--;
    }
    return !output;
}

//Alternate solution using a stack
function parenthesesPairingStack(string) {
    let output = [];
    for (const char of string) {
        if (char == '(') output.push("(");
        if (char == ')') {
            if (output.pop() === undefined) return false;
        }
    }
    return !(output.length);
}

console.log(parenthesesPairing("(())"));
console.log(parenthesesPairing("(())("));
console.log(parenthesesPairingStack("(())"));
console.log(parenthesesPairingStack("(())("));

function fibonacci(input) {
    return [0, 1].includes(input) ? input : fibonacci(input - 1) + fibonacci(input - 2);
} 

for (const int of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]) {
    console.log(fibonacci(int));
}

function fibonacciMemoized(input, memo = {0:0, 1:1}) {
    if (memo[input] !== undefined) return memo[input];
    memo[input] = fibonacciMemoized(input - 1, memo) + fibonacciMemoized(input - 2, memo);
    return memo[input];
}

for (const int of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 100, 200, 1000]) {
    console.log(fibonacciMemoized(int));
}

function fibonacciIterative(input) {
    if ([0, 1].includes(input)) return input;
    let last2 = [0, 1];
    for (let i = 2; i <= input; i++) {
        last2 = [last2[1], last2[0] + last2[1]]
    }
    return last2[1];
}

for (const int of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 100, 200, 1000]) {
    console.log(fibonacciIterative(int));
}

function fibonacciTailRecursive(input, accumulator = [0, 1]) {
    if (input == 0) return accumulator[0];
    return fibonacciTailRecursive(input - 1, [accumulator[1], accumulator[0] + accumulator[1]]);
}

for (const int of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 100, 200, 1000]) {
    console.log(fibonacciTailRecursive(int));
}

function fibofan(n) { //"Dynamic Programming" solution
    let table = [0, 1];
    for (let i = 2; i <= n; i++) {
        table.push(table.at(-1) + table.at(-2));
    }
    console.log(table); //Calculating fib(n) gives us all numbers fib(0) ... fib(n).
    return table.at(n);
}
fibofan(100);
