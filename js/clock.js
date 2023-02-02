const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");//padStart(2,"0"); // 길이가 2인문자열이 아니면 빈자리에 0을 추가
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hour}:${min}:${sec}`;

}

getClock();
setInterval(getClock, 1000); // 첫번째 파라미터는 함수명, 두번째 파라미터는 ms( 1000ms 는 1s)

