const inputForm = document.querySelectorAll('.input_pressure');
const inputFormTime = document.querySelector('.input_pressute-time');
const btnSubmit = document.querySelector('.btn_submit');
const outputAreaWrapper = document.querySelector('.output_area_wrapper');
const gdzsOutputWrapper = document.querySelector('.gdzs__output-wrapper');

let arr = [];

btnSubmit.addEventListener('click',(e)=>{
    inputForm.forEach((element)=>{
        if(element.value.trim()){
            arr.unshift(element.value);
        };
        element.value = '';
    });
    calc(arr[1],arr[0]);
    e.preventDefault()
});

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

    if(time === null || time === undefined || P === null || P === undefined || P <= 0){
        console.log(`Один из параметров не задан или задан не верно`);
        return
    }

    pMaxDrop = Math.round(P / 3);
    console.log(`Максимально допустимое падение давление ${pMaxDrop}`);

    pToExit = P - pMaxDrop;
    console.log(`Давление при котором звену необходимо возвращаться ${pToExit}`);

    deltaT = Math.round((pMaxDrop * 6.8) / 45);
    console.log(`Дельта Т ${deltaT}`);

    tExitComand = date.setMinutes(date.getMinutes() + deltaT);
    if(date.getMinutes() <= 9 && date.getHours() <= 9){
        tExitComand = "0"+date.getHours()+":"+"0"+date.getMinutes();
        console.log(`Время подачи команды постовым на выход ${"0"+date.getHours()+":"+"0"+date.getMinutes()}`)
    } else if(date.getMinutes() <= 9){
        tExitComand = date.getHours()+":"+"0"+date.getMinutes()
        console.log(`Время подачи команды постовым на выход ${date.getHours()+":"+"0"+date.getMinutes()}`)
    } else if(date.getHours() <= 9){
        tExitComand = "0"+date.getHours()+":"+date.getMinutes()
        console.log(`Время подачи команды постовым на выход ${"0"+date.getHours()+":"+date.getMinutes()}`)
    } else {
        tExitComand = date.getHours()+":"+date.getMinutes()
        console.log(`Время подачи команды постовым на выход ${date.getHours()+":"+date.getMinutes()}`)
    }

    tGeneral = Math.round((P * 6.8) / 45);
    console.log(`Общее примерное время работы ${tGeneral}`);

    date.setMinutes(date.getMinutes() + tGeneral);
    if(date.getMinutes() <= 9 && date.getHours() <= 9){
        tReturn = "0"+date.getHours()+":"+"0"+date.getMinutes()
        console.log(`Время при котором звено обязано вернуться ${"0"+date.getHours()+":"+"0"+date.getMinutes()}`)
    } else if(date.getMinutes() <= 9){
        tReturn = date.getHours()+":"+"0"+date.getMinutes()
        console.log(`Время при котором звено обязано вернуться ${date.getHours()+":"+"0"+date.getMinutes()}`)
    } else if(date.getHours() <= 9){
        tReturn = "0"+date.getHours()+":"+date.getMinutes()
        console.log(`Время при котором звено обязано вернуться ${"0"+date.getHours()+":"+date.getMinutes()}`)
    } else {
        tReturn = date.getHours()+":"+date.getMinutes()
        console.log(`Время при котором звено обязано вернуться ${date.getHours()+":"+date.getMinutes()}`)
    }

    outputAreaWrapper.innerHTML = `
        <div class="gdzs__output-wrapper">
          <span class="gdzs__tab">P.max.пад = ${pMaxDrop}</span>
          <span class="gdzs__tab">P.вых = ${pToExit}</span>
          <span class="gdzs__tab">Δ,Т = ${deltaT}</span>
          <span class="gdzs__tab">Т.общ = ${tGeneral}</span>
          <span class="gdzs__tab">Т.вых = ${tExitComand}</span>
          <span class="gdzs__tab">Т.контр.вых = ${tReturn}</span>
        </div>
    `

    
};
