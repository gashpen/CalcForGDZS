const gear = document.querySelector('.gear');

ballonValue.addEventListener('input',(e) => {
    const v = e.target.value;
    ballonValue.value = v.length ? v.replace(/:/g, '').match(/.{1,1}/g).join('.') : '';
});

popupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(ballonValue.value.trim()){
        ballonSize = ballonValue.value;
        console.log(ballonValue.value);
    };
    ballonValue.value = '';
});

popupForm.addEventListener('blur',(e)=>{
    e.preventDefault();
    if(ballonValue.value.trim()){
        ballonSize = ballonValue.value;
        console.log(ballonValue.value);
    };
    ballonValue.value = '';
},true);


document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(popuptext);
 
	if ( ! withinBoundaries && e.target != document.querySelector('.popup')) {
		popuptext.style.display = 'none';
	} else {
        popuptext.style.display = 'block';
    };
});

getPopup.addEventListener('click',()=>{
    popuptext.classList.add('show');
    gear.classList.add('animated');

});


gear.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  gear.classList.remove('animated');
};

