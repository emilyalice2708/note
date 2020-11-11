(function () {
  function testNoteListStartsEmpty() {
    let noteList = new NoteList();

    assert.isTrue(Array.isArray(noteList.getNotes()))
    assert.isTrue(noteList.getNotes().length === 0)
  };

  function createAndAddNewNote() {
    let noteList = new NoteList;
    noteList.newNote("Test note");

    assert.isTrue(noteList.getNotes().length !== 0)
    assert.isTrue(noteList.getNotes()[0].getText() === "Test note")
  }

  function addsIdToNotes(){
    let noteList = new NoteList;
    noteList.newNote("Test note 1");
    noteList.newNote("Test note 2");
    assert.isTrue(noteList.getNotes().length === 2)
    assert.isTrue(noteList.getNotes()[0].id === 0)
    assert.isTrue(noteList.getNotes()[1].id === 1)
  }

  addsIdToNotes();
  testNoteListStartsEmpty();
  createAndAddNewNote();
})(this);
