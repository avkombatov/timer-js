function timer() {
    let date = new Date(2022, 10, 18);
    let now = new Date();
    let timerBlock = document.querySelectorAll('.timer__block');
    let time = date - now;


    let hours = Math.floor(time / 1000 / 60 / 60);
    hours = hours < 10 ? "0" + hours : hours;

    let minutes = Math.floor(time / 1000 / 60) % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let seconds = Math.floor(time / 1000) % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;


    for (el of timerBlock) {
        el.innerHTML = `
    <div class="timer__hours">
      <p class="timer__number">${hours}</p>
      <span class="timer__span">hours</span>
    </div>
    <div class="timer__minutes">
      <p class="timer__number">${minutes}</p>
      <span class="timer__span">minutes</span>
    </div>
    <div class="timer__seconds">
      <p class="timer__number">${seconds}</p>
      <span class="timer__span">seconds</span>
    </div>
    </div>`
    }
}

timer();
setInterval(timer, 1000);