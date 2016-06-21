


var Chatty = (function (chatty) {
	var messages = null;

	chatty.addInitialMessages = function(initialMessages){
		messages = initialMessages.firstMessages;	//gets first 5 messages
		for (i = 0; i < messages.length; i++) {		//loop through array to add each message
			Chatty.addMessageToDOM(i); //call the add messages function 5 times 
		}

	};

	chatty.getMessageArray = function (){  //gets the array of messages
		return messages;
	};

	return chatty;

})(Chatty || {});