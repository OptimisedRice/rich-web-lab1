window.onload= () => {
    let noteForm = document.getElementById("note_form")
    noteForm.addEventListener("submit", addNote)
}
const addNote = (event) => {
    event.preventDefault();
    //get input
    let noteInput = event.target.querySelector("input[name='note_text']");
    let noteText = noteInput.value;
    //clear input
    noteInput.value="";

    //create note div
    let note = document.createElement("div");
    note.setAttribute("class", "note");

    //assign random color to note
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    note.style.background = "#" + randomColor;

    //create paragraph element
    let content = document.createElement("p");
    content.setAttribute("class","note_content");
    let text = document.createTextNode(noteText);
    content.appendChild(text); //add string text to the p element
    note.appendChild(content); //add p element to div

    //create editButton element and add listener
    let editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.setAttribute("class", "editButton");
    editButton.addEventListener("click", editNote);
    note.appendChild(editButton);

    //create deleteButton element and add listener
    let delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));
    delButton.setAttribute("class", "delButton");
    delButton.addEventListener("click", delNote);
    note.appendChild(delButton);

    //add note element to the note container
    let noteCon = document.getElementById("note_container")
    noteCon.appendChild(note);
}

const editNote = (event) => {
    let editButton = event.target;

    //change button text to 'confirm' and change listeners
    editButton.firstChild.nodeValue = "Confirm";
    editButton.removeEventListener("click", editNote)
    editButton.addEventListener("click", confirmNote)

    let noteText = event.target.previousSibling; //get reference to note text
    let noteInput = document.createElement("textarea"); //create textarea element
    noteInput.appendChild(document.createTextNode(noteText.firstChild.nodeValue)); //insert existing text
    noteText.replaceWith(noteInput); //replace element
}

const confirmNote = (event) => {
    let confirmButton = event.target;

    //change button text to 'edit' and change listeners
    confirmButton.firstChild.nodeValue = "Edit";
    confirmButton.removeEventListener("click", confirmNote)
    confirmButton.addEventListener("click", editNote)

    let noteInput = event.target.previousSibling; //get textarea reference
    let noteContent = document.createElement("p"); //create paragraph element
    noteContent.setAttribute("class","note_content"); //assign class
    noteContent.appendChild(document.createTextNode(noteInput.value)); //insert changed text
    noteInput.replaceWith(noteContent); //replace element
}

const delNote = (event) => {
    event.target.parentElement.remove(); //remove element from DOM
}


