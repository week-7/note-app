

var View = (function() {

  return {
      HTMLstring: function() {
        List.getList();
        var output = '';
        var list = List.readListContent();
        var lists = document.getElementById('list');
        for (var i = 0; i < list.length; i++) {
         output += '<li>' + list[i] + '</li>';
        }
        console.log(output);
        lists.innerHTML = output;

      }

    };

  })();

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
