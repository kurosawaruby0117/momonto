const form=document.querySelector(".js-form"),input=document.querySelector("input");
const USER_LS="currentUser";
const greering=document.querySelector(".js-greetings");
const SHOWING="showing";
function paintGreeting(user){
    form.classList.remove(SHOWING);
    greering.classList.add(SHOWING);
    greering.innerText=`hello ${user}`;
}
function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if (currentUser===null){

    }
    else{
        paintGreeting(currentUser);
    }

}
function init(){
    loadName();
}
init();
