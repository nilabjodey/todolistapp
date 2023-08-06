function createTaskList(tasks) {
    const taskList = document.getElementById("task-list");

    tasks.forEach((task) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("div");
        checkbox.classList.add("checkbox");
        checkbox.addEventListener("click", () => {
            checkbox.classList.toggle("checked");
        });

        const taskDescription = document.createElement("span");
        taskDescription.classList.add("task");
        taskDescription.textContent = `${task.time} - ${task.task}`;

        li.appendChild(checkbox);
        li.appendChild(taskDescription);

        taskList.appendChild(li);
    });
}

// Call the function when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    // Fetch the tasks from the backend (replace this with your actual API call)
    fetch('your_backend_endpoint')
        .then((response) => response.json())
        .then((data) => {
            const tasks = data.tasks; // Assuming 'tasks' is an array of objects with 'time' and 'task' properties
            createTaskList(tasks);
        })
        .catch((error) => {
            console.error('Error fetching tasks:', error);
        });
});
