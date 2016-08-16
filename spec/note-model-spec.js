
(function testContentOnInstantiation() {
  var note = new Note("Hey");
  if (note.printNote() !== "Hey") {
    throw new Error("Text of the note was note taken on instantiation");
  } else {
    console.log(".");
  }
})();

(function savingContent() {
  var note = new Note("Hey");
  var storage = new LocalStorage();
  note.saveNote(storage);
  var retrievedObject = storage.getItem('noteContent');
  if (retrievedObject !== "Hey") {
    throw new Error("Text of the note was not saved");
  } else {
    console.log(".");
  }
})();
