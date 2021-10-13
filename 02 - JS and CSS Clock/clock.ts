setInterval(() => {
    const now = new Date();

    const secondsDegrees = (now.getSeconds() * 6 + 90) % 360;
    const secondsHand = document.querySelector('.seconds-hand') as HTMLElement;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minutesDegrees = (now.getMinutes() * 6 + 90) % 360;
    const minutesHand = document.querySelector('.minutes-hand') as HTMLElement;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hoursDegrees   = ((now.getHours() % 12) * 30 + (now.getMinutes() / 2) + 90) % 360;
    const hoursHand = document.querySelector('.hours-hand') as HTMLElement;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

}, 1000);
