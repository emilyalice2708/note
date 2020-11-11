var noteList;
var controller;

class NoteController {
  constructor(notelist){
    this.noteList = notelist;
    //this.noteList.newNote("Favourite drink: seltzer");
    this.view = new NoteListView(this.noteList);
  };

  insertHtml(){
    this.view = new NoteListView(controller.noteList);
    let app = document.getElementById('app');
    app.innerHTML = controller.view.getHtmlList();
  };

  submitForm(){
    const form = document.getElementById('text');
    form.addEventListener('submit', function(event){
      event.preventDefault();
      var note = event.srcElement[0].value;
      controller.noteList.newNote(note);
      controller.insertHtml()
    });

  };

  changeURL(){
    window.addEventListener("hashchange", function(){
      let path = window.location.hash.split('#')[1]
      let id = path.split('/')[1]
      let notes = controller.noteList.notes
      if (notes[id]){
        let text = notes[id].getText()
        let newNote = new Note(text);
        let singlenote = new SingleNoteView(newNote);
        document.getElementById('app').innerHTML = singlenote.getHtmlNote();
      };
    });
  };
};
notelist = new NoteList();
controller = new NoteController(notelist);
controller.insertHtml();
controller.changeURL()
controller.submitForm()
