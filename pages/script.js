let btn = document.querySelector("#btn");

btn.addEventListener("click", (evt) => {
   addText();
})

//To add text
const addText = () => {
    let input = document.querySelector(".text_container input");
    let inputValue = input.value;

    let task = document.createElement("p");
    task.innerText = inputValue;

    //delete task
    task.addEventListener("click", (evt) => {
        if(task.style.textDecoration === "line-through"){
            task.style.textDecoration = "none";
        }
        else{
            task.style.textDecoration="line-through";
        }
    });

    //To remove task
    let removeTask = document.createElement("button");
    removeTask.innerText="X";
    removeTask.classList.add("deleteBtn");

    removeTask.addEventListener("click", (evt) => {
        task.remove();
    });
    task.appendChild(removeTask);


    document.querySelector(".task_list").append(task);
    input.value="";
}


