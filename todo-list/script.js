const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Load tasks from local storage
tasks.forEach(task => addTask(task));

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskObj = { text: taskText, done: false, important: false };
        tasks.push(taskObj);
        updateLocalStorage();

        addTask(taskObj);
        
        taskInput.value = "";
    }
});

function addTask(task) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span class="taskSpan">${task.text}</span>
        <button class="doneButton">Done</button>
        <button class="importantButton important">Important</button>
        <button class="deleteButton">Delete</button>
    `;
    
    if (task.done) {
        listItem.classList.add("done");
    }
    
    if (task.important) {
        taskList.insertBefore(listItem, taskList.firstChild);
    } else {
        taskList.appendChild(listItem);
    }
    
    const doneButton = listItem.querySelector(".doneButton");
    const importantButton = listItem.querySelector(".important");
    const deleteButton = listItem.querySelector(".deleteButton");
    
    doneButton.addEventListener("click", () => {
        listItem.classList.toggle("done");
        task.done = !task.done;
        updateLocalStorage();
    });
    
    importantButton.addEventListener("click", () => {
        listItem.classList.toggle("important");
        task.important = !task.important;
        if (task.important) {
            taskList.insertBefore(listItem, taskList.firstChild);
        } else {
            taskList.appendChild(listItem);
        }
        updateLocalStorage();
    });
    
    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
        const index = tasks.indexOf(task);
        if (index !== -1) {
            tasks.splice(index, 1);
            updateLocalStorage();
        }
    });
}

function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
