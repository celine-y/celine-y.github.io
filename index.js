$(document).ready(function() {
	$('#fullpage').fullpage({
		scrollOverflow: true,
		controlArrows: false,
		loopHorizontal: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
		parallax: true,
		slidesNavigation: true
	});

	$(window).resize(function(){
		resizeFixedImg();
	});

	resizeFixedImg();

	function resizeFixedImg(){
		var titleHeight = $('#interest-title').height();
		var windowHeight = $('#interests').height();
		var heightRemain = windowHeight - titleHeight;
		var newHeight = heightRemain/3 -1;

		console.log(windowHeight, titleHeight, heightRemain, newHeight);
		
		$('.fixed-img-height').css("max-height", newHeight);
	}

	$(document).on('click', '#show-more', function(){
		$.fn.fullpage.moveSectionDown();
	  });
});