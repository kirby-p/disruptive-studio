$( document ).ready(function() {      
	var isMobile = window.matchMedia("only screen and (max-width: 760px)");

	if (isMobile.matches) {
	    console.log("This is mobile");
	    $("video").remove();
	}
});