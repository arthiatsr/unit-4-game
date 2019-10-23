$(document).ready(function() {

    var userscore=0;    
    var wins = 0;
    var looses = 0;
    
    var randomnumber = Math.floor(Math.random() * 101) + 19;
    $("#random-number").text(randomnumber);
    var randomcrystal1 = Math.floor(Math.random() * 11) + 1;    
    var randomcrystal2 = Math.floor(Math.random() * 11) + 1;    
    var randomcrystal3 = Math.floor(Math.random() * 11) + 1;    
    var randomcrystal4 = Math.floor(Math.random() * 11) + 1;    
    
    
    function resetgame(){
        
        userscore = 0; 
        $("#user-score").text(userscore);
        randomnumber = Math.floor(Math.random() * 101) + 19;
        $("#random-number").text(randomnumber);
        randomcrystal1 = Math.floor(Math.random() * 11) + 1;        
        randomcrystal2 = Math.floor(Math.random() * 11) + 1;        
        randomcrystal3 = Math.floor(Math.random() * 11) + 1;        
        randomcrystal4 = Math.floor(Math.random() * 11) + 1;        
       
    }
    function winner(){
        wins++;
        $("#wins-text").text(wins);
        resetgame();
    }
    function looser(){
        looses++;
        $("#looses-text").text(looses);
        resetgame();
    }     

    $("#click-1").on("click", function(){
        
        userscore = userscore + randomcrystal1;
        $("#user-score").text(userscore);
        
        if( userscore === randomnumber ){            
            winner();
            
        }
        else if ( userscore > randomnumber ){
            looser();
            
        }    

    });
    
    $("#click-2").on("click", function(){
        
        userscore = userscore + randomcrystal2;
        $("#user-score").text(userscore);
        
        if( userscore === randomnumber ){
            winner();
            
        }
        else if ( userscore > randomnumber ){
            looser();
            
        }    

    });

    $("#click-3").on("click", function(){
        
        userscore = userscore + randomcrystal3;
        $("#user-score").text(userscore);
        
        if( userscore === randomnumber ){
            winner();
            
        }
        else if ( userscore > randomnumber ){
            looser();
            
        }    

    });
    $("#click-4").on("click", function(){
        
        userscore = userscore + randomcrystal4;
        $("#user-score").text(userscore);
        
        if( userscore === randomnumber ){
            winner();
            
        }
        else if ( userscore > randomnumber ){
            looser();
            
        }    

    }); 

});