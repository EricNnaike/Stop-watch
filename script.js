// function startTime() {
//     let today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementsByClassName('display')[0].innerHTML = h + ":" + m + ":" + s;
//     stop = setTimeout(startTime, 1000);
    
// }
// function checkTime(i) {
//     if(i < 10){
//         i = '0' + i;
//     }
//     return i;
// }
function timer() {
    let h = 00;
    let m = 00;
    let s = 0;
    let hourOutput = document.getElementById('hour');
    let minOutput = document.getElementById('min');
    let secOutput = document.getElementById('sec');
    let startClock = document.getElementById('start');
    let stopClock = document.getElementById('stop');
    let pauseClock = document.getElementById('pause');
    let continueClock = document.getElementById('continue');
    let interval = -1;

    pauseClock.onclick = function() {
        if(interval === -1) {
            pauseClock.innerHTML = 'Pause';
            interval = setInterval(myFunc, 1000);
        }else{
            pauseClock.innerHTML = 'Continue';
            clearInterval(interval);
            interval = -1;
        }
    }

    
        interval = setInterval(myFunc, 1000);

    // pauseClock.onclick = function() {
    //     clearInterval(interval);
    // }
    stopClock.onclick = function() {
        clearInterval(interval);
        // s = 0;
        // m = 0;
        // h = 0;
        // secOutput.innerHTML = '00';
        // minOutput.innerHTML = '00';
        // hourOutput.innerHTML = '00';
    }

    function myFunc() {
        s++;
        if(s <= 9){
            secOutput.innerHTML = '0' + s;
        }
        if(s > 9){
            secOutput.innerHTML = s;
        }
        if(s > 60){
            m++;
            minOutput.innerHTML = '0' + m;
            s = 0
            secOutput.innerHTML = s;
        }
        if(m > 9){
            minOutput.innerHTML = m;
        }
        if(m > 60) {
            h++;
            hourOutput.innerHTML = "0" + h;
            m = 0;
            minOutput.innerHTML = m;
        }
        if(h > 10) {
            hourOutput.innerHTML = h;
        }
    }
} 









