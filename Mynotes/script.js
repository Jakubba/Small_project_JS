const addBtn = document.querySelector('.add');
const dellAllBtn = document.querySelector('.delete-all');
const dellNoteBtn = document.getElementsByName('delete-note');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const error = document.querySelector('.error');
const textarea = document.querySelector('#text');

let selectedValue;

let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex';
}

const closePanel = () => {
    notePanel.style.display = 'none'
    error.style.visibility = 'hidden';
    textarea.value = '';
    category.selectedIndex = 0;
}

const addNote = () => {
    if(textarea.value !== '' &&  category.options[category.selectedIndex].value !=='0'){
        createNote();
        error.style.visibility = 'hidden'

    } else {
        error.style.visibility = 'visible'
    }
}

const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id',cardID);
    noteArea.appendChild(newNote);

    newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note">
            <i class="fas fa-times"></i>
        </button>
    </div>
    <div class="note-body">
    ${textarea.value}
    </div>
    `
    cardID++;
    textarea.value = '';
    category.selectIndex = 0;
    notePanel.style.display = 'none';

}

const selectValue = () => {
    selectedValue = category.options[category.selectIndex].text;
}


addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);