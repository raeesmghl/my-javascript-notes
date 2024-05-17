

// let obj = {
//     tax(val) {
//         if (val >= 100000) {
//             return (val * 20) / 100
//         } else {
//             return (val * 10) / 100;
//         }
//     }
//     ,
//     afterTax(val) {
//         return val - this.tax(val);
//     }
// }



// let person = {
//     salary: 50000,
// }
// let person2 = {
//     salary: 70000,
// }
// let person3 = {
//     salary: 90000,
// }
// let person4 = {
//     salary: 100000,

//     // commented because i want to change directory in the tex method in obj;
//     // tax(val){
//     //     return (val*20)/100;
//     // }
// }

// person.__proto__ = obj;
// person2.__proto__ = obj;
// person3.__proto__ = obj;
// person4.__proto__ = obj;


// console.log(person.afterTax(person.salary));
// console.log(person2.afterTax(person2.salary));
// console.log(person3.afterTax(person3.salary));
// console.log(person4.afterTax(person4.salary));







// class template{
//     constructor(salary,){
//         this.salary = salary;
//         this.tax = this.salary*10/100;
//         this.afterTax = salary - this.tax;
//     }
// }

// let person = new template(50000);

// console.log(person.afterTax);











// class toyota {
//     start(){
//         return 'start';
//     }
//     stop(){
//         return 'stop';
//     }
// }


// let fortuner = new toyota();


// console.log(fortuner.start())


