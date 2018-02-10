jQuery(document).ready(function($) {
	// Budget slider
	var budgetSelect;

	$("#budget-list li a").click(function(e) {
		event.preventDefault(e);
		budgetSelect = $(this).attr("id");


		if(budgetSelect == "cheapskate") {
			$(".slide-border").css("margin-left", "0");
			console.log("nope");			
		}
		else if(budgetSelect == "tenG") {
			$(".slide-border").css("margin-left", "20%");
			console.log("maybe");			
		}
		else if(budgetSelect == "twentyfiveG") {
			$(".slide-border").css("margin-left", "40%");
			console.log("yes");			
		}
		else if(budgetSelect == "fiftyG") {
			$(".slide-border").css("margin-left", "60%");
			console.log("absolutely");			
		}
		else if(budgetSelect == "baller") {
			$(".slide-border").css("margin-left", "80%");
			console.log("retirement");			
		}

	});
});