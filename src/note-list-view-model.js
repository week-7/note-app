
  var View = (function() {

    return {
        noteList: function() {
          var list = List.readListContent();
          for (var i = 0; i < list.length; i++) {
            var newList = document.createElement('li');
            var liText = document.createTextNode(list[i]);
            newList.appendChild(liText);
            document.getElementById('list').appendChild(newList);
          }
        }
      };

    })();
   
