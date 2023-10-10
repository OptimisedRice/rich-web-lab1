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

    let note = document.createElement("div");
    note.setAttribute("class", "note");
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    note.style.background = "#" + randomColor;

    let content = document.createElement("p");
    content.setAttribute("class","note_content");
    let text = document.createTextNode(noteText);
    content.appendChild(text); //add string text to the p element
    note.appendChild(content); //add p element to div

    let editButton = document.createElement("button");
    editButton.appendChild(document.createTextNode("Edit"));
    editButton.setAttribute("class", "editButton");
    editButton.addEventListener("click", editNote);
    note.appendChild(editButton);

    let delButton = document.createElement("button");
    delButton.appendChild(document.createTextNode("Delete"));
    delButton.setAttribute("class", "delButton");
    delButton.addEventListener("click", delNote);
    note.appendChild(delButton);

    let noteCon = document.getElementById("note_container")
    noteCon.appendChild(note);
}

const editNote = (event) => {
    console.log(event);
    let editButton = event.target;
    editButton.firstChild.nodeValue = "Confirm";
    editButton.removeEventListener("click", editNote)
    editButton.addEventListener("click", confirmNote)
    let noteText = event.target.previousSibling;
    let noteInput = document.createElement("textarea");
    //noteInput.setAttribute("type", "text");
    noteInput.appendChild(document.createTextNode(noteText.firstChild.nodeValue));
    noteText.replaceWith(noteInput);
}

const confirmNote = (event) => {
    console.log(event);
    let confirmButton = event.target;
    confirmButton.firstChild.nodeValue = "Edit";
    confirmButton.removeEventListener("click", confirmNote)
    confirmButton.addEventListener("click", editNote)
    let noteInput = event.target.previousSibling;
    let test = document.createTextNode(noteInput.value)
    let noteContent = document.createElement("p");
    noteContent.setAttribute("class","note_content");
    noteContent.appendChild(test);
    console.log(noteContent);
    noteInput.replaceWith(noteContent);
}

const delNote = (event) => {
    console.log(event);
}


