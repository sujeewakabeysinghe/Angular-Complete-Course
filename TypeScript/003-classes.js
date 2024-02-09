"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    // #address!: string; // write private anotherway
    // name: string;
    // constructor(age: number, name: string, address: string) {
    //     this.name = name;
    //     this.#address = address;
    // }
    MyClass.prototype.myMethod = function () {
        return this.name;
    };
    MyClass.MySaticMethod = function () {
        console.log('You can access this class without creating a instance, just with class name.');
    };
    Object.defineProperty(MyClass.prototype, "myAddress", {
        get: function () {
            return this.address;
        },
        set: function (addres) {
            this.address = addres;
        },
        enumerable: false,
        configurable: true
    });
    return MyClass;
}());
var myPerson = new MyClass();
myPerson.age = 29;
myPerson.name = 'Sujeewa';
// myPerson.address
// no access to private property
console.log(myPerson);
console.log(myPerson.myMethod());
MyClass.MySaticMethod();
// 004-interfaces
var ImplementedLogin = /** @class */ (function () {
    function ImplementedLogin() {
    }
    ImplementedLogin.prototype.login = function () {
        return 'Logged!';
    };
    ImplementedLogin.prototype.registerUser = function () {
        throw new Error('Method not implemented.');
    };
    return ImplementedLogin;
}());
