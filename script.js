document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Initialize the app
    loadTasks();

    // Main Functions
    function addTask(taskText = '', save = true) {
        // Get task from input if not provided
        if (!taskText) {
            taskText = taskInput.value.trim();
        }

        // Validate input
        if (!taskText) {
            alert('Please enter a valid task!');
            return;
        }

        // Create task element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remove';
        deleteBtn.className = 'remove-btn';
        deleteBtn.addEventListener('click', () => {
            li.remove();
            removeFromStorage(taskText);
        });

        // Append elements
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        // Save to storage if needed
        if (save) {
            saveToStorage(taskText);
        }

        // Clear input
        taskInput.value = '';
    }

    // Storage Functions
    function saveToStorage(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks') || []);
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks') || []);
        tasks.forEach(task => addTask(task, false));
    }

    function removeFromStorage(task) {
        let tasks = JSON.parse(localStorage.getItem('tasks') || []);
        tasks = tasks.filter(t => t !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Event Listeners
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});