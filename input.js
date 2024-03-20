let todoList = [];
// todoList = =[{value , checked, lineThorugh}]
const ul = document.querySelector("ul");
const submit = document.querySelector("#submit");
const allComplete = document.querySelector(".allComplete");
const allCompleteCheckbox = document.querySelector('#allCompleteCheckbox');
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
    count +=1; 
    leftNumber.innerText = count;
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

      if(todoList[i].checked === true){
        count -= 1;
        leftNumber.innerText = count;
      }
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
      if(todoList[i].checked === true){
        count -= 1;
        leftNumber.innerText = count;
      }
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


//allcomplet가 true면, list.check = true, allcomplete가 false면, List.check = false 
allCompleteCheckbox.addEventListener('click',()=>{
  //console.log(1);
  const checkbox = document.querySelectorAll('ul input[type=checkbox]');
  const labels = document.querySelectorAll('ul label');
  if(allCompleteCheckbox.checked === true){
    for(let i = 0; i < todoList.length; i++){
      todoList[i].checked = true;
      todoList[i].lineThrough = 'line-through';
      labels[i].style.textDecoration = 'line-through';
      checkbox[i].checked = true; 
    }
    count = 0; 
    leftNumber.innerText = count; 
   }else{
    for(let i = 0; i < todoList.length; i++){
      todoList[i].checked = false;
      todoList[i].lineThrough = '';
      labels[i].style.textDecoration = '';
      checkbox[i].checked = false; 
    }
    count = todoList.length;
    leftNumber.innerText = count;  
   }
})

//checkbox = true일때, clearComplete버튼을 누르면 -> todoList, list에서 삭제되어야 한다. 
clearComplete.addEventListener('click',()=>{
  const list = document.querySelectorAll('ul li');
  //1.checkbox가 true인 애들을 찾는다. 
  for(let i= 0; i<todoList.length; i++){
    if(todoList[i].checked === true){
      list[i].remove();
    }
  }
  todoList = todoList.filter((v) => v.checked ===false);
  allCompleteCheckbox.checked = false;
})
