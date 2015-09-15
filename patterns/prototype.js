function Person(name, age, gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
}
function Developer() {
  Person.apply(this, arguments);
};

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;
var jon = new Developer('John', 34, 'male');

console.log(jon instanceof Person);
console.log(jon instanceof Developer);
console.log(jon );