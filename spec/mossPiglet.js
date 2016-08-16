

var mossPiglet = (function () {
  var list = document.getElementById('test');
  var space = "--"
  list.innerHTML = '';
  // function isUndefined(value){
  //   if (value === "undefined") {
  //     return value + ": Is undefined";
  //   }
  // }
return{
  explore: function (context) {
  list.innerHTML += '<li>' + context + '</li>';
  },

  test: function (details) {
  list.innerHTML += '<li>' + space + details + '</li>';

  },

  isEqual: function (expectation, result) {
    // isUndefined(result)
    if (expectation === result) {
      toBeEqual = "Pass, values are the same";
    } else {
      toBeEqual = "Fail, values aren't equal";
    }
    list.innerHTML += '<li>' + space + toBeEqual + '</li>';
  },

  isNotEqual: function (expectation, result) {
    if (expectation !== result) {
      toBeEqual = "Pass, " + result + " is not equal to " + expectation;
    } else {
      toBeEqual = "Fail, " + result +  " is equal " + expectation;
    }
    list.innerHTML += '<li>' + space + toBeEqual + '</li>';
  }

};
})();
