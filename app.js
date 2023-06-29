const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("todoList");
const clearBtn = document.getElementById("clearBtn");

addBtn.addEventListener("click", function(){
    const addInput = document.createElement("li");
    addInput.innerHTML = input.value;
    list.appendChild(addInput);
    input.value = "";
});

clearBtn.addEventListener("click", function(){
    list.removeChild(list.lastChild);
})