(function () {
  var app = document.createElement('div');

  document.body.innerHTML = (`
  <form id=text action=#notes/new method=post>
    <input type=text id=text-area>
    <input id='newnote' type=submit>
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
    console.log("CAN BE INSTANTIATED")
  }
 
  function canCreateEmptyHtmlList() {
    let notelist = new NoteList();
    let noteController = new NoteController(notelist);
    noteController.insertHtml();
    assert.isTrue(app.innerHTML == '<ul></ul>');
    console.log("CAN CREATE EMPTY HTML LIST")
  }

  function canAddNoteAndUrl() {
    let notelist = new NoteList();
    notelist.newNote("I am the first note to be created here")
    let noteController = new NoteController(notelist);
    noteController.insertHtml();

    assert.isTrue(app.innerHTML == '<ul><li><a id="0" href="#notes/0">I am the first note </a></li></ul>');
    console.log("RETRIEVES NOTE")
  }

  function canDisplayNote() {
    let note = document.getElementById(0)
    note.click();
    setTimeout(function() { assert.isTrue(app.innerHTML == '<div>I am the first note to be created here</div>') }, 7000);
    console.log("CAN DISPLAY NOTE")
  }

  function addsNewNotesFromForm(){
    let notelist = new NoteList();
    notelist.newNote("test")
    let noteController = new NoteController(notelist);
    let input = document.getElementById("text-area")
    input.value = "New note via form"
  //document.getElementById("text").submit().reset()
    noteController.submitForm()
   // document.getElementById("text").submit()
   setTimeout(function() { assert.isTrue(app.innerHTML == '<ul><li><a id="0" href="#notes/0">New note via form</a></li></ul>') }, 7000);
  }

  noteControllerCanBeInstantiated()
  canCreateEmptyHtmlList()
  canAddNoteAndUrl()
  canDisplayNote()
  addsNewNotesFromForm()
})(this);
