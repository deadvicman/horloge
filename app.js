// Ma fonction
clock();

function clock() {
    const MyDate = new Date();

    // Ma Date
    const hours = MyDate.getHours();
    const minutes = MyDate.getMinutes()
    const second = MyDate.getSeconds()

    const hour = hours * 30;
    const min = minutes * 6;
    const seconds = second * 6;

    //hours ma variable
    document.querySelector(".heure").style.transform = `rotate(${hour}deg)`;
    document.querySelector(".minute").style.transform = `rotate(${min}deg)`;
    document.querySelector(".seconde").style.transform = `rotate(${seconds}deg)`;

    setInterval(clock, 1000)
}