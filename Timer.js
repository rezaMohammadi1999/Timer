let wrapper = document.querySelector('#root')

function buildCountDown(inputSecond) {
    let hour    = 0;
    let minutes = 0;
    let second  = 0;

    hour = parseInt((inputSecond/3600));
    minutes = parseInt((inputSecond-hour*3600)/60);
    second = parseInt((inputSecond-hour*3600)%60);
    return `${hour>9 ? hour : '0'+hour}  : ${minutes>9 ? minutes : '0'+minutes} : ${second>9 ? second : '0'+second}`;
}

let targetSeconds = parseInt(prompt("enter second : "));

let countDownTimer=setInterval(()=>{
   let countDownResult = buildCountDown(targetSeconds)
    wrapper.innerHTML=countDownResult;
    targetSeconds--;
    wrapper.classList.toggle('timer')
    if (targetSeconds==-1)
    {
        clearInterval(countDownTimer)
        wrapper.style.color='red';
    }
},1000)
