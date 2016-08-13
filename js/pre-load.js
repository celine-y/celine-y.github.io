$(function(){
	var $win = $(window),
		$preloader = $("#preloader");

	$win.load(function() {
		$("#status", $preloader).fadeOut();
		$preloader.delay(350).fadeOut("slow", function(){
			$preloader.remove();
		});
	});
});