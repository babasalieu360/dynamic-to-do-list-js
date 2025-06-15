document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Validate input
        if (taskText === "") {
            alert("Please enter a task!");
            return;
        }

        // Create new task item
        const li = document.createElement('li');

        // Create task text span
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";
        removeBtn.addEventListener('click', function () {
            li.remove();
        });

        // Append elements
        li.appendChild(taskSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field
        taskInput.value = "";
    }

    // Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });
});