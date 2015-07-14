// YOUR CODE HERE:
var app = {};

app.init = function(){
	$(document).ready = (function() {
		app.fetch();
		// app.addFriend();
		// app.addMessage();
	});
};
// setInterval(app.fetch, 1000);
// app.init();
// server: 'https://api.parse.com/1/classes/chatterbox';
app.send = function(message) {
	$.ajax({
	  url: 'https://api.parse.com/1/classes/chatterbox',
	  type: 'POST',
	  data: JSON.stringify(message),
	  contentType: 'application/json',
	  success: function (data) {
	    console.log('chatterbox: Message sent');
	  },
	  error: function (data) {
	    console.error('chatterbox: Failed to send message');
	  }
	});

};

var userObject = {
	username: null,
	text: null,
	roomname: null
};

app.fetch = function() {
	$.ajax({
		url: 'https://api.parse.com/1/classes/chatterbox',
		type: 'GET',
		contentType: 'application/json',
		success: function(data) {
	  	for (var i = 0; i < data.results.length; i++) {
	  			$('#main').append('<div>' + _.escape(data.results[i].username) + '<br>' + _.escape(data.results[i].text) + '</div>');
	  	};
	  },
		error: function() {
		  console.error('chatterbox: Failed to send message');
		}
	});
};

// setInterval(app.fetch, 1000)

app.clearMessages = function() {
  	$('#chats').empty();
};

app.addMessage = function(message) {
	$('#chats').append("<p>"+message.text+"</p>");
}

app.addRoom = function(child) {
	$('#roomSelect').append("<div></div>")
}

app.addFriend = function(){
	$('.username').on('click', function(){
	});
}


