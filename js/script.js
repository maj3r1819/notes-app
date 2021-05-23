console.log("Hello!");
//If user adds a note, add it to the local storage

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addNote = document.getElementById('addNote');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes); //converts to json
    }
    notesObj.push(addNote.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addNote = " ";
    console.log(notesObj)
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes); //converts to json obj
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id = "${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`

    });
    console.log(html);

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `No Notes added yet, Use Add Notes section above to add notes.`
    }

}

function deleteNote(index) {
    console.log(index);


    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes); //converts to json obj
    }

    notesObj.splice(index,1);  // start from index and remove 1 element
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();


}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

let inputVal = search.value;
let noteCards = document.getElementsByClassName('noteCard')
Array.from(noteCards).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";

    }
})


})
