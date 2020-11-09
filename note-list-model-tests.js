(function (exports) {
  function testNoteListStartsEmpty() {
    let noteList = new NoteList();

    if (noteList.getNotes().length != 0 && typeof noteList.getNotes() == 'array') {
      throw new Error("List should be empty array.");
    }
  };

  testNoteListStartsEmpty();
})(this);