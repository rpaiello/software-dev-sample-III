class codePad {
    static codeTypes = {
        number : "PIN",
        string : "Password",
        symbol : "Cryptogram"
    }
    #solution;
    constructor(correctCode) {
        this.#solution = correctCode;
        this.codetype = codePad.codeTypes[typeof correctCode];
        switch (this.codetype) {
            case "PIN":
                this.length = `${correctCode}`.length;
                break;
            case "Password":
                this.length = correctCode.length;
                break;
            default:
                this.length = "unknown"
                break;
        }
    }
    unlock(input) {
        return input === this.#solution;
    }
    getInfo() {
        console.log(`This code pad takes a ${this.codetype}${this.codetype === "Cryptogram" ?"! You can't get in!" : ` of length ${this.length}!` }`)
    }
}

class Student {
    static gradeLookupTable(grade) {
        if (grade >= 90) return "A";
        if (grade >= 80) return "B";
        if (grade >= 70) return "C";
        if (grade >= 65) return "D";
        return "F";
    }
    constructor(name, id, grade) {
        [this.name, this.rollCallIndex, this.grade, this.letterGrade] = [name, id, grade, Student.gradeLookupTable(grade)];
    }
    displayInfo() {
        console.log(
            `Hi my name is ${this.name}, I am student #${this.rollCallIndex} and my grade is a${this.letterGrade === "F" ? "n" : ""} ${["D","F"].includes(this.letterGrade) ? `${this.letterGrade} :(` : `${this.letterGrade}`}`
        )
    }
}

class Car {
    constructor(brand, model, year) {
        [this.brand, this.model, this.year] = [brand, model, year];
    }
    start() {
        console.log(`${this.brand} ${this.model} (${this.year}) is starting up...`)
    }
    getAge() {
        let currentYear = new Date().getFullYear();
        console.log(`This car is ${currentYear - this.year} years old...`)
        return currentYear - this.year;
    }
}

let robert = new Student("Robert", 1, 90);
let peter = new Student("Peter", 5, 60);
robert.displayInfo();
peter.displayInfo();

let historicCR_V = new Car("Honda", "CR-V", 1999);
historicCR_V.start();
historicCR_V.getAge();

class ATM {
    #pin;
    #balance;
    static prompt = "Welcome to ScungleCo ATM\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit"
    constructor(startingBalance, PIN = "1234") {
        [this.#balance, this.#pin] = [startingBalance, PIN];
        this.promptLoop();
    }
    promptLoop() {
        let input = prompt("Whats youre pin");
        if (input != this.#pin) {
            alert("Wrong pin numb nuts!");
            return;
        }
        while (true) {
            input = parseInt(prompt(ATM.prompt));
            switch (input) {
                case 1:
                    alert(`U have $${this.#balance} in youre account`)
                    break;
                case 2:
                    input = parseInt(prompt('How much do u wanna put in???'));
                    if (!input || input <= 0) alert('Invalid input!');
                    else {
                        this.#balance += input;
                        alert(`Success. You now have $${this.#balance}`);
                    }
                    break;
                case 3:
                    input = parseInt(prompt('How much do u wanna take out???'));
                    if (!input || input <= 0 || input > this.#balance) alert('Invalid input!');
                    else {
                        this.#balance -= input;
                        alert(`Success. You now have $${this.#balance}${input > 500 ? ". Dont spend it all in one place ahaha" : ""}`);
                    }
                    break;
                case 4:
                    alert('K bye');
                    return;
                default:
                    alert('Invalid input');
                    break;
            }
        }
    }
}

let myATM = new ATM(500)