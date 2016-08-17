
var kiwi = (function () {
  var list = document.getElementById('test');
  list.innerHTML = '';

return{
  explore: function (context, testFunction) {
    list.innerHTML += '<b><li>' + context + '</li></b>';
    testFunction();
  },

  test: function (details, testFunction) {
    list.innerHTML += '<em><dt>' + details + '</dt></em>';
    testFunction(details);
  },

  isEqual: function (expectation) {
    if (expectation) {
      msg = "Pass: " + expectation;
    } else {
      msg = "Fail: " + expectation;
    }
    list.innerHTML += '<dd>' + msg + '</dd>';
  },

  isNotEqual: function (expectation) {
    if (expectation) {
      msg = "Pass: " + expectation;
    } else {
      msg = "Fail: " + expectation;
    }
    list.innerHTML += '<dd>' + msg + '</dd>';
  }

};
})();
