// 'use strict';
var Note = require('./note-model').note;
// var newNote = new Note;

(function (exports) {

  function List() {
    this.listContent = [];
  }

List.prototype.createNote = function(text) {
  note = new Note(text);
};

List.prototype.addNote = function() {
  this.listContent.push(note);
};

List.prototype.saveList = function() {
  localStorage.setItem('notelist', this.listContent)
}

List.prototype.printList = function() {
  this.listContent.forEach(function(note) {
    return note.noteContent;
  });
};

  exports.list = List;
})(this);
