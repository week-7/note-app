
  var View = (function() {
    return {
        noteList: function() {
          var elem = document.getElementById('list');
          while (elem.hasChildNodes())
            elem.removeChild(elem.firstChild);
          var list = List.readListContent();
          for (var i = 0; i < list.length; i++) {
            var listDiv = document.createElement('div');
            var listLink = document.createElement('a');
            listLink.setAttribute('href', '#' + i );
            var listText = document.createTextNode(list[i].substr(0,20));
            listLink.appendChild(listDiv);
            listDiv.appendChild(listText);
            listDiv.setAttribute('class', 'note')
            document.getElementById('list').appendChild(listLink);
          }
        }
      };

    })();
   
