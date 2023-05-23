function quoterScroller(){

    let quoterArr = 

    ["Здравствуй,брат",
    "Не кипишуй",
    "Давай как нибудь сам",
    "Мне чет лень",
    "Салам аллейкум, да ха!",
    "Все пока!",
    "!!!!",
    "Давай до свидания",
     "Нет!",
     "Да!"
    ];

    for(let i = 0; i < quoterArr.length;i++){

    return quoterArr[Math.floor(Math.random() * 10)] 

  }
 
}

/*setInterval(()=>{

    outputAreaWrapper.innerHTML = `
    <div class="message">
      <div class="message__text">
       ${quoterScroller()}
      </div>
    </div>
  `;
  },1000)*/