require('./pets');

var mediator = require('./mediator');

// throw a ball (publish to 'pets')
console.log('Throwing a ball...');
mediator.publish('pets', 'ball');
// The dog ran after the ball
// The cat looked and ignored the ball

// throw a ball (publish to 'pets')
console.log('Throwing a human...');
mediator.publish('pets', 'human');
// The cat looked and ignored the human
