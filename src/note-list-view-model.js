

(function(exports) {

  function View(list) {}

  View.prototype.returnHTMLString = function() {
    output = '<ul>';
    list.listContent.forEach(function(note) {
      output += '<li>' + note.noteContent + '</li>';
    });
    output += '</ul>';
    return output;
  };

  exports.view = View;

})(this)
