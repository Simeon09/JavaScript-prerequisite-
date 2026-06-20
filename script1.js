const squareArrow = n => n * n
const greetArrow = name => "Hello, " + name + "!"
const multiplyArrow = (a, b) => a * b

const getFullName =(firstName, lastName) => firstName + " " + lastName ;

// Task 2 Destructuring Assignment 

const student = { name: "Amaka", age: 22, course: "Frontend Development", city: "Abuja" }
const scores = [88, 72, 95, 60, 45]

//Destructure name and course from student.
const {name, course } = student;
console.log(name); // Output: Amaka
console.log(course); // Output: Frontend Development
