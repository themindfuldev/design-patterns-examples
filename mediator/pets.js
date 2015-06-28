var mediator = require('./mediator');

// register the animals (subscribers to 'pets')
var dog = function(message) {
  if (message === 'ball') {
    console.log('The dog ran after the ' + message);
  }
};
mediator.subscribe('pets', dog);

var cat = function(message) {
  console.log('The cat looked and ignored the ' + message);
};
mediator.subscribe('pets', cat);
