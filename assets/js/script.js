$(document).ready(function() {

	$(".nav-item").hover(function() { 
		$(this).addClass("nav-hover");
	}, function() {
		$(this).removeClass("nav-hover");
	});

	$(".headshot .image").hover(function() {
		$(this).css("height", "calc(100% - 60px)");
	}, function() {
		$(this).css("height", "100%")
	})

});