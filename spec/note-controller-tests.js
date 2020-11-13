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

    assert.isTrue(app.innerHTML == '<ul><li><a id="0" href="#notes/0">test</a></li></ul>');
    console.log("RETRIEVES NOTE")
  }

  function canDisplayNote() {
    let note = document.getElementById(0)
    console.log(note)
    note.click();
    setTimeout(function() { assert.isTrue(app.innerHTML == '<div>I am the first note to be created here</div>') }, 7000);
    console.log("CAN DISPLAY NOTE")
  }

  function addsNewNotesFromForm(){
   // <form id=text action=#notes/new method=post>
   //change inner html value to fill in form and click submit then check
    let input = document.getElementById("text-area")
    input.value = "New note via form"
    let submit = document.getElementById("text")
    console.log(submit)
    submit.click()

   // noteController.createNote("New note via form")
   setTimeout(function() { assert.isTrue(app.innerHTML == '<ul><li><a id="0" href="#notes/0">New note via form</a></li></ul>') }, 7000);
  }

  noteControllerCanBeInstantiated()
  canCreateEmptyHtmlList()
  canAddNoteAndUrl()
  canDisplayNote()
  addsNewNotesFromForm()
})(this);
