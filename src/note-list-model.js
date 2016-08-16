
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
