// 'use strict';

(function (exports) {

  function Note(noteContent) {
    this.noteContent = noteContent;
    }

  Note.prototype.saveNote = function() {
    localStorage.setItem('noteContent', this.noteContent);
  };

  Note.prototype.readNote = function() {
    return localStorage.getItem('noteContent');
  };
  exports.note = Note;
})(this);
