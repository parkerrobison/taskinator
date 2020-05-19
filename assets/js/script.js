//this line is selecting the entire task form id
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {

    // this prevents the page from refreshing every time the form is submitted.
    event.preventDefault();

    //this line creates a new <li> with the variable name listItemEl
    var listItemEl = document.createElement("li");
    //this assigns that variable the CSS styling from task item
    listItemEl.className = "task-item";
    // this determines the text inside of the new variable.
    listItemEl.textContent = "This is a new task";
    //this attaches the <li> to the <ul>
    tasksToDoEl.appendChild(listItemEl);
}

// this line was a click listener but we upadated it to be a submit listener, which activates when a button with "submit" gets clicked or by pressing enter.
formEl.addEventListener("submit", createTaskHandler); 

