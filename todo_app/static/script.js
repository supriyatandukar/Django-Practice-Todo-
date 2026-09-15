// Get elements

const todoInput = document.getElementById("todoInput");
const priorityInput = document.getElementById("priorityInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
const taskCount = document.getElementById("taskCount");


// Update task count

function updateTaskCount() {

    const todos = document.querySelectorAll(".todo-item");

    taskCount.textContent = todos.length;
}


// Add Todo

addTodoBtn.addEventListener("click", function() {

    const taskText = todoInput.value.trim();
    const priority = priorityInput.value;

    if (taskText === "") {

        alert("Please enter a task.");

        return;
    }


    // Create todo

    const todo = document.createElement("li");

    todo.classList.add("todo-item");

    todo.dataset.priority = priority;


    // Create text

    const text = document.createElement("span");

    text.classList.add("todo-text");

    text.textContent = taskText;


    // Create priority

    const priorityLabel = document.createElement("span");

    priorityLabel.classList.add("priority-label");

    priorityLabel.textContent =
        priority.charAt(0).toUpperCase() + priority.slice(1);


    // Create actions container

    const actions = document.createElement("div");

    actions.classList.add("todo-actions");


    // Create complete button

    const completeBtn = document.createElement("button");

    completeBtn.classList.add("complete-btn");

    completeBtn.textContent = "✓";


    // Create delete button

    const deleteBtn = document.createElement("button");

    deleteBtn.classList.add("delete-btn");

    deleteBtn.textContent = "Delete";


    // Put buttons inside actions

    actions.appendChild(completeBtn);

    actions.appendChild(deleteBtn);


    // Put everything inside todo

    todo.appendChild(text);

    todo.appendChild(priorityLabel);

    todo.appendChild(actions);


    // Add todo to list

    todoList.appendChild(todo);


    // Clear input

    todoInput.value = "";


    // Update count

    updateTaskCount();

});


// Complete / Uncomplete Todo

todoList.addEventListener("click", function(event) {

    if (event.target.classList.contains("complete-btn")) {

        const todo = event.target.closest(".todo-item");

        const text = todo.querySelector(".todo-text");


        if (text.style.textDecoration === "line-through") {

            text.style.textDecoration = "none";

        } else {

            text.style.textDecoration = "line-through";

        }

    }

});


// Delete Todo

todoList.addEventListener("click", function(event) {

    if (event.target.classList.contains("delete-btn")) {

        const todo = event.target.closest(".todo-item");

        todo.remove();

        updateTaskCount();

    }

});


// Change Priority

todoList.addEventListener("dblclick", function(event) {

    if (event.target.classList.contains("priority-label")) {

        const todo = event.target.closest(".todo-item");

        const currentPriority = todo.dataset.priority;

        let newPriority;


        if (currentPriority === "low") {

            newPriority = "medium";

        } else if (currentPriority === "medium") {

            newPriority = "high";

        } else {

            newPriority = "low";

        }


        todo.dataset.priority = newPriority;


        event.target.textContent =
            newPriority.charAt(0).toUpperCase() +
            newPriority.slice(1);

    }

});


// Initial task count

updateTaskCount();