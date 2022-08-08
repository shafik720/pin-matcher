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
    }else{
    let previousNumber = display.value;
    let currentNumber = previousNumber + number;
    display.value = currentNumber;
    console.log(display.value);
    }
    
})