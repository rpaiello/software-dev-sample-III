class binMinHeap {
    constructor(array = []) {
        this.heap = [];
        this.heapify(array);
    }
    insert(value) {
        this.heap.push(value);
        this._bubbleUp(this.heap.length-1);
    }
    heapify(array) {
        for (let value of array) this.insert(value);
    }
    static getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }
    static getLevel(index) {
        return Math.floor(Math.log2(index + 1));
    }
    static getDepth(index) {
        return Math.floor(Math.log2(index + 1));
    }
    getMaxDepth() {
        return binMinHeap.getDepth(this.heap.length - 1);
    }
    static getChildren(index) {
        return [(2 * index) + 1, (2 * index) + 2];
    }
    _bubbleUp(index) {
        if (index == 0) return;
        if (this.heap[index] < this.heap[binMinHeap.getParentIndex(index)]) {
            [this.heap[index], this.heap[binMinHeap.getParentIndex(index)]] = [this.heap[binMinHeap.getParentIndex(index)], this.heap[index]]; //Swap the two values
            this._bubbleUp(binMinHeap.getParentIndex(index))
        }
    }
    _bubbleDown(index) {
        let [leftChildIndex, rightChildIndex] = [...binMinHeap.getChildren(index)]; //ANOTHER WIN FOR SPREAD OPERATOR
        let myValue = this.heap[index];
        let leftChildValue = this.heap[leftChildIndex] ?? Infinity; //ANOTHER WIN FOR NULLISH COALESCING OPERATOR
        let rightChildValue = this.heap[rightChildIndex] ?? Infinity;
        let minValue = Math.min(myValue, leftChildValue, rightChildValue);
        if (minValue == myValue) return;
        else if (minValue == leftChildValue) {
            [this.heap[index], this.heap[leftChildIndex]] = [leftChildValue, myValue];
            this._bubbleDown(leftChildIndex);
        } else if (minValue == rightChildValue) {
            [this.heap[index], this.heap[rightChildIndex]] = [rightChildValue, myValue];
            this._bubbleDown(rightChildIndex);
        } else return undefined;
    }
    /**
     * Remove the current root of the heap and return it.
     * Far simpler removeMin() implimentation, but runs in O(n) instead of O(log(n))
     */
    popTop() {
        let output = this.heap.shift();
        if (this.heap[1]) this._bubbleUp(1);
        if (this.heap[2]) this._bubbleUp(2);
        return output;
    }
    /**
     * Remove the current root of the heap and return it.
     * @returns The value of the former root node, or null if the heap is empty.
     */
    removeMin() {
        if (!this.heap.length) return null;
        const output = this.heap[0];
        const newMinimum = this.heap.pop();
        if (!this.heap.length) return newMinimum;
        this.heap[0] = newMinimum;
        this._bubbleDown(0);
        return output;
    }
}

function heapSort(array) {
    const result = [];
    const inHeap = new binMinHeap(array);
    while (inHeap.heap.length > 0) {
        let item = inHeap.removeMin();
        result.push(item);
    }
    return result;
}

/**

 * @param {number[]} array An array of integers
 * @returns {number} The smallest positive integer that does not exist within the array
 */
function smallestNonextantPositive(array) {
    let dict = {};
    for (let value of array) {
        dict[value] = true;
    }
    for (let i = 1; true; i++) {
        if (dict[i] === undefined) return i;
    }
}

let testBinHeap = new binMinHeap([7,8,9,5,1,12,0]);
console.log(testBinHeap.removeMin());
console.log(testBinHeap.removeMin());
console.log(testBinHeap.removeMin());
console.log(testBinHeap.removeMin());
console.log(testBinHeap.removeMin());
console.log(testBinHeap.removeMin());
console.log(testBinHeap.removeMin());
console.log(testBinHeap.removeMin());
console.log(testBinHeap.removeMin());

console.log(heapSort([10,3,9,5,7,8,6,2,1,0,4]));

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i+1]) {
                [array[i+1], array[i]] = [array[i], array[i+1]];
                swapped = true;
            }
        }
    } while (swapped);
    return array;
}

console.log(bubbleSort([9,8,6,7,4,6,5,2,1,0,2,1]));

/**
 * Get the length of the longest common substring between two strings
 * @param {string} s1 A string.
 * @param {string} s2 Another string.
 * @param {number} val Reserved parameter for internal function use.
 * @param {number} max Reserved parameter for internal function use.
 * @returns {number}
 */
function commonality([h1, ...t1], [h2, ...t2], val = 0, max = 0) {
    //Horribly hyperinefficient O(3^(n+m)) recursive solution
    //FLOWCHART:
    //"val": current running counter of common substring length
    //"max": maximum "val" registered
    //Case 0: h1 or h2 is undefined: return max
    //Case 1: h1 == h2: val++, update max, and call commonality(t1, t2, val, max)
    //Case 2: h1 != h2: call commonality(t1, [h2, ...t2], 0, max) and commonality([h1, ...t1], t2, 0, max) and return the max of those two calls

    let greed = -Infinity;
    if ([h1, h2].includes(undefined)) return max;
    if (h1 === h2) {
        val++;
        max = Math.max(val, max);
        greed = commonality(t1, t2, val, max);
    }
    return Math.max(commonality([h1, ...t1], t2, 0, max), commonality(t1, [h2, ...t2], 0, max), greed);
}

// console.log(commonality("HELLO WORLD!", "WORLD!dfsdfs34")) //exp: 6
// console.log(commonality("bbaba", "abba")) //exp: 3
// console.log(commonality("argh", "aarargargh")) //exp: 4

function dynamicCommonality(s1, s2) {
    //Tabular dynamic O(n*m) solution
    let matrix = new Array(s1.length).fill(null).map(_ => new Array(s2.length).fill(0));
    let runningMax = 0;
    for (let i = 0; i < s1.length*s2.length; i++) {
        let [row, column] = [Math.floor(i/s2.length), i % s2.length];
        if (s1[row] === s2[column]) {
            if (!row || !column) matrix[row][column] = 1;
            else {
                matrix[row][column] = (matrix[row-1][column-1]) + 1;
            }
        } else matrix[row][column] = 0;
        runningMax = Math.max(runningMax, matrix[row][column]);
    }
    console.table(matrix);
    return runningMax;
}
console.log(dynamicCommonality("HELLO WORLD!", "WORLD!dfsdfs34")) //exp: 6
console.log(dynamicCommonality("bbaba", "abba")) //exp: 3
console.log(dynamicCommonality("argh", "aarargargh")) //exp: 4

function compressedCommonality(s1, s2) {
    //Tabular dynamic O(n*m) solution with compressed space complexity - the internal matrix used to compare strings is 2*m instead of n*m. "You only need two rows!" - Zsolt
    let tinyMatrix = [new Array(s2.length).fill(0), new Array(s2.length).fill(0)]
    let runningMax = 0;
    for (let i = 0; i < s1.length*s2.length; i++) {
        let [s1index, row, column] = [Math.floor(i/s2.length), Math.floor(i/s2.length) % 2, i % s2.length];
        if (s1[s1index] === s2[column]) {
            if (!column) tinyMatrix[row][column] = 1;
            else {
                tinyMatrix[row][column] = (tinyMatrix[Math.abs((row - 1) % 2)][column-1]) + 1;
            }
        } else tinyMatrix[row][column] = 0;
        runningMax = Math.max(runningMax, tinyMatrix[row][column]);
    }
    console.table(tinyMatrix);
    return runningMax;
}

console.log(compressedCommonality("HELLO WORLD!", "WORLD!dfsdfs34")) //exp: 6
console.log(compressedCommonality("bbaba", "abba")) //exp: 3
console.log(compressedCommonality("argh", "aarargargh")) //exp: 4

let thisObject = {
    date : new Date().getTime(),
    parity : {
        1 : false,
    }
};

let thatObject = thisObject;
thatObject.parity[1] = true;
console.log(thisObject, thatObject);
thatObject = structuredClone(thisObject);
thatObject.parity[1] = "Secret third thing";
console.log(thisObject, thatObject);

console.log(Object.getOwnPropertyNames(thatObject));

let studentProfile = {
    name : "Robert",
    studentId : 413,
    tempKey : "qwerty",
}

Object.defineProperty(studentProfile, studentId, {
    writable : false,
    configurable: false,
})

Object.defineProperty(studentProfile, tempKey, {
    enumerable: false,
})

Object.freeze(studentProfile);
//Only "studentId" is now truly immutable as it cannot be written or changed even if the object were to be unfrozen.