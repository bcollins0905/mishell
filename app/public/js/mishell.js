
//var Typed = require('typed.js')

$( document ).ready(function() {
	$("#newsletter_submit").on("click", function(event) {    

		event.preventDefault();
		var NewSignUps = {
		    name: $("#sign_up_name").val().trim(),
	 	    email: $("#sign_up_email").val().trim()
			
		    };
		    console.log(NewSignUps)
		    $.post("/api/newSignUps", NewSignUps)
		    	.done(function(data){

		    		alert("Thank You for Signing Up")
		    	})
		 

		  $("#sign_up_name").val("");
		  $("#sign_up_email").val("");
		})
	})