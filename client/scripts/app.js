// YOUR CODE HERE:
var app = {

	init: function(){
		$(document).ready(function() {
			setInterval(app.fetch, 1000);
			$('#submitMessage').on("click", function() {console.log('oh HAY clicking')});
			  app.addFriend();
			app.addMessage();
		});
	},

	send: function(message) {
		$.ajax({
		  url: 'https://api.parse.com/1/classes/chatterbox',
		  type: 'POST',
		  data: JSON.stringify(message),
		  contentType: 'application/json',
		  success: function (data) {
		    console.log('Chatterbox: Message sent');
		  },
		  error: function (data) {
		    console.error('Chatterbox: Failed to send message');
		  }
		});

	},


	fetch: function() {
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
			  console.error('Chatterbox: Failed to send message');
			}
		});
	},



	clearMessages: function() {
	  	$('#chats').empty();
	},

	addMessage: function(message) {
		$('#chats').append("<p>"+message+"</p>");
	},

	addRoom: function(child) {
		$('#roomSelect').append("<div></div>")
	},

	addFriend: function(){
		$('.username').on('click', function(){
		});
	},

 	server: 'https://api.parse.com/1/classes/chatterbox'
};
app.init();

// var message = prompt("Whats your message?");
// $('body').append('message');
	// var userObject = {
	// 	username: null,
	// 	text: null,
	// 	roomname: null
	// };
