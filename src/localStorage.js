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

})();
