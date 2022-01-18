const toDoForm = document.getElementById("todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = document.querySelector("#todo-form input");

const toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li1 = e.target.parentNode;
  li1.remove();
}

function paintInto(newTodo) {
  const li1 = document.createElement("li");
  const span1 = document.createElement("span");
  span1.innerText = newTodo;
  const Btn = document.createElement("button");
  Btn.innerText = "❌";
  Btn.addEventListener("click", deleteToDo);
  li1.appendChild(span1);
  li1.appendChild(Btn);
  toDoList.appendChild(li1);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo); // 배열에 넣음
  paintInto(newTodo);
  saveToDos(); // 호출되는 시점에 newTodo는 배열에 있는 상태.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (saveToDos) {
  // if(saveToDos !==null)
  const parsedToDos = JSON.parse(savedToDos); // localStorage에서 온 string을 가지고 살아있는 JSobject로 변하게 함
  console.log(parsedToDos);
  parsedToDos.forEach((i) => console.log(`Hello ${i}`));
}
