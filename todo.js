const toDoForm=document.querySelector(".js-toDoForm");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.querySelector(".js-toDolist");
const TODOS_LS = "toDos";
let toDos=[];


function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo) {
    console.log(toDo);
    return toDo.id !== li.id;
  });
  console.log(cleanToDos);
  console.log(toDos)
  toDos = cleanToDos;
  saveToDos();
}
function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function paintToDo(text){
    const potato=document.createElement("li");
    const delBtn=document.createElement("button");
    delBtn.innerText="X";
    const span=document.createElement("span");
    const newId=toDos.length+1;
    span.innerText=text;
    potato.appendChild(span);
    potato.appendChild(delBtn);
    toDoList.appendChild(potato);
    potato.id=newId;
    delBtn.addEventListener("click",deleteToDo);
    const toDoObj={
        text:text,
        id:potato.id,
    };
    toDos.push(toDoObj);
    saveToDos();
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}
function loadToDos(){
    const loadedToDos=localStorage.getItem(TODOS_LS);
    if(loadedToDos!==null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
          paintToDo(toDo.text);
        });
    }
  
}
function init(){
    console.log(toDoList);
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();