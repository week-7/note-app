var List = (function () {

  var listContent = [];

  function addNote(note) {
      var text = note.printNote()
      listContent.push(text);
    }

  return {
   createNote: function(text) {
            var note = new Note(text);
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
      if(listContent === null) {
        listContent = []
      }
    }
     };
})();
