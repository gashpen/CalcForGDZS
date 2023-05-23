const inputForm = document.querySelectorAll('.input_pressure');;
const inputFormTime = document.querySelector('.input_pressure-time');
const outputAreaWrapper = document.querySelector('.output_area_wrapper');
const gdzsOutputWrapper = document.querySelector('.gdzs__output-wrapper');
const descriptionGdzs = document.querySelector('description_gdzs');
const checkboxBalloonTwo = document.querySelector('.chekbox__balloon-two');
const checkboxBaloonOxygen = document.querySelector('.chekbox__balloon-oxygen');
const ballonValue = document.querySelector('.balloon__value');
const popupForm = document.querySelector('.popup__form');
const getPopup = document.querySelector('.popup');
const popuptext = document.querySelector('.popuptext');
let ballonSize = 0;
let arr = [];


function calc(time, P){
    const date = new Date();

    let hour = String(time).slice(0,2);
    let minute = String(time).slice(2,4);
   
    date.setHours(Number(hour));
    date.setMinutes(Number(minute));

    let pMaxDrop = 0;
    let pToExit = 0;
    let deltaT = 0;
    let tExitComand = 0;
    let tGeneral = 0;
    let tReturn = 0;
    let twoBallon = 1;
    let averageСonsumption = 45;

    if(checkboxBalloonTwo.checked){
        twoBallon = 2;
    };
    if(checkboxBaloonOxygen.checked){
        averageСonsumption = 2;
        ballonSize = 2;
    };
    if(!ballonSize){
        ballonSize = 6.8;
    };

    if(time === null || time === undefined || P === null || P === undefined || P <= 0){

        outputAreaWrapper.innerHTML = `
        <div class="gdzs__output-wrapper">
          <span class="gdzs__tab-error">Один из параметров не задан или задан не верно</span>
        </div>
    `;
        return;
    };

    pMaxDrop = Math.round(P / 3);
    pToExit = P - pMaxDrop;
    deltaT = Math.round((pMaxDrop * (ballonSize * twoBallon)) / averageСonsumption);
    tExitComand = date.setMinutes(date.getMinutes() + deltaT);
    if(date.getMinutes() <= 9 && date.getHours() <= 9){
        tExitComand = "0"+date.getHours()+":"+"0"+date.getMinutes();
    } else if(date.getMinutes() <= 9){
        tExitComand = date.getHours()+":"+"0"+date.getMinutes();
    } else if(date.getHours() <= 9){
        tExitComand = "0"+date.getHours()+":"+date.getMinutes();
    } else {
        tExitComand = date.getHours()+":"+date.getMinutes();
    };

    tGeneral = Math.round((P * (ballonSize * twoBallon)) / averageСonsumption);
    date.setMinutes(date.getMinutes() + tGeneral);

    if(date.getMinutes() <= 9 && date.getHours() <= 9){
        tReturn = "0"+date.getHours()+":"+"0"+date.getMinutes();
    } else if(date.getMinutes() <= 9){
        tReturn = date.getHours()+":"+"0"+date.getMinutes();
    } else if(date.getHours() <= 9){
        tReturn = "0"+date.getHours()+":"+date.getMinutes();
    } else {
        tReturn = date.getHours()+":"+date.getMinutes();
    };

    outputAreaWrapper.innerHTML = `
        <div class="gdzs__output-wrapper">
          <span class="gdzs__tab">P.max.пад = ${pMaxDrop}</span>
          <span class="gdzs__tab">P.вых = ${pToExit}</span>
          <span class="gdzs__tab">Δ,Т = ${deltaT}</span>
          <span class="gdzs__tab">Т.общ = ${tGeneral}</span>
          <span class="gdzs__tab">Т.вых = ${tExitComand}</span>
          <span class="gdzs__tab">Т.контр.вых = ${tReturn}</span>
        </div>
    `;
};

