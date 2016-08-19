document.addEventListener('DOMContentLoaded', function() {

    (function addNote(){
      document
        .getElementById('saveButton')
        .addEventListener('click', function(clickEvent){
          clickEvent.preventDefault();
          List.createNote(document.getElementById('textarea').value);
              List.getList();
              View.noteList();
        });
    })();

    (function makeUrlChangeShowNote() {
      window.addEventListener("hashchange", showNoteForCurrentPage);
    })();

    function showNoteForCurrentPage() {
      var url = getNoteFromUrl(window.location)
        if (window.location.hash == "") {
        showNoteList(url)
      } else {
      showSingleNote(url);
      }
   }

    function getNoteFromUrl(location) {
      return location.hash.split('#')[1];
    }

    function showSingleNote(note) {
      var list = List.readListContent();
      document
        .getElementById('singleNote')
        .innerHTML = list[note].content;
      document
        .getElementById('listSection')
        .setAttribute('hidden', true);
      document
        .getElementById('enterMessage')
        .setAttribute('hidden', true);
    }

    function showNoteList(note) {
      View.noteList();
           document
             .getElementById('listSection')
             .removeAttribute('hidden');
           document
             .getElementById('enterMessage')
             .removeAttribute('hidden');
           document
             .getElementById('singleNote')
             .innerHTML = "";
      }

        List.getList();
        View.noteList();

});
