class SingleNoteView{
  constructor(note){
    this.note = note;
  };

  getHtmlNote(){
    return '<div>' + this.note.getText() + '</div>';
  };
};
