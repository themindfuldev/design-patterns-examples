// zoo.js
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
module.exports = {
  Dog: Dog,
  Wolf: Wolf
};
