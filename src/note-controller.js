class NoteController {
  constructor(notelist){
    this._noteList = notelist;
    this._noteList.newNote("Favourite drink: seltzer");
    this._view = new NoteListView(this._noteList);
  };

  insertHtml(){
    let app = document.getElementById('app');
    app.innerHTML = this._view.getHtmlList();
  };

  submitForm(){
    const form = document.getElementById('text');
    form.addEventListener('submit', function(event){
      event.preventDefault();
      console.log(event);
      console.log(event.path);
    });
  }

  changeURL(){
    var notes = this._noteList.notes
    window.addEventListener("hashchange", function(){
      let path = window.location.hash.split('#')[1]
      let id = path.split('/')[1]
      if (notes[id]){
        let text = notes[id].getText()
        let newNote = new Note(text);
        let singlenote = new SingleNoteView(newNote);
        document.getElementById('app').innerHTML = singlenote.getHtmlNote();
      };
    });
  };
}
let notelist = new NoteList();
let controller = new NoteController(notelist);
controller.insertHtml();
controller.changeURL()
controller.submitForm()
