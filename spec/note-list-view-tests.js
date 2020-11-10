(function (exports) {
  function noteListViewIsObject(){
    let noteListModel = new NoteList();
    let noteListView = new NoteListView(noteListModel);
    assert.isTrue(typeof noteListView === 'object')
  }
  noteListViewIsObject()
})(this);

(function (exports) {
  function acceptsNoteLists(){
    let noteListModel = new NoteList();
    noteListModel.newNote("Test note");
    let noteListView = new NoteListView(noteListModel);
    assert.isTrue(noteListView._noteList.getNotes()[0].getText() === 'Test note')
  }
  acceptsNoteLists()
})(this);

(function (exports) {
  function getHtmlListIsDefined(){
    let noteListModel = new NoteList();
    let noteListView = new NoteListView(noteListModel);
    assert.isTrue(typeof noteListView.getHtmlList === 'function')
  }
  getHtmlListIsDefined()
})(this);

(function (exports) {
  function getHtmlListCanReturnOneObject(){
    let noteList = new NoteList();
    noteList.newNote("Test note");
    let noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.getHtmlList() === '<ul><li><div>Test note</div></li></ul>')
  }
  getHtmlListCanReturnOneObject()
})(this);

(function (exports) {
  function getHtmlListCanReturnMultipleObjects(){
    let noteList = new NoteList();
    noteList.newNote("Test note 1");
    noteList.newNote("Test note 2");
    let noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.getHtmlList() === '<ul><li><div>Test note 1</div></li><li><div>Test note 2</div></li></ul>')
  }
  getHtmlListCanReturnMultipleObjects()
})(this);

(function (exports) {
  function getHtmlListCanReturnZeroObjects(){
    let noteList = new NoteList();
    let noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.getHtmlList() === '<ul></ul>')
  }
  getHtmlListCanReturnZeroObjects()
})(this);