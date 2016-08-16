
var kiwi = (function () {
  var list = document.getElementById('test');
  var space = "--"
  list.innerHTML = '';
  // function isUndefined(value){
  //   if (value === "undefined") {
  //     return value + ": Is undefined";
  //   }
  // }
return{
  explore: function (context, testFunction) {
  list.innerHTML += '<li>' + context + '</li>';
  testFunction();
  },

  test: function (details, testFunction) {
  list.innerHTML += '<li>' + space + details + '</li>';
  testFunction(details);
  },

  isEqual: function (expectation) {
    // isUndefined(result)
    if (expectation) {
      toBeEqual = "Pass, values are the same";
    } else {
      toBeEqual = "Fail, values aren't equal";
    }
    list.innerHTML += '<li>' + space + toBeEqual + '</li>';
  },

  isNotEqual: function (expectation) {
    if (expectation) {
      toBeEqual = "Pass, " + result + " is not equal to " + expectation;
    } else {
      toBeEqual = "Fail, " + result +  " is equal " + expectation;
    }
    list.innerHTML += '<li>' + space + toBeEqual + '</li>';
  }

};
})();
