function Satck() {
  this._size = 0;
  this._storage = {};
}

Stack.prototype.push = function(data) {
  // increases the size of out storage
  var size = this._size++;

  // assigns size as a key of storage
  // assigns data as the value of this key
  this._storage[size] = data;
};

Stack.prototype.pop = function() {
  var size = this._size,
      deletedData;

  if (size > 0) {
    deletedData = this._storage[size];

    delete this._storage[size];
    this.size--;

    return deletedData;
  }
};