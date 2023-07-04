const date = document.getElementById("date");
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const clearBtn = document.getElementById("clearBtn");
const filterOption = document.getElementById("filter");

function displayDate(){
    const now = new Date();
    // console.log(now);
    let dt = now.toString().split(" ")
    date.innerHTML = dt[3]+" "+dt[1]+" "+dt[2]; 
};

window.onload = function(){
    displayDate();
}

//イベント
addBtn.addEventListener("click", addTodo);
// addBtn.addEventListener("click", function(){
//     const addInput = document.createElement("li");
//     addInput.innerHTML = input.value;
//     list.appendChild(addInput);
//     input.value = "";
// });

// clearBtn.addEventListener("click", function(){
//     list.removeChild(list.lastChild);
// })
list.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


//関数
function addTodo(event) {
    event.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerHTML = input.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("completed-btn");
    todoDiv.appendChild(completedBtn);

    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    list.appendChild(todoDiv);
    input.value = "";
}

function deleteCheck(e){
    const item = e.target;
    //delete to do
    if(item.classList[0] === "trash-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.remove();
    }
    //check
    if(item.classList[0] === "completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const td = list.childNodes;
    td.forEach(function(todo){
        if (todo.style != undefined && todo.style != null) {
        switch (e.target.value){
            case "all":
                todo.style.display = 'flex';
            break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
                case "uncompleted":
                    if(todo.classList.contains("completed")){
                        todo.style.display = "none";
                    }else{
                        todo.style.display = "flex";
                    }
                    break;
        }
    }
    });
}