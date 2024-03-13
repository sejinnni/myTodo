const todoList = [];
const active = [];
const complete = [];

const ul = document.querySelector("ul");
const submit = document.querySelector("#submit");
const allComplete = document.querySelector('.allComplete');
const clearComplete = document.querySelector('.completeResult');
const leftNumber = document.querySelector('.leftNumber');
const today = document.querySelector('.today');
let checkbox;
let labels;
let allCheck; 
let count = 0; 
let list; 

// 날짜데이터
let now = new Date();
let year = now.getFullYear() // 년도
let month = now.getMonth()+1 // 달:0,1,2로 간다. 
let date = now.getDate() // 월
today.innerText = `${year}년 ${month}월 ${date}일`

//input의 submit은 기본적으로 새로고침을 한다. -> e : 이벤트를 매개변수로 받아준다.
submit.addEventListener("keypress",(event)=>{
    if(event.code == "Enter"){
        if(submit.value === ""){
            return
        }
        //unshift:맨앞으로 넣기,shift <> push,pop
        todoList.unshift(submit.value);
        active.unshift(submit.value);

        const li = document.createElement("li");
        const input = document.createElement("input");
        const label = document.createElement("label");
    
        input.name = submit.value;
        input.id =submit.value;
        input.type ="checkbox";
        
        label.innerText = submit.value;
        label.htmlFor = submit.value;

        //아래로 추가되는 것 
        li.appendChild(input);
        li.appendChild(label);
        //위로 추가되는 것
        ul.prepend(li);

        submit.value ="";

        // li요소 체크했을경우, active/complete구분 
        const list = document.querySelectorAll('li');
        for(let i=0; i<list.length;i++){
            list[i].addEventListener('click',()=>{
                complete.unshift(todoList[i]);
                active.splice(i,1);//i-1
            })
        }
    }
});
        
        // count += 1;
        // leftNumber.innerText = count;
        
        // checkbox = document.querySelectorAll('ul input[type=checkbox]');
        // labels = document.querySelectorAll("ul label");
        // allCheck = document.querySelector(".allComplete input[type=checkbox]")
    
        
        // // console.log(checkbox)
        // // checkbox & leftCounting
        // let discount = 0; 
        // for(let i = 0; i<checkbox.length; i++){
        //     checkbox[i].addEventListener('click',(e)=>{
        //         if(checkbox[i].checked == true){
        //             labels[i].style.textDecoration = 'line-through';
        //             discount += 1; 
        //             leftNumber.innerText = count - discount;
        //         }else{
        //             discount -= 1; 
        //             leftNumber.innerText = count - discount; 
        //             labels[i].style.textDecoration = '';
        //         }
        //     })
        //  }
    
        //   // mark as all complete
        //  allComplete.addEventListener('click',( )=>{
        //      if(allCheck.checked  == true){
        //         allCheck.checked = true;
        //          for(let i = 0; i < checkbox.length; i++){
        //              checkbox[i].checked = true;
        //              count = 0; 
        //              leftNumber.innerText = count;
        //              labels[i].style.textDecoration = 'line-through';
        //          }
        //      }else{
        //         allCheck.checked = false;
        //         for(let i = 0; i < checkbox.length; i++){
        //             checkbox[i].checked = false;  
        //             count = checkbox.length;
        //             leftNumber.innerText = count;
        //             labels[i].style.textDecoration = '';
        //         }
        //     }
        //  })
    
        //  // clear complete button 
        //  list = document.querySelectorAll('li');
        //  clearComplete.addEventListener('click',()=>{
        //     allCheck.checked = false;
        //     for(let i = 0; i < list.length; i++){
        //     if(checkbox[i].checked == true){
        //         list[i].remove();
        //     }
        // }
        // })


//all,active,completed Button 
const allButton = document.querySelector('#allBtn');
const activeButton = document.querySelector('#activeBtn');
const completeButton = document.querySelector('#completedBtn');

allButton.addEventListener('click',()=>{
    ul.replaceChildren();
    for(let i =todoList.length-1; i>=0;i--){
        const li = document.createElement("li");
        const input = document.createElement("input");
        const label = document.createElement("label");
    
        input.name = todoList[i];
        input.id =todoList[i];
        input.type ="checkbox";
        
        label.innerText = todoList[i];
        label.htmlFor = todoList[i];
    
        //아래로 추가되는 것 
        li.appendChild(input);
        li.appendChild(label);
        //위로 추가되는 것
        ul.prepend(li);
    }
    
})

activeButton.addEventListener('click',()=>{
    ul.replaceChildren();
    for(let i =active.length-1; i >= 0; i--){
        const li = document.createElement("li");
        const input = document.createElement("input");
        const label = document.createElement("label");
    
        input.name = active[i];
        input.id =active[i];
        input.type ="checkbox";
        
        label.innerText = active[i];
        label.htmlFor = active[i];
    
        //아래로 추가되는 것 
        li.appendChild(input);
        li.appendChild(label);
        //위로 추가되는 것
        ul.prepend(li);
    }

})

completeButton.addEventListener('click',()=>{
    ul.replaceChildren();
    for(let i =0; i<complete.length;i++){
        const li = document.createElement("li");
        const input = document.createElement("input");
        const label = document.createElement("label");
    
        input.name = complete[i];
        input.id =complete[i];
        input.type ="checkbox";
        
        label.innerText = complete[i];
        label.htmlFor = complete[i];
    
        //아래로 추가되는 것 
        li.appendChild(input);
        li.appendChild(label);
        //위로 추가되는 것
        ul.prepend(li);
    }
})