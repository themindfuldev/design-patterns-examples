var Subject = function() {
  this.observers = [];
};

Subject.prototype.notify = function(message) {
  this.observers.forEach(function(observer) {
    observer.call(observer, message);
  });
};

Subject.prototype.addObserver = function(observer) {
  this.observers.push(observer);
};

module.exports = Subject;
