const btnSubmit = document.querySelector('.btn_submit');

inputFormTime.addEventListener('input',(e) => {
    const v = e.target.value;
    inputFormTime.value = v.length ? v.replace(/:/g, '').match(/.{1,2}/g).join(':') : '';
});

btnSubmit.addEventListener('click',(e)=>{
    inputForm.forEach((element)=>{
        if(element.value.trim()){ 
            arr.unshift(element.value.replace(':',''));
        };
        element.value = '';
    });
    calc(arr[1],arr[0]);
    e.preventDefault();
});

