$(document).ready(function(){
/***
 *                         _           _        _                           _       
 *                        | |         | |      | |                         | |      
 *      ___ _ __ ___  __ _| |_ ___  __| |   ___| | ___ _ __ ___   ___ _ __ | |_ ___ 
 *     / __| '__/ _ \/ _` | __/ _ \/ _` |  / _ | |/ _ | '_ ` _ \ / _ | '_ \| __/ __|
 *    | (__| | |  __| (_| | ||  __| (_| | |  __| |  __| | | | | |  __| | | | |_\__ \
 *     \___|_|  \___|\__,_|\__\___|\__,_|  \___|_|\___|_| |_| |_|\___|_| |_|\__|___/
 *                                                                                  
 *                                                                                  
 */
	var nwRow = $( "<div/>", {
    "class": "row"+" "+rowCount(),
	});
	var nwCol = $( "<div/>", {
    "class": "column"+" "+colCount(),
	});
	

	
/***
 *     _       _ _   
 *    (_)     (_| |  
 *     _ _ __  _| |_ 
 *    | | '_ \| | __|
 *    | | | | | | |_ 
 *    |_|_| |_|_|\__|
 *                   
 *                   
 */
 	// tie row to screen height
 	
 	function howManyColumns(){
 		// check how many columns are needed
 		return 5
 	}
 	function rowCount(){
 		var a = document.getElementsByClassName("row");
 		return a.length;
 	}
 	function colCount(){
 		var a = $(this).children(".column");
 		return a.length;
 	}
	function rowSet(){
		var theRows = $(".row");
		var distance = 0
		$(".row").each(function(){
			TweenLite.to($(this), 1, {transform:"translateZ(-"+distance+"px)"});
			$(this).attr("data-z",distance);
			distance = distance+800;
		});

		
	}
	rowSet();
	/***
 *     _                                 __  __          _       
 *    | |                               / _|/ _|        | |      
 *    | |__   _____   _____ _ __    ___| |_| |_ ___  ___| |_ ___ 
 *    | '_ \ / _ \ \ / / _ \ '__|  / _ \  _|  _/ _ \/ __| __/ __|
 *    | | | | (_) \ V /  __/ |    |  __/ | | ||  __/ (__| |_\__ \
 *    |_| |_|\___/ \_/ \___|_|     \___|_| |_| \___|\___|\__|___/
 *                                                               
 *                                                               
 */
 	var pg = document.getElementById('project-grid');
 	var hoverTimer = false;

 	$(".project").on("mouseenter",function(){
 		TweenLite.to($(this), .4, {transform:"scale(1.35,1.35)"});
 	});
 	$(".project").on("mouseleave",function(){
 		TweenLite.to($(this), .4, {transform:"scale(1,1)"});
 	});

 	function animateOver(element) {
 	  var  o = element.parents(".row").attr("data-z");
	  var tl = new TimelineLite();
	  tl.to(pg, 4, {z: o-200 });
	  return tl;
	  setTimeout(function(){hoverTimer = false}, 2500);
	}
	 
	 
	$(".project").hover(over, out);
	 
	function over(){
	  //check if this item has an animation
	  if(!this.animation && hoverTimer === false){
	  	hoverTimer = true;
	    //if not, create one
	    var thiss = $(this);
	    this.animation = animateOver(thiss);
	    setTimeout(function(){hoverTimer = false}, 2500);
	  }else{
	  	if( hoverTimer === false){
	  		hoverTimer = true;
	    //or else play it
	   var thiss = $(this);
	   this.animation.play().timeScale(1);
	   setTimeout(function(){hoverTimer = false}, 2500);
	  	}
	  }
	}
	 
	function out(){
	  //reverse animation 4 times normal speed
	  var thiss = $(this);
	 
	 thiss.animation.stop();
	  setTimeout(function(){hoverTimer = false}, 800);
	}
	/***
 *                                                   _   
 *                                                  | |  
 *     _ __ ___   _____   _____ _ __ ___   ___ _ __ | |_ 
 *    | '_ ` _ \ / _ \ \ / / _ | '_ ` _ \ / _ | '_ \| __|
 *    | | | | | | (_) \ V |  __| | | | | |  __| | | | |_ 
 *    |_| |_| |_|\___/ \_/ \___|_| |_| |_|\___|_| |_|\__|
 *                                                       
 *                                                       
 */
 //if no touch events:
 	var myHammer = document.getElementById('main-perspective-container');
	var mc = new Hammer(myHammer);
	
	mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
	mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
	mc.on("panup",function(ev){
		TweenLite.to($("#project-grid"),.2, {z:"+="+(ev.velocityY*1000)});
		console.log("pannded")
	});
	mc.on("pandown",function(ev){
		TweenLite.to($("#project-grid"),.2, {z:"+="+(ev.velocityY*1000)});
		console.log("pannded")
	});
	


 	$("#main-perspective-container").bind('mousewheel DOMMouseScroll', function(event){
	    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
	       		
				TweenLite.to($("#project-grid"),.2, {z:"+=400px"});
	    }
	    else {
	       		TweenLite.to($("#project-grid"),.2, {z:"-=400px"});
	    }
	});

});