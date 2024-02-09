// 004-interfaces
import { Login, MyInterface } from './004-interfaces';

class MyClass {
    age!: number;
    name!: string;
    private address!: string;
    // #address!: string; // write private anotherway
    // name: string;
    // constructor(age: number, name: string, address: string) {
    //     this.name = name;
    //     this.#address = address;
    // }
    myMethod(): string {
        return this.name;
    }
    static MySaticMethod(): void {
        console.log('You can access this class without creating a instance, just with class name.');
    }
    get myAddress(): string {
        return this.address;
    }
    set myAddress(addres: string) {
        this.address = addres;
    }
}

let myPerson = new MyClass();
myPerson.age = 29;
myPerson.name = 'Sujeewa';
// myPerson.address
// no access to private property
console.log(myPerson);
console.log(myPerson.myMethod());
MyClass.MySaticMethod();

// 004-interfaces
class ImplementedLogin implements Login {
    login(): string {
        return 'Logged!';
    }
    registerUser(): MyInterface {
        throw new Error('Method not implemented.');
    }
}