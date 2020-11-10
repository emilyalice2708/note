class NoteController {
  constructor(notelist){
    this._noteList = notelist;
    this._noteList.newNote("Favourite drink: seltzer");
    this._view = new NoteListView(this._noteList);
  };

  insertHtml(){
    let app = document.getElementById('app');
    app.innerHTML = this._view.getHtmlList();
  }

}
