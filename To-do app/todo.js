// Variables 

const inputBox = document.querySelector(".inputBox");

const addTaskBtn = document.querySelector(".add-task-btn");

const todo = document.querySelector(".to-do-part");


addTaskBtn.addEventListener("click", () => {

    let task = document.createElement("div");
    task.classList.add("task");

    const li = document.createElement("li");
    li.innerHTML =`${inputBox.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerText = "Done";
    checkButton.classList.add("checkTask");
    task.appendChild(checkButton);

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Del";
    deleteBtn.classList.add("deleteTask");
    task.appendChild(deleteBtn);

    if (inputBox.value === "") {
        alert("Please enter a task");
    } else {
        todo.appendChild(task);
    }

    

    checkButton.addEventListener("click", () => {

        checkButton.parentElement.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener("click", (e) => {

        let target = e.target;

        checkButton.parentElement.parentElement.remove();
    })
});

