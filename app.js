function randomNum(){
    let randoms = Math.round(Math.random()*10000);
    let randomize = randoms + '';
    console.log(randomize);
    if(randomize.length==4){
        return randoms;   
    }else{
        return randomNum();
    }
    }

document.getElementById('generateBtn').addEventListener('click',function(){    
    let randomVar = randomNum();
    document.getElementById('pinDisplay').value = randomVar;
})

document.getElementById('calcBody').addEventListener('click',function(event){
    let number = event.target.innerText;
    let display = document.getElementById('display');
    if(isNaN(number)){
        if(number == 'C'){
            display.value = '';
        }
    }else if((display.value).length==4){

    }
    else{
    let previousNumber = display.value;
    let currentNumber = previousNumber + number;
    display.value = currentNumber;    
    }    
})

document.getElementById('submit').addEventListener('click', function(){
    let pinDisplay = document.getElementById('pinDisplay').value;
    let matchDisplay = document.getElementById('display').value;
    let errorMsg = document.getElementById('error');
    let success = document.getElementById('success');
    if(pinDisplay == matchDisplay){
        success.style.display = 'block'
        errorMsg.style.display = 'none';
    }else{
        errorMsg.style.display = 'block';
        success.style.display = 'none'
    }
})