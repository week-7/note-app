// 'use strict';
// var Note = require('./note-model').note;
// var newNote = new Note;

var List = (function () {

  var listContent = [];

  function addNote(note) {
      listContent.push(note.printNote());
    }

  return {
   createNote: function(text) {
            note = new Note();
            note.saveText(text);
            addNote(note);
          },
    saveList: function() {
        localStorage.setItem('List', JSON.stringify(listContent));
      },
    printList: function() {
        listContent.forEach(function(Note) {
          return Note.printnote();
        });
      },
    readListContent: function() {
      return listContent;
    },
    getList: function() {
      retrievedNotes = localStorage.getItem('List');
      listContent = JSON.parse(retrievedNotes);
    }
     };
})();


// List.prototype.createNote = function(text) {
//   note = new Note(text);
// };
//
// List.prototype.addNote = function() {
//   this.listContent.push(note);
// };
//
// List.prototype.saveList = function() {
//   localStorage.setItem('notelist', this.listContent)
// }
//
// List.prototype.printList = function() {
//   this.listContent.forEach(function(note) {
//     return note.noteContent;
//   });
// };
//
//   exports.list = List;
// })(this);
