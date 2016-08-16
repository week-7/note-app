var localStorage = (function() {

  var storage = {};

  return {
    getItem: function(item) {
      return storage[item];
    },
    setItem: function(key, value) {
      storage[key] = value;
    }
  };

  // LocalStorage.prototype.getItem = function(item) {
  //   return this.storage[item];
  // };
  //
  // LocalStorage.prototype.setItem = function(key, value) {
  //   this.storage[key] = value;
  // };

  // exports.localStorage = LocalStorage;
})();
