
  var View = (function() {

        function removeList() {
          var divList = document.getElementById('list');
          while (divList.hasChildNodes())
            divList.removeChild(divList.firstChild);
        }

        function printNoteLinks() {
          var list = List.readListContent();
          console.log(list)
          for (var i = 0; i < list.length; i++) {
            var listDiv = document.createElement('div');
            var listLink = document.createElement('a');
            var listText = document.createTextNode(list[i].content.substr(0,20) + '...');
            listLink.setAttribute('href', '#' + i );
            listLink.appendChild(listDiv);
            listDiv.appendChild(listText);
            document.getElementById('list').appendChild(listLink);
          }
        }

    return {
        noteList: function() {
          removeList();
          printNoteLinks();
      }
    };

    })();
   
