var List = (function () {

  var listContent = [];

  function addNote(note) {
      var text = note.printNote();

      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", 'http://localhost:4567/note');
      xhttp.setRequestHeader('Content-Type','text/plain');
      xhttp.send(text);

    }

  function getList() {
      retrievedNotes = localStorage.getItem('List');
      listContent = JSON.parse(retrievedNotes);
      if(listContent === null) {
      listContent = [];
        }
    }

  return {
    createNote: function(text) {
      var note = new Note(text);
      addNote(note);
      // saveList();
    },

    readListContent: function() {
      getList();
      return listContent;
    }
  };

})();
