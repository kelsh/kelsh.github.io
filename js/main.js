$(document).on("ready", function () {
    wins = 0;
     games = 0;
     losses = 0;
     zeet = 0;

    var theGame = function () {
    	var remove = function () {
                return Math.floor(Math.random() * 3);
            };
        var a = [1, 2, 3]
        var b = Math.floor(Math.random() * 3);
        var c = Math.floor(Math.random() * 3);
        var choice = a[c];
        var car = a[b];
        
        var choosing = function () {
            
            var k = remove();
            var rolling = function () {
                if (a[k] !== car && a[k] !== choice) {
                    a.splice(k, 1);
                } else {
                    k = remove();
                    rolling();
                }
            };
            rolling();
        };
        choosing();
        var newChoice = function () {
        	var removet = function () {
                return Math.floor(Math.random() * 2);
            };
                var u = removet();
                var nc = a[u];
                if (nc !== choice) {
                    choice = nc;
                } else {
                    newChoice();
                }
        }
        newChoice();
        var endgame = function(){
        	if (choice === car) {
                	wins++
                	games++
                	zeet++
            	} else {
                	losses++
                	games++
                	zeet++
            	}
        	}
    	
    	endgame();
        if (zeet <= 10000) {
            
            
            theGame();
        }else{
        	$("#wins").html(wins);
            $("#per").html((wins / games)*100);
        }
        
    }
    $("#start-btn").on("click",function(){
    	zeet = 0;
    	theGame();
    });
});