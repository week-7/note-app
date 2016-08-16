// 'use strict';

var Note = (function (text) {

  var noteContent = text;


  // Note.prototype.saveNote = function(localStorage) {
  //   localStorage.setItem('noteContent', this.noteContent);
  // };
 return {

  saveText: function(text) {
    noteContent = text;
  },
  printNote: function() {
              return noteContent;
              }
    };
  //
  // Note.prototype.getNote = function() {
  //   return localStorage.getItem('noteContent');
  // };

});
