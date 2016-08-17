var explore = kiwi.explore;
var test = kiwi.test;

explore('Creating a new note', function(){
  test('note content is added on instantiation', function() {
    var note = new Note("Hey");
    kiwi.isEqual(note.printNote() === "Hey");
  });
});
