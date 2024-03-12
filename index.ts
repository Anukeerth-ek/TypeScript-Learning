// _____________________ INFER TYPES(IMPLICIT TYPES)___________________
// let myName = "Anukeerth"
// let myAge = 22


// _______________________DEFINING TYPES(EXPLICIT TYPES)__________________

// let myName: string = "Anukeerth" 
// let myAge: number = 22;
// let isProgrammer: boolean = true
// let skills: string[] = ['React', 'JS', 'TS']
// let numberArray: number[] = [2, 2, 2];
// let emptyArray: [] = [];

// ____________________INTERFACE__________________________

// interface Details {
//     name: string;
//     age: number;
//     job: string;
//     getUserName:()=> void
// }
// let myDetails:Details = {name: "Anukeerth", age: 22, job: "Software Engineer", getUserName() {
//     console.log(this.name)
// }}
// let adminDetails: Details = {name: "Anukeerth", age: 22, job: "Software Engineer", getUserName() {
//     console.log(this.name)
// }}

// _______________TYPES____________

// type Details = {
//     name: string;
//     age: number;
//     job: string;
//     getUserDetails:()=> void
// }

// let ourDetails: Details = {
//     name: "Anukeerth",
//     age: 22, 
//     job: "software engineer",
//     getUserDetails() {
//         console.log(this.name)
//     }
// }

// FUNCTIONS    


//   type Details = {
//     name: string | number;
//     age: number ;
//     job: string ;
//     getUserDetails:()=> void
// }

// let ourDetails: Details = {
//     name: "Anukeerth",
//     age: 22, 
//     job: "software engineer",
//     getUserDetails() {
//         console.log(this.name)
//     }
// }


// function getName(ourDetails:Details){
//    return ourDetails.job
// }


// getName(ourDetails)

// ________________NAMED TYPES___________________

// type Status = "pending" |  "completed" | "failed";

// let statusChecker:Status = "pending"




