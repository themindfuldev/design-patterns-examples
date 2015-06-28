var factorial = (function() {
  var intermediateResults = [0, 1];
  function calculate(n, stats) {
    if (intermediateResults[n] === undefined) {
      stats.ops++;
      intermediateResults[n] = n * calculate(n - 1, stats);
    }
    return intermediateResults[n];
  }
  return function(n) {
    var stats = { ops: 0 },
        result = (n > 0 && n % 1 === 0)? calculate(n, stats): 0;
    return n + '! = ' + result + ' (' + stats.ops + ' operations)';
  };
})(); // IIFE

console.log(factorial(18)); // 18! = 6402373705728000 (17 operations)
console.log(factorial(20)); // 20! = 2432902008176640000 (2 operations)
