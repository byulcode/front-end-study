const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDENT_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); //브라우저의 기본 동작(새로고침)을 막기
    loginForm.classList.add(HIDDENT_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value); //localStorage에 키,값 전달
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDENT_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDENT_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);//form의 기본 동작: submit
} else{//show the greeting
    paintGreetings();
}
