'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {

	$("#edit").click(function(e) {
		e.preventDefault();
		$("#edit").hide();
		$("#finish").show();

		$(".username").get(0).contentEditable = "true";
		$(".bio").get(0).contentEditable = "true";

	});

	$("#finish").click(function(e) {
		e.preventDefault();

		var newName = $(".username").text();
		var newBio = $(".bio").text();

		if( newName == "" || newBio == ""){
			if( newName == ""){
				$(".username").text("Please fill out this field");
				$(".username").css('color', 'yellow');
			}
			else{
				$(".username").css('color', 'white');
			}
			if( newBio == "" ){
				$(".bio").text("Please fill out this field");
				$(".bio").css('color', 'yellow');
			}
			else{
				$(".bio").css('color', 'white');
			}
		}
		else{
			$(".username").css('color', 'white');
			$(".bio").css('color', 'white');

			$("#finish").hide();
			$("#edit").show();

			$(".username").get(0).contentEditable = "false";
			$(".bio").get(0).contentEditable = "false";
		}
	});
}
