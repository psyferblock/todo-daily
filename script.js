
//reate ul in the main div for todo
// create randomfunc that pulls a random id number from the array of 10 elements 

// create the div from the input/date/notes
// should be one main div with 3 divs inside of it 
//  divwithif.addEventListener("onclick",function(
    // function should make the div 
//     should add the 3 elements from the divs 
//     div input
//     div notes
//     div dates
// the 3 divs within the same function should be stored in a list /array

// ))

// create list to append everything on 


const text = document.getElementById("text");
const addTaskButton = document.getElementById("add-task-btn");
const saveTaskButton = document.getElementById("save-todo-btn");
const listBox = document.getElementById("listBox");
const saveInd = document.getElementById("saveIndex");
let todoArray = [];

addTaskButton.addEventListener("click", (e) => {
    e.preventDefault();
    let todo = localStorage.getItem("todo");
    if (todo === null) {
      todoArray = [];
    } else {
      todoArray = JSON.parse(todo);
    }
    todoArray.push(text.value);
    text.value = "";
    localStorage.setItem("todo", JSON.stringify(todoArray));
    displayTodo();
   });
   