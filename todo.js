let todo = document.querySelector(".todo");
let input = document.querySelector(".todo-input");
let btn = document.querySelector(".todo-btn");

btn.addEventListener("click", () => {
  if (!input.value) {
  } else {
    let list = document.createElement("li");
    list.setAttribute("class", "list");
    list.innerHTML = input.value;

    let listOption = document.createElement("div");

    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "check");
    let btnRemove = document.createElement("button");
    btnRemove.setAttribute("class", "delete");
    btnRemove.innerHTML = "delete";
    listOption.append(check);
    listOption.append(btnRemove);

    list.append(listOption);
    input.value = "";
    btnRemove.addEventListener("click", () => {
      list.remove();

      // list.innerText.style.
    });
    check.addEventListener("click", () => {
      list.classList.toggle("underline");
     
    });

    todo.append(list);
  }
});
