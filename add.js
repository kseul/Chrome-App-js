const a = document.querySelector(".hello h1"); // CSS셀렉터를 검색하는 방법처럼
const b = document.getElementsByClassName("hello");

console.dir(a);
a.style.color = "blue";

const a = document.querySelector(".hello h1");

function handleTitleClick() {
  a.innerHTML = "hello~";
}

a.onclick = handleTitleClick;
a.addEventListener("click", handleTitleClick);
