//todo:
// = on pan, turn off hover states
// - tie number of coumns to screen width
// - find out if the images should scale automaticcaly or be fixed size
// - create coumns and rows based on screen
// = 


$(document).ready(function(){
	//global variable
	state = {};
	state.projectView = false;
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
			distance = distance+1200;
		});
		i = 1;
		$(".row").children(".column").each(function(){

			if ($(this).hasClass("column")){
				$(this).attr("data-row-number", i);
			}
			i++;
			if(i > 5){
				i=1;
			}
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
	 
	function mouseHover(){
		$(".project").removeClass("hover");
		$(this).addClass("hover");
		TweenLite.to($(this), .4, {transform:"scale(1.35,1.35)"});
	}
	function mouseLeaveHover(){
		$(this).removeClass("hover");
		TweenLite.to($(this), .4, {transform:"scale(1,1)"});
	}
	$(".project").hover(mouseHover, mouseLeaveHover);
	
	
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
		TweenLite.to($("#project-grid"),.2, {z:"+="+(ev.velocityY*350)});
		console.log("pannded")
	});
	mc.on("pandown",function(ev){
		TweenLite.to($("#project-grid"),.2, {z:"+="+(ev.velocityY*350)});
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
 /***
 *                     _           _         _               
 *                    (_)         | |       (_)              
 *     _ __  _ __ ___  _  ___  ___| |___   ___  _____      __
 *    | '_ \| '__/ _ \| |/ _ \/ __| __\ \ / / |/ _ \ \ /\ / /
 *    | |_) | | | (_) | |  __/ (__| |_ \ V /| |  __/\ V  V / 
 *    | .__/|_|  \___/| |\___|\___|\__| \_/ |_|\___| \_/\_/  
 *    | |            _/ |                                    
 *    |_|           |__/                                     
 */

 	//turn off overlay for demo
 	var over = true;
 	$("#overlay-toggle").on("click",function(){
 		if (over === true){
 			over = false;
 			$("#project-view").css("display","none");
 		}else{
 			over = true;
 			$("#project-view").css("display","block");
 		}
 	});


 	var zoomAnimating = false;

	$(".project").on("click", function(){

		var thisref = $(this);
		$(".project").removeClass("hover");
		$(".project").removeClass("active");
		TweenLite.to($(".project"), 0, {scale:1});
		function leaveProjectView(thisref){

			$(".project").hover(mouseHover, mouseLeaveHover);
			thisref.parents(".row").removeClass("p-view");			
			// put in something to stop other animations here
			zoomPerspective.reverse();
		}
	if(zoomAnimating === false){
		zoomAnimating = true;
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var thisCol = thisref.parents(".column");
		var thisrefbackface = $(this).children(".project-backface");
		var blish = thisref.height();
		var psoH = $("#main-perspective-container").height()/2;
		var psoW = $("#main-perspective-container").width()/2;

		var psoWtwo = psoW - (thisCol.position().left+(thisCol.width()/2));

		var xGridOffset = psoW -( thisCol.attr("data-row-number") * (thisCol.width()));

		if(xGridOffset > 0){
			xGridOffset = xGridOffset + (thisCol.width()/2);
		}else if(xGridOffset < 0){
			xGridOffset = xGridOffset - (thisCol.width()/2);
		}
		console.log(xGridOffset);
		
		var  o = parseInt(thisref.parents(".row").attr("data-z"))+90;
		if(state.projectView === false){
		zoomPerspective = new TimelineLite({align:"start", paused:true});
		
		//zoomPerspective.to(thisrefbackface, 1, {rotationY: 0,z:500},0);
		
		zoomPerspective.to(thisCol, .5, {rotationY: 180},0);
		zoomPerspective.to($("#project-view"), .5, {x: "0"},0);
		
		zoomPerspective.to($("#project-grid"),.5, {
			z : o,
			y:-psoH/1.45,
			x:xGridOffset
		},0);
		zoomPerspective.to($("#main-perspective-container"), .8, {
				transformOrigin: psoW+"px"+" "+psoH+"px",
				perspective: "170px"
				},0);
		}
	if(state.projectView === false){
		state.projectView = true;	
		function enterProjectView(thisref){
			thisref.removeClass("hover");
			$(".project").removeClass("active");
			thisref.addClass("active");
			TweenLite.to($(".project"), {scale:1});
			$(".project").off("mouseenter mouseleave");
			console.log("fired")
			

			// put in something to stop other animations here
			zoomPerspective.play();
		}
		enterProjectView(thisref);
		
	}else if(state.projectView === true){

		// all of this needs to be bound to something other than click

		state.projectView = false;
		thisref.removeClass("active");
		
		leaveProjectView(thisref);
	}
	$(".close").on("click",function(){
		state.projectView = false;
		leaveProjectView(thisref);
	})
	}
	setTimeout(function(){zoomAnimating = false }, 1000);
	});
});