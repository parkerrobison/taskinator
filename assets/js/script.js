var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    //this line creates a new <li> with the variable name listItemEl
    var listItemEl = document.createElement("li");
    //this assigns that variable the CSS styling from task item
    listItemEl.className = "task-item";
    // this determines the text inside of the new variable.
    listItemEl.textContent = "This is a new task";
    //this attaches the <li> to the <ul>
    tasksToDoEl.appendChild(listItemEl);
}

// this line activates a function when the button is clicked
buttonEl.addEventListener("click", createTaskHandler); 

