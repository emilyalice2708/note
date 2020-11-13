class NoteList {
  constructor() {
    this.notes = [];
    this.id = 0;
  }

  getNotes() {
    return this.notes;
  }

  newNote(text, noteClass = Note) {
    let note = new noteClass(text, this.id);
    this.notes.push(note);
    this.id++;
  }
}
