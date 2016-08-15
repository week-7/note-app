
(function initiallylistisempty() {
  var list = new List();
  if (list.listContent !== []) {
    throw new Error("not an empty array");
  } else {
    console.log(".");
  }
})();

(function createsNewNote() {
  var list = new List();
  list.createNote("note text");
  list.addNote();
    if (list.listContent.length === 0) {
      throw new Error("Did not create a new note");
    } else {
      console.log(".");
    }
})();
