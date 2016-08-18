
var List = (function () {

  var listContent = [];


  // function createCORSRequest(method, url) {
  //   var xhr = new XMLHttpRequest();
  //   if ("withCredentials" in xhr) {
  //     xhr.open(method, url, true);
  //   } else if (typeof XDomainRequest != "undefined") {
  //     xhr = new XDomainRequest();
  //     xhr.open(method, url);
  //   } else {
  //     xhr = null;
  //   }
  //   console.log(xhr);
  //   return xhr;
  // }

  function addNote(note) {
      var text = note.printNote();

      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", 'http://localhost:4567/note', true);
      xhttp.setRequestHeader('Content-Type','text/plain')
      xhttp.withCredentials = true
      xhttp.send();
      console.log(xhttp);
      // var xhttp = new XDomainRequest
      // xhttp.open('POST', 'http://localhost:4567/note')
      // var xhttp = createCORSRequest('POST', 'http://localhost:4567/note');
      // xhr.send(note);
      // listContent.push(text);
      // var xhr = createCORSRequest('POST', 'http://localhost:4567/note');
      // xhr.setRequestHeader('Content-Type','text/html; charset=utf-8')
      // xhr.send('content=' + text);
      // if (!xhr) {
      //   throw new Error('CORS not supported');
      // }
    }
  //
  // function saveList() {
  //     localStorage.setItem('List', JSON.stringify(listContent));
  //   }

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
