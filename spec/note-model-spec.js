
(function testContentOnInstantiation() {
  var note = new Note("Hey");
  if (note.noteContent !== "Hey") {
    throw new Error("Text of the note was note taken on instantiation");
  } else {
    console.log(".");
  }
})();

(function savingContent() {
  var note = new Note("Hey");
  note.saveNote();
  var retrievedObject = localStorage.getItem('noteContent');
  if (retrievedObject !== "Hey") {
    throw new Error("Text of the note was not saved");
  } else {
    console.log(".");
  }
})();
