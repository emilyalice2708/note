class NoteList {
  constructor() {
    this.notes = [];
    this.id = 0;
  }

  getNotes() {
    return this.notes;
  }

  newNote(text) {
    let note = new Note(text, this.id);
    this.notes.push(note);
    this.id++;
  }
}
