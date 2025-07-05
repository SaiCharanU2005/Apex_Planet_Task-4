const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function loadTasks() {
  taskList.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task, i) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.title = "Click to delete";
    li.onclick = () => deleteTask(i);
    taskList.appendChild(li);
  });
}

function addTask() {
  const task = input.value.trim();
  if (task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
    loadTasks();
  }
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

window.onload = loadTasks;
