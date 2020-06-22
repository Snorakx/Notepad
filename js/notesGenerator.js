class Generators {
    constructor() {}
    generateNote(notes, deletebtn, note, title, noteDate, topdiv, box, takidiv) {


        box = document.createElement('div')
        box.id = notes.id
        box.className = 'box'
        box.style.background = notes.color
        if (notes.pinned === false) {
            document.getElementById('note_container').appendChild(box)
        } else if (notes.pinned === true) {
            document.getElementById('pinned_note').appendChild(box)
        }

        topdiv = document.createElement('div')
        topdiv.id = 'topdiv'
        topdiv.className = 'topdiv'
        box.appendChild(topdiv)

        noteDate = document.createElement('div');
        noteDate.className = 'noteDate'
        noteDate.id = 'noteDate'
        noteDate.innerHTML = notes.date
        topdiv.appendChild(noteDate)


        title = document.createElement('div')
        title.className = 'title'
        title.id = 'title'
        title.innerHTML = notes.txttitle
        box.appendChild(title)

        note = document.createElement('div');
        note.className = 'note'
        note.id = 'note'
        note.innerHTML = notes.txtnote
        box.appendChild(note)

        deletebtn = document.createElement('button')
        deletebtn.innerHTML = "delete"
        deletebtn.className = "delete"
        deletebtn.id = 'deletebtn'
        box.appendChild(deletebtn)



    }

    deleteNote(el) {
        if (el.classList.contains('delete')) {
            el.parentElement.remove()
        }
    }


    displayNotes() {
        let notes = store.getNotes()
        notes.forEach((wholeNote) => this.generateNote(wholeNote))
    }
     clearFields() {
        document.querySelector('#title_input').value = ''
        document.querySelector('#note_input').value = ''
        document.getElementById('pin').checked = false


    }
}
