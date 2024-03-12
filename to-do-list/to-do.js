function addTask() {
    let taskInput = document.getElementById('task-input');
    let taskList = document.getElementById('task-list');

    if (taskInput.value.trim() !== '') {
        let taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        let taskText = document.createElement('span');
        taskText.innerText = taskInput.value;
        taskItem.appendChild(taskText);

        let deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.className = 'del-button';
        deleteButton.onclick = function () {
            taskList.removeChild(taskItem);
        };

        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}