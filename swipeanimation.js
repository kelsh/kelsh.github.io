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
//touch events

var hammer_options = {};
$("#ajax-wrapper")
  .hammer(hammer_options)
  .on("swipeleft", swipeAnimation_left());
$("#ajax-wrapper")
  .hammer(hammer_options)
  .on("swiperight", swipeAnimation_right());

// prevent default
hammer.on("dragleft dragright swipeleft swiperight", function(ev) {
  ev.gesture.preventDefault();
  if(ev.type == 'dragleft' || ev.type == 'dragright') { return; }

  // handle the swipes
});





//which pane to show
var activePane = $(".active");
var nextPane = " ";
var n = 1;
var np = 1;
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
	if(n>3){
		n = 3;
	};
	if(np<0){
		np = 0;
	};
	if(np>3){
		np = 3;
	};
};







//takes the div you want to animate as an arguement
var swipeAnimation_left = function(){

evalPane();

	//checks to see if its currently animating
	var inMotion = 1;
	
	if(n>=1){
		np = np-1;
		evalPane();
		

		activePane.addClass("swipeAnimating-left");
		activePane.one(
 		 'webkitAnimationEnd oanimationend msAnimationEnd animationend',   function() {
   		activePane.removeClass("swipeAnimating-left active");


   		nextPane.addClass("animating-in-left active");
		nextPane.one(
 		'webkitAnimationEnd oanimationend msAnimationEnd animationend',   function() {
   		nextPane.removeClass("animating-in-left");
 		});
		

 		});
	n = n-1;	
	console.log(activePane,nextPane);	

	};

};

//  check to see if animation is over to load the new content

var swipeAnimation_right = function(){

evalPane();

	//checks to see if its currently animating
	var inMotion = 1;

	if(n<=2){
		np = np+1;
		evalPane();

		activePane.addClass("swipeAnimating-right");
		activePane.one(
 		 'webkitAnimationEnd oanimationend msAnimationEnd animationend',   function() {
   		 activePane.removeClass("swipeAnimating-right active");
   		 nextPane.addClass("animating-in-right active");
		 nextPane.one(
 		 'webkitAnimationEnd oanimationend msAnimationEnd animationend',   function() {
   		 nextPane.removeClass("animating-in-right");
 		 });
			
		
 		});
 		n = n+1;
 		console.log(activePane,nextPane);
 		
	};
		

};



//end of document ready
});