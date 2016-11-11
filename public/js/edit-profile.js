'use strict';

$(document).ready(function() {
	initializePage();
})

function initializePage() {

	$("#edit").click(function(e) {
		e.preventDefault();
		$("#edit").hide();
		$("#finish").show();
		$(".study-prefs").hide();
		$(".study-style").show();

		$(".username").get(0).contentEditable = "true";
		$(".bio").get(0).contentEditable = "true";

	});

	$("#finish").click(function(e) {
		e.preventDefault();

		$(".study-style").hide();
		$(".study-prefs").show();

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

	  var time = document.getElementById('select_time').value;

	  var personality = document.getElementById('select_personality').value;

	  var loc = document.getElementById('select_loc').value;

	  var chill = document.getElementById('select_chill').value;

	  var myData = {"time":time, "personality":personality, "loc":loc, "chill":chill}

	    //alert("Button was Pressed");


	     $.ajax({
	             type: "GET",
	             url: "/users/edit",
	             data: myData,
	             success: function (data) {
	                //alert('Success');
									window.location = '/users/1/';

	             },
	             error: function () {
	              alert('Error');
	             }
	         });

	});
}
