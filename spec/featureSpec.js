(function testContentOnInstantiation() {
  var note = new Note("Hey");
  if (note.printNote() !== "Hey") {
    throw new Error("Text of the note was note taken on instantiation");
  } else {
    console.log(".");
  }
})();
