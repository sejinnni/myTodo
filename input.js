const todoList = [];
// todoList = =[{value , checked, lineThorugh}]
const ul = document.querySelector("ul");
const submit = document.querySelector("#submit");
const allComplete = document.querySelector(".allComplete");
const clearComplete = document.querySelector(".completeResult");
const leftNumber = document.querySelector(".leftNumber");
const today = document.querySelector(".today");
let allCheck;
let count = 0;

// 날짜데이터
let now = new Date();
let year = now.getFullYear(); // 년도
let month = now.getMonth() + 1; // 달:0,1,2로 간다.
let date = now.getDate(); // 월
today.innerText = `${year}년 ${month}월 ${date}일`;
const allButton = document.querySelector("#allBtn");

//input의 submit은 기본적으로 새로고침을 한다. -> e : 이벤트를 매개변수로 받아준다.
submit.addEventListener("keypress", (event) => {
  if (event.code == "Enter") {
    if (submit.value === "") {
      return;
    }
    //unshift:맨앞으로 넣기,shift <> push,pop
    todoList.unshift({ value: submit.value, checked: false, lineThrough: "" });
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.name = submit.value;
    input.id = submit.value;
    input.type = "checkbox";

    label.innerText = submit.value;
    label.htmlFor = submit.value;

    //아래로 추가되는 것
    li.appendChild(input);
    li.appendChild(label);
    //위로 추가되는 것
    ul.prepend(li);
    submit.value = "";
  }
  allButton.click();
});

const activeButton = document.querySelector("#activeBtn");
const completedButton = document.querySelector("#completedBtn");

allButton.addEventListener("click", () => {
  ul.replaceChildren();
  for (let i = todoList.length - 1; i > -1; i--) {
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.name = todoList[i].value;
    input.id = todoList[i].value;
    input.type = "checkbox";
    input.checked = todoList[i].checked;

    label.innerText = todoList[i].value;
    label.htmlFor = todoList[i].value;
    label.style.textDecoration = todoList[i].lineThrough;

    //아래로 추가되는 것
    li.appendChild(input);
    li.appendChild(label);
    //위로 추가되는 것
    ul.prepend(li);
  }
  const checkbox = document.querySelectorAll("ul input[type=checkbox]");
  const labels = document.querySelectorAll("ul label");
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", () => {
      todoList[i].checked = !todoList[i].checked;
      todoList[i].lineThrough = todoList[i].lineThrough ? "" : "line-through";
      checkbox[i].checked = todoList[i].checked;
      labels[i].style.textDecoration = todoList[i].lineThrough;
    });
  }
});

activeButton.addEventListener("click", () => {
  ul.replaceChildren();
  const todoListIndex = [];
  for (let i = todoList.length - 1; i >= 0; i--) {
    if (todoList[i].checked === true) continue;
    todoListIndex.push(i);
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.name = todoList[i].value;
    input.id = todoList[i].value;
    input.type = "checkbox";

    label.innerText = todoList[i].value;
    label.htmlFor = todoList[i].value;

    //아래로 추가되는 것
    li.appendChild(input);
    li.appendChild(label);
    //위로 추가되는 것
    ul.prepend(li);
  }
  const checkbox = document.querySelectorAll("ul input[type=checkbox]");
  const list = document.querySelectorAll("ul li");
  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].addEventListener("click", () => {
      todoListIndex.reverse();
      todoList[todoListIndex[i]].checked = !todoList[todoListIndex[i]].checked;
      todoList[todoListIndex[i]].lineThrough = todoList[todoListIndex[i]]
        .lineThrough
        ? ""
        : "line-through";
      list[i].remove();
    });
  }
});

completedButton.addEventListener("click", () => {
  ul.replaceChildren();
  const todoListIndex = [];
  for (let i = todoList.length - 1; i >= 0; i--) {
    if (todoList[i].checked === false) continue;
    todoListIndex.push(i);
    const li = document.createElement("li");
    const input = document.createElement("input");
    const label = document.createElement("label");

    input.name = todoList[i].value;
    input.id = todoList[i].value;
    input.type = "checkbox";
    input.checked = true;

    label.innerText = todoList[i].value;
    label.htmlFor = todoList[i].value;
    label.style.textDecoration = "line-through";

    //아래로 추가되는 것
    li.appendChild(input);
    li.appendChild(label);
    //위로 추가되는 것
    ul.prepend(li);
  }
  const checkbox = document.querySelectorAll("ul input[type=checkbox]");
  const list = document.querySelectorAll("ul li");
  for (let i = 0; i < checkbox.length; i++) {
    todoListIndex.reverse();
    checkbox[i].addEventListener("click", () => {
      todoList[todoListIndex[i]].checked = !todoList[todoListIndex[i]].checked;
      todoList[todoListIndex[i]].lineThrough = todoList[todoListIndex[i]]
        .lineThrough
        ? ""
        : "line-through";
      list[i].remove();
    });
  }
});