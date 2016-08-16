// 'use strict';

var Note = (function (text) {
  var noteContent = text;


 return {

  saveText: function(text) {
    noteContent = text;
  },
  printNote: function() {
              return noteContent;
              }
    };

});
