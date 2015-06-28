var channels = {};

var subscribe = function(channel, subscriber) {
  if (!channels[channel]) channels[channel] = [];
  channels[channel].push(subscriber);
};

var publish = function(channel, message){
  if (!channels[channel]) return;
  channels[channel].forEach(function(subscriber) {
    subscriber.call(subscriber, message);
  });
};

module.exports = {
  subscribe: subscribe,
  publish: publish
};
