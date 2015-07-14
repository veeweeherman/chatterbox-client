// YOUR CODE HERE:
var app = {};
app.init = function(){};
app.send = function(message) {
	$.ajax({
	  // This is the url you should use to communicate with the parse API server.
	  url: 'https://api.parse.com/1/classes/chatterbox',
	  type: 'POST',
	  data: JSON.stringify(message),
	  contentType: 'application/json',
	  success: function (data) {
	    console.log('chatterbox: Message sent');
	  },
	  error: function (data) {
	    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
	    console.error('chatterbox: Failed to send message');
	  }
	});
};
window.allInfo = {};
app.fetch = function () {
	$.ajax({
		url: 'https://api.parse.com/1/classes/chatterbox',
		type: 'GET',
		contentType: 'application/json',
		success: function (data) {
		  
	  	for (var i = 0; i < data.results.length; i++) {
	  			$('body').append(data.results[i].username);
	  	};
	  	// for (var i = 0; i < data.results.length; i++) {
  		// 	allInfo.data[results[i][username]] = data.results[i][username];
	  	// }
	  },
		error: function () {
		  // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
		  console.error('chatterbox: Failed to send message');
		},
		// data: JSON.parse(message)

	});
};
app.fetch();
// setInterval(app.fetch, 10000)
console.log(allInfo)
app.clearMessages = function() {
  	$('#chats').empty();
};

app.addMessage = function(message) {
	$('#chats').append("<p>"+message.text+"</p>");
	// console.log($('#chats'))
}

app.addRoom = function(child) {
	$('#roomSelect').append("<div></div>")
	// console.log($('#roomSelect')); //.append(room);
}

app.addFriend = function(){
	// app.init();

	$('.username').on('click', function(){
		// $('#chats').append();
			// $('#main').append("<p class='username'>"+message.username+"</p>")
	});

	// console.log($('#main'));
}
// app.fetch();



console.log($('#main').find('.username'));