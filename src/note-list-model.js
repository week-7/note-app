var List = (function () {

  var listContent = [];

  function addNote(note) {
      var text = note.printNote();
      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", 'http://localhost:4567/note');
      xhttp.setRequestHeader('Content-Type','text/plain');
      xhttp.send(text);
    }

  return {
    createNote: function(text) {
      var note = new Note(text);
      addNote(note);
    },

    getList: function() {
        listContent = [];
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (xhttp.readyState == 4 && xhttp.status == 200) {
              var data = JSON.parse(xhttp.responseText);
              data.forEach(function(object) {
                listContent.push(object);
              });
              console.log("getlist");
              console.log(listContent);
          }
        };
        xhttp.open("GET", 'http://localhost:4567/note');
        xhttp.send();
      },

    readListContent: function() {
      return listContent;
    }

  };

})();
