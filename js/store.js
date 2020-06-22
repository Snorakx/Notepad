class Store {
    constructor(wholeNote) {
        this.wholeNote = wholeNote
    }

    getNotes(i) {
        let notes = []
        if (localStorage.getItem('notes') === null) {
            notes = [];
        } else {
            notes = JSON.parse(localStorage.getItem('notes'));
        }
        return notes;
    }

    addNotes(wholeNote) {
        let notes = store.getNotes()
        notes.push(wholeNote)
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    delete(id) {
        const notes = store.getNotes();

        notes.forEach((note, index) => {
            if (note.id == id) {
                notes.splice(index, 1)
            }
        });

        localStorage.setItem('notes', JSON.stringify(notes));
    }

    clearStorage() {
        localStorage.clear()
    }

}