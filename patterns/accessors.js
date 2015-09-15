var person = {
  name: "Russ",
  _age: 20,
  get age(){
    return this._age;
  },
  set age(value){
    this._age = value < 0 ? 0 : value > 122 ? 122 : value;
  }
}

// console.log(Object.getOwnPropertyDescriptor(person, 'name'));
// console.log(Object.getOwnPropertyDescriptor(person, 'age'));

Object.defineProperty(person, "gender", {
  value: "male",
  writable: false,
  enumerable: false,
  configurable: true
});

Object.defineProperty(person, "gender", {
  writable: true,
});


// console.log(person.gender);
// person.gender = "female";
// console.log(person.gender);

// for (property in person) {
//   console.log(property);
// }

// console.log(Object.keys(person));

// console.log(person.propertyIsEnumerable("gender"));


// var o = {};

// Object.defineProperties(o, {
//   x: {
//     value: 20,
//     writable: false,
//   },
//   y: {
//     value: 10,
//     writable: false,
//   },
//   r: {
//     get: function() {
//       return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
//   }
// });

// o.x = 16;
// console.log(o.r);


var obj = {};

// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));

Object.seal(obj);

console.log(Object.isSealed(obj));

Object.freeze(obj);
console.log(Object.isFrozen(obj));
