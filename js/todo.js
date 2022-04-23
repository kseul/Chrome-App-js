const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

let toDos = [];
const TODOS_KEY = 'todos';

// localStorage세이브
const saveToDo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

// 지우기
const deleteToDo = (e) => {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((i) => i.id !== parseInt(li.id));
  saveToDo();
};

// 화면에 표시, 버튼 이벤트리스너(click)
const paintToDo = (newTodoObj) => {
  const li = document.createElement('li');
  li.id = newTodoObj.id;
  const span = document.createElement('span');
  span.innerHTML = newTodoObj.text;
  const button = document.createElement('button');
  button.innerHTML = '❌';
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
  button.addEventListener('click', deleteToDo);
};

// 폼 이벤트리스너(submit)
const handleToDoSubmit = (e) => {
  e.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = '';

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 배열에 넣음
  paintToDo(newTodoObj);
  saveToDo(newTodo); // 호출되는 시점에 newTodo는 배열에 있는 상태.
};
todoForm.addEventListener('submit', handleToDoSubmit);

// localStorage 불러오기
const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
