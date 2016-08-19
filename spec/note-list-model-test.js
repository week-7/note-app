var List = (function () {

  var listContent = [];

  function addNote(note) {
      var text = note.printNote();
      listContent.push(text);
    }

  function saveList() {
      localStorage.setItem('TestList', JSON.stringify(listContent));
    }

  function getList() {
      retrievedNotes = localStorage.getItem('TestList');
      listContent = JSON.parse(retrievedNotes);
      if(listContent === null) {
      listContent = [];
        }
    }

  return {
    createNote: function(text) {
      var note = new Note(text);
      addNote(note);
      saveList();
    },

    ListContent: function() {
      getList();
      return listContent;
    },
  };

})();
