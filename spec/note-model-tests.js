
(function(exports) {
  function testNoteCanStoreText(){
    var note = new Note("I'm a note");

    assert.isTrue(note.getText() === "I'm a note")
  };
  testNoteCanStoreText();
})(this);