var block=document.getElementById('block');
var hole=document.getElementById('hole');
var character=document.getElementById('character');
var jumping=0;
var counter=0

hole.addEventListener('animationiteration',() =>{
    var random=Math.random()*3;
    var top =(random*100)+150;
    hole.style.top=-(top)+'px';
    counter++;
    
})
setInterval (function(){
    var characterTop=
    parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if(jumping==0){
    character.style.top=(characterTop+3)+'px'
    }
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    var holeTop=parseInt
    if(characterTop>480){
        alert("Game over. score :"+counter)
        character.style.top=100+'px';
        counter=0;
    }
},10)

function jump(){
    jumping =1;
    let jumpCount =0;
    let jumpInterval =setInterval(function(){
        var characterTop=
        parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if((characterTop>6)&&(counter<15)){
        character.style.top=(characterTop+3)+'px';
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }jumpCount++;

    },10)

}