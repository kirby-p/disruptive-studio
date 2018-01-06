$(document).ready(function(){
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
});