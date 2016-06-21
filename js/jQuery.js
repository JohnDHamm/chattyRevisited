// "use strict";

$(document).ready(function() {
	var messages = null;
	//get JSON data, parse and send to add to the DOM
	$.ajax({
		url: "../json/initialMessages.json"
	}).done(Chatty.addInitialMessages);


	// *****Dynamically add user radio buttons
	var users = {
		names: ["Bob", "Sue", "Juan", "Vince", "Janice"]
	};
	//create inputs for each name in users array with attributes of radio type, names and values, + labels
	for (i =0; i < users.names.length; i++){  
		var userName = users.names[i];
		$("#users").append(`<input type='radio' name='userRadioBtn'>`);
		$("#users input:last-child").attr("value", userName);
		$("#users").append(`<label class ='userLabel'>${userName}</label>`);
	};


	// ******Dark and Large Text Themes
	//get element to print data into
	var $outputArea = $("#output");

	//get element of the large text checkbox
	// this listener listens for the large text for the body of the message.
	//toggle the large text class for the text input section
	$("#largeText").change(function(){
		$outputArea.toggleClass("enlargeText");
	});

	//get element of the dark theme toggle checkbox
	//if one is on to start  with only one will ever be on at a a time
	$("#darkTheme").change(function(){
		$outputArea.toggleClass("dark");
	});



	// *******Clear messages button
	var $clearMessageButton = $("#clearMessages");
	// var clearMessageButton = document.getElementById("clearMessages"); //get element of the clear message button

	function disableClear(){ //helper function to disable the clear key when id=output is empty
		if ($outputArea.html() === "") {
			$clearMessageButton.attr("disabled", "true");
			console.log("disabling clear button" );
			// clearMessageButton.disabled = true;
		} else {
			$clearMessageButton.attr("disabled", "false");
			// clearMessageButton.disabled = false;
		}
	}

	// add event listener for clear messages button
	$("#clearMessages").click(function(event){
		var messagesLength = Chatty.getMessageArray().length;
		var messages = Chatty.getMessageArray();
		//remove content from the content div in the HTML
		$("#output").empty(); //wipe out the HTML in the output div
		disableClear(); //call helper function
		
		for(let i = 0; i < messagesLength; i++){
			messages.splice(0, 1);
		}
		return Chatty.messages;
	});



	//*******Add event listener to message input field
	//listens for the enter key to be pressed
	$("#messageTextInput").keyup(function(event){
		if (event.keyCode === 13){
			Chatty.addMessageToDOM(
				Chatty.readInput(
					$("#messageTextInput").val()
				)
			)
		};
		disableClear(); //call helper function
	});



});