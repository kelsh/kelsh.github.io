$(document).ready(function(){

/*testing swipe with click */
$(".arrow-left").click(function(){
	console.log("arrow clicked")
	swipeAnimation_left();
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
//touch events

$('#ajax-wrapper').on('swipeleft', function(e) { swipeAnimation_right(); });
$('#ajax-wrapper').on('swiperight', function(e) { swipeAnimation_left(); });
// menu initate
var jPM = $.jPanelMenu({
	openPosition:"160px",
	menu:"#menu",
	trigger:".menu-trigger"
});
jPM.on();
//detect which link is active
var currenturl = window.location.href;
  $("#menu-wrapper .menu-button a").each(function() {
   var uurl = $(this).attr('href');
   if($(this).attr('href') == currenturl){
    $(this).addClass('where-you-are-main');
    }
  });

//which pane to show
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
	if(n>1){
		n = 1;
	};
	if(np<0){
		np = 0;
	};
	if(np>1){
		np = 1;
	};
};







//takes the div you want to animate as an arguement
var swipeAnimation_left = function(){

evalPane();

	//checks to see if its currently animating
	var inMotion = 1;
	
	if(n===1){
		np = np-1;
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
	n = n-1;	
	console.log(activePane,nextPane);	

	//check nav to show to see where you are
	$(".where-you-are").removeClass("where-you-are");
	var subMenuSelector = ".submenu-wrapper .submenu-item:eq("+(n)+")";
	console.log(subMenuSelector)
	$(subMenuSelector).addClass("where-you-are");
	};

};

//  check to see if animation is over to load the new content

var swipeAnimation_right = function(){

evalPane();

	//checks to see if its currently animating
	var inMotion = 1;

	if(n===0){
		np = np+1;
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
 		n = n+1;
 		console.log(activePane,nextPane);
 		//detect where you are in the submenu
 		$(".where-you-are").removeClass("where-you-are");
 		var subMenuSelector = ".submenu-wrapper .submenu-item:eq("+(n)+")";
		console.log(subMenuSelector);
		$(subMenuSelector).addClass("where-you-are");
	
	};
		

};



//end of document ready
});