const taskInput=document.getElementById("taskInput");
const addBtn=document.getElementById("addBtn")
const taskList=document.getElementById("taskList")

addBtn.addEventListener("click",addTask)

taskInput.addEventListener("keypress",function(e)
{
  if(e.key==="Enter")
  {
    addTask();
  }
});

function addTask()
{
  taskText=taskInput.value.trim();
  if(taskText==="")
  {
    alert("Please enter the text");
    return;
  }

  const li=document.createElement("li");
li.textContent=taskText;
li.addEventListener("click",()=>{
  li.classList.toggle("completed");
});

const deleteBtn=document.createElement("button");
deleteBtn.textContent="DELETE";
deleteBtn.classList.add("deleteBtn");

deleteBtn.addEventListener("click",()=>{
  li.remove();
});

li.appendChild(deleteBtn);
 taskList.appendChild(li);
taskInput.value="";
}





