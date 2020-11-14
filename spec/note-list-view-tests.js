(function () {
  function noteListViewIsObject(){
    let noteListModel = new NoteList();
    let noteListView = new NoteListView(noteListModel);
    assert.isTrue(typeof noteListView === 'object')
  }

  function acceptsNoteLists(){
    let noteListModel = new NoteList();
    noteListModel.newNote("Test note");
    let noteListView = new NoteListView(noteListModel);
    assert.isTrue(noteListView._noteList.getNotes()[0].getText() === 'Test note')
  }

  function getHtmlListIsDefined(){
    let noteListModel = new NoteList();
    let noteListView = new NoteListView(noteListModel);
    assert.isTrue(typeof noteListView.getHtmlList === 'function')
  }

  function getHtmlListCanReturnOneObject(){
    let noteList = new NoteList();
    noteList.newNote("Test note");
    let noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.getHtmlList() === '<ul><li><a id="0" href="#notes/0">Test note</a></li></ul>')
  }

  function getHtmlListCanReturnMultipleObjects(){
    let noteList = new NoteList();
    noteList.newNote("Test note 1");
    noteList.newNote("Test note 2");
    let noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.getHtmlList() === '<ul><li><a id="0" href="#notes/0">Test note 1</a></li><li><a id="1" href="#notes/1">Test note 2</a></li></ul>')
  }

  function getHtmlListCanReturnZeroObjects(){
    let noteList = new NoteList();
    let noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.getHtmlList() === '<ul></ul>')
  }

  function getHtmlListReturns20Characters(){
    let noteList = new NoteList();
    noteList.newNote("Test note with more than 20 characters");
    let noteListView = new NoteListView(noteList);
    assert.isTrue(noteListView.getHtmlList() === '<ul><li><a id="0" href="#notes/0">Test note with more </a></li></ul>')
  }

  noteListViewIsObject()
  getHtmlListIsDefined()
  acceptsNoteLists()
  getHtmlListCanReturnOneObject()
  getHtmlListCanReturnMultipleObjects()
  getHtmlListCanReturnZeroObjects()
  getHtmlListReturns20Characters()
})(this);
