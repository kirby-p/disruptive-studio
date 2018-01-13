$(document).ready(function() {      
	$("#contact-submit button").click(function(e) {
		e.preventDefault();
		console.log("clickety clack");

		var nameAnswer = $("input[name=contact-name").val();
		var projAnswer = $("input[name=contact-project").val();
		var telAnswer = $("input[name=contact-tel").val();
		var emailAnswer = $("input[name=contact-email").val();

		if(nameAnswer && projAnswer && telAnswer && emailAnswer) {
			$("input[name=CAT_Custom_719700").val(nameAnswer);
			$("input[name=CAT_Custom_721076").val(projAnswer);
			$("input[name=HomePhone").val(telAnswer);
			$("input[name=EmailAddress").val(emailAnswer);

			$("#hidden-contact-form").submit();		
		}
		else {
			alert("Please answer all questions before submitting.")
		}

	});

});