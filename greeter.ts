// function greeter(person:String){
//     return "hello " +person;
// }

// // let user = "jack";
// let user = [0, 1, 2];

// document.body.textContent = greeter(user);

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "tom");

let x: [string, number];
x = ["lpl;pp", 10];


document.body.textContent = x[0];
// document.body.textContent = x[0].substring(0);
// document.body.textContent = greeter(user);

// function printLabel(labeledObj: { label: string }) {
//     console.log(labeledObj.label);
//   }

interface LabeledValue {
    label: string;
}

function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
}


//   let myObj = { label: "Size 10 Object" };
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);


// optional label
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
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
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);
console.log(mySquare);

// function

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;

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


// indexable types
interface NumberDictionary {
    [index: string]: number;
    length: number; // ok, length is a number
    // name: string; // error, the type of 'name' is not a subtype of the indexer
    //Property 'name' of type 'string' is not assignable to string index type 'number'.
}

interface NumberOrStringDictionary {
    [index: string]: number | string | boolean;
    length: number; // ok, length is a number
    name: string; // ok, name is a string
    hasFoo: boolean;
}
let numberofstring: NumberOrStringDictionary;

numberofstring = { length: 1, name: "jack", hasFoo: true };
console.log(numberofstring["length"]);

interface StringArray {
    [index: number]: string | number;
}

let myArray: StringArray;
myArray = ["Bob", "Fred", 3, 5];

//   let myStr: string | number = myArray[0];
let myStr: string | number = myArray[2];
console.log(myStr);


// class
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
let clock: Clock = new Clock(12, 23);
console.log(clock.currentTime);


//extends
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square);

//hybrid 
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = function (start: number) { } as Counter;
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


function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number): number {
    return x + y;
};

let myAdd2: (x: number, y: number) => number = function (
    x: number,
    y: number
): number {
    return x + y;
};

function buildName(firstName: string, lastName?: string) {
    if (lastName) return firstName + " " + lastName;
    else return firstName;
}

let result1 = buildName("Bob"); // works correctly now
//   let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
//Expected 1-2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right


//this
//   let deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     createCardPicker: function () {
//       // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
//       return () => {
//         let pickedCard = Math.floor(Math.random() * 52);
//         let pickedSuit = Math.floor(pickedCard / 13);

//         return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
//       };
//     },
//   };

//   let cardPicker = deck.createCardPicker();
//   let pickedCard = cardPicker();

//   alert("card: " + pickedCard.card + " of " + pickedCard.suit);

interface Card {
    suit: string;
    card: number;
}

interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (this: Deck) {
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
    move(distanceInMeters: number = 0) {
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
    name: string;
    constructor(theName: string) {
        this.name = theName;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

//private
class Animal3 {
    // #name: string;
    private id: number;

    constructor(theName: string) {
        //   this.#name = theName;
    }
}

//   new Animal("Cat").#name;  //not accessible due to private name #name

//readonly
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;

    constructor(theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("Man with the 8 strong legs");
//   dad.name = "Man with the 3-piece suit";

class Octopus2 {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) { }
}

let dad2 = new Octopus2("Man with the 8 strong legs");
console.log(dad2.name);

//
const fullNameMaxLength = 10;

class Employee {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
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
abstract class Department {
    constructor(public name: string) { }

    printName(): void {
        console.log("Department name: " + this.name);
    }

    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }

    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }

    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department; // ok to create a reference to an abstract type
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
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter2: Greeter;
greeter2 = new Greeter("world");
console.log(greeter2.greet());

//
class Greeter2 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        } else {
            return Greeter2.standardGreeting;
        }
    }
}

let greeter1: Greeter2;
greeter1 = new Greeter2();
console.log(greeter1.greet()); // "Hello, there"

let greeterMaker: typeof Greeter2 = Greeter2;
greeterMaker.standardGreeting = "Hey there!";

let greeter21: Greeter2 = new greeterMaker();
console.log(greeter21.greet()); // "Hey there!"

//enum
enum Direction4 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction4[0]);

enum Direction3 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}
console.log(Direction3.Down);

enum FileAccess2 {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}
console.log(FileAccess2.None); //0
console.log(FileAccess2.Read); //2----1-->10--2
console.log(FileAccess2.Write); //4----1--->100--4
console.log(FileAccess2.ReadWrite); //6--2+4
console.log(FileAccess2.G); //3

/*
+, -, *, /, %, <<, >>, >>>, &, |, ^ binary operators 
with constant enum expressions as operands
*/

enum Enum11 {
    A = 1,
    B,
    C = 2
}
console.log(Enum11.B);  // 2
console.log(Enum11.C);  // 2


//generics
function identity111(arg: number): number {
    return arg;
}
function identity112(arg: any): any {
    return arg;
}
function identitya<T>(arg: T): T {
    return arg;
}

let output = identitya<string>("me");
console.log(output);
let output2 = identitya("you");
console.log(output2);

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
loggingIdentity(["1", "2"]);

function loggingIdentity2<T>(arg: Array<T>): Array<T> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
loggingIdentity2([1, "2"]);

console.log(4/0);