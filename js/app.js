document.addEventListener('DOMContentLoaded', appStart)



let store
let wholeNote
let generators


function appStart() {
    store = new Store()
    generators = new Generators(Store)


    generators.displayNotes()



    function AddNote(e) {

        let txttitle = document.getElementById('title_input').value
        let txtnote = document.getElementById('note_input').value
        let color = document.getElementById('color_pallete').value
        let pin = document.getElementById('pin').checked
        let today = new Date();
        let date = ('0' + today.getDate()).slice(-2) + '-' +
            ('0' + (today.getMonth() + 1)).slice(-2) + '-' +
            today.getFullYear()
        let id = (today.getTime())






        if (txttitle === '' || txtnote === '') {
            console.log('nic nie ma')
        } else {

            let wholeNote = new Note(id, txttitle, txtnote, color, date, pin)

            generators.generateNote(wholeNote)

            store.addNotes(wholeNote)

        }
        generators.clearFields()
        
    }


    document.getElementById('add_note').addEventListener('click', () => AddNote())
    document.getElementById('clear_storage').addEventListener('click', () => store.clearStorage())

    document.querySelector('#note_container').addEventListener('click', (e) => {
        // // Remove note 
        generators.deleteNote(e.target)
        store.delete(e.target.parentElement.id)

    })

    document.querySelector('#pinned_note').addEventListener('click', (e) => {
        // // Remove note 
        generators.deleteNote(e.target)
        store.delete(e.target.parentElement.id)

    })
       


}
