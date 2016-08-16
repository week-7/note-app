

var View = (function() {

  return {
      HTMLstring: function() {
        var list = List.readListContent();
        var lists = document.getElementsByTagName('li');
        for (var i = 0; i < list.length; i++) {
             lists[i].innerHTML = list[i];
      }
    }
  };
  })();

List.getList();
 View.HTMLstring();

//
// output = '<ul>';
// var notelist = List.readListContent();
// notelist.forEach(function(note) {
//   output += '<li>' + note + '</li>';
// });
// output += '</ul>';
// return output;

//   View.prototype.returnHTMLString = function() {
//     output = '<ul>';
//     var list = List.readListContent();
//     list.forEach(function() {
//       output += '<li>' + Note.printNote() + '</li>';
//     });
//     output += '</ul>';
//     return output;
//   };
//
//   exports.view = View;
//
// })(this)
