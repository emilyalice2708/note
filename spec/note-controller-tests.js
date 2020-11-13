(function () {
  var app = document.createElement('div');

  document.body.innerHTML = (`
  <form id=text action=#notes/new method=post>
    <input type=text id=text-area>
    <input type=submit>
  </form>
`)
  class DoubleNote {
    getText(){
      return ""
    }
  }
  class DoubleNoteList{

  }
 
  app.setAttribute('id', 'app');
  document.body.appendChild(app);

  function noteControllerCanBeInstantiated() {
    let notelist = new NoteList();
    let noteController = new NoteController(notelist);
    assert.isTrue(typeof(noteController) === "object")
    console.log("canbeinstantiated")
  }
 
  function canCreateEmptyHtmlList() {
    let notelist = new NoteList();
    let noteController = new NoteController(notelist);
    noteController.insertHtml();
    assert.isTrue(app.innerHTML == '<ul></ul>');
  }

  function canAddNoteAndUrl() {
    let notelist = new NoteList();
    notelist.newNote("test")
    let noteController = new NoteController(notelist);
    noteController.insertHtml();

    assert.isTrue(app.innerHTML == '<ul><li><a href="#notes/0">test</a></li></ul>');
    console.log("RETRIEVES NOTE")
  }

  function canDisplayNote() {
    let notelist = new NoteList();
    notelist.newNote("I am the first note to be created here")
    let noteController = new NoteController(notelist);
    noteController.insertHtml();
    assert.isTrue(app.innerHTML == '<ul><li><a href="#notes/0">I am the first note </a></li></ul>');
    noteController.displayNote(0)
    assert.isTrue(app.innerHTML == '<div>I am the first note to be created here</div>')
  }

  function addsNewNotesFromForm(){
    let notelist = new NoteList();
    let noteController = new NoteController(notelist);
    noteController.createNote("New note via form")
    assert.isTrue(app.innerHTML == '<ul><li><a href="#notes/0">New note via form</a></li></ul>')
  }

  noteControllerCanBeInstantiated()
  canCreateEmptyHtmlList()
  canAddNoteAndUrl()
  canDisplayNote()
  addsNewNotesFromForm()
})(this);
