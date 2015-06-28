var Zoo = (function() {
  var getBarkStyle = function(isHowler) {
    return isHowler? 'woooooow!': 'woof, woof!';
  };
  var Dog = function(name, breed) {
    this.name = name;
    this.bark = getBarkStyle(breed === 'husky');
  };
  var Wolf = function(name) {
    this.name = name;
    this.bark = getBarkStyle(true);
  };
  return {
    Dog: Dog,
    Wolf: Wolf
  };
})(); // IIFE

var myDog = new Zoo.Dog('Sherlock', 'beagle');
console.log(myDog.name + ': ' + myDog.bark); // Sherlock: woof, woof!

var myWolf = new Zoo.Wolf('Werewolf');
console.log(myWolf.name + ': ' + myWolf.bark); // Werewolf: woof, woof!
