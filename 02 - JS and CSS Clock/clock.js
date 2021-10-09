setInterval(() => {
    const test = document.querySelector('.seconds-hand');
    console.log(test);
    const now = new Date();
    const secondsDegrees = (now.getSeconds() * 6 + 90) % 360;
    const secondsHand = document.querySelector('.seconds-hand');
    console.log(secondsHand);
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minutesDegrees = (now.getMinutes() * 6 + 90) % 360;
    const minutesHand = document.querySelector('.minutes-hand');
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    const hoursDegrees = ((now.getHours() % 12) * 30 + (now.getMinutes() / 2) + 90) % 360;
    const hoursHand = document.querySelector('.hours-hand');
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}, 1000);
