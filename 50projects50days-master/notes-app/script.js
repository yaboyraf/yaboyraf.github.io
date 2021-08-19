const addBtn = document.getElementById('add')

const notes = JSON.parse(localStorage.getItem('notes'))

if(notes) {
    let initialId = notes.length - 1;
    notes.forEach((note, index) => {
        console.log('@@ initialId is: ', initialId);
        addNewNote(note, initialId)
        initialId = initialId - 1;
    })
}

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '', id = notes.length) {
    const note = document.createElement('div')
    note.classList.add(`note`)
    note.classList.add(`note-id-${id}`)

    note.innerHTML = `
    <div class="tools">
        <input type="color" id="notepad-color" name="${id}"
            value="#e66465">
        <label for="head">Notepad color</label>
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>`

    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    textArea.value = text
    main.innerHTML = marked(text)

    deleteBtn.addEventListener('click', () => {
        note.remove()

        updateLS()
    })

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })

    textArea.addEventListener('input', (e) => {
        const { value } = e.target
        main.innerHTML = marked(value)
        updateLS()
    })

    document.body.insertBefore(note, document.querySelectorAll('.note')[0])
}


function updateLS() {
    const notesText = document.querySelectorAll('textarea')

    const notes = []
    notesText.forEach(note => notes.push(note.value))

    localStorage.setItem('notes', JSON.stringify(notes.reverse()))
}

document.querySelectorAll('#notepad-color').forEach(el => {
    el.addEventListener('change', (e) => {
    console.log(parseInt(e.target.name))
    document.querySelectorAll('.note')[parseInt(e.target.name)].style.backgroundColor = e.target.value
    })
  })