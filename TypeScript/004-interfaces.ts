export interface MyInterface {
    name: string;
    age?: number; // optional property
}
let myDetails1: MyInterface;
let myDetails2: MyInterface;
myDetails1 = {
    name: 'Sujeewa',
    age: 29,
}
myDetails2 = {
    name: 'Abeysinghe',
}

interface MyExtendedInterface extends MyInterface {
    address: string;
}
let myExtendedDetails: MyExtendedInterface;
myExtendedDetails = {
    name: 'GTN',
    address: 'Colombo'
}

export interface Login {
    login(): string;
    registerUser(): MyInterface;
}