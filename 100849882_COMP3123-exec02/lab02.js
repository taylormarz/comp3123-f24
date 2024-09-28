// QUESTION 01:
let gretter = (myArray, counter) => {
    let greetText = "Hello "

    for(let index of myArray) {
        console.log(greetText + index);
    }
}

gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3)

// QUESTION 02:
let capitalize = ([capChar, ...lowerChar]) => capChar.toUpperCase() + lowerChar.join("");

console.log(capitalize("fooBar"));
console.log(capitalize("nodeJs"));

// QUESTION 03:
const colors = ["red", "green", "blue"]
let capitalizedColors = colors.map((colors) => capitalize(colors));

console.log(capitalizedColors)

// QUESTION 04:
var values = [1, 60, 34, 30, 20, 5]
let filterLessThan20 = values.filter(values => values < 20);

console.log(filterLessThan20)

// QUESTION 05:
var array = [1, 2, 3, 4]
let calculateSum = array.reduce((accumulator, currentValue) => {return accumulator + currentValue;});

let calculateProduct = array.reduce((accumulator, currentValue) => {return accumulator * currentValue;});

console.log(calculateSum);
console.log(calculateProduct);

// QUESTION 06:
class Car {
    constructor(make, year){
        this.make = make;
        this.year = year;
    }
    details() {
        return "Model: " + this.make + " " + this.year;
    }
}
const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

class Sedan extends Car {
    constructor(make, year, loan) {
        super(make, year);
        this.loan = loan;
    }
    info() {
        return this.make + " " + "has a balance of" + " " + "$" + this.loan.toFixed(2)
    }
}

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());