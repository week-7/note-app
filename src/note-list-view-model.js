
  var View = (function() {

    return {
        noteList: function() {
          var elem = document.getElementById('list');
          while (elem.hasChildNodes())
            elem.removeChild(elem.firstChild);
          var list = List.readListContent();
          for (var i = 0; i < list.length; i++) {
            var listLink = document.createElement('a');
            var listDiv = document.createElement('div');
            var listText = document.createTextNode(list[i]);
            listLink.appendChild(listDiv);
            listDiv.appendChild(listText);
            document.getElementById('list').appendChild(listLink);
          }
        }
      };

    })();
   
