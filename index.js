'use strict'
const topTime = document.querySelector('.time');
const clickBtn = document.querySelector('.time-button');
const hideform = document.querySelector('.displayTime');
const showTime = document.querySelector('.showCount');
const thisHour = document.querySelector('.hour');
const thisMinute = document.querySelector('.minute');
const thisSecond = document.querySelector('.second');


clickBtn.addEventListener('click', function () {
    const hourLeft = document.querySelector('#hours').value;
    const minuteLeft = document.querySelector('#minutes').value;
    const secondLeft = document.querySelector('#seconds').value;
    console.log(hourLeft);
    console.log(minuteLeft);
    console.log(secondLeft);
    if (!hourLeft && !minuteLeft && !secondLeft) {
        console.log(`wrong parameter`);
    } else {
        hideform.style.display = 'none'
        showTime.style.opacity = 1;
        let time = (+hourLeft * 3600) + (+minuteLeft * 60) + (+secondLeft);
        const interval = setInterval(
            function () {
                const nowHour = Math.trunc(time / 3600);
                thisHour.textContent = String(nowHour).padStart(2, 0)
                const nowMin = Math.trunc((time - (nowHour * 60 * 60)) / 60)
                thisMinute.textContent = String(nowMin).padStart(2, 0)
                const nowSecs = Math.trunc((time - (nowHour * 60 * 60)) % 60)
                thisSecond.textContent = String(nowSecs).padStart(2, 0)
                console.log(`${nowHour} : ${nowMin} : ${nowSecs}`);
                time--;
                if (time == 0) {
                    clearInterval(interval)
                }
            }, 1000
            
        )
    };
    

})