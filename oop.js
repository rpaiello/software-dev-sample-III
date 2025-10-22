let movie = {
    title: "My favorite movie",
    price: 979,
}

//Exercise 1: Increase the price by $1 without modifying the original object
function addOneDollarToItemPriceNonMutating(innerItem) {
    innerItem = {...innerItem};
    innerItem.price += 100;
    console.log('price in aODTIPNM:', innerItem.price);
}


console.log(movie.price);
addOneDollarToItemPriceNonMutating(movie);
console.log(movie.price);

//Exercise 2: Increase the price of the first item by $1 without modifying the original array
let movies = [
    {title: "House", price: 1000},
    {title: "Inland Empire", price: 1599},
    {title: "Gummo", price: 799},
    {title: "Avengers: Infinity War", price: 4799},
    {title: "Jack and Jill", price: 1},
];

function addOneDollarToItemPrice(innerItem) {
    innerItem.price += 100;
    console.log('price in aODTIP:', innerItem.price);
}

console.log(movies);
let movies2 = structuredClone(movies);
addOneDollarToItemPrice(movies2[0]);
console.log(movies);
console.log(movies2);

let data = {
    name: 'Robert',
    yearOfBirth: 2002,
    address: '250 S Washington St',
    height: 12*6,
    secretNumber: Symbol(),
    get secretNumber() {console.log("Nice try buddy")},
}
/**
 * Exercise 3.1: Log all keys
 * Exercise 3.2: Log all values
 * Exercise 3.3: Enumerate all keys in an array
 * Exercise 3.4: Enumerate all values in an array
 * Exercise 3.5: Enumerate all entries in an array
 */

for (let key in data) { //KEYWORD "IN" FOR OBJECTS
    console.log(key);
}
for (let key in data) {
    console.log(data[key]);
}
console.log(Object.keys(data));
console.log(Object.values(data));
let entriesarray = [];
for (let object of Object.entries(data)) {
    entriesarray.push(object[0]);
    entriesarray.push(object[1]);
}
console.log(entriesarray);

//Object field properties
console.log(Object.getOwnPropertyDescriptors(data))

//Writable: Value may be changed
//Enumerable: Value shows up in enumeration (Object.keys, Object.values, key in Object, etc.)
//Configurable: Value may be deleted and descriptors other than "configurable" may be changed
//Get: Function called when object.key is calle
//Set: Function called when this field's value is changed. Setting this to "undefined" is effectively identical to setting "writable" to "false".

Object.defineProperty(data, 'yearOfBirth', {
    value: 2002,
    writable: false,
});
Object.defineProperty(data, 'secretNumber', {
    writable: false,
    configurable: false,
    enumerable: false,
});

let data2 = {
    value: 5,
    get valueSquared() {return this.value**2},
}
console.log(data2.value);
console.log(data2.valueSquared);

let data3 = {
    get testField() {return 17;},
    set testField(val) {throw new Error("Cannot set testfield EVER i mean EVER and i'm being fucking serious I would not joke about this type of thing");}
}

console.log(data3.testField);
// data3.testField += 1; //throws error

let ob1 = {
    get foo() {return 10;},
}
Object.defineProperty(ob1, 'fooSquared', {
    get() {return this.foo**2},
})

ob1.foo = 5;
ob1.fooSquared = 5;
console.log(ob1.foo, ob1.fooSquared); //Although there is now a proper field in this object with key "foo"; due to us defining "ob1.foo"/"ob1[foo]" to always return 17, it will always return 17.

class pizza {
    static sizeTable(size) {
        if (size < 9) return "Personal";
        if (size < 14) return "Medium";
        return "Large";
    }
    constructor(size, crust, ...toppings) {
        this.size = size,
        this.crust = crust,
        this.toppings = [...toppings]
    }
}

let bbqPizza = new pizza(8, "normal", "chicken", "peppers", "onions", "BBQ sauce");
let cheesePizza = new pizza(16, "stuffed", "cheese");
let classicPizza = new pizza(12, "normal", "mushrooms", "pepperoni")

//=== CLOSURE ===
//The object returned by this function is "bundled" with its immediate lexical environment
//In layman's terms: Although the returned object has no "balance" property and cannot be externally accessed, the value stored under "balance" is stored and recognized by the object.
function createAcct(init) {
    let balance = init;
    return {
        deposit: (amnt) => balance += amnt,
        getBalance: () => balance,
        transfer: (amnt, target) => {
            balance -= amnt;
            target.deposit(amnt);
        }
    }
}

//Identical behavior using a class with a private property
class BankAcct {
    #balance;
    constructor(init) {
        this.#balance = init;
    }
    deposit(amnt) {
        this.#balance += amnt;
    }
    getBalance() {
        return this.#balance;
    }
    transfer(amnt, target) {
        this.#balance -= amnt;
        target.deposit(amnt);
    }
}

let usmansAcct = createAcct(500);
let robertsAcct = new BankAcct(500);
console.log(usmansAcct.getBalance(), robertsAcct.getBalance());

function GuessingGame(){
    let [_guessct, _answer, _complete] = new Array(3).fill(null);
    this.new = () => {
        _guessct = 0;
        _answer = Math.floor(Math.random*100);
        _complete = false;
    }
    this.new();
    this.guess = (guess) => {
        _guessct++;
        let output = guess < _answer ? "HIGHER" :
        guess > _answer ? "LOWER" :
        "CORRECT";
        if (output === "CORRECT") _complete = true;
        return output;
    }
    this.queryGuessCt = () => _guessct;
    this.reset = () => this.new();
}

//=== INHERITANCE ===
//Yadda yadda yadda object-oriented programming polymorphism abstraction prototype punctual penis

//"Person" is a constructor function
//"Person" is an abstract blueprint for concrete instances
function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}
//External definition of Person's toString function - toString is a method defined by Person's prototype, the native "Object" class.
Person.prototype.toString = function() {
    return `${firstname} ${lastname}`;
}

class Entity {
    constructor(name) {
        this.name = name;
        console.log(`Entity constructor called for ${name}`);
    }
    vocalize() {
        console.log(`${this.name} makes a nondescript sound`);
    }
}

class Polygon extends Entity {
    constructor(name, sides) {
        super(name); //Call parent constructor
        this.sides = sides;
        console.log(`Polygon constructor called for ${this.name} with ${this.sides} side${this.sides != 1 ? "s" : ""}`);
    }
    vocalize() { //New definition of "vocalize()" overwrites parent's definition
        console.log(`${this.name} oscillates rapidly, creating a humming sound.`)
    }
}

const sq = new Polygon("Square", 4);
sq.vocalize();

sq.vocalize = function() {console.log('Overridden!')};
sq.vocalize();

//=== "function.call()" ===
//No idea where or when you'd use this but it exists
getCo_ords = function() {
    return [this.x, this.y];
}

//"getCo_ords" takes no arguments but we can crank an object thru it using .call
function MapMarker(x, y) {
    console.log(getCo_ords.call({x: x, y: y}));
}
MapMarker(1, 1);