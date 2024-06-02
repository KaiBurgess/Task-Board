// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    return Math.random().toString(36).substr(2, 9);
}
const uniqueID = generateTaskId();
console.log(uniqueID);

// Todo: create a function to create a task card
function createTaskCard(task) {
    // we need to dynmaically create new content (off of data -> task)

    var card = $('div').attr('class', 'task-card draggable')
    var title = $('h3').value(task.title);

    // ADD/append the new elements onto the DOM

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

    // What events or tasks do we have to perform(?)

    // Check for STORED data (?)
    // [dataset] or []

    // WE can create a CARD for each TASK in the dataset
    var taskCards = createTaskCard(data)

    
    // Make CARD Draggable and Droppable


    // make cards draggable
    $( ".draggable" ).draggable({
        start: function( event, ui ) {}
      });

    // We need to PUT the new data INTO THE DOM
      // --> BUT where should each piece of data be PLACED(?)
      // What might we do to DETERMINE which COLUMN data belongs in(?)
      // [{ status: 'to-do'}, { status: 'in-progress'}]
  };

// Todo: create a function to handle adding a new task
function handleAddTask(event) {
    // we prevent the dfautl BROWSER relaod action
    event.preventDefault();
    // so we can CAPTURE the user data
    let task = document.querySelector("li");
    let inputVal = document.getElementById("task").value;
    task.innerHTML = inputVal;

    // format our data(set)
    var newTask = {
        title: "",
        taskDate: "",
        description: "",
        status: "to-do" // we add a starting or default value
    }

    createTaskCard()
}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event) {
    // where do we need to make sure it is removed from(?)

    // 1) we need to remove the DATA --> from localStorage
    // 2) we need to remove it from the DOM
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    $("#TDD").datepicker({ changeMonth: true, changeYear: true, dateFormat: "dd/mm/yy" })
    $("#form").on("submit", handleAddTask)
    renderTaskList()

});
