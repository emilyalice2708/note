(function (exports) {
  function testNoteListStartsEmpty() {
    let noteList = new NoteList();

    assert.isTrue(Array.isArray(noteList.getNotes()))
    assert.isTrue(noteList.getNotes().length === 0)
  };

  testNoteListStartsEmpty();
})(this);

(function (exports) {
  function createAndAddNewNote() {
    let noteList = new NoteList;
    noteList.newNote("Test note");

    assert.isTrue(noteList.getNotes().length !== 0)
    assert.isTrue(noteList.getNotes()[0].getText() === "Test note")
  }

  createAndAddNewNote()
})(this);