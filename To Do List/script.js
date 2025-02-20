const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const toDoList = document.getElementById('toDoList');

let editToDo = null;

// Function to add to do
const addToDo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("You must write something in your to do");
        return false;
    }


    if (addBtn.value == "Edit") {
        editToDo.target.previousElementSibling.innerHTML = inputText;
        editLocalToDos(inputText);
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else {
        // Creating p tag
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        // Creating Edit Button
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");
        li.appendChild(editBtn);


        // Creating Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn", "deleteBtn");
        li.appendChild(deleteBtn);


        toDoList.appendChild(li);
        inputBox.value = "";

        saveLocalToDos(inputText);

    }

}

//Function to Update(Edit/Remove) to do
const updateToDo = (e) => {
    if (e.target.innerHTML == "Remove") {
        toDoList.removeChild(e.target.parentElement);
        deleteLocalToDos(e.target.parentElement);
    }
    if (e.target.innerHTML == "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editToDo = e;

    }


}

//Function to save local toDos
const saveLocalToDos = (toDo) => {
    let toDos;
    if (localStorage.getItem("toDos") == null) {
        toDos = [];
    }
    else {
        toDos = JSON.parse(localStorage.getItem("toDos"));
    }

    toDos.push(toDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));

}

//Function to get local toDos
const getLocalToDos = () => {
    let toDos;
    if (localStorage.getItem("toDos") == null) {
        toDos = [];
    }
    else {
        toDos = JSON.parse(localStorage.getItem("toDos"));
        toDos.forEach(toDo => {

            //Creating p tag
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = toDo;
            li.appendChild(p);

            // Creating Edit Button
            const editBtn = document.createElement("button");
            editBtn.innerText = "Edit";
            editBtn.classList.add("btn", "editBtn");
            li.appendChild(editBtn);


            // Creating Delete Button
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Remove";
            deleteBtn.classList.add("btn", "deleteBtn");
            li.appendChild(deleteBtn);


            toDoList.appendChild(li);

        });
    }

}

//Function to delete local toDo
const deleteLocalToDos = (toDo) => {
    let toDos;
    if (localStorage.getItem("toDos") == null) {
        toDos = [];
    }
    else {
        toDos = JSON.parse(localStorage.getItem("toDos"));
    }

    let toDoText = toDo.children[0].innerHTML;
    let toDoIndex = toDos.indexOf(toDoText);
    toDos.splice(toDoIndex, 1);
    localStorage.setItem("toDos",JSON.stringify(toDos));
    console.log(toDoIndex);
}

//Function to Edit local toDo
const editLocalToDos = (toDo) => {
    let toDos = JSON.parse(localStorage.getItem("toDos"));
    let toDoIndex = toDos.indexOf(toDo);
    toDos[toDoIndex] = inputBox.value;
    localStorage.setItem("toDos",JSON.stringify(toDos));

}

document.addEventListener('DOMContentLoaded',getLocalToDos);
addBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', updateToDo);

