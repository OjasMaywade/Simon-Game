var arr1 = [];
var arr2 = [];
var level = 0;
var len1 = arr1.length -1;
var len2 = arr2.length -1;


document.addEventListener("keydown", function (){
    if(arr1[0]==null){
      gameStart();
    }
});
userResponse();
function checkAnswer(){
if(arr1.length==arr2.length){
    if(arr1[len1]===arr2[len2]){
        setTimeout(gameStart, 500);                     
        arr2 = [];
    }else{
        gameOver();
    }
 }
}   






// code snippet for user keydown
function userResponse(){
for(var i=0;i<4;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(pass){
    var p = "sounds/" + pass.target.id + ".mp3";
    var audio = new Audio(p);                               
        audio.play(); 
    var button_Clicked = document.getElementById(pass.target.id); 
        button_Clicked.classList.add("pressed");                                     // add Css .pressed class  
        setTimeout( function(){
            button_Clicked.classList.remove("pressed");                         // remove Css .pressed class after 100 ms
        }, 100);   
        arr2.push(pass.target.id);
        checkAnswer();
        
    }
    );
}
}


// Code Snippet for Game Over 
function gameOver(){
document.getElementById("level-title").innerHTML="Game Over, Press Any Key to Restart"; //Get element by id and manipulates its inner html

var audio = new Audio('sounds/wrong.mp3');           //input error sound into code
audio.play();

 document.querySelector("body").classList.add("game-over");   // Add Css class list game over
 setTimeout( function(){
    document.querySelector("body").classList.remove("game-over");
}, 100);
level = 0;
}

// Code Snippet for Game Start
function gameStart(){      
       level++;            
        document.getElementById("level-title").innerHTML="Level "+level;        // Change the inner html of Title 
        let random = Math.floor((Math.random()*4));                   
        if(random==0){                                                   // if statement for sound
            var audio = new Audio('sounds/green.mp3');                               
            audio.play();         
        } else if(random==1){
            var audio = new Audio('sounds/red.mp3');                                
            audio.play();         
        } else if(random==2){                               
            var audio = new Audio('sounds/yellow.mp3');                                
            audio.play();         
        } else if(random==3){
            var audio = new Audio('sounds/blue.mp3');                                
            audio.play();         
        } 
    
        var button_Pressed = document.querySelectorAll(".btn")[random]; 
        button_Pressed.classList.add("visibility");                                     // add Css .visibility class  
        setTimeout( function(){
            button_Pressed.classList.remove("visibility");                         // remove Css .visibility class after 100 ms
        }, 100);
        arr1.push(button_Pressed.id);
        console.log(arr1)
}


