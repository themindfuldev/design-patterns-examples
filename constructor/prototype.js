function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
}

Dog.prototype.bark = function() {
  return this.name + ': woof, woof!';
};

var myDog = new Dog('Sherlock', 'beagle');
console.log(myDog.bark());
