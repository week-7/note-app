// 'use strict';
(function (exports) {

function List() {
    this.listContent = [];
  }

List.prototype.createNote = function(text) {
  note = new Note(text);
};

List.prototype.addNote = function() {
  this.listContent += note;
};
  exports.list = List;
})(this);
