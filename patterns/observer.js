var PubSub = {
  subscribe: function (ev, callback) {
    var calls = this._callbacks || (this._callbacks = {});

    (this._callbacks[ev] || (this._callbacks[ev] = [])).push(callback);
    return this;
  },

  publish: function () {
    var args = Array.prototype.slice.call(arguments, 0);
    var ev   = args.shift();
    var list, calls;

    if (!(calls = this._callbacks)) return this;
    if (!(list  = this._callbacks[ev])) return this;

    list.forEach(function (callback) {
      callback.apply(this, args)
    }.bind(this));

    return this;
  }
}

PubSub.subscribe('wem', function() {
  console.log('Wem!');
});

PubSub.subscribe('foo', function() {
  console.log('Foo!');
});

PubSub.publish('wem');
PubSub.publish('foo');
