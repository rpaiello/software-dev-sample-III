'use strict';

let ob1 = {
    get foo() {return 10;},
    set foo(val) {console.log("No")},
}
Object.defineProperty(ob1, 'fooSquared', {
    get() {return this.foo**2},
})

ob1.foo = 5;
ob1.fooSquared = 5;
console.log(ob1.foo, ob1.fooSquared, ob1.doesNotExist, a1[3]);

//=== STRICT MODE ===
//Strict mode causes JS to throw errors for a few things that it is usually apathetic towards. For example, if you attempt to get an object field that doesn't really exist (i.e. it only exists as get/set function definitions and is not a formally defined field) strict mode JS will throw an error instead of not caring.

Object.freeze(ob1);
//=== FREEZE ===
//Effectively makes an object static - frozen objects cannot be extended, and their properties and descriptors cannot be written to or deleted