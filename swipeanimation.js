$(document).ready(function(){

/*testing swipe with click */
$(".arrow-left").click(function(){
	console.log("arrow clicked")
	swipeAnimation_left();
});
$(".formbutton").click(function(){
	console.log("arrow clicked")
	swipeAnimation_right();
});
$(".arrow-right").click(function(){
	console.log("arrow clicked")
	swipeAnimation_right();
});
/*testing swipe with click */
$(".arrow-left-program").click(function(){
	console.log("arrow clicked")
	swipeAnimation_left();
});
$(".arrow-right-program").click(function(){
	console.log("arrow clicked")
	swipeAnimation_right();
});
//position logo

//touch events

$('#ajax-wrapper').on('swipeleft', function(e) { swipeAnimation_right(); });
$('#ajax-wrapper').on('swiperight', function(e) { swipeAnimation_left(); });
// menu initate
var jPM = $.jPanelMenu({
	openPosition:"55%",
	menu:"#the-panel-menu",
	trigger:".menu-trigger"
});
jPM.on();
//detect which link is active

var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
console.log(filename)
    $("#jPanelMenu-menu").find('a').each(function(){
    	console.log(this.href.substr(this.href.lastIndexOf("/")+1))
    	if(this.href.substr(this.href.lastIndexOf("/")+1) === filename){
    		$(this).addClass("where-you-are-main");
    		$(this).parent().find(".panel-submenu-item").toggle();
    	}
    });


//which pane to show
var mx = $(".ajax-panel").length;
var activePane = $(".active");
var nextPane = " ";
var n = 0;
var np = 0;
var evalPane = function(){

	activePane = $(".active");

	switch (activePane){
		case activePane.hasClass("panel1"):
		 n = 0;
		break;
		case activePane.hasClass("panel2"):
		 n = 1;
		break;
		case activePane.hasClass("panel3"):
		 n = 2;
		break;
		case activePane.hasClass("panel4"):
		 n = 3;
		break;
		case activePane.hasClass("panel5"):
		 n = 4;
		break;

	};
	switch (np){
		case np = 0:
		 nextPane = $(".panel1");
		break;
		case np = 1:
		 nextPane = $(".panel2");
		break;
		case np = 2:
		 nextPane = $(".panel3");
		break;
		case np = 3:
		 nextPane = $(".panel4");
		break;

	};

	if(n<0){
		n = 0;
	};
	if(n>mx-1){
		n = mx-1;
	};
	if(np<0){
		np = 0;
	};
	if(np>mx-1){
		np = mx-1;
	};
};







//takes the div you want to animate as an arguement
var swipeAnimation_left = function(){

evalPane();

	//checks to see if its currently animating
	var inMotion = 1;
	
	if(n>0){
		console.log(mx-1)
		np = np-1;
		evalPane();
		

		activePane.addClass("swipeAnimating-right");
		activePane.one(
 		 'webkitAnimationEnd oanimationend msAnimationEnd animationend',   function() {
   		activePane.removeClass("swipeAnimating-right active");


   		nextPane.addClass("animating-in-left active");
		nextPane.one(
 		'webkitAnimationEnd oanimationend msAnimationEnd animationend',   function() {
   		nextPane.removeClass("animating-in-left");
 		});
		

 		});
	n = n-1;	
	console.log(activePane,nextPane);	

	//check nav to show to see where you are
	$(".where-you-are").removeClass("where-you-are");
	var subMenuSelector = "#jPanelMenu-menu .panel-menu-button:eq("+(n)+")";
	console.log(subMenuSelector)
	$(subMenuSelector).addClass("where-you-are");
	};

};

//  check to see if animation is over to load the new content

var swipeAnimation_right = function(){

evalPane();

	//checks to see if its currently animating
	var inMotion = 1;

	if(n<mx-1){
		np = np+1;
		evalPane();

		activePane.addClass("swipeAnimating-left");
		activePane.one(
 		 'webkitAnimationEnd oanimationend msAnimationEnd animationend',   function() {
   		 activePane.removeClass("swipeAnimating-left active");
   		 nextPane.addClass("animating-in-right active");
		 nextPane.one(
 		 'webkitAnimationEnd oanimationend msAnimationEnd animationend',   function() {
   		 nextPane.removeClass("animating-in-right");
 		 });
			
		
 		});
 		n = n+1;
 		console.log(activePane,nextPane);
 		//detect where you are in the submenu
 		$(".where-you-are").removeClass("where-you-are");
 		var subMenuSelector = ".submenu-wrapper .submenu-item:eq("+(n)+")";
		console.log(subMenuSelector);
		$(subMenuSelector).addClass("where-you-are");
	
	};
		

};



/*panel menu animation */
	$(".panel-menu-button ").click(function(){
 	
 	console.log("you clicked")
	$(this).find( ".panel-submenu-item").toggle();


	});
/*qa*/
$(".question ").click(function(){
 	
 	if($(this).children().hasClass("qapicture")){
 	$(this).children(".qapicture").toggleClass('qapicture qapicture2');
 	}else{
 	$(this).children(".qapicture2").toggleClass('qapicture2 qapicture');
 	}
	$(this).find( ".answer").toggle();


	});

//end of document ready
});