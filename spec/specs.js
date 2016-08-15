
function Note(noteContent) {
  this.noteContent = noteContent;
}

Note.prototype.saveNote = function() {
  localStorage.setItem('noteContent', this.noteContent);
};

Note.prototype.readNote = function() {
  return localStorage.getItem('noteContent');
};

function List() {
  this.listContent = [];
}

List.prototype.createNote = function(text) {
note = new Note(text);
};

List.prototype.addNote = function() {
this.listContent += note;
};

function isTrue(assertionToCheck) {
  if (!assertionToCheck) {
    throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
  } else {
    console.log("pass");
  }
}

(function testContentOnInstantiation() {
  var note = new Note("Hey");
  isTrue(note.noteContent === "Hey");
})();


(function savingContent() {
  var note = new Note("Hey");
  note.saveNote();
  var retrievedObject = localStorage.getItem('noteContent');
  isTrue(retrievedObject === "Hey");
})();

(function initiallylistisempty() {
  var list = new List();
  isTrue(list.listContent !== []);
})();

(function createsNewNote() {
  var list = new List();
  list.createNote("note text");
  list.addNote();
  isTrue(list.listContent.length !== 0);
})();
