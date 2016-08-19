
var View = (function() {

  function removeList() {
    var divList = document.getElementById('list');
    while (divList.hasChildNodes())
      divList.removeChild(divList.firstChild);
  }

<<<<<<< HEAD
        function printNoteLinks() {
          var list;
          setTimeout(function() {
          list = List.readListContent();
          for (var i = 0; i < list.length; i++) {
            var listDiv = document.createElement('div');
            var listLink = document.createElement('a');
            var listText = document.createTextNode(list[i].content.substr(0,20) + '...');
            listLink.setAttribute('href', '#' + i );
            listLink.appendChild(listDiv);
            listDiv.appendChild(listText);
            document.getElementById('list').appendChild(listLink);
          }
        },100);
        }
=======
  function printNoteLinks() {
    var list = List.readListContent();
    for (var i = 0; i < list.length; i++) {
      var listDiv = document.createElement('div');
      var listLink = document.createElement('a');
      var listText = document.createTextNode(list[i].substr(0,20) + '...');
      listLink.setAttribute('href', '#' + i );
      listLink.appendChild(listDiv);
      listDiv.appendChild(listText);
      listDiv.setAttribute('class', 'note')
      document.getElementById('list').appendChild(listLink);
    }
  }
>>>>>>> 887b6dd644700865166c8fb6d55b7eeeface66db

  return {
    noteList: function() {
      removeList();
      printNoteLinks();
    }
  };

})();
   
