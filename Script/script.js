//Count_down
var day=document.querySelector(".countdown .days");
var hours=document.querySelector(".countdown .hrs");
var minutes=document.querySelector(".countdown .min");
var seconds=document.querySelector(".countdown .sec");
const bootcamp=new Date("2023-08-31T00:00:00").getTime();
let timer=setInterval(()=>{
    var clr=document.querySelector('h1');
    const now=new Date().getTime();
    var diff=bootcamp-now;
    var caldays=Math.floor(diff/(1000*60*60*24)).toString().padStart(2,'0');
    var calhrs=Math.floor(diff%(1000*60*60*24)/(1000*60*60)).toString().padStart(2,'0');
    var calmin=Math.floor(diff%(1000*60*60)/(1000*60)).toString().padStart(2,'0');
    var calsec=Math.floor(diff%(1000*60)/(1000)).toString().padStart(2,'0');
    day.innerHTML=caldays;
    hours.innerHTML=calhrs;
    minutes.innerHTML=calmin;
    seconds.innerHTML=calsec;
    if(diff<0){
        clearInterval(timer);
        clearInterval(clr)
        console.log("Time_Out")

    }
   

},1000)

//to_do
function addTask(){
    var taskInput = document.getElementById("task");
    var taskList = document.getElementById("list");
  
    if (taskInput.value.trim() === "") {
      return;
    }
    var taskItem = document.createElement("li");
    taskItem.innerText = taskInput.value;
    taskList.appendChild(taskItem);
  
    taskInput.value = "";
  }
  
