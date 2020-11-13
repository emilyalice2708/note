(function () {
  var app = document.createElement('div');

  document.body.innerHTML = (`
  <form id=text action=#notes/new method=post>
    <input type=text id=text-area>
    <input id="submitbutton" type=submit>
  </form>
`)
  app.setAttribute('id', 'app');
  document.body.appendChild(app);

  var notelist = new NoteList();
  var noteController = new NoteController(notelist);

  function noteControllerCanBeInstantiated() {
    assert.isTrue(typeof(noteController) === "object")
    console.log("CAN BE INSTANTIATED")
  }
 
  function canCreateEmptyHtmlList() {
    noteController.insertHtml();
    assert.isTrue(app.innerHTML == '<ul></ul>');
    console.log("CAN CREATE EMPTY HTML LIST")
  }

  function canAddNoteAndUrl() {
    notelist.newNote("I am the first note to be created here")
    noteController.insertHtml();

    assert.isTrue(app.innerHTML == '<ul><li><a id="0" href="#notes/0">I am the first note </a></li></ul>');
    console.log("RETRIEVES NOTE")
  }

  function canDisplayNote() {
    notelist.newNote("I am the first note to be created here")

    let note = document.getElementById(0)
    noteController.listenForHash()
    note.click();
    setTimeout(function() { assert.isTrue(app.innerHTML == '<div>I am the first note to be created here</div>') }, 2000);
    console.log("CAN DISPLAY NOTE")
  }

  function addsNewNotesFromForm(){
    noteController.createNote("New note via form")
    console.log(app.innerHTML)
    assert.isTrue(app.innerHTML == '<ul><li><a id="0" href="#notes/0">I am the first note </a></li><li><a id="1" href="#notes/1">New note via form</a></li></ul>')
  }

  noteControllerCanBeInstantiated()
  canCreateEmptyHtmlList()
  canAddNoteAndUrl()
  addsNewNotesFromForm()
  canDisplayNote()
})(this);
