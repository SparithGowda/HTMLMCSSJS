const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

setInterval(() => {
    const date = new Date();
    let newHours = date.getHours();
    const newMinutes = date.getMinutes();
    const newSeconds = date.getSeconds();

    // Convert to 12-hour format
    newHours = newHours % 12 || 12; // Use 12 if newHours is 0

    // Update the HTML
    hours.innerHTML = `${newHours}:`;
    minutes.innerHTML = `${newMinutes < 10 ? '0' : ''}${newMinutes}:`; // Leading zero
    seconds.innerHTML = `${newSeconds < 10 ? '0' : ''}${newSeconds}`; // Leading zero
}, 1000);
