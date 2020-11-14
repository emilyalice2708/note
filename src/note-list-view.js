class NoteListView{
  constructor(noteList) {
    this._noteList = noteList
  };

  getHtmlList(){
    let listView = '<ul>'
    let notes = this._noteList.getNotes().map(note => {
      return `<li><a id="${note.id}" href="#notes/${note.id}">${note.getText().slice(0, 20)}</a></li>`
    });
    return listView += notes.join('') + '</ul>'
  };
};
