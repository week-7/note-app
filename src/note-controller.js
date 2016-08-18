document.addEventListener('DOMContentLoaded', function() {

    (function addNote(){
      document
        .getElementById('saveButton')
        .addEventListener('click', function(clickEvent){
          clickEvent.preventDefault();
          List.createNote(document.getElementById('textarea').value);
          setTimeout(function() {
              View.noteList();
          },50);
        });
    })();

    (function makeUrlChangeShowNote() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    })();

    function showNoteForCurrentPage() {
      showNote(getNoteFromUrl(window.location));
    }

    function getNoteFromUrl(location) {
      return location.hash.split('#')[1];
    }

    function showNote(note) {
      var list = List.readListContent();
      document
        .getElementById('singleNote')
        .innerHTML = list[note];
      document
        .getElementById('listSection')
        .setAttribute('hidden', true);
      document
        .getElementById('enterMessage')
        .setAttribute('hidden', true);
    }

        List.getList();
        setTimeout(function() {
            View.noteList();
        },50);


});
