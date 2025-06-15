document.addEventListener('DOMContentLoaded', function () {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add new task
    function addTask() {
        const taskText = taskInput.value.trim();

        // Validate input
        if (!taskText) {
            alert("Please enter a valid task!");
            return;
        }

        // Create new task item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create and configure remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Proper event listener instead of onclick
        removeBtn.addEventListener('click', function () {
            li.remove();
        });

        // Append elements (button first for better styling)
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input field and focus it
        taskInput.value = "";
        taskInput.focus();
    }

    // Event listeners with proper error handling
    addButton.addEventListener('click', function () {
        try {
            addTask();
        } catch (error) {
            console.error("Error adding task:", error);
        }
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === "Enter") {
            try {
                addTask();
            } catch (error) {
                console.error("Error adding task:", error);
            }
        }
    });
});