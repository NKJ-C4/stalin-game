
var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate"); //adding the class 'animate' (which has the jump animation) when the id 'character' is not having 'animate'...
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}

function slide(){
     if(block.classList != "animate2"){
         block.classList.add("animate2");
     }
    //  setTimeout(function(){
    //      block.classList.remove("animate2");
    //  },500);
    }

var audio = new Audio("oof.mp3" ) ;

flag=0;
function blin(){};
var checkDead = setInterval(function blin(){
    var characterTop = parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));

    if(blockleft<200 && blockleft>0 && characterTop>=150) //alert upon losing
    {
        block.style.animation = "none";
        block.style.display = "none";
        audio.play();
        if(!alert('OINK OINK!!! YOU LOSE. PRESS THE BUTTON TO PLAY AGAIN!')){window.location.reload();}
        flag=1;//testing something, no need for this...
        return 1; //test, no need for this...
    }
},10);

function show(){//TO SHOW SCORE
var res=0;
var skor=setInterval(function(){
    res++;
    document.getElementById("score").innerHTML = res;
},200); 
}
