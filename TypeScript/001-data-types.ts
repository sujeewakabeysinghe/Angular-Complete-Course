let myName: string;
myName = 'Sujeewa';
console.log(myName.toLocaleUpperCase());

let myAge: number;
myAge = 29;
let myAgeString = myAge.toString();
// myAgeString = 25;
// myAgeString identified it as string due to Type Inference feature in TypeScript
console.log(myAgeString);

let hasDegree: boolean;
// you should assing a value before use this, but in JavaScript it gets this as undefined which can cause errors while running application
// console.log(hasDegree);

let myAnyList = [];
let myStringList: string[];
let myGenericsList: Array<string>;
myStringList = [
    'Sujeewa',
    'Abeysinghe'
];
console.log(myStringList[1]);

enum myColors {
    Red,
    Yellow,
    Green
}
let myColor: myColors = myColors.Green
console.log(myColor);
// if you use const when declare enums, it wll reduce the compiled JavaScript file
const enum myColorsConst {
    Red,
    Yellow,
    Green
}
let myColorConst: myColorsConst = myColorsConst.Yellow
console.log(myColorConst);

let myTuple: [number, number];
// let myTuples: [myAge: number, myName: string];
myTuple = [1,2];
console.log(myTuple[1]);
// Tuple has only two elements
// console.log(myTuple[2]);

// let myAny;
let myAny: any;
myAny = 'Sujeewa';
myAny = 29;
// try to avoid any as much as you can in your code base