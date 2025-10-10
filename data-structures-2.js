//LINKEDLISTS n' TREES
/**
 * A simple linkedlist implementation.
 */
class linkedList {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
    toString() {
        let llprint = testLinkedList;
        let output = "linkedList: {";
        while (llprint !== null) {
            output += llprint.value + (llprint.next !== null ? " -> " : "");
        llprint = llprint.next;
        }
        output += "}";
        return output;
    }
    /**
     * Append a new linkedList to the very end of this linkedList.
     * @param {linkedList} node A valid linkedList node to append.
     */
    appendNode(node) {
        let currentNode = this;
        while (currentNode.next) currentNode = currentNode.next;
        currentNode.next = node;
    }
    /**
     * Remove the head from this linkedList.
     * Does nothing if this linkedList is only one node long.
     * @returns {*} The value from the deleted head.
     */
    behead() {
        let output = this.value;
        let next = this.next;
        if (!next) return;
        this.value = next.value;
        this.next = next.next;
        return output;
    }
    /**
     * Insert a linkedList node after a specified index in the list.
     * @param {*} node The node to insert. Does nothing if this node is not a singlet (node.next is not null).
     * @param {*} index The zero-indexed index of where to insert this node.
     * @returns {boolean} True if the insertion was successful, false otherwise
     */
    insertNode(node, index) {
        if (node.next !== null) return false;
        let currentNode = this;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
            if (!currentNode) return false;
        }
        let newNext = currentNode.next;
        currentNode.next = node;
        node.next = newNext;
        return true;
    }
}
class treeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function linkedListFromArray(arr) {
    let output = new linkedList();
    let currentNode = output;
    for (let i = 0; i < arr.length; i++) {
        currentNode.value = arr[i];
        currentNode.next = (i == arr.length - 1 ? null : new linkedList());
        currentNode = currentNode.next;
    }
    return output;
}
/**
 * Generate a binary tree from an array.
 * @param {Array} arr An array of values representing the level-order traversal of a tree. "Holes" at lower levels of the tree must be represented with "null".
 * @param {null} index Reserved parameter used internally.
 * @returns {treeNode} The root node of a tree.
 */
function treeFromArray(arr, index = 0) {  
    let [leftChild, rightChild] = [null, null];
    leftChild = arr[index*2+1] ? treeFromArray(arr, index*2+1) : null;
    rightChild = arr[index*2+2] ? treeFromArray(arr, index*2+2) : null;
    return new treeNode(arr[index], leftChild, rightChild);
}

let testLinkedList = linkedListFromArray([1, 2, 3, 1, 2, 4, 9, 3, 9, 10, 5, "dog", "cat", 1]);
let testTree = treeFromArray([1, null, 2, null, null, 5, null]);
let testTree2 = treeFromArray([1,2,2,3,3,3,3,4,null,4,4,4,5,4,4,null,null,null,null,null,null,null,null,null,null,6])
let testTree3 = treeFromArray([1,2,2,3,3,3,3]);

console.log(`${testLinkedList}`);
testLinkedList.appendNode(new linkedList(2));
console.log(`${testLinkedList}`);
testLinkedList.behead();
console.log(`${testLinkedList}`);
testLinkedList.insertNode(new linkedList(2.5), 0);
testLinkedList.insertNode(new linkedList(2.25), 0);
testLinkedList.insertNode(new linkedList(2.75), 2);
console.log(`${testLinkedList}`);

//O(n^2) with n = # of nodes in linkedlist
/**
 * Remove all nodes with non-unique (duplicate) values from a linkedlist.
 * @param {*} linkedList A linkedList.
 * @returns {linkedList} The head of the duplicate-pruned linkedList.
 */
function llRemoveDuplicates(linkedList) {
    let values = [];
    let currentNode = linkedList;
    while (true) {
        values.push(currentNode.value);
        while (values.includes(currentNode.next.value)) {
            currentNode.next = (currentNode.next.next)
            if (currentNode.next === null) break;
        }
        currentNode = currentNode.next;
        if (currentNode === null) break;
    }
    return linkedList;
}

llRemoveDuplicates(testLinkedList);
console.log(`${testLinkedList}`);

/**
 * Get the 
 * @param {*} tree 
 * @param {*} length 
 * @returns {number} An integer.
 */
function treeMaxLength(tree, length = 0) {
    if (tree === null) return length-1;
    return Math.max(
        treeMaxLength(tree.left, length+1),
        treeMaxLength(tree.right, length+1)
    )
}

console.log(treeMaxLength(testTree));
console.log(treeMaxLength({value: 0, left: null, right:null}));
console.log(treeMaxLength({value: null, left: null, right:null}));
console.log(treeMaxLength(testTree2));

function treeMaxSum(tree, sum = 0) {
    if (tree === null) return sum;
    return Math.max(
        treeMaxSum(tree.left, sum + tree.value),
        treeMaxSum(tree.right, sum + tree.value)
    );
}

console.log(treeMaxSum(testTree));
console.log(treeMaxSum(testTree2));

function inorderTraverse(tree) {
    let output = "";
    //left
    if (tree.left) output += inorderTraverse(tree.left);
    //center
    output += `${tree.value} `;
    //right
    if (tree.right) output += inorderTraverse(tree.right);
    return output;
}
function preorderTraverse(tree) {
    let output = "";
    //center
    output += `${tree.value} `;
    //left
    if (tree.left) output += preorderTraverse(tree.left);
    //right
    if (tree.right) output += preorderTraverse(tree.right);
    return output;
}

function postorderTraverse(tree) {
    let output = "";
    //left
    if (tree.left) output += postorderTraverse(tree.left);
    //right
    if (tree.right) output += postorderTraverse(tree.right);
    //center
    output += `${tree.value} `;
    return output;
}

console.log(inorderTraverse(testTree3));
console.log(preorderTraverse(testTree3));
console.log(postorderTraverse(testTree3));