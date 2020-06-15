const form=document.querySelector(".js-form"),input=document.querySelector("input");
const USER_LS="currentUser";
const greering=document.querySelector(".js-greetings");
const SHOWING="showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}
function handleSubmit(event){
    event.preventDefault();
    const currentValue=input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
function askForName(){
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(user){
    form.classList.remove(SHOWING);
    form.classList.add("dis");
    greering.classList.add(SHOWING);
    greering.innerText=`hello ${user}`;
}
function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if (currentUser===null){
        askForName();
    }
    else{
        paintGreeting(currentUser);
    }

}
function init(){
    loadName();
}
init();
