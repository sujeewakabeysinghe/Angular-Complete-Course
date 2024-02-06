var myName;
myName = 'Sujeewa';
console.log(myName.toLocaleUpperCase());
var myAge;
myAge = 29;
var myAgeString = myAge.toString();
// myAgeString = 25;
// myAgeString identified it as string due to Type Inference feature in TypeScript
console.log(myAgeString);
var hasDegree;
// you should assing a value before use this, but in JavaScript it gets this as undefined which can cause errors while running application
// console.log(hasDegree);
var myAnyList = [];
var myStringList;
var myGenericsList;
myStringList = [
    'Sujeewa',
    'Abeysinghe'
];
console.log(myStringList[1]);
var myColors;
(function (myColors) {
    myColors[myColors["Red"] = 0] = "Red";
    myColors[myColors["Yellow"] = 1] = "Yellow";
    myColors[myColors["Green"] = 2] = "Green";
})(myColors || (myColors = {}));
var myColor = myColors.Green;
console.log(myColor);
var myColorConst = 1 /* myColorsConst.Yellow */;
console.log(myColorConst);
var myTuple;
myTuple = [1, 2];
console.log(myTuple[1]);
// Tuple has only two elements
// console.log(myTuple[2]);
