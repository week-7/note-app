var Note = require("../src/note-model").note;

function testContentOnInstantiation() {
  var note = new Note("Hey");
  if (note.noteContent !== "Hey") {
    throw new Error("Text of the note was note taken on instantiation");
  } else {
    console.log(".");
  }
  console.log(JSON.stringify(note));
};

testContentOnInstantiation();
