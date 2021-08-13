//padStart(num, "string") : num자리수가 아니면 앞쪽에 string추가
//padEnd(num, "string") : 뒷쪽에 추가
const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock(); //웹사이트 열자마자 시간이 뜨도록
setInterval(getClock, 1000); //1초마다 반복