var Subject = require('./subject');
var ball = new Subject();
var human = new Subject();

// register the animals (observers)
var dog = function(message) {
  if (message === 'ball') {
    console.log('The dog ran after the ' + message);
  }
};
ball.addObserver(dog);
human.addObserver(dog);

var cat = function(message) {
   console.log('The cat looked and ignored the ' + message);
};
ball.addObserver(cat);
human.addObserver(cat);

// throw a ball (subject)
console.log('Throwing a ball...');
ball.notify('ball');
// The dog ran after the ball
// The cat looked and ignored the ball

// throw a human (subject)
console.log('Throwing a human...');
human.notify('human');
// The cat looked and ignored the human
