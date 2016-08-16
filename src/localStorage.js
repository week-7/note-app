(function(exports) {

  function LocalStorage() {
    this.storage = {};
  }

  LocalStorage.prototype.getItem = function(item) {
    return this.storage[item];
  };

  LocalStorage.prototype.setItem = function(key, value) {
    this.storage[key] = value;
  };

  exports.localStorage = LocalStorage;
})(this);
