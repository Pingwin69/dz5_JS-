var startBtn = document.querySelector('.btn2');
var clearBtn = document.querySelector('.btn1');
var ulSpisok = document.querySelector('.results_all');
var olSpisok = document.querySelector('.times');
var krygBtn = document.querySelector('.kryg');

var minute = 0;
var sec = 0;
var mSec = 0;

var minuteStarted = 0;
var secStarted = 0;
var mSecStarted = 0;

function timeIs(i){
    if(i<10){ 
        i= "0" + i;
       }
        return i;
}

minuteStarted = timeIs(minute);
    secStarted = timeIs(sec);
    mSecStarted = timeIs(mSec);
    mSec = ++mSec;

function start(){z = setInterval(function timeStarted(){
    minuteStarted = timeIs(minute);
    secStarted = timeIs(sec);
    mSecStarted = timeIs(mSec);
    mSec = ++mSec;

    if(mSec == 100){
        mSec = 0;
        sec = ++sec;
    }

    if(sec == 60){
        sec = 0;
        minute = ++minute;
    }


    document.querySelector('.minute').innerHTML = minuteStarted + ':';
    document.querySelector('.secs').innerHTML = secStarted + '.';
    document.querySelector('.mSecs').innerHTML = mSecStarted;
    if(document.querySelector('.pis')){
    document.querySelector('.pis').innerHTML = minuteStarted + ':' + secStarted + '.' + mSecStarted;}
}, 10)}

function stop(){
    clearInterval(z);
}

var go = 0;

function startStop(){       
    go = go + 1;
    if(go === 1){
        start();
        stop2();
        startKryg();
        startBtn.innerHTML = 'Стоп';
        startBtn.style.backgroundColor = 'red';
        startBtn.style.color = 'white';
        clearBtn.style.display = 'none';
        krygBtn.style.display = 'inline-block';
              
    } else if(go === 2){
        startBtn.innerHTML = 'Старт';
        startBtn.style.backgroundColor = 'green';
        clearBtn.style.display = 'inline-block';
        krygBtn.style.display = 'none';
        go = 0;
        stop();
        stop2();
                  
    }
}

startBtn.addEventListener('click', startStop)

function clear(){
    minute = 0;
    sec = 0;
    mSec = 0;

    document.querySelector('.minute').innerHTML = '00:';
    document.querySelector('.secs').innerHTML = '00.';
    document.querySelector('.mSecs').innerHTML = '00';
    document.querySelector('.times').innerHTML = '';
    i = 0;
    num = 0;

}

clearBtn.addEventListener('click', clear)

minute1 = 0;
sec1 = 0;
mSec1 = 0;

function clear2(){
    minute1 = 0;
    sec1 = 0;
    mSec1 = 0;
}

var x;

function startKryg(){x = setInterval(function timeStarted(){
    minuteStarted = timeIs(minute1);
    secStarted = timeIs(sec1);
    mSecStarted = timeIs(mSec1);
    mSec1 = ++mSec1;

    if(mSec1 == 100){
        mSec1 = 0;
        sec1 = ++sec1;
    }

    if(sec1 == 60){
        sec1 = 0;
        minute1 = ++minute1;
    }
    if(document.querySelector('.jop')){
    document.querySelector('.jop').innerHTML = minuteStarted + ':' +  secStarted + '.' + mSecStarted;
}
}, 10);}

function stop2(){
    clearInterval(x);
}

 var i = 0; 
 var num = 0;

function newKryg(){ 
    var ulList = document.createElement('ul');
    num++;
    i = i + 1;
    if(i === 1){;
        stop2();
        startKryg();
        clear2();
        ulList.innerHTML = '<li></li>'+
        '<li class="jop"></li>'+
        '<li class="pis"></li>';    
        olSpisok.appendChild(ulList);    
    
        var min = document.querySelector('.minute').innerHTML;
        var sec = document.querySelector('.secs').innerHTML;
        var miliSecs = document.querySelector('.mSecs').innerHTML;
        var ulList = document.createElement('ul');
        
        
        ulList.innerHTML = '<li>'+num+'</li>'+
        '<li>'+min+sec+miliSecs+'</li>'+
        '<li>'+min+sec+miliSecs+'</li>';
        olSpisok.appendChild(ulList);  
    }
     else if(i >= 2){
        stop2();
        startKryg();
        clear2();
        var min = document.querySelector('.minute').innerHTML;
        var sec = document.querySelector('.secs').innerHTML;
        var miliSecs = document.querySelector('.mSecs').innerHTML;
        var ulList = document.createElement('ul');
        if(document.querySelector('.jop')){
        var jop = document.querySelector('.jop').innerHTML;
        ulList.innerHTML = '<li>'+num+'</li>'+
        '<li>'+jop+'</li>'+
        '<li>'+min+sec+miliSecs+'</li>';
        olSpisok.appendChild(ulList);
    }
}
}

krygBtn.addEventListener('click', newKryg)
