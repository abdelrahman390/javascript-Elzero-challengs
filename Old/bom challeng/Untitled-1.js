







let addTask = document.querySelector("form input.add");
let tasksContainer = document.querySelector(".tasks");
let taskContent = document.querySelector("input[type='text']");

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  if (taskContent.value !== "") {
    // create tasks
    let task = document.createElement("div");
    let delete_button = document.createElement("button");
    let delete_text = document.createTextNode("Delete");
    let task_text = document.createTextNode(taskContent.value);
    delete_button.appendChild(delete_text);
    task.appendChild(task_text);
    task.appendChild(delete_button);
    tasksContainer.appendChild(task);

    // add localStorage
    let taskButtons = Array.from(document.querySelectorAll(".tasks div button"));
    let tasksNumber = Array.from(document.querySelectorAll(".tasks div"));
    let tasks = [];
    for (let i = 0; i < tasksNumber.length; i++) {
      if (localStorage.getItem("tasks") === null) {
        tasks.push({ id: i, title: tasksNumber[i].textContent.slice(0, -6) });
      } else {
        tasks = json.parse(localStorage.getItem("tasks"));
      }
      localStorage.setItem("tasks:", JSON.stringify(tasks));
    }
    taskContent.value = "";

    // delete tasks
    taskButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.currentTarget.parentElement.style.display = "none";
      });
    });
  }
});