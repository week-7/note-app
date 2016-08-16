
document.addEventListener('DOMContentLoaded', function() {
  var View = (function() {

    return {
        HTMLstring: function() {
          List.getList();
          var output = '';
          var list = List.readListContent();
          var lists = document.getElementById('list');
        if(list !== null) {
          for (var i = 0; i < list.length; i++) {
           output += '<li>' + list[i] + '</li>';
            }
          lists.innerHTML = output;
        }
      }
      };

    })();
   View.HTMLstring();
});
