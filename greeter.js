// function greeter(person:String){
//     return "hello " +person;
// }
// // let user = "jack";
// let user = [0, 1, 2];
// document.body.textContent = greeter(user);
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
let user = new Student("Jane", "M.", "tom");
let x;
x = ["lpl;pp", 10];
document.body.textContent = x[0];
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
//   let myObj = { label: "Size 10 Object" };
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
//   let mySquare = createSquare({ color: "black" });
//   let mySquare = createSquare({ color: "black", width:20});
let mySquare = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquare);
let mySearch;
// mySearch = function (source: string, subString: string) {
//     let result = source.search(subString);
//     console.log(result);
//     return result > -1;
// };
mySearch = function (src, sub) {
    let result = src.search(sub);
    console.log(result);
    return result > -1;
    // return "h"; /error
};
// console.log(mySearch("elloh",2)); //error
console.log(mySearch("elloh", "h"));
let numberofstring;
numberofstring = { length: 1, name: "jack", hasFoo: true };
console.log(numberofstring["length"]);
let myArray;
myArray = ["Bob", "Fred", 3, 5];
//   let myStr: string | number = myArray[0];
let myStr = myArray[2];
console.log(myStr);
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(d) {
        this.currentTime = d;
    }
}
let clock = new Clock(12, 23);
console.log(clock.currentTime);
let square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square);
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    counter(0);
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
console.log(c.interval);
//function
// Named function
// function add(x, y) {
//     return x + y;
//   }
//   // Anonymous function
//   let myAdd = function (x, y) {
//     return x + y;
//   };
function add(x, y) {
    return x + y;
}
let myAdd = function (x, y) {
    return x + y;
};
let myAdd2 = function (x, y) {
    return x + y;
};
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
let result1 = buildName("Bob"); // works correctly now
//   let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//Expected 1-2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
let cardPicker = deck.createCardPicker();
console.log(cardPicker);
let pickedCard = cardPicker();
console.log(pickedCard);
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
//class
class Animal0 {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal0 {
    bark() {
        console.log("Woof! Woof!");
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
//
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//private
class Animal3 {
    constructor(theName) {
        //   this.#name = theName;
    }
}
//   new Animal("Cat").#name;  //not accessible due to private name #name
//readonly
class Octopus {
    constructor(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//   dad.name = "Man with the 3-piece suit";
class Octopus2 {
    constructor(name) {
        this.name = name;
        this.numberOfLegs = 8;
    }
}
let dad2 = new Octopus2("Man with the 8 strong legs");
console.log(dad2.name);
//
const fullNameMaxLength = 10;
class Employee {
    get fullName() {
        return this._fullName;
    }
    set fullName(newName) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        this._fullName = newName;
    }
}
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// classes
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Department name: " + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
let department; // ok to create a reference to an abstract type
//   department = new Department(); // error: cannot create an instance of an abstract class
//Cannot create an instance of an abstract class.
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//   department.generateReports(); // Property 'generateReports' does not exist on type 'Department'.
let department2 = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department2.generateReports();
/*
 Constructor functions
When you declare a class in TypeScript,
you are actually creating multiple declarations at the same time.
The first is the type of the instance of the class.
Here, when we say let greeter: Greeter, we’re using Greeter
as the type of instances of the class Greeter.
*/
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter2;
greeter2 = new Greeter("world");
console.log(greeter2.greet());
//
class Greeter2 {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter2.standardGreeting;
        }
    }
}
Greeter2.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter2();
console.log(greeter1.greet()); // "Hello, there"
let greeterMaker = Greeter2;
greeterMaker.standardGreeting = "Hey there!";
let greeter21 = new greeterMaker();
console.log(greeter21.greet()); // "Hey there!"
//enum
var Direction4;
(function (Direction4) {
    Direction4[Direction4["Up"] = 0] = "Up";
    Direction4[Direction4["Down"] = 1] = "Down";
    Direction4[Direction4["Left"] = 2] = "Left";
    Direction4[Direction4["Right"] = 3] = "Right";
})(Direction4 || (Direction4 = {}));
console.log(Direction4[0]);
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "UP";
    Direction3["Down"] = "DOWN";
    Direction3["Left"] = "LEFT";
    Direction3["Right"] = "RIGHT";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Down);
var FileAccess2;
(function (FileAccess2) {
    // constant members
    FileAccess2[FileAccess2["None"] = 0] = "None";
    FileAccess2[FileAccess2["Read"] = 2] = "Read";
    FileAccess2[FileAccess2["Write"] = 4] = "Write";
    FileAccess2[FileAccess2["ReadWrite"] = 6] = "ReadWrite";
    // computed member
    FileAccess2[FileAccess2["G"] = "123".length] = "G";
})(FileAccess2 || (FileAccess2 = {}));
console.log(FileAccess2.None); //0
console.log(FileAccess2.Read); //2----1-->10--2
console.log(FileAccess2.Write); //4----1--->100--4
console.log(FileAccess2.ReadWrite); //6--2+4
console.log(FileAccess2.G); //3
/*
+, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators
with constant enum expressions as operands
*/
var Enum11;
(function (Enum11) {
    Enum11[Enum11["A"] = 1] = "A";
    Enum11[Enum11["B"] = 2] = "B";
    Enum11[Enum11["C"] = 2] = "C";
})(Enum11 || (Enum11 = {}));
console.log(Enum11.B); // 2
console.log(Enum11.C); // 2
//generics
function identity111(arg) {
    return arg;
}
function identity112(arg) {
    return arg;
}
function identitya(arg) {
    return arg;
}
let output = identitya("me");
console.log(output);
let output2 = identitya("you");
console.log(output2);
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
loggingIdentity(["1", "2"]);
function loggingIdentity2(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
loggingIdentity2([1, "2"]);
console.log(4 / 0);
