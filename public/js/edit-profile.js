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

		var firstName = $(".username").text();;
		$(".username").replaceWith( "<input type=text id='name' value=" + firstName + ">" );
		var bio = $(".bio").text();
		console.log(bio);
		$(".bio").replaceWith("<input text=type id='bio' value=" + bio + ">");
		//$(".bio").get(0).contentEditable = "true";

	});

	$("#finish").click(function(e) {
		e.preventDefault();

		$(".study-style").hide();
		$(".study-prefs").show();

		var newName = $("#name").val();
		var newBio = $("#bio").val();

		$(".username").replaceWith( "<h2>" + newName + "</h2>" );
		var bio = $(".bio").text();
		$(".bio").replaceWith("<h2>" + newBio + "</h2>");

		/*if( newName == "" || newBio == ""){
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
		}*/

	  var time = document.getElementById('select_time').value;

	  var personality = document.getElementById('select_personality').value;

	  var loc = document.getElementById('select_loc').value;

	  var chill = document.getElementById('select_chill').value;

	  var myData = {"time":time, "personality":personality, "loc":loc, "chill":chill, "name":newName, "bio": newBio}

	  //alert(newBio);


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
