function zero(num) {
    if(num < 10 && num >= 0) {
        return '0' + num;
    } else {
        return num;
    }
}

function timer (deadline) {
    const days = document.querySelector('#days'),
          hours = document.querySelector('#hours'),
          minutes = document.querySelector('#minutes'),
          seconds = document.querySelector('#seconds');
    function timeLeft(deadline) {
        let dateLeft = new Date(deadline) - new Date();
        if(dateLeft < 0) {
            dateLeft = 0;
        }
        return {
            days: Math.floor(dateLeft / 1000 / 60 / 60 / 24),
            hours: Math.floor(dateLeft / 1000 / 60 / 60 % 24),
            minutes: Math.floor(dateLeft / 1000 / 60 % 60),
            seconds:  Math.floor(dateLeft / 1000 % 60),
            total: dateLeft
        };
    }
    days.innerHTML = zero(timeLeft(deadline).days);
    hours.innerHTML = zero(timeLeft(deadline).hours);
    minutes.innerHTML = zero(timeLeft(deadline).minutes);
    seconds.innerHTML = zero(timeLeft(deadline).seconds);
    // timer(days, hours, minutes, seconds, deadline);
    updateTime.bind(null, days, hours, minutes, seconds, deadline);
    const interval = setInterval(updateTime.bind(null, days, hours, minutes, seconds, deadline), 1000);
    function updateTime(days, hours, minutes, seconds, deadline) {
        const time = timeLeft(deadline);
        if(time.total < 0) {
            clearInterval(interval);
        }
        days.innerHTML = zero(time.days);
        hours.innerHTML = zero(time.hours);
        minutes.innerHTML = zero(time.minutes);
        seconds.innerHTML = zero(time.seconds);
    }
}

export default timer;