$(document).ready(function() {      
	// Budget slider
	var budgetSelect;

	$("#budget-list li a").click(function(e) {
		e.preventDefault();
		budgetSelect = $(this).attr("id");


		if(budgetSelect == "cheapskate") {
			$(".slide-border").css("margin-left", "0");
			$("#CAT_Custom_737861_0").attr("checked", true);
			console.log("nope");			
		}
		else if(budgetSelect == "tenG") {
			$(".slide-border").css("margin-left", "20%");
			$("#CAT_Custom_737861_1").attr("checked", true);
			console.log("maybe");			
		}
		else if(budgetSelect == "twentyfiveG") {
			$(".slide-border").css("margin-left", "40%");
			$("#CAT_Custom_737861_2").attr("checked", true);
			console.log("yes");			
		}
		else if(budgetSelect == "fiftyG") {
			$(".slide-border").css("margin-left", "60%");
			$("#CAT_Custom_737861_3").attr("checked", true);
			console.log("absolutely");			
		}
		else if(budgetSelect == "baller") {
			$(".slide-border").css("margin-left", "80%");
			$("#CAT_Custom_737861_4").attr("checked", true);
			console.log("retirement");			
		}

	});

	$("#contact-submit button").click(function(e) {
		e.preventDefault();
		console.log("clickety clack");

		var nameAnswer = $("input[name=contact-name]").val();
		var projAnswer = $("#projectSelect").val();
		var telAnswer = $("input[name=contact-tel]").val();
		var emailAnswer = $("input[name=contact-email]").val();
		var goalAnswer = $("input[name=contact-goal]").val();

		if(nameAnswer && projAnswer && telAnswer && emailAnswer && goalAnswer && budgetSelect) {
			$("input[name=CAT_Custom_737858]").val(nameAnswer);
			$("input[name=CAT_Custom_737859]").val(projAnswer);
			$("input[name=HomePhone]").val(telAnswer);
			$("input[name=EmailAddress]").val(emailAnswer);
			$("input[name=CAT_Custom_737860]").val(goalAnswer);


			$("#hidden-contact-form").submit();		
		}
		else {
			alert("Please answer all questions before submitting.")
		}

	});

});