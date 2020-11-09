(function(exports) {
  function testNoteCanStoreText(){
    let note = new Note("I'm a note");

    if (note.getText() !== "I'm a note") {
      throw new Error("Text is not retrieved!")
    }
  };

  testNoteCanStoreText();
  })(this);