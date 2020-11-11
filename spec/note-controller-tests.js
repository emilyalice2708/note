(function (exports) {
  function noteControllerCanBeInstantiated() {
    let notelist = new NoteList();
    let noteController = new NoteController(notelist);
    assert.isTrue(typeof(noteController) === "object")
  }
  noteControllerCanBeInstantiated()
})(this);


(function (exports) {
  function noteControllerCreatesHtmlList() {
    let app = document.createElement('div');
    app.setAttribute('id', 'app');
    document.body.appendChild(app);
    let notelist = new NoteList();
    let noteController = new NoteController(notelist);
    noteController.insertHtml();

    assert.isTrue(app.innerHTML == '<ul><li><a href="#notes/0">Favourite drink: sel</a></li></ul>');
  }
  noteControllerCreatesHtmlList()
})(this);
