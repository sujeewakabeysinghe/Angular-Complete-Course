function myFunction1(a: number, b: number) : number {
    return a+b;
}
console.log(myFunction1(2,3));

const myFunction2 = (a: number, b: number): number => a+b;
console.log(myFunction2(2,3));

const myFunction3 = function (a: number, b: number) : number {
    return a+b;
}
console.log(myFunction3(2,3));

const optionalParameters = (a: number, b: number, c?: number): number => c ? a+b+c : a+b;
console.log(optionalParameters(2,3,4));

const requiredParameters = (a: number, b: number, c = 10): number => a+b+c;
console.log(requiredParameters(2,3,4));

const restParameters = (a: number, b: number, ...c: number[]): number => a+b+c.reduce((a, b) => a+b,0);
console.log(restParameters(2,3,...[4,5,6]));
// console.log(restParameters(2,3,4,5,6));

function genericFunction<myType>(item: myType[]): myType[] {
    return new Array<myType>().concat(item);
}
let concatNumers = genericFunction([1,2,3,4,5]);
let concatString = genericFunction(['a','b','c']);