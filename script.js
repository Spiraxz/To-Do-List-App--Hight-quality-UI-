function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") return;

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");

    const label = document.createElement("label");
    label.classList.add("task-label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    
    const toggleCompletion = () => {
        checkbox.checked = !checkbox.checked;
        listItem.classList.toggle("completed", checkbox.checked);
    };

   
    checkbox.addEventListener("change", () => {
        listItem.classList.toggle("completed", checkbox.checked);
    });
    label.addEventListener("click", toggleCompletion); 
    listItem.addEventListener("click", toggleCompletion);

   
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(taskText));


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = (event) => {
        event.stopPropagation();
        taskList.removeChild(listItem);
    };

    listItem.appendChild(label);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);

    taskInput.value = "";
}
