//
// (function testContentOnInstantiation() {
//   var note = new Note("Hey");
//   if (note.printNote() !== "Hey") {
//     throw new Error("Text of the note was note taken on instantiation");
//   } else {
//     console.log(".");
//   }
// })();
//
// (function savingContent() {
//   var note = new Note("Hey");
//   var storage = new LocalStorage();
//   note.saveNote(storage);
//   var retrievedObject = storage.getItem('noteContent');
//   if (retrievedObject !== "Hey") {
//     throw new Error("Text of the note was not saved");
//   } else {
//     console.log(".");
//   }
// })();

var explore = kiwi.explore;
var test = kiwi.test;

explore('Creating a new note', function(){
  test('note content is added on instantiation', function() {
    var note = new Note("Hey");
    kiwi.isEqual(note.printNote() === "Hey");
  });
});

explore('Creating a new note', function(){
  test('note content is added on instantiation', function() {
    var note = new Note("Hey");
    kiwi.isEqual(note.printNote() === "Hey");
  });
});


// mossPiglet.isEqual(1, "undefined");
// mossPiglet.isNotEqual(1, 2);
//
// mossPiglet.explore('Creating a new note');
// mossPiglet.test('note content is added on instantiation')
// var note = new Note('hey')
// mossPiglet.
