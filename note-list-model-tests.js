(function (exports) {
  function testNoteListStartsEmpty() {
    let noteList = new NoteList();

    if (!Array.isArray(noteList.getNotes())) {
      throw new Error("List should be an array.")
    }

    if (noteList.getNotes().length != 0) {
      throw new Error("List should be empty.");
    }
  };

  testNoteListStartsEmpty();
})(this);

(function (exports) {
  function createNewNoteAndAddToList() {
    let noteList = new NoteList;
    noteList.newNote("Test note");

    if (noteList.getNotes().length == 0) {
      throw new Error("No note created.")
    }

    if (noteList.getNotes()[0].getText() !== "Test note") {
      throw new Error("Note was not created with correct text.")
    }
  }

  createNewNoteAndAddToList()
})(this)