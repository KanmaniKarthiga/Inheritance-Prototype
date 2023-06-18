// Q1...
function parent(name){
    this.name = name;
}
parent.prototype.greet = function(){
    console.log(`Hey! I am ${this.name}`)
}
function child(name, profession){
    parent.call(this, name)
    this.profession = profession
}
child.prototype = Object.create(parent.prototype)
child.prototype.constructor = child

child.prototype.introduce = function(){
    console.log(`Hey! I am ${this.name} and I am a ${this.profession}`)
}
var Parent = new parent("Kanmani Karthiga")
var Child = new child(Parent.name,"Web Developer!")
Parent.greet()
Child.introduce()

// Q2...
const Parent1 = {
    display : function(){
        console.log(`I am ${this.name} and my age is ${this.age}`)
    }
}
const child1 = Object.create(Parent1)
child1.name = "Kanmani"
child1.age = 24
child1.display()

const child2 = Object.create(Parent1)
child2.name = "Karthiga"
child2.age = 22
child2.display()

// Q3...
Array.prototype.mySum = function() {
    let sum =0
    for (let i = 0; i < this.length; i++) {
    sum = sum+this[i]
  }
  console.log(sum)
};

var array1 = [1,2,3]
array1.mySum()

var array2 = [4,5,5]
array2.mySum()

// Q4...
const user = {
    name: 'John Mathew',
    age: 25
}
const employee = Object.create(user, {
    employeeName: {
        value: 'Rishikesh',
    }
})
console.log(employee.hasOwnProperty('name'))       
console.log(employee.hasOwnProperty('employeeName'));

console.log(user.name)
console.log(employee.employeeName)