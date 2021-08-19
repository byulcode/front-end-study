const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){//선택한 리스트 삭제
    const li = event.target.parentElement; //지울 타겟의 부모(li)
    li.remove(); //li.id => string
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo) {//화면에 리스트 추가
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";   //값을 입력하면 칸 비우기
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    };
    toDos.push(newTodoObj);    //todo를 push
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) {//localStorage에 값이 저장되어있는 경우 parse
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);//array에 있는 각 item에 대해 function 실행
}

function sexyFilter() {//삭제할 item 찾기 위한 함수
    
}


//JSON.stringify() : js의 어떤 것도 string으로 변환해줌
//JSON.parse() : string을 js의 object로 변환해줌
//forEach(function) : 배열의 각 아이템에 대해 function 실행
//array.filter(item) : function이 false를 반환할 시 그 item을 제외한 배열 생성