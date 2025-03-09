const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;
    taskItem.appendChild(taskTextSpan);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-task-btn';
    removeButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = '';
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});