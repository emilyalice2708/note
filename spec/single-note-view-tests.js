(function (exports) {

  class FakeNote{
    constructor(string){
      this._text = string;
    }

    getText(){
      return this._text;
    };
  };

  let note = new FakeNote("note text");
  let singleNoteView = new SingleNoteView(note);
  function singleNoteViewIsObject(){
    assert.isTrue(typeof singleNoteView === 'object')
  };

  function singleNoteViewReturnsHTML(){
    assert.isTrue(singleNoteView.getHtmlNote() === '<div>note text</div>')
  };

  singleNoteViewIsObject()
  singleNoteViewReturnsHTML()
})(this);
