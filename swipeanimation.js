$(document).ready(function(){

/*testing swipe with click */
$(".arrow-left").click(function(){
	console.log("arrow clicked")
	swipeAnimation_left("$('#ajax-panel')");
});
$(".arrow-right").click(function(){
	console.log("arrow clicked")
	swipeAnimation_right("$('#ajax-panel')");
});












var activePosition = $("#ajax-wrapper").index($(".ajax-panel"))

console.log(activePosition);








//takes the div you want to animate as an arguement
var swipeAnimation_left = function(div){

	var theDiv = $(".ajax-panel");
	//checks to see if its currently animating
	var inMotion = 1;


	theDiv.addClass("swipeAnimating-left");
	setTimeout(function(){
		theDiv.removeClass("swipeAnimating-left");
	},1000);

	$("#ajax-wrapper").append("<div class='new-ajax-panel'></div>");

	var checkAnimation = function(){

/*check too see if animation is done */
	if($(".new-ajax-panel"))
	{
		$(".new-ajax-panel").addClass("ajax-panel");
		$(".new-ajax-panel").removeClass("new-ajax-panel");
	}else{

		setTimeout(function() {
		checkAnimation();
		},300);
	}

	checkAnimation();

}

}

//  check to see if animation is over to load the new content

var swipeAnimation_right = function(div){

	var theDiv = $("#ajax-panel");
	//checks to see if its currently animating
	var inMotion = 1;


	theDiv.addClass("swipeAnimating-right");

	$("ajax-wrapper").append("<div class='new-ajax-panel'></div>");

	var checkAnimation = function(){

/*check too see if animation is done */
	if($(".new-ajax-panel").css("right") = 0)
	{
		$(".new-ajax-panel").addClass("ajax-panel");
		$(".new-ajax-panel").removeClass("new-ajax-panel");
	}else{

		setTimeout(function() {
		checkAnimation();
		},300);
	}

	checkAnimation();

}

}



//end of document ready
});