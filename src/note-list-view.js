class NoteListView{
  constructor(noteList) {
    this._noteList = noteList
  };

  getHtmlList(){
    let listView = '<ul>'
    for (var i = 0; i < this._noteList.getNotes().length; i++){
      listView += '<li><div>' + this._noteList.getNotes()[i].getText() + '</div></li>'
    }
    listView += '</ul>'
    return listView
  };
};

