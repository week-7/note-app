

var View = (function() {

  return {
      HTMLstring: function() {
        output = '<ul>';
        var notelist = List.readListContent();
        notelist.forEach(function(note) {
          output += '<li>' + note + '</li>';
        });
        output += '</ul>';
        return output;
      }
    };


  })();

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
