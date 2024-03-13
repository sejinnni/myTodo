const root = window.getComputedStyle(document.documentElement);

const colorBlack = root.getPropertyValue("--color-black");
const colorWhite = root.getPropertyValue("--color-white");
const colorBlue = root.getPropertyValue("--color-blue");
const colorBorder = root.getPropertyValue("--color-border");

//querySelector():요소를 선택하는 method
const dayBtn = document.querySelector("#dayBtn");
const weekBtn = document.querySelector("#weekBtn");
const monthBtn = document.querySelector("#monthBtn");
const allBtn = document.querySelector("#allBtn");
const activeBtn = document.querySelector("#activeBtn");
const completedBtn = document.querySelector("#completedBtn");

//콜백함수
const func = (button) =>{
    const id = button.id;
  
    //글씨색
    allBtn.style.color = colorBlack;
    activeBtn.style.color = colorBlack;
    completedBtn.style.color = colorBlack;

    //배경색
    allBtn.style.background = "transparent";
    activeBtn.style.background = "transparent";
    completedBtn.style.background= "transparent";

    switch(id){
        case "allBtn":
        allBtn.style.color = colorWhite;
        allBtn.style.background = colorBlue;
        break;
        case "activeBtn":
        activeBtn.style.color = colorWhite;
        activeBtn.style.background =  colorBlue;
        break;
        case "completedBtn":
        completedBtn.style.color = colorWhite;
        completedBtn.style.background =  colorBlue;
        break;
    }
}

//addEventListner("click"하면,()=>func(누르는 id값))
dayBtn.addEventListener("click",()=>func(dayBtn))
weekBtn.addEventListener("click",()=>func(weekBtn))
monthBtn.addEventListener("click",()=>func(monthBtn))
allBtn.addEventListener("click",()=>func(allBtn))
activeBtn.addEventListener("click",()=>func(activeBtn))
completedBtn.addEventListener("click",()=>func(completedBtn))
