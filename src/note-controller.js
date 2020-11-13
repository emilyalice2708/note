var noteList;
var controller;

class NoteController {
  constructor(notelist){
    this.noteList = notelist;
    this.view = new NoteListView(this.noteList);
  };

  insertHtml(){
    const app = document.getElementById('app');
    if(!app) return;
    app.innerHTML = this.view.getHtmlList();
  };

  submitForm(){
    const form = document.getElementById('text');
    if (!form) return;
    form.addEventListener('submit', function(event){
      event.preventDefault();
      const note = event.srcElement[0] ? event.srcElement[0].value : null;
      if (!note) return

      this.createNote(note)
    }.bind(this));
  };

  createNote(note){
    this.noteList.newNote(note);
    this.insertHtml()
  };

  listenForHash(){
    window.addEventListener("hashchange", function(){
      const path = window.location.hash.split('#')[1]
      const id = path.split('/')[1]
      this.displayNote(id)
    }.bind(this));
  };

  displayNote(id){
    const notes = this.noteList.notes
    if (notes[id]){
      const text = notes[id].getText()
      const newNote = new Note(text);
      const singlenote = new SingleNoteView(newNote);
      document.getElementById('app').innerHTML = singlenote.getHtmlNote();
    };
  }
};

notelist = new NoteList();
controller = new NoteController(notelist);
controller.insertHtml();
controller.listenForHash()
controller.submitForm()
