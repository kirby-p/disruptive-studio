$(document).ready(function() {
	// Detects if on mobile
	var isMobile = window.matchMedia("only screen and (max-width: 767px)");
	var isTablet = window.matchMedia("only screen and (min-width: 768px) and (max-width: 1024px)");
	var isDesktop = window.matchMedia("only screen and (min-width: 1025px)");

	// If it's on mobile, do this...
	if (isMobile.matches) {
	    $("video").remove();
	}
	else if (isDesktop.matches) {
	    $("#navbar").removeClass("navbar-fixed");

	    // Do fullpage.js on Desktop only
	    $('#fullpage').fullpage({
	    	anchors:['page1'],
	    	controlArrows: false
	    });
	    $('#home, #home-mob, #side-home').click(function() {
			$.fn.fullpage.moveTo('page1', 0);
		});
		$('#bahaari-nav, #work-nav').click(function() {
			$.fn.fullpage.moveTo('page1', 1);
		});
		$('#iswim-nav').click(function() {
			$.fn.fullpage.moveTo('page1', 2);
		});
		$('#harvest-nav').click(function() {
			$.fn.fullpage.moveTo('page1', 3);
		});
		$('#appunt-nav').click(function() {
			$.fn.fullpage.moveTo('page1', 4);
		});
		$('#contact-nav').click(function() {
			$.fn.fullpage.moveTo('page1', 5);
		});
	}

	
});