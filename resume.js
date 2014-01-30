//document ready yay
$(document).ready(function()
{
	/* check to see how fast someone is clicking*/
	var counter = 0;
	setInterval(function(){
		counter = 0;
	},5000);
	var checking = function(){
	 if(counter > 10){
	 	 counter = 0;
		 alert("Stop clicking so much I fixed it you're not going to be able to break it");
	 }
	}

	//center positioning
	var center = function(container)
	{
	/*
		var Pwidth = $(container).parent().width();
		var Pheight = $(container).parent().height();
		var hgt = $(container).height();
		var wth = $(container).width();
		var goodLeft = (Pwidth)-(wth *.50)
		console.log(goodLeft)
		var goodTop = (Pheight * .25)-(hgt * .25)
	*/
		 var mar = ($(container).parent().width()) - ($(container).width())

		$(container).css({
			marginLeft: mar *.5,
			marginRight: mar *.5
			/*top:  goodTop*/ 
		});

		
	}

	center($('.center'));
	// for checking to see if the slider is currently animating		
	var animating = 1;
	//set content box size and position them offscreen
	var conH = $('.contentContainer').height();
	var conW = $('.contentContainer').width();
		console.log(conH,conW);

	var offScreen = -conW;



		console.log(offScreen)

	$(".content1, .content2, .content3").css({right: offScreen});

		console.log($(".content1").height())
		console.log($('.content1').css("right"))

	// make sure everything resizes when window changes, and move everything but the active content box offscreen

	$(window).resize(function()
	{
		center($('.center'))
		conH = $('.contentContainer').height();
		conW = $('.contentContainer').width();
		offScreen = -conW;

		 $(".click").css({height : conH, width: conW});
		
		 if($(".content1").hasClass("active") == false){
		 	conW = $('.contentContainer').width();
		 	offScreen = -conW;
		 	$(".content1").css({right: offScreen});

		 } if($(".content2").hasClass("active") == false){
		 	conW = $('.contentContainer').width();
		 	offScreen = -conW;
		 	$(".content2").css({right: offScreen});

		 } if($(" .content3").hasClass("active") == false){
		 	conW = $('.contentContainer').width();
		 	offScreen = -conW;
		 	$(" .content3").css({right: offScreen});

		 } if($(" .content4").hasClass("active") == false){
		 	conW = $('.contentContainer').width();
		 	offScreen = -conW;
		 	$(".content4").css({right: offScreen});

		 
		 }
		
	});

	//magic happens
	$(".btn").click(function()
	{

		counter++;
		checking();
		console.log(counter);
		var btn = $(this);
		console.log("animating1 ="+" "+animating)

		if(animating == 1)
		{
			animating = 2;
			console.log("animating2 ="+" "+animating)


			console.log("blug");

			$(".active").animate({left: offScreen},500,function()
			{
				var thiss = $(this);

				$(this).css({right: offScreen, left: "auto"});

				console.log("sup bro");

				if(btn.hasClass("nav1")) {
					$(".content1").animate({right:0},800);
				};
				if(btn.hasClass("nav2")){
					$(".content2").animate({right:0},800);
				};
				if(btn.hasClass("nav3")){
					$(".content3").animate({right:0},800);
				};
				if(btn.hasClass("nav4")){
					$(".content4").animate({right:0},800);
				};


				/// remove class isn't fast enough, this whole thing needs to operate on queue.  Don't click too many buttons at once :( //
				$(this).removeClass("active");
				animating = 1;

							if(btn.hasClass("nav1")) {
				$(".content1").addClass("active");
				$(this).addClass("activeBtn");
			};
			if(btn.hasClass("nav2")){
				$(".content2").addClass("active");
				$(this).addClass("activeBtn");
			};
			if(btn.hasClass("nav3")){
				$(".content3").addClass("active");
				$(this).addClass("activeBtn");
			};
			if(btn.hasClass("nav4")){
				$(".content4").addClass("active");
				$(this).addClass("activeBtn");
			};
			});
		}

		console.log("animating3 ="+" "+animating)
		console.log("clicked");			
	});

	//scrollto

		$(".topNav1").click(function(){

			$('html,body').stop().animate(
				{ scrollTop: ($(".story").offset().top) -40 }
				,400);
			console.log("scrolling");
		});$(".topNav2").click(function(){

			$('html,body').stop().animate(
				{ scrollTop: ($(".circle").offset().top) - 100}
				,400);
			console.log("scrolling");
		});$(".topNav3").click(function(){

			$('html,body').stop().animate(
				{ scrollTop: ($(".Works").offset().top)}
				,400);
			console.log("scrolling");
		});$(".upTo").click(function(){

			$('html,body').stop().animate(
				{ scrollTop: 0}
				,400);
			console.log("scrolling");
		});
		// checking to see if element is visible
		(function($){

	    /**
	     * Copyright 2012, Digital Fusion
	     * Licensed under the MIT license.
	     * http://teamdf.com/jquery-plugins/license/
	     *
	     * @author Sam Sehnert
	     * @desc A small plugin that checks whether elements are within
	     *       the user visible viewport of a web browser.
	     *       only accounts for vertical position, not horizontal.
	     */
	    $.fn.visible = function(partial,hidden,direction){

	        var $t              = $(this).eq(0),
	            t               = $t.get(0),
	            $w              = $(window),
	            viewTop         = $w.scrollTop(),
	            viewBottom      = viewTop + $w.height(),
	            viewLeft        = $w.scrollLeft(),
	            viewRight       = viewLeft + $w.width(),
	            _top            = $t.offset().top,
	            _bottom         = _top + $t.height(),
	            _left           = $t.offset().left,
	            _right          = _left + $t.width(),
	            compareTop      = partial === true ? _bottom : _top,
	            compareBottom   = partial === true ? _top : _bottom,
	            compareLeft     = partial === true ? _right : _left,
	            compareRight    = partial === true ? _left : _right,
	            clientSize      = hidden === true ? t.offsetWidth * t.offsetHeight : true,
	            direction       = (direction) ? direction : 'both';

	        if(direction === 'both')
	            return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop)) && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
	        else if(direction === 'vertical')
	            return !!clientSize && ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	        else if(direction === 'horizontal')
	            return !!clientSize && ((compareRight <= viewRight) && (compareLeft >= viewLeft));
	    };

	})(jQuery);

	//check if an element is visible, then make the skills show.
		$(window).scroll(function(){
		if($('.circles').visible(true)){

	 		var i = 0,
	         delay = 5,
	         animate = 100;
	         function animateList(){
	                 var blick = $("ul.list li").length -1;         
	                 $("ul.list li:eq(" + i + ")")
	                         .animate({"opacity" : "1"}, animate)
	                         .animate({"opacity ": "1"}, delay)
	                         .animate({"opacity" : "1"}, animate, function(){                              
	                             (i == blick) ? i=0 : i++;
	                              animateList();
	                         });
	                                      
	                 };
	                  
	       animateList();  	
		};
	});
});	

