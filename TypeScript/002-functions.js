var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function myFunction1(a, b) {
    return a + b;
}
console.log(myFunction1(2, 3));
var myFunction2 = function (a, b) { return a + b; };
console.log(myFunction2(2, 3));
var myFunction3 = function (a, b) {
    return a + b;
};
console.log(myFunction3(2, 3));
var optionalParameters = function (a, b, c) { return c ? a + b + c : a + b; };
console.log(optionalParameters(2, 3, 4));
var requiredParameters = function (a, b, c) {
    if (c === void 0) { c = 10; }
    return a + b + c;
};
console.log(requiredParameters(2, 3, 4));
var restParameters = function (a, b) {
    var c = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        c[_i - 2] = arguments[_i];
    }
    return a + b + c.reduce(function (a, b) { return a + b; }, 0);
};
console.log(restParameters.apply(void 0, __spreadArray([2, 3], [4, 5, 6], false)));
// console.log(restParameters(2,3,4,5,6));
function genericFunction(item) {
    return new Array().concat(item);
}
var concatNumers = genericFunction([1, 2, 3, 4, 5]);
var concatString = genericFunction(['a', 'b', 'c']);
