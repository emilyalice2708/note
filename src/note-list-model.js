class NoteList {
  constructor() {
    this.notes = [];
  }

  getNotes() {
    return this.notes;
  }

  newNote(text) {
    let note = new Note(text);
    this.notes.push(note);
  }
}